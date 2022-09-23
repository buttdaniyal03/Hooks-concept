import './App.css';
import React,{useEffect,useState} from 'react';

function User(props) {
  useEffect(()=>{
    console.log(props)
    alert("count is",props.count);
  },[props.count])


  return (
    <div className="App">
      <h2>count Props:{props.count}</h2>
      <h2>Data Props:{props.data}</h2>
    </div>
  );
}

export default User;
