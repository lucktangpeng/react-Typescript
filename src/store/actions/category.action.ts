import { Category } from "../models/category"


export const GET_GATEGORY = "GET_GATEGORY"
export const GET_GATEGORY_SUCCESS = "GET_GATEGORY_SUCCESS"

export interface GetCategoryAction {
  type: typeof GET_GATEGORY
}

export interface GetCategorySuccessAction {
  type: typeof GET_GATEGORY_SUCCESS
  payload: Category[]
}

export const getCategory = (): GetCategoryAction => ({
  type: GET_GATEGORY
})

export const getCategorySuccess = (payload: Category[]): GetCategorySuccessAction => ({
  type: GET_GATEGORY_SUCCESS,
  payload
})


export type CategoryUnionType = GetCategoryAction | GetCategorySuccessAction