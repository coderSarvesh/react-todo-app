import React, { useState } from 'react'
import { FaPlus, FaTimes } from "react-icons/fa";

const Todo = () => {

    const [input, setInput] = useState('')
    const [todolist, settodolist] = useState([])

    const saveData = () => {
        console.log(input)
        if (!input) {

        } else {
            settodolist([...todolist, input])
            setInput("")
        }
    };

    const deleteTodo = (id) => {
        const updatedList = todolist.filter((ele, ind) => {
            return ind !== id
        })
        settodolist(updatedList)
    }

    return (
        <>
            <div className=''>
                <h1 className='m-10 text-3xl'>To-Do List</h1>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex border-2 text-xl border-gray-400' >
                        <input className='px-6 py-4 text-xl border-gray-400' type="text"
                            placeholder="Enter A Todo"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={saveData} >
                            <FaPlus className="m-5" />
                        </button>
                    </div>

                    <div>
                        {
                            todolist.map((item, id) => {
                                return (
                                    <div className='flex mt-4 py-2 px-9 bg-slate-300' key={id}>
                                        <h1 className='text-2xl font-medium'>{item}</h1>
                                        <button onClick={() => deleteTodo(id)}>
                                            <FaTimes className="ml-36 m-1 text-xl" />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo