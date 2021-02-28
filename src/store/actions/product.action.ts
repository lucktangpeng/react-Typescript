import { Product } from "../models/product"
import { GET_GATEGORY_SUCCESS } from "./category.action"

export const GET_PRODUCT = "GET_PRODUCT"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

export interface GetProductAction {
  type: typeof GET_PRODUCT
  sortBy: string
  order: string
  limit: number
}

export interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS
  payload: Product[]
  sortBy: string
}

export const getProduct = (
  sortBy: string,
  order: string = "desc",
  limit: number = 10
) => ({
  type: GET_PRODUCT,
  sortBy,
  order,
  limit
})


export const getProductSuccess = (payload: Product[], sortBy: string) => ({
  type: GET_PRODUCT_SUCCESS,
  payload,
  sortBy
})

/**
 * 搜索商品
 */


export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS"

export interface SearchProductAction {
  type: typeof SEARCH_PRODUCT,
  payload: {
    category: string,
    search: string
  }
}

export interface SearchProductSuccessAction {
  type: typeof SEARCH_PRODUCT_SUCCESS
  products: Product[]
}

export const searchProduct = (payload: { category: string, search: string }) => ({
  type: SEARCH_PRODUCT,
  payload
})

export const SearchProductSuccess = (products: Product[]) => ({
  type: SEARCH_PRODUCT_SUCCESS,
  products
})


/**
 * 和筛选相关的action
 */

export const FILTER_PRODUCT = "FILTER_PRODUCT"
export const FILTER_PRODUCT_SUCCESS = "FILTER_PRODUCT_SUCCESS"

export interface FilterProductAction {
  type: typeof FILTER_PRODUCT
  payload: {
    order?: string
    sortBy?: string
    limit?: number
    skip: number
    filter?: {
      category: string[],
      price: number[]
    }
  }
}

export interface FilterProductSuccessAction {
  type: typeof FILTER_PRODUCT_SUCCESS
  payload: {
    size: number
    data: Product[]
  },
  skip: number
}


export type ProductUnionType =
  | GetProductAction
  | GetProductSuccessAction
  | SearchProductAction
  | SearchProductSuccessAction