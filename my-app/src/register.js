import { useState } from 'react';
import axios from 'axios';
export default function Regis() {
  const [name, setMessage] = useState('');

  const [password, setMessage1] = useState('');

  const [email, setMessage2] = useState('');

  const handleIt = (event) => {
    setMessage(event.target.value);

  };

  const handleOr = (event) => {
    setMessage1(event.target.value);

  };

  const handlEmail = (event) => {
    setMessage2(event.target.value);

  };
  

  const print = () => {
    alert("form submitted sucessfully")
    
  };

  const handleclick =async()=>{

      
    const  responce = await axios.post("http://localhost:8000/register/"+name+"/"+password+"/"+email);
    console.log(responce)
};

  return (
    // <form onSubmit={print}>
    <div>
        <h1><center>Registration Form</center></h1>
      <h2>name: </h2>

      <input
        type="text"
        id="name"
        name="name"
        onChange={handleIt}
        value={name}
      />
      <br></br>
      <h2>password: </h2>
      <input
        type="password"
        id="role"
        name="password"
        onChange={handleOr}
        value={password}
      />
      <br></br>
      <h2>e-mail: </h2>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handlEmail}
        value={email}
      />

      {/* <h2> my name : {name} <br></br>
      this is my password :{password}<br></br>
      e-mail : {email} </h2> */}


      <button onClick={handleclick}>submit</button>
      </div>
      // </form>

  );
}