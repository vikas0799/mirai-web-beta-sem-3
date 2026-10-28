import React from 'react'
import {info} from '../App'
import { useContext } from 'react';
function Navbar() {
   const {college,dist}=useContext(info);
  return (
    <div>Navbar
   <h1>{college}</h1>
   <h1>{dist}</h1>


    </div>
  )
}

export default Navbar