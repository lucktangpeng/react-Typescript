import { applyMiddleware, createStore } from "redux";
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "./sagas";

export const history = createHashHistory()

const sagaMiddlewate = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddlewate))
)

sagaMiddlewate.run(rootSaga)

export default store



// 将路由同步到store中
// 接收actions，接收到之后，将路由同步到store中去
// 调用时需要传入历史对象 history
