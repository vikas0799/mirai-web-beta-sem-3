import React from 'react'

function FoodCard(props) {
    //{Foods,addtocart}
    let Foods=props.Foods;
    let addtocart=props.addtocart;
    console.log(Foods);
  return (
    <div>
        {
          Foods.map((Element)=>{
            return (
              <div key={Element.id} style={{backgroundColor:'aqua'}}>
                {/* <p>{Element.id}</p> */}
              <p>{Element.name}</p>
              <p>{Element.category}</p>
              <p>{Element.price}</p>
              {/* <p>{Element.available}</p> */}
              <p>{Element.emoji}</p>
              <p>{Element.available?"availabale 🕺":"out of stock😰 " }</p>
              <img src={Element.image} alt=""  style={{height:'100px'}}/>
              <button disabled={!Element.available} onClick={addtocart}>addtocart</button>
              </div>
            );
          })
        }
    </div>
  )
}

export default FoodCard