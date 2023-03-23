import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../Redux/Todo/todo.action";

function Todo() {
  const todo = useSelector((state) => state.todos.todo);
  console.log(todo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  console.log(todo);
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Type your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(inputValue))}>Submit</button>
      {todo?.map((elem) => (
        <div key={elem.id}>
          <span>{elem.todo}</span>
          <span onClick={()=>dispatch(updateTodo(elem.id))}>{elem.status?" Status: True ":" Status: False "}</span>
          <button onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export { Todo };
