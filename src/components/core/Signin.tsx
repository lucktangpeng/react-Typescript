import Layout from './Layout'
import React from 'react'
import { Button, Form, Input, Result } from 'antd'
import { signin, SigninPayload } from '../../store/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { AuthState } from '../../store/reducers/auth.reducer'
import { AppState } from '../../store/reducers'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { Redirect } from 'react-router-dom'

const Signin = () => {
  const dispatch = useDispatch()
  const auth = useSelector<AppState, AuthState>(state => state.auth)
  const onFinish = (value: SigninPayload) => {
    dispatch(signin(value))
  }
  // 获取登录结果
  // 登录失败，显示错误信息
  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return (<Result
        status="warning"
        title="注册失败"
        subTitle={auth.signin.message}
      />)
    }
  }

  // 登录成功，根据角色跳转到对应的管理页面
  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const { user: { role } } = auth as Jwt
      if (role === 0) {
        return <Redirect to="/user/dashboard"></Redirect>
      } else {
        return <Redirect to="/admin/dashboard"></Redirect>
      }
    }
  }
  return (
    <div>
      <Layout title="登录" subTitle="">
        {showError()}
        {redirectToDashboard()}
        <Form onFinish={onFinish}>
          <Form.Item name="email" label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </Layout>

    </div>
  )
}

export default Signin
