import React, { useState } from 'react';

function MyComponent() {
    const [todo, addTodo] = useState([]);
    function handleAddTodo() {
        const newTodo = document.getElementById("todoInput").value;
        document.getElementById("no-todo").style.display = "none";
        if (newTodo.trim() === "") {
            alert("Please enter a todo item.");
            return;

        } else {

            document.getElementById("todoInput").value = "";
            addTodo((prevTodo) => [...prevTodo, newTodo]);

        }

    }

    function MoveTodoUp(index) {
        if (index > 0) {
            const updatedTodos = [...todo];
            [updatedTodos[index], updatedTodos[index-1]] = [updatedTodos[index-1], updatedTodos[index]];
            addTodo(updatedTodos);
        }
    }
    function MoveTodoDown(index) {
        if (index=== todo.length - 1) {
            return; // Can't move down if it's the last item
            }
        
    

            const updatedTodos = [...todo];
            [updatedTodos[index], updatedTodos[index+1]] = [updatedTodos[index+1], updatedTodos[index]];
                
            addTodo(updatedTodos);

        
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
                                    <div>

                                    <button className='task-button' onClick={() => handleRemoveTodo(index)}>Remove</button>
                                    <button className='task-button' onClick={() => MoveTodoUp(index)}>👆</button>
                                    <button className='task-button' onClick={() => MoveTodoDown(index)}>👇</button>
                                    </div>
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