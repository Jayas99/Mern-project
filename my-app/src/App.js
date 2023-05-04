// import logo from './logo.svg';
import './App.css';


// import Mern from './project';
// import { Alpha,Beta,Geta} from './project';
// import ExampleHooks from './examplehook';
// import MyInputComponent from './project2';


////
import Formi from './Myform';
import Regis from './register';
import Found from './notfound';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/dashboard/ig';
import Signup from './components/dashboard/signup';
function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route  exact path='/login' element={<Formi/>} /> 
      <Route exact path='/register' element={<Regis />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/ig' element={<Login/>} />
      <Route path='/ig/signup' element={<Signup/>} />


      <Route exact path='*' element={<Found />} />
      </Routes>
      </BrowserRouter>
  );

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Formi />
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <ExampleHooks  />
//         <MyInputComponent/>
//         <Alpha />
//         <Mern name="jayasri" age="20" />
//         <Beta />
//         <Geta />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>mern stack project</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
    
//   )
// }

export default App;
