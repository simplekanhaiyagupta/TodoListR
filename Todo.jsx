import { useState } from "react";
import logo from './todolist.png';
const Todo = function() {
    const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
        setInput('');
      }
      else if(input.trim() === '') {
        alert("Please enter a item to add to the list.");
      }
    };
      const deleteTodo = (index) => {
        const newTodos =   [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        };
        const edit = (index) => {
            const newTodos = [...todos];
            const editedTodo = prompt("Edit todo:", newTodos[index]);
            if (editedTodo !== null && editedTodo.trim() !== '') {
                newTodos[index] = editedTodo;
                setTodos(newTodos);
            }
        }
        return (
            <div className="todo">
            <h1 className="heading">Todo List </h1>
            <div className="input-container">
            <input type="text" className="input-box" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a new item.." />
            <button className="todo-button" onClick={addTodo}>Add</button>
            </div>
          <div className="todo-list">
          {todos.map((todo, index) => (
                <li key={index}>
                {todo}
                <button  className="delte-button" onClick={() => deleteTodo(index)}>Delete</button>
                <button className="edit-button" onClick={() => edit(index)}>Edit</button>
                </li>
                ))}
                <img className="image" src={logo} alt="Logo" />
            </div>
          
        </div>
        

            )
        };
    
export default Todo;