import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Modals = ({ show, onClose, title, content }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show && modalRef.current) {
      gsap.from(modalRef.current, { y: -20, opacity: 0, duration: 0.3 });
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
    }}>
      <div
        className="modal-dialog"
        style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          minWidth: '300px',
          maxWidth: '90vw',
          position: 'relative',
          top: '10px',
        }}
        ref={modalRef}
      >
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'red',
            }}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modals;
