import React from 'react'
import MyFavImg from './jspic.png';
import Image1 from './MongoDBpic.jpg';

const Alpha=()=>
{
    return(
        <>
        <h1>MERN project batch one</h1>
        <h1>mongoDB</h1>
        <h1>nodejs</h1>
        </>
    )
}

function Beta() {
    return(
        <h1>hello world</h1>
    )
}
function Geta() {
    return(
        <h1>hello world</h1>
    )
}


const Mern=(props)=>
{
    return(
        <>
        <h1>hi this is {props.name} and i am {props.age}</h1>
        <table>
            <tr>
        <td><img src={MyFavImg} align='center' alt="nodejs" className="App-logo" ></img></td>
        <td>
        <img src={Image1} align='center' width='50%'height='30%' alt="mongo" className="App-logo" ></img> 
       </td>
        </tr>
        </table>
        </>

        
    )
}

export {Alpha,Beta,Geta}
export default Mern
