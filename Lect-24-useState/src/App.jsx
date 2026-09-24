// // // // // import { useState } from 'react';

// // // // // export default function MyInput() {
// // // // //   const [text, setText] = useState('hello');

// // // // //   let i = 0;
// // // // //   // text="vikas";
// // // // //   // setText("vikas");
// // // // //   function handleChange(e) {
// // // // //     setText(e.target.value);
// // // // //   // setText("vikas");

// // // // //     // i++;
// // // // //     // if (i % 2 == 0) {
// // // // //     //   setText("sapna");
// // // // //     // }
// // // // //     // else {
// // // // //     //   setText("anshika");
// // // // //     // }

// // // // //     // console.log("hii");
// // // // //     // console.log("bye");

// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <input value={text} onChange={handleChange} />
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>
// // // // //       <p>{text}</p>

// // // // //       <input type="text" value={text} />
// // // // //       <input type="text" />
// // // // //       <input type="text" />
// // // // //       <input type="text" />


// // // // //     </>
// // // // //   );
// // // // // }


// // // // import React, { useState } from 'react'

// // // // function App() {

// // // //   const [text, setText] = useState("like");
// // // //   const [emoji, setEmoji] = useState("❤️")
// // // //   const handleClick = () => {
// // // //     if (text == "like") {
// // // //       setText("dislike");
// // // //       setEmoji("😰");

// // // //     }
// // // //     else {
// // // //       setText("like");
// // // //       setEmoji("❤️")
// // // //     }
// // // //   }
// // // //   return (
// // // //     <div>
// // // //       {/* <h1>{text}</h1> */}
// // // //       <h1 onClick={handleClick}>{emoji}</h1>


// // // //       {/* <button onClick={handleClick}>click me</button> */}
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App




// // // import React, { useState } from 'react'

// // // function App() {
// // //   const [like,setLike]=useState(true);

// // // const handleClick=(e)=>{
// // //   console.log(e);
// // //   setLike(!like);
// // // }

// // //   return (
// // //     <div>
// // //       <h1 onClick={handleClick}>{like?"❤️":"😰"}</h1>
// // //       <h1 onClick={()=>{setLike(!like)}}>{like?"❤️":"😰"}</h1>

// // //     </div>
// // //   )
// // // }

// // // export default App

// // import { useState } from 'react';

// // export default function Form() {
// //   const [name, setName] = useState('Taylor');
// //   const [age, setAge] = useState(42);
// //    const [start, setStart] = useState(true);
// //   // let start=true;

// //   const handleDown = (e) => {
// //     if (start == true)
// //       setName("");
// //     setStart(false);
// //     // start=false;  //UI not render in normal varriable

// //   }
// //   function handleChange(e) {
// //     setName(e.target.value);
// //   }

// //   return (
// //     <>
// //       <input
// //         value={name}
// //         onKeyDown={handleDown}
// //         onChange={handleChange}
// //       />

// //       <button onClick={() => setAge(age + 1)}>
// //         Increment age
// //       </button>
// //       <p>Hello, {name}. You are {age}.</p>
// //     </>
// //   );
// // }


// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge((age)=>age+1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }


import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    firstName: 'shubahsh',
    lastName: 'Yadav',
    email: 'subh@msot.org',
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </>
  );
}
