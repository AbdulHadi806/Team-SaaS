import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onDelete }) => {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg shadow-md relative">
       <div className="modal">
         <p>Are you sure you want to delete this user?</p>
         <div className='flex gap-2 justify-center'>
         <button className=' hover:bg-gray-800 text-white uppercase font-semibold mt-4 py-2 bg-[#000] hover:transition-all  px-6 rounded' onClick={onDelete} >Delete</button>
         <button className='hover:bg-gray-800  text-white uppercase font-semibold mt-4 py-2 bg-teal-500 hover:transition-all ms-3  px-6 rounded' onClick={onClose}>Cancel</button>
         </div>
     </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;