import React from 'react'

import './Block.css'
import Card from './Card'

function Block() {
  return (
    <div className='block'>
        <h1>this is block componets</h1>
        <Card/>

        <Card/>
        <Card/>
        <Card/>

    </div>
  )
}

export default Block