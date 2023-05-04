import React from "react";
import {useState} from "react";
import axios from "react";

const Formi=()=>
{
    const[name,setName]=useState("")
    const[password,setPass]=useState("")
    // useEffect(()=>{
    //  console.log("the name is",name);
    //  console.log("the password is",password)
    // })
    const print=()=>{
        // alert('my name is'+name+' and password is '+password)
        alert(`my name is ${name} and password is ${password}`)
        
    }
    const Handleclick =async()=>
    {
        const responce = await axios.post("http://localhost:8000/login/jaya/76969"+name+"/"+password);
    }

    const changename=(e)=>
    {
        setName(e.target.value);
    }
    const changepass=(e)=>
    {
        setPass(e.target.value);
    }
    const handleclick=()=>{
        alert("submitted the form");
    }

    return (
    <>
   
    <input type="text" 
    name="username"
    placeholder="enter name"
    onchange={changename}></input>
    <input 
    type="password"
    placeholder="password"
    onChange={changepass}></input>
    <button onClick={print}>print</button>
    <button onClick={Handleclick}>submit</button>
 
    </>
    )
}
export default Formi