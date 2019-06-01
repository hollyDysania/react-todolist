import { CHNAGE_INPUT_VALUE, INPUT_SUBMIT, LIST_DELETE, INIT_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if(action.type === CHNAGE_INPUT_VALUE) {
    newState.inputValue = action.value
  } 
  if(action.type === INPUT_SUBMIT) {
    newState.inputValue && newState.list.push(newState.inputValue)
    newState.inputValue = ''

  }
  if(action.type === LIST_DELETE) {
    newState.list.splice(action.index, 1)
  }
  if(action.type === INIT_LIST) {
    newState.list = action.data
  }
  return newState
}