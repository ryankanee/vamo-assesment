import { useState, useEffect } from "react";
import "./tracking.css";

function OrderTracker({ orderData }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < orderData.trackingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [orderData.trackingSteps.length]);

  const getStepStatus = (stepIndex) => {
    if (stepIndex < currentStep) return "completed";
    if (stepIndex === currentStep) return "current";
    return "pending";
  };

  return (
    <div className="order-tracker">
      <div className="tracking-steps">
        {orderData.trackingSteps.map((step, index) => {
          const status = getStepStatus(index);
          const isLast = index === orderData.trackingSteps.length - 1;

          return (
            <div
              key={index}
              className={`tracking-step ${isLast ? "last-step" : ""}`}
            >
              <div className={`step-indicator ${status}`}>
                {status === "completed" && (
                  <div className="step-checkmark">✓</div>
                )}
                {status === "current" && <div className="step-dot"></div>}
              </div>

              {!isLast && <div className={`step-connector ${status}`}></div>}

              <div className="step-content">
                <h4 className={`step-title ${status}`}>{step.title}</h4>
                <p className={`step-description ${status}`}>
                  {step.description}
                </p>
                {step.timestamp && (
                  <p className="step-timestamp">{step.timestamp}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderTracker;
