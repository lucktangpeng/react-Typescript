import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { FilterProductAction, filterProductSuccess, FILTER_PRODUCT, GetProductAction, getProductSuccess, GET_PRODUCT, SearchProductAction, SearchProductSuccess, SEARCH_PRODUCT } from "../actions/product.action";
import { Product } from "../models/product";



function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response = yield axios.get<Product[]>(`${API}/products`, {
    params: { sortBy, order, limit }
  })
  yield put(getProductSuccess(response.data, sortBy))
}

function* handleSearchProduct({ payload: { search, category } }: SearchProductAction) {
  let response = yield axios.get(`${API}/products/search`, {
    params: { search, category }
  })
  yield put(SearchProductSuccess(response.data))
}

function* handleFilterProduct(action: FilterProductAction) {
  const response = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filterProductSuccess(response.data, action.payload.skip))
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
}