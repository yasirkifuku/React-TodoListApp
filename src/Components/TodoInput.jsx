import { useState } from "react"

export default function TodoInput(props){
    const {todoValue, setTodoValue, handleAddTodos} = props

    return(
        <header> 
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Write away!"/>
            <button onClick={()=>{
                console.log('Button clicked');
                console.log(todoValue + 'Button clicked');
                handleAddTodos(todoValue) 
                setTodoValue('')        
            }}>Add</button>
        </header>
    )
}