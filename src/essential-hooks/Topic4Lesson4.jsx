import { useCallback, useMemo, useState } from "react";

let todos = [
  { id: 1, task: "High-Fidelity Mockups", done: false },
  { id: 2, task: "Moodboard & Concept Development" },
  { id: 3, task: "Design Asset Organization", done: true },
  { id: 4, task: "Design Asset Export & Client Delivery", done: false },
];

function TodoList({ todos, filter, onToggle }) {
  // Caches the filtered array result so the computer doesn't have to keep 
  // re-running the .filter() loop every time the component renders for unrelated reasons.
  const filtered = useMemo(
    () => (filter === "done" ? todos.filter((t) => t.done) : todos),
    [todos, filter],
  );

  return (
    <ul>
      {filtered.map((t) => (
        <li key={t.id}>
          <input
            type="checkbox"
            id={`todo-${t.id}`}
            checked={!!t.done}
            onChange={() => onToggle(t.id)}
          />
          <label htmlFor={`todo-${t.id}`}>{t.task}</label>{" "}
        </li>
      ))}
    </ul>
  );
}

function TodoApp({ todoList }) {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(todoList);

  // Freezes the function's memory reference so it doesn't get recreated on every render,
  // which would otherwise trick React into thinking the prop changed and force a total component reload.
  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("done")}
          style={{ fontWeight: filter === "done" ? "bold" : "normal" }}
        >
          Done
        </button>
      </div>

      <TodoList todos={todos} filter={filter} onToggle={handleToggle} />
    </div>
  );
}

export default function Topic4Lesson4() {
  return <TodoApp todoList={todos} />;
}
