import React from "react";
import {useState} from "react"
import {useEffect} from "react"
const ExampleHooks =()=>
{
    const [count,setCount]=useState(0);
    const Increment =()=>{
        setCount(count+1);
    }
    const Decrement =()=>{
        setCount(count-1);
    }
    useEffect(()=>{
     console.log("useEffect called")
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <table>
        <tr>
         <td><button style={{width:'300px' ,height:'200px',fontSize:'50px'}}
        onClick={Increment}>click to increment</button></td>
        <th><button style={{width:'300px' ,height:'200px',fontSize:'50px'}}
        onClick={Decrement}>click to decrement</button></th>
        </tr>
        </table>
        </>
    )
}
export default ExampleHooks