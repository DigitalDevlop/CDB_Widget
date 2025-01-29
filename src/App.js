import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import image from "./assets/image.png";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ width: "300px", height: "250px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px" }}>
        <img
          src={image}
          alt="Click to Continue"
          style={{ cursor: "pointer", width: "300px", height: "250px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.3s" }}
          onClick={() => navigate("/phone-number")}
        />
      </div>
    </div>
  );
};

const PhoneNumber = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = React.useState("");

  const handleSubmit = () => {
    if (phone) {
      window.location.href = "https://www.cdb.lk/";
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ width: "300px", height: "250px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px" }}>
        <h2 style={{ fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Enter Your Phone Number</h2>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ border: "1px solid #ccc", padding: "4px", marginBottom: "8px", borderRadius: "5px", width: "90%", textAlign: "center" }}
        />
        <button onClick={handleSubmit} style={{ backgroundColor: "#3b82f6", color: "white", padding: "4px", borderRadius: "5px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", cursor: "pointer", transition: "background-color 0.3s" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone-number" element={<PhoneNumber />} />
      </Routes>
    </Router>
  );
};

export default App;
