import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
          }}
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{ cursor: "pointer" }}
          >
            {todo.task}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{
              marginLeft: "auto",
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
