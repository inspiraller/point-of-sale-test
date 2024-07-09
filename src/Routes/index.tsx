import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home/Home";
import SalesDashboard from "./SalesDashboard/SalesDashboard";
import Checkout from "./Checkout/Checkout";

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales-dashboard" element={<SalesDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};
