import React from 'react'
import Button from './Button';

function Section(props) {
    console.log(props);


  return (
    <div>
        <Button myage={props.myage}/>
    </div>
  )
}

export default Section