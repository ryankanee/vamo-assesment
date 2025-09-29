import "./tracking.css";

function OrderItems({ orderData }) {
  const calculateTotal = () => {
    return orderData.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <div className="order-items">
      <h2 className="order-items-title">Order Details</h2>

      <div className="items-list">
        {orderData.items.map((item, index) => (
          <div key={index} className="item-row">
            <div className="item-info">
              <div className="item-icon">{item.emoji}</div>
              <div>
                <h4 className="item-details">{item.name}</h4>
                <p className="item-quantity">Quantity: {item.quantity}</p>
                {item.description && (
                  <p className="item-description">{item.description}</p>
                )}
              </div>
            </div>
            <div className="item-pricing">
              <p className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <p className="item-unit-price">${item.price.toFixed(2)} each</p>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span className="summary-label">Subtotal:</span>
          <span className="summary-value">${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Delivery Fee:</span>
          <span className="summary-value">
            ${orderData.deliveryFee.toFixed(2)}
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Tax:</span>
          <span className="summary-value">${orderData.tax.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span className="summary-label">Total:</span>
          <span className="summary-value">
            $
            {(calculateTotal() + orderData.deliveryFee + orderData.tax).toFixed(
              2,
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderItems;
