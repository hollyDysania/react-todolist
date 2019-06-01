import { put, takeEvery } from 'redux-saga/effects'
import { SAGA_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

// generator 函数写法

function* getInitList() {
  try{
    let res = yield axios.get('/list')
    let action = initListAction(res.data)
    yield put(action)
  }catch(e) {
    console.log('list.json 网络请求失败')
  }
}

function* mySaga() {
  yield takeEvery(SAGA_INIT_LIST, getInitList)
}

export default mySaga