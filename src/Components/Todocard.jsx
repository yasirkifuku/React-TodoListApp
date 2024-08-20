import React from 'react'

export default function Todocard(props) 
{
    const {children, handleDeleteTodos, handleEditTodos, index} = props
    return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={()=>{
                handleEditTodos(index)
            }}>
            <i className="fa-solid fa-pen-to-square" aria-hidden="true"></i>
            </button>
            <button onClick={()=>{
                handleDeleteTodos(index)
            }}>
            <i className="fa-regular fa-trash-can" aria-hidden="true"></i>   
            </button>
        </div>
    </li>
  )
}
