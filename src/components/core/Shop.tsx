import { Col, Row, Space } from 'antd'
import React, { useState } from 'react'
import CheckBox from './CheckBox'
import Layout from './Layout'
import RadioBox from './RadioBox'

const Shop = () => {

  const [myFilters, setMyFilter] = useState<{ category: string[], price: number[] }>({ category: [], price: [] })

  const filterDom = () => <Space size="middle" direction="vertical">
    <CheckBox handleFilter={(filters: string[]) => {
      setMyFilter({ ...myFilters, category: filters })
    }} />
    <RadioBox handleFilter={(filters: number[]) => {
      setMyFilter({ ...myFilters, price: filters })
    }} />
  </Space>


  return (
    <Layout title="拉钩商城" subTitle="尽情挑选吧">
      <Row>
        <Col span="4">{filterDom()}</Col>
        <Col span="20"></Col>
      </Row>
    </Layout>
  )
}

export default Shop
