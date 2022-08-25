import "./styles.css";

export default function Modal({ onRequestClose, hideClose, children }) {
  return (
    <div className="modal">
      <div className="modal-container">
        {!hideClose && (
          <span className="modal-close" onClick={onRequestClose}>
            <img
              src="/images/close.svg"
              width="30"
              height="30"
              alt="Close icon"
            />
          </span>
        )}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
