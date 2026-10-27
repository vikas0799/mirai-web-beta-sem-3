import React from 'react'

function Section({data}) {
    console.log(data);
  return (
    <div className='bg-amber-700 m-7 p-7 flex justify-center gap-5 font-bold'>
        {
            data.map((element)=>{
                return(
                    <div className='bg-amber-300 p-10 rounded-2xl'>
                        <h1>{element.year}</h1>
                        <h1>{element.batch}</h1>
                        <h1>{element.level}</h1>


                    </div>
                )
            })
        }

    </div>
  )
}

export default Section