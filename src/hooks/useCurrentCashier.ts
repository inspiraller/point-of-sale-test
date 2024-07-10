import { useEffect, useState } from "react";

export const useCurrentCashier = () => {
  const [currentCashier, setCurrentCashier] = useState<string>('');

  useEffect(() => {
    setCurrentCashier(localStorage.getItem("currentCashier") || '');
  }, []);
  return {
    updateCurrentCashier: (prop: string) => {
      localStorage.setItem("currentCashier", prop);
      setCurrentCashier(prop);
    },
    value: currentCashier
  };
};
