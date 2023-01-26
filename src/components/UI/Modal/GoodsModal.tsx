import React, { useState, useRef, useEffect } from "react";

interface IGoodsModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const GoodsModal: React.FC<IGoodsModal> = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleClick}>
          <div className="modal-content" ref={modalRef}>
            Modal Content
          </div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default GoodsModal;
