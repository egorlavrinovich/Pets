import React, { useState } from "react";

interface IGoodsModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const GoodsModal: React.FC<IGoodsModal> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>This is the content of the modal</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GoodsModal;
