import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../features/todos/todoSlice';

const Todos = () => {
  const [input, setInput] = React.useState('');
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="todos-container">
      <div className="todo-form">
        <h1>Add Todo</h1>
        <form onSubmit={handleTodoSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo"
            className="todo-input"
          />
          <button type="submit" className="add-button">Add</button>
        </form>
      </div>

      <div className="todo-list">
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
              >Toggle</button>
              <span className={todo.completed ? 'completed' : 'not-completed'}>
                {todo.text}
              </span>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="delete-button">X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
