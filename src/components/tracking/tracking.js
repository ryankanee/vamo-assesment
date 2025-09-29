import { useState, useEffect } from "react";
import Map from "./map";
import OrderTracker from "./orderTracker";
import OrderItems from "./orderItems";
import { getAllOrders } from "../../data/orders";
import "./tracking.css";

function Tracking({ selectedOrderId: propSelectedOrderId }) {
  const [selectedOrderId, setSelectedOrderId] = useState(
    propSelectedOrderId || "ORD-2024-001",
  );
  const orders = getAllOrders();
  const orderData =
    orders.find((order) => order.id === selectedOrderId) || orders[0];

  // Update selectedOrderId when prop changes
  useEffect(() => {
    if (propSelectedOrderId) {
      setSelectedOrderId(propSelectedOrderId);
    }
  }, [propSelectedOrderId]);

  return (
    <div className="tracking-container">
      <h1 className="tracking-title">Your Order is on its way!</h1>

      <div className="tracking-main-content">
        <div className="tracking-left-column">
          <Map
            address={orderData.address}
            coordinates={orderData.coordinates}
          />
          <OrderTracker orderData={orderData} />
        </div>

        <div className="tracking-right-column">
          <OrderItems orderData={orderData} />
        </div>
      </div>
    </div>
  );
}

export default Tracking;
