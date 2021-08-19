import "./App.css";
import'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import axios from "axios"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import $ from'jquery';
// import Popper from'popper.js';

function App() {
  axios.get("https://jsonplaceholder.typicode.com/users").then(e=>console.log(e))

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
