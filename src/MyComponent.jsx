import React, { useState } from 'react';

function MyComponent() {
    const [todo, addTodo] = useState([]);
    function handleAddTodo() {
        const newTodo = document.getElementById("todoInput").value;
        document.getElementById("no-todo").style.display = "none";
        if (newTodo === "") {
            alert("Please enter a todo item.");
            return;

        } else {

            document.getElementById("todoInput").value = "";
            addTodo((prevTodo) => [...prevTodo, newTodo]);

        }

    }

    function handleRemoveTodo(index) {
        addTodo(todo.filter((_, i) => i !== index));


    }
    return (
        <>
            <div className='body-container'>
                <div className='main-container'>
                    <div className="list-items">

                        <h1>Todo's Are: </h1>

                        <p id='no-todo'>
                            No Todo's Yet
                        </p>
                        <ul>
                            {todo.map((todo, index) =>
                                <li key={index}>
                                    {todo}
                                    <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="add-todo">

                        <input type="text" id='todoInput' placeholder='Enter TODO Here' />
                        <button onClick={handleAddTodo} className='addButton'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyComponent;