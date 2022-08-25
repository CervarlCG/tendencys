import { useState } from "react";
import Table from "../../components/table";
import AddProductModal from "./add-products-modal";
import PaymentAlert from "./payment-alert";
import "./styles.css";

export default function OrderProducts({ order, onBack }) {
  const [products, setProducts] = useState(order.items || []);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleAddProduct = (product) => {
    setProducts((p) => [...p, product]);
    setShowModal(false);
  };

  return (
    <div className="order-products-container">
      <div className="products-actions">
        <button className="button button-secondary" onClick={onBack}>
          Go Back
        </button>
        <button className="button" onClick={() => setShowModal(true)}>
          Add Product
        </button>
      </div>

      <span className="order-title">Order #{order.number}</span>
      <Table
        titles={["SKU", "Name", "Quantity", "Price"]}
        items={products.map((item) => [
          item.sku,
          item.name,
          item.quantity,
          item.price,
        ])}
      />
      <button
        className="button button-primary-variant pay"
        onClick={() => setShowPaymentModal(true)}
      >
        Pay
      </button>
      {showModal && (
        <AddProductModal
          onAdd={handleAddProduct}
          onRequestClose={() => setShowModal(false)}
        />
      )}

      {showPaymentModal && (
        <PaymentAlert onRequestClose={() => setShowPaymentModal(false)} />
      )}
    </div>
  );
}
