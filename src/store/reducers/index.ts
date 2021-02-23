import { combineReducers } from "redux";
// import testReducer from "./test.reducer";
import { History } from 'history'
import { connectRouter, RouterState } from "connected-react-router";
import authReducer, { AuthState } from "./auth.reducer";

export interface AppState {
  router: RouterState,
  auth: AuthState
}

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  auth: authReducer
})

export default createRootReducer

// 问题 combineReducers 是干啥的
// combineReducers 是用来把子reducer进行合并的