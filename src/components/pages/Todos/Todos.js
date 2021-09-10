import React , {useState} from 'react';
import TodoAdd from "./TodoAdd";
import Todolist from "./Todolist";
const Todo = () => {
    const todosample = [{id:"1" , text : "do homework"}]
    const [todos, settodos] = useState(todosample)
   const handlAddTolist =(e)=>{
       settodos(pre =>[
        ...pre ,
        {id : Math.random().toString() , text: e}
    ])
   }
    return ( 
        <>
        <Todolist list={todos}/>
        <TodoAdd handlAddTolist={handlAddTolist}/>

        </>
     );
}
 
export default Todo;