import Content from "./Content";
import Navbar from "./Navbar";

const y_global=200;
const college="mirai";

function App() {
     const x=90;
     const age=91;
     let name="sauf";
    
  return (
    <>
    <h1 style={{}}>my college is {college}</h1>
    <h1>mirai school of technology</h1>
    <p>my name is saif and age is {age} </p>

    <ul>
      <li>Tea</li>
    </ul>

       <Navbar/>
      <div style={{display:'flex', gap:'10px', justifyContent:'space-between'}}>
         <Content />
       <Content />
      </div>

    </>
  )
}

export default App
