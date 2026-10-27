import React from 'react'
// import Navbar from './components/Navbar'
import Section from './components/Section'
import Form from './components/Form'
import { BsFillCartPlusFill } from "react-icons/bs";
import { GiPauseButton } from "react-icons/gi";
import { Tooltip, Toast, Popover } from 'bootstrap'
import BasicRating from './components/Rating';
// import { List } from '@mui/material';
// import List from './components/List';


function App() {
  const arr = [
    {
      batch: "alpha",
      level: "high level",
      year: 2,

    },

    {
      batch: "beta",
      level: "god level",
      year: 2,

    },
    {
      batch: "alpha",
      level: "noob alpha level",
      year: 1,

    },

    {
      batch: "beta",
      level: " noob god level",
      year: 1,

    }
  ]
  return (
    <div>
      {/* <Navbar />
      <BsFillCartPlusFill className='h-40 font-bold bg-amber-200 w-40' />
      <Section data={arr} />
      <GiPauseButton className='h-40 w-40 bg-amber-400' /> */}
      {/* <Navbar/> */}
      {/* <Form/> */}
      <div className='flex flex-wrap'>
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        <BasicRating />
        {/* <List />` */}
      </div>

    </div>
  )
}

export default App