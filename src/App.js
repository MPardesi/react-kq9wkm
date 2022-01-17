import React,{useState} from "react";
import Comp from "./Comp";
import "./style.css";

export default function App() {
  const [flag,setFlag]=useState(true);
  return (
    <>
    <button onClick={()=>setFlag(!flag)}>Switch</button>
    {flag && <Comp />}
    </>
  );
}
