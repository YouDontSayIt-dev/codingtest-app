import React, { useState } from 'react';

const Check: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="flex min-h-[92vh] flex-col items-center bg-primary justify-center p-24 border-2">
            <h1>Todo List</h1>
            <div className='flex flex-row space-x-2'>
                <input
                    type="text"
                    placeholder='Add a new todo...'
                    value={newTodo}
                    className='text-black p-4 rounded-lg bg-white mt-4 mb-4'
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            
            <div className='border-2 w-full'>
                <ul className='flex flex-col flex-wrap p-5 m-auto gap-2'>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <div className='flex flex-row justify-between items-center text-center'>
                            <div className='items-center p-4'>
                                <input id="checkbox" className='w-5 h-5' type="checkbox" />
                                <label htmlFor="checkbox" className='text-2xl'> {todo}</label>
                            </div>
                            <div className='flex border-2 justify-between items-center'>
                                
                                <button className='bg-white p-4 text-black' onClick={() => removeTodo(index)}>Remove</button>
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