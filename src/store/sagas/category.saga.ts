import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { getCategorySuccess, GET_GATEGORY } from "../actions/category.action";
import { Category } from "../models/category";

function* handleGetCategory() {
  let response = yield axios.get<Category[]>(`${API}/categories`)
  yield put(getCategorySuccess(response.data))
}

export default function* categorySaga() {
  yield takeEvery(GET_GATEGORY, handleGetCategory)
}