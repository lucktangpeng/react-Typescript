import { SIGNIN, SigninAction, signinFail, signinSuccess, SIGNUP, SignupAction, signupFail, signupSuccess } from '../actions/auth.action'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { API } from '../../config'

function* hanleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error) {
    yield put(signupFail(error.response.data.error))
  }
}

function* hanleSignin(action: SigninAction) {
  try {
    const response = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    yield put(signinSuccess())
  } catch (err) {
    yield put(signinFail(err.response.data.error))
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP, hanleSignup)
  yield takeEvery(SIGNIN, hanleSignin)
}