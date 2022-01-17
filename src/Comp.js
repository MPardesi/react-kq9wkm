import React, {useState,useEffect}from "react";

export default function Comp() {
const [count,setcount]=useState(0);
//v1
useEffect(()=>{
  console.log('render');
});

//v2
useEffect(()=>{
  console.log('runs only once after first render');
});

//v3
useEffect(()=>{
  console.log('runs when dependency array state changes');
},[count]);

//v4
useEffect(()=>{
  return()=>{
    console.log('unmount');
  }
},[]);

  return (
    <div>
      <button onClick={()=>setcount(count-1)}>-</button>
      {count}
      <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  );
}