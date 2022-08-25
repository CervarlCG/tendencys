import Modal from "../../../components/modal";
import "./styles.css";

export default function PaymentAlert({ onRequestClose }) {
  return (
    <div>
      <Modal hideClose>
        <div className="payment-modal">
          <img src="/images/success.svg" alt="Success icon" />
          <p> Payment Successful</p>
          <button className="button" onClick={onRequestClose}>
            Accept
          </button>
        </div>
      </Modal>
    </div>
  );
}
