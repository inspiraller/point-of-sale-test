

import defaultCashiers from "./static_mock_data/cashier_sample.json";
import defaultProducts from "./static_mock_data/products_sample.json";
import defaultSales from "./static_mock_data/sales_sample.json";

export const useLoadDefaultData = () => {
  return {defaultCashiers, defaultSales, defaultProducts}
};
