import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="할 일을 입력하세요"
        required
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
