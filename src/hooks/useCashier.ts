import { useEffect, useState } from "react";

export const useCashier = () => {
  const [cashier, setCashier] = useState<string>('');

  useEffect(() => {
    setCashier(localStorage.getItem("cashier") || '');
  }, []);
  return {
    updateCashier: (prop: string) => {
      localStorage.setItem("cashier", prop);
      setCashier(cashier);
    },
    value: cashier
  };
};
