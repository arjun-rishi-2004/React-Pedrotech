import './App.css';
import {useState} from 'react'

function App() {
  
const [count,setCount]=useState(0);
function decrease(){
  setCount(count-1);
}

const setToZero = ()=>{
  setCount(0);
}
  
return (
    <div>
      <center> <h1>{count} </h1>
       <button onClick={()=>{setCount(count+1)}}>Increase</button>
       <button onClick={decrease} >Decrease</button>
       <button onClick={setToZero}>Set To zero</button>
       </center>
    </div>
  )

}

export default App;
