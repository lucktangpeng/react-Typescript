import React, { useEffect } from 'react'
import Layout from './Layout'
import { useDispatch, useSelector } from "react-redux"
import Search from './Search'
import { Col, Row } from 'antd'
import ProductItem from './ProductItem'
import { Typography } from 'antd';
import { getProduct } from '../../store/actions/product.action'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'

const { Title, Paragraph } = Typography;
const Home = () => {

  const dispatch = useDispatch()
  const { createdAt, sold } = useSelector<AppState, ProductState>(state => state.product)
  useEffect(() => {
    dispatch(getProduct('createdAt'))
    dispatch(getProduct('sold'))
  }, [])

  const state = useSelector(state => state)
  return (
    <Layout title="拉钩首页" subTitle="尽情享受吧">
      {/* Home { JSON.stringify(state)} */}
      <Search></Search>
      <Title level={5}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {
          createdAt.products.map(item => (
            <Col span="6" key={item._id}>
              <ProductItem product={item} />
            </Col>
          ))
        }

      </Row>
      <Title level={5}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
        {
          sold.products.map(item => (
            <Col span="6" key={item._id}>
              <ProductItem product={item} />
            </Col>
          ))
        }

      </Row>
    </Layout>
  )
}

export default Home
