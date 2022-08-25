import useJsonAPI from "./api";
import server from "../server.config.json";
import { useEffect, useState } from "react";

/**
 * Get all orders from the backend
 * @returns Order
 */
export default function useOrders() {
  const [{ orders, error }, setOrders] = useState({
    orders: [],
    error: undefined,
  });

  const {
    loading,
    error: apiError,
    data: apiData,
  } = useJsonAPI(server.backendUrl + server.orders.endpoint, {
    headers: {
      Authorization: server.token,
    },
  });

  useEffect(() => {
    if (loading) return;
    if (apiError) setOrders({ orders: [], error: apiError });
    if (apiData) setOrders({ orders: apiData.orders });
  }, [loading, apiData, apiError]);

  return {
    orders,
    error,
  };
}
