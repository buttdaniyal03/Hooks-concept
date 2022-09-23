import './App.css';
import React,{useEffect,useState} from 'react';
import User from './User';

function App() {
  const [data,setData]=useState(10);
  const [count,setCount]=useState(100);

  return (
    <div className="App">
      <User count = {count} data={data}/>
      {/* Added comment */}
      <button onClick={()=> setCount(count+1)}>count</button>
      <button onClick={()=>setData(data+1)}>Data</button>

    </div>
  );
}

export default App;
