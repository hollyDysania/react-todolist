import React from 'react'
import { Input, Button, List } from 'antd'
import './style.css'

// 无状态组件 性能更佳 不包含生命周期等等 只是一个函数
const TodoListUI = props => {
  return (
    <div className="container">
      <div className="submit">
        <Input
          placeholder="请输入内容..."
          value={props.inputValue}
          size="large"
          className="input"
          onChange={props.inputChange}
        />
        <Button type="primary" size="large" onClick={props.btnClick}>
          提交
        </Button>
      </div>
      <List
        className="list"
        size="large"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => {
          return (
            <List.Item>
              {item}
              <Button
                type="primary"
                shape="circle"
                size="small"
                icon="close"
                onClick={() => {
                  props.btnDelete(index)
                }}
              />
            </List.Item>
          )
        }}
      />
    </div>
  )
}

// 普通函数
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="submit">
//           <Input
//             placeholder="请输入内容..."
//             value={this.props.inputValue}
//             size="large"
//             className="input"
//             onChange={this.props.inputChange}
//           />
//           <Button type="primary" size="large" onClick={this.props.btnClick}>
//             提交
//           </Button>
//         </div>
//         <List
//           className="list"
//           size="large"
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => {
//             return (
//               <List.Item>
//                 {item}
//                 <Button
//                   type="primary"
//                   shape="circle"
//                   size="small"
//                   icon="close"
//                   onClick={index => {
//                     this.props.btnDelete(index)
//                   }}
//                 />
//               </List.Item>
//             )
//           }}
//         />
//       </div>
//     )
//   }
// }
export default TodoListUI
