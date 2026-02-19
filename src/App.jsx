import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/health`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Service unavailable");
      }
      return res.json();
    })
    .then(data => setStatus(data.message))
    .catch(() => setStatus("Service unavailable"));
}, []);


  const isDown = status.toLowerCase().includes("unavailable");

  return (
    <div className="cyber-container">
      <h1 className="cyber-title">SYSTEM STATUS</h1>

      <p className={`cyber-status ${isDown ? "danger" : "healthy"}`}>
        {status}
      </p>

      {isDown && (
        <div className="gear-wrapper">
          <i id="gear1" className="fa fa-5x fa-gear spin"></i>
          <i id="gear2" className="fa fa-5x fa-gear spin-back"></i>
          <i id="gear3" className="fa fa-5x fa-gear spin"></i>
        </div>
      )}
    </div>
  );
}

export default App;