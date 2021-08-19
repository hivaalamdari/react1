import "./App.css";
import React , {useState , useEffect} from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import axios from "axios"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import $ from'jquery';
// import Popper from'popper.js';
//popper isnt need 

const App =() =>{
const [users , setUsers] = useState([])
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(e=> {
    setUsers (e.data)
    console.log(e.data)
  })
},[])


  return (
    <div className="App">
      <Header/>
      <Main users = {users}/>
   
      
      <Footer/>
    </div>
  );
}

export default App;
