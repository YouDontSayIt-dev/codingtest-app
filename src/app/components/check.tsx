import React, { useState } from 'react';

const Check: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]); // State variable to store the list of todos
    const [newTodo, setNewTodo] = useState(''); // State variable to store the value of the new todo input field

    const addTodo = () => {
        if (newTodo.trim() !== '') { // Check if the new todo is not empty or only whitespace
            setTodos([...todos, newTodo]); // Add the new todo to the list of todos
            setNewTodo(''); // Clear the value of the new todo input field
        }
    };

    const removeTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index); // Remove the todo at the specified index from the list of todos
        setTodos(updatedTodos); // Update the list of todos
    };

    return (
        <div className="flex min-h-[92vh] flex-col items-center bg-primary justify-center p-24">
            <h1>Todo List</h1>
            <div className='flex flex-row space-x-3 w-auto'>
                <input
                    type="text"
                    placeholder='Add a new todo...'
                    value={newTodo}
                    className='text-black p-4 rounded-lg bg-white mt-4 mb-4 w-full m-auto'
                    onChange={(e) => setNewTodo(e.target.value)} // Update the value of the new todo input field
                />
                <button onClick={addTodo} className=''>Add</button>  {/* Button to add a new todo */ }
            </div>
            
            <div className='border-2 w-full'>
                <ul className='flex flex-col flex-wrap p-5 m-auto gap-2'>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <div className='flex flex-row justify-between items-center text-center'>
                            <div className='items-center p-4'>
                                <input id="checkbox" className='w-5 h-5' type="checkbox" />
                                <label htmlFor="checkbox" className='text-2xl'> {todo}</label> {/* Display the todo text*/}
                            </div>
                            <div className='flex border-2 justify-between items-center'>
                                <button data-testid="btn_remove" className='bg-white p-4 text-black' onClick={() => removeTodo(index)}>Remove</button> {/* Button to remove the todo */}
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
            
        </div>
    );
};

export default Check;