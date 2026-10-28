import React, { createContext } from 'react'
import B from './B'

export const AngryDevesh=createContext();

function A({data}) {

  const lunch="no lunch due to vikash sir";
  const mood="angry"


    console.log(data);
    const {name,age}=data;

  return (
    <AngryDevesh.Provider value={{lunch,mood}}>
      <div>
      
        A
        <B name={name} age={age}/>
    </div>
    </AngryDevesh.Provider>
  )
}

export default A