import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodos, index, handleEditTodos} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionContainer'>
                <button onClick={() => {handleEditTodos(index)}}>
                    <i className="fa-solid fa-heart"></i>
                </button>
                <button onClick={() => {handleDeleteTodos(index)}}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                
               
            </div>
        </li>
    )
}
