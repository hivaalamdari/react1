import React , {useRef} from 'react';
import "./TodoAdd.css";

const TodoAdd = (props) => {
    const el = useRef(null) 
    const handleAdd = ()=>{
        console.log(el.current.value)
        props.handlAddTolist(el.current.value)

    }
    return (
        // <form  onSubmit={todoSubmitHandler}> 
        <>
        <input type="text" name="name" class="todoaddinput" id="todo-text" ref={el} placeholder="Add new to do"/>
		<button className="todoaddButton" onClick={handleAdd}>Add</button>
        </>
		
      );
}
 
export default TodoAdd;