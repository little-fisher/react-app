import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

// jsx语法中写表达式
let ele4 = (
  <div>
    <span>横着躺</span>
    <span>竖着躺</span>
  </div>
)
let man ="有空"
let ele3 = (
  <div>
    <h1>今天是否躺着</h1>
    <h2>{man==="忙的要死"?<button>工作</button>:ele4}</h2>
  </div>
)
console.log(ele3);
  ReactDOM.render(ele3,document.getElementById('root'))