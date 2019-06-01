// import { createStore } from 'redux'
// import reducer from './reducer'
// const store = createStore(
//   reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && 
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// -----------------  saga 写法 -----------------
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(todoSagas)
// -----------------  thunk 写法 -----------------
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducer'
// import thunk from 'redux-thunk'

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({
//         //
//       })
//     : compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(reducer, enhancer)

export default store
