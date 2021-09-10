import "./Todolist.css";
const Todolist = (props) => {
  
    return (
        <> 
        <h1 className="TodoHeader">To do list is here </h1>
         <ul className="todoUl">
             {props.list.map((todo , index)=> {
                 return (<li className="todoLi" key={index}>{todo.text}</li>)
             })}
         </ul>
        </>
        
     );
}
 
export default Todolist;