import OrderCard from "../../components/order";
import useOrders from "../../hooks/orders";
import OrderProducts from "../products";
import { useState } from "react";
import "../../css/pages/orders.css";

export default function OrderPage() {
  const { orders } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(undefined);
  return (
    <div className="orders-page">
      <div className="orders-content">
        {!selectedOrder && (
          <div>
            <p className="orders-title">Orders</p>
            <div className="orders-container">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onClick={() => setSelectedOrder(order)}
                />
              ))}
            </div>
          </div>
        )}
        {selectedOrder && (
          <OrderProducts
            order={selectedOrder}
            onBack={() => setSelectedOrder(undefined)}
          />
        )}
      </div>
    </div>
  );
}
