import { useEffect } from "react";
import "./OrderConfirmationModal.css";

function OrderConfirmationModal({ isOpen, onClose, orderData, onTrackOrder }) {
  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleTrackOrder = () => {
    onTrackOrder();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🎉 Order Confirmed!</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="order-info">
            <h3>Order Details</h3>
            <p>
              <strong>Order Number:</strong> {orderData.orderNumber}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {orderData.estimatedDelivery}
            </p>
            <p>
              <strong>Delivery Address:</strong> {orderData.address}
            </p>
          </div>

          <div className="tracking-section">
            <h3>Track Your Order</h3>
            <p>Click the button below to track your order in real-time:</p>

            <div className="tracking-actions">
              <button className="track-order-btn" onClick={handleTrackOrder}>
                🚚 Track My Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;
