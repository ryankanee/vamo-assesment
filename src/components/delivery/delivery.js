import { useState, useEffect } from "react";
import { getAllOrders } from "../../data/orders";
import OrderConfirmationModal from "./OrderConfirmationModal";
import "./delivery.css";

function Delivery({ setEnterNumber, setSelectedOrderId }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [displayOrder, setDisplayOrder] = useState(null);

  useEffect(() => {
    const orders = getAllOrders();
    const randomOrder = orders[Math.floor(Math.random() * orders.length)];
    setDisplayOrder(randomOrder);
  }, []);

  const firstName = displayOrder?.firstName || "";
  const lastName = displayOrder?.lastName || "";
  const estimate = displayOrder?.estimatedDelivery || "";

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length <= 10) {
      setPhoneNumber(digitsOnly);
    }
  };

  const formatPhoneNumber = (phone) => {
    if (phone.length === 0) return "";
    if (phone.length <= 3) return `(${phone}`;
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  };

  const handleSubmit = () => {
    if (phoneNumber.length !== 10) {
      alert("Please enter a valid phone number!");
      return;
    } else {
      // Get a random order from the available orders
      const orders = getAllOrders();
      const randomOrder = orders[Math.floor(Math.random() * orders.length)];

      // Set the selected order ID for the tracking page
      setSelectedOrderId(randomOrder.id);
      setSelectedOrder(randomOrder);
      setShowModal(true);
    }
  };

  const handleTrackOrder = () => {
    setEnterNumber(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="delivery-container">
      <h1>
        Thank you <br />
        {firstName} {lastName}
      </h1>
      <p>
        We thank you for your order! We are currently working on getting it
        delivered as fast as possible. The expected time for delivery is
        {" " + estimate}. If you would like to get step by step delivery
        information please enter your number below!
      </p>

      <div className="phone-input-container">
        <label htmlFor="phone-input">Phone Number:</label>
        <input
          id="phone-input"
          type="tel"
          value={formatPhoneNumber(phoneNumber)}
          onChange={handlePhoneChange}
          placeholder="(123) 456-7890"
          maxLength="14"
          className="phone-input"
        />
        {phoneNumber.length === 10 && (
          <p className="success-message">✓ Valid phone number!</p>
        )}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <OrderConfirmationModal
        isOpen={showModal}
        onClose={handleCloseModal}
        orderData={selectedOrder}
        onTrackOrder={handleTrackOrder}
      />
    </div>
  );
}

export default Delivery;
