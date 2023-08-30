import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onDelete }) => {


  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="p-4 bg-[#fd7e50]" >
        <p>Are you sure you want to delete this user?</p>
        <button onClick={onDelete} >Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;