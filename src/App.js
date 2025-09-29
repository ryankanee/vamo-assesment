import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Delivery from "./components/delivery/delivery";
import Tracking from "./components/tracking/tracking";

function App() {
  const [enterNumber, setEnterNumber] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("ORD-2024-001");

  return (
    <>
      <Navbar />
      {enterNumber ? (
        <Tracking selectedOrderId={selectedOrderId} />
      ) : (
        <Delivery
          enterNumber={enterNumber}
          setEnterNumber={setEnterNumber}
          setSelectedOrderId={setSelectedOrderId}
        />
      )}
    </>
  );
}

export default App;
