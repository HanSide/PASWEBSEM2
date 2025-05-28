import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="delete-btn" onClick={() => onDelete(id)}>
      DELETE
    </button>
  );
};

export default DeleteButton;
