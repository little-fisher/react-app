import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//render是一个渲染的方法，这里传了两个参数，一个是组件的对象参数（<App />相当于js的普通对象），另一个是元素的对象，即我们最终要渲染到哪里去
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 也可以这样写
// let h1 = <h1>helloworld</h1>
// ReactDOM.render(
//   <React.StrictMode>
//     h1
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// react函数式组件
function Clock(prop){
  return (
    <h1>当前时间：{prop.date.toLocaleTimeString()}</h1>
  )
}
function run (){
  ReactDOM.render(<Clock date={new Date()}/>,document.getElementById('root'))
}
setInterval(run,1000)
reportWebVitals();
