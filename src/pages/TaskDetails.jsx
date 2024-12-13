import { useParams } from 'react-router-dom';

function TaskDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Task Details</h1>
      <p>Details for task with ID: {id}</p>
    </div>
  );
}

export default TaskDetails;
