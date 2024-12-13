import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleCompleted, deleteTodo, editTodo }) {
  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {todos.map((todo) => (
       <TodoItem
          key={todo.id}
          {...todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          editTodo={editTodo} 
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
