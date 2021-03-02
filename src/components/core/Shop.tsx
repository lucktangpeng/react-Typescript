import { Button, Col, Empty, Row, Space } from 'antd'
import Item from 'antd/lib/list/Item'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../store/actions/product.action'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'
import CheckBox from './CheckBox'
import Layout from './Layout'
import ProductItem from './ProductItem'
import RadioBox from './RadioBox'

const Shop = () => {
  const dispatch = useDispatch()

  const product = useSelector<AppState, ProductState>(state => state.product)
  const [skip, setSkip] = useState<number>(0)
  const [myFilters, setMyFilter] = useState<{ category: string[], price: number[] }>({ category: [], price: [] })

  useEffect(() => {
    setSkip(0)
  }, [myFilters])


  useEffect(() => {
    dispatch(filterProduct({ filters: myFilters, skip }))
  }, [myFilters, skip])
  const filterDom = () => <Space size="middle" direction="vertical">
    <CheckBox handleFilter={(filters: string[]) => {
      setMyFilter({ ...myFilters, category: filters })
    }} />
    <RadioBox handleFilter={(filters: number[]) => {
      setMyFilter({ ...myFilters, price: filters })
    }} />
  </Space>

  const productDom = () => (
    <Row gutter={[16, 16]}>
      {
        product.filter.result.data.map(item => (
          <Col key={item._id} span="6">
            <ProductItem product={item}></ProductItem>
          </Col>
        ))
      }
    </Row>
  )


  const loadMoreButton = () => {
    return (
      <Row>
        {
          product.filter.result.size >= 4 && (<Button onClick={loadMore}>加载更多</Button>)
        }
      </Row>
    )
  }

  const loadMore = () => {
    setSkip(skip + 4)
  }

  const noData = () => {
    return <Row>
      {
        product.filter.result.size === 0 && <Empty />
      }
    </Row>
  }
  return (
    <Layout title="拉钩商城" subTitle="尽情挑选吧">
      <Row>
        <Col span="4">{filterDom()}</Col>
        <Col span="20">
          {productDom()} {loadMoreButton()} {noData()}
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop
