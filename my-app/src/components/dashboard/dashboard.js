import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/getdata')
        .then((responce)=>{   
            console.log(responce.data);
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])



    return(
        <>
        <h1>Employees Data</h1>
        <a href="/login">click to go to login</a>


        {
            data.map((item)=>{
                return(
                    <>
                    <div>
                        <h1>{item.name}</h1>
                        <h2>{item.department}</h2>
                        </div>
                        </>
                )
            })
        }
        </>

    );
}

export default Dashboard;