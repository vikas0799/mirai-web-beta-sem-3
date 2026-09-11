import React from 'react'
import './App.css';
import Block from './Block';
import Card from './Card';

function App() {
  return (
   <>
    {/* <style>
      {
        `
        h1{
          color:red;
        }
        `
      }
    </style> */}
    <div>
    {/* <h2 style={{color:'red'}}>this is APP functional componet </h2> */}
  {/* <h1>Lorem ipsum dolor sit.</h1> */}
  <h1>exrternal css adding..</h1>
  <Block/>
  <Block/>
  <Block/>
  <Block/>
  <Block/>
  <Block/>


  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>

    </div>
   </>
  )
}

export default App