import React from 'react';
import ReactDOM from 'react-dom';
import './03.index.css'

// 样式
let examplestyle = {
  background:"skyblue",
  borderBottom:"1px solid red"
}

let classStr = ['abc','def'].join(" ")
let ele = (
  <div>
    <h1 style={examplestyle} className={classStr}>helloworld</h1>
  </div>
)
ReactDOM.render(ele,document.getElementById('root'))