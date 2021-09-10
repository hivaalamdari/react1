import "./App.css";
import React , {useState , useEffect} from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import axios from "axios"
import Main from "./components/Main"
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './components/pages/Post/Post'
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Contacts from "./components/pages/Contacts/Contacts";
// import $ from'jquery';
// import Popper from'popper.js';
//popper isnt need 
import Todos from "./components/pages/Todos/Todos"; 

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
      <Router>
      <Header/>
        

        <Switch>
        <Route path="/post">
            <Post/>
          </Route>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
          <Route path="/todos">
            <Todos/>
          </Route>

          <Route path="/">
            <Main users ={users}/>
          </Route>
        </Switch>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
