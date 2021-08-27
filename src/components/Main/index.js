import React from 'react';
import "./Main.css"

// class Main extends Component{
     
//     render(){

//         return(
//             <div className="main">

//             </div>
//         );
//     }

// }

// export default Main
const Main = (props) => {
console.log(props)
    return ( 
        <div className="main">
             {props.users.map((e)=>{
              return(<div key={e.id}>
                <h3>{e.name}</h3>
                <span>{e.email}</span>
              </div>)
      
      })}
      </div>

    );
}
 
export default Main;