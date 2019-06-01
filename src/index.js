// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

// ReactDOM.render(<TodoList />, document.getElementById('root'))

// ------------ react-redux 写法 ----------------
import { Provider } from 'react-redux'
import store from './store'
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'))
