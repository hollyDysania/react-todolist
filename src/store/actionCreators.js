import { CHNAGE_INPUT_VALUE, INPUT_SUBMIT, LIST_DELETE, INIT_LIST, SAGA_INIT_LIST } from './actionTypes'


export const getInputChangeAction = (value) => ({
  type: CHNAGE_INPUT_VALUE,
  value
})

export const submitInputValueAction = () => ({
  type: INPUT_SUBMIT
})

export const deleteListItem = (index) => ({
  type: LIST_DELETE,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST,
  data
})

// -----------------  thunk写法 -----------------
// export const getTodoListAction = () => {
//   return (dispatch) => {
//     // 接口用的charles工具返回本地数据
//     axios.get('/list').then(res => {
//       let { data } = res
//       let action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }
// ----------------- saga 写法 -----------------
export const getTodoListSaga = () => {
  return {
    type: SAGA_INIT_LIST
  }
}