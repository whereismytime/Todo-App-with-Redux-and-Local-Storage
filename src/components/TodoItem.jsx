import PropTypes from "prop-types";
import { useState } from "react";

function TodoItem({ id, title, completed, toggleCompleted, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [error, setError] = useState(""); // Состояние для отображения ошибки

  const handleSave = () => {
    if (editedTitle.trim().length < 5) {
      setError("Task title must be at least 5 characters long."); // Устанавливаем сообщение об ошибке
      return;
    }
    editTodo(id, editedTitle); // Сохраняем изменения через Redux
    setIsEditing(false); // Завершаем режим редактирования
    setError(""); // Сбрасываем ошибку
  };

  const handleCancel = () => {
    setEditedTitle(title); // Возвращаем оригинальное значение
    setIsEditing(false); // Завершаем режим редактирования
    setError(""); // Сбрасываем ошибку
  };

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        color: completed ? "gray" : "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        margin: "0.5rem 0",
      }}
    >
      {isEditing ? (
        <>
          <div style={{ flex: 1, marginRight: "1rem" }}>
            <input
              type="text"
              value={editedTitle}
              onClick={(e) => e.stopPropagation()} // Блокируем всплытие события
              onChange={(e) => setEditedTitle(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {error && <div style={{ color: "red", fontSize: "0.8rem", paddingTop: "3px" }}>{error}</div>}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSave();
            }}
            style={{ marginRight: "0.5rem" }}
          >
            Save
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCancel();
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleCompleted(id)}
            style={{ cursor: "pointer", flex: 1 }}
          >
            {title}
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(id);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
