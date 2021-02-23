import Layout from './Layout'
import React from 'react'
import { Button, Form, Input } from 'antd'

const Signin = () => {
  return (
    <div>
      <Layout title="登录" subTitle="">
        <Form>
          <Form.Item name="password" label="密码">
            <Input.Password />
          </Form.Item>
          <Form.Item name="email" label="邮箱">
            <Input />
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