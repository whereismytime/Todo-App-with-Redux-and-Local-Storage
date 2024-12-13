import PropTypes from 'prop-types';
import { useState } from 'react';
import TodoList from './TodoList';
import EditModal from './EditModal';

function TodoSection({ todos, toggleCompleted, addTodo, deleteTodo, editTodo }) {
  const [newTask, setNewTask] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTodo(newTask.trim());
      setNewTask('');
    }
  };

  const handleEditSave = (id, updatedTitle) => {
    editTodo(id, updatedTitle);
  };

  return (
    <section>
      <div>
        <h2>Tasks</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ marginRight: '1rem', padding: '0.5rem' }}
        />
        <button onClick={handleAddTask}>Add Task</button>
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Передача editTodo
        />
      </div>
      {editingTodo && (
        <EditModal
          todo={editingTodo}
          onSave={handleEditSave}
          onClose={() => setEditingTodo(null)}
        />
      )}
    </section>
  );
}

TodoSection.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoSection;
