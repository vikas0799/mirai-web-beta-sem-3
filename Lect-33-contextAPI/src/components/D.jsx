// import React from 'react'

// function D({name,age}) {
//     console.log(name);
//   return (
//     <div>D componets
//       <h1>my name is {name}</h1>
//       <h1>my age is {age}</h1>
//     </div>
//   )
// }

// export default D

import React, { useContext } from 'react'
import {info} from '../App'


//consuming info context

function D({name,age}) {
    const {college,dist}=useContext(info);
  return (
    <div>
        D
        <h1>my name is {name}</h1>
        <h1>my name is {age}</h1>

      <h1>my colleg is {college}</h1>
      <h1>my district is {dist}</h1>
        </div>
  )
}

export default D