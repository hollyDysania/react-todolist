import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { connect } from 'react-redux'
import { getInputChangeAction, submitInputValueAction, deleteListItem, getTodoListSaga } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  // constructor(props) {
  //   super(props)
    // this.state = store.getState()
    // this.inputChange = this.inputChange.bind(this)
    // this.storeChage = this.storeChage.bind(this)
    // this.btnClick = this.btnClick.bind(this)
    // 订阅store
    // store.subscribe(this.storeChage)
  // }

  render() {
    const { inputValue, list, inputChange, btnClick, btnDelete } = this.props
    return <TodoListUI 
      inputValue = {inputValue}
      list={list}
      inputChange={inputChange}
      btnClick={btnClick}
      btnDelete={btnDelete}
    />
  }
  // 挂载后
  componentDidMount() {
    // 直接使用
    // axios.get('/list').then(res => {
    //   let { data } = res
    //   let action = initListAction(data)
    //   store.dispatch(action)
    // })

    // saga方式
    let action = getTodoListSaga()
    store.dispatch(action)

    // thunk方式
    // let action = getTodoListAction()
    // store.dispatch(action)
}

  // inputChange(e) {
  //   const action = getInputChangeAction(e.target.value)
  //   store.dispatch(action)
  // }

  // storeChage() {
  //   // store替换当前state
  //   this.setState(store.getState())
  // }

  // btnClick() {
  //   const action = submitInputValueAction(this.state.inputValue)
    
  //   this.state.inputValue && store.dispatch(action)
  // }

  // btnDelete(index) {
  //   const action = deleteListItem(index)
  //   store.dispatch(action)
  // }
}

// store中的state向当前组件映射
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch方法挂载到props上
const mapDispathToProps = dispatch => {
  return {
    inputChange(e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    btnClick(){
      const action = submitInputValueAction()
      dispatch(action)
    },
    btnDelete(index) {
      const action = deleteListItem(index)
      store.dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoList)
