// import { useEffect, useState, useRef } from 'react';
// import './CSS/Todo.css';
// import TodoItems from './TodoItems';

// let count = 0;
// function Todo() {

//     const [todos, setTodos] = useState([]);
//     const inputRef = useRef(null);

//     function add() {
//         setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
//         inputRef.current.value = "";
//         localStorage.setItem("todos_count", count);
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             console.log(todos);
//             localStorage.setItem("todos", JSON.stringify(todos));
//         }, 100);

//     }, [todos])



//     useEffect(() => {
//         setTodos(JSON.parse(localStorage.getItem("todos")));
//         count = localStorage.getItem("todo_count");
//     }, [])



//     return (

//         <div className="container">

//             <div className="todo">
//                 <div className="todo-header">To-Do List</div>
//                 <div className="todo-add">
//                     <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
//                     <div onClick={() => { add() }} className="todo-add-btn">ADD</div>
//                 </div>
//                 <div className="todo-list">
//                     {todos.map((item, index) => {
//                         return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
//                     })}
//                 </div>
//             </div>

//         </div>






//     );
// }

// export default Todo;

import { useEffect, useState, useRef } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems';

let count = 0;

function Todo() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    function add() {
        setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count", count);
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100);
    }, [todos]);

    useEffect(() => {
        // Parse the todos from localStorage, if available
        const storedTodos = localStorage.getItem("todos");
        const storedCount = localStorage.getItem("todos_count");

        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }

        if (storedCount) {
            count = parseInt(storedCount, 10);
        }
    }, []);

    return (
        <div className="container">
            <div className="todo">
                <div className="todo-header">To-Do List</div>
                <div className="todo-add">
                    <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
                    <div onClick={() => { add() }} className="todo-add-btn">ADD</div>
                </div>
                <div className="todo-list">
                    {/* Ensure that todos is an array before calling map */}
                    {Array.isArray(todos) && todos.length > 0 ? (
                        todos.map((item, index) => (
                            <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
                        ))
                    ) : ""}
                </div>
            </div>
        </div>
    );
}

export default Todo;
