import PropTypes from 'prop-types';

import { useState } from 'react';

function EditModal({ todo, onSave, onClose }) {
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    if (title.trim()) {
      onSave(todo.id, title.trim());
      onClose();
    }
  };

  return (
    <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -20%)', backgroundColor: '#fff', padding: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 1000 }}>
      <h2>Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <div>
        <button onClick={handleSave} style={{ marginRight: '1rem' }}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditModal;
