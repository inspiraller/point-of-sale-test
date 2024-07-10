import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import SalesDashboard from "./SalesDashboard/SalesDashboard";
import Checkout from "./Checkout/Checkout";
import SelectCashier from "./SelectCashier/SelectCashier";

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectCashier />} />
        <Route path="/sales-dashboard" element={<SalesDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};
