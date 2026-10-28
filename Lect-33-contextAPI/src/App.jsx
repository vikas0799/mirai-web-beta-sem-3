import React, { createContext } from 'react'
import Navbar from './components/Navbar'
import A from './components/A'

export const info=createContext();


function App() {
   const name="kiran";
   const age=21;

   const college="mirai";
   const dist="ghaziabad";
  return (
    <info.Provider value={{college,dist}}>
      <div>App
      <Navbar/>
      <A data={{name,age}}/>
    </div>
    </info.Provider>
  )
}

export default App