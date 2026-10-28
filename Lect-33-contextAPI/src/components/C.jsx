import React, { useContext } from 'react'
import D from './D'
import {info} from "../App"
import { AngryDevesh } from './A';



function C({name,age}) {
  const {college,dist}= useContext(info);
  const {lunch,mood}=useContext(AngryDevesh)
    console.log(name)
  return (
    <div>C
      <h1>{college}</h1>
      <h1>{dist}</h1>
        <D name={name} age={age}/>


        <p>context:{lunch}</p>
        <p>mood:{mood}</p>
    </div>
  )
}

export default C