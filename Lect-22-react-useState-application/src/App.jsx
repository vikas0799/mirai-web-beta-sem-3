import React, { useState } from 'react'
import Foods from './Foods.jsx';
import FoodCard from './FoodCard.jsx';

function App() {
  const [cartCount,setcartCount]=useState(0);

  function addtocart (){
    console.log("updatting cartcount");
    console.log("updatting cartcount");
     setcartCount(cartCount+1);
  }

  return (
    <div>
      <h1>{cartCount}</h1>
         <FoodCard Foods={Foods} addtocart={addtocart} />


    </div>
  )
}

export default App