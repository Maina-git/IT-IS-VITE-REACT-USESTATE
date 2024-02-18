import React from 'react'
import {useState} from "react"
import "./App.css"

function Counter() {

const [count, setCount]=useState(0);

function increase(){
    setCount(prevCount=>prevCount+1);
}
function reset(){
    setCount(prevCount=>prevCount=0);
}
function decrease(){
    setCount(prevCount=>prevCount-1);
}


  return (
    <div>
<div className="counter">
<h1 className="header">DIGITEX</h1>
    <h1 className="count">{count}</h1>
    <button className="btn"
    onClick={increase}
    >INCREASE</button>
    <button className="btn"
    onClick={reset}
    >RESET</button>
    <button className="btn"
    onClick={decrease}
    >DECREASE</button>
    </div>      
    </div>
  )
}

export default Counter;
