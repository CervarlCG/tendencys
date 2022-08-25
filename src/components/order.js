import "./order.css";

export default function OrderCard({ order, onClick }) {
  return (
    <div className="order-card" onClick={onClick}>
      <img src="/images/order.svg" alt="Order icon" className="order-icon" />
      <h3>{order.name}</h3>
    </div>
  );
}
