import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, addTodo, deleteTodo, editTodo } from '../redux/todoSlice';
import TodoSection from '../components/TodoSection';

const Tasks = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <TodoSection
      todos={todos}
      toggleCompleted={(id) => dispatch(toggleTodo(id))}
      addTodo={(title) => dispatch(addTodo({ id: Date.now(), title, completed: false }))}
      deleteTodo={(id) => dispatch(deleteTodo(id))}
      editTodo={(id, updatedTitle) => dispatch(editTodo({ id, updatedTitle }))}
    />
  );
};

export default Tasks;
