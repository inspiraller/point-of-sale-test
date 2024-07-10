import React, {
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { PropsCashiers, PropsProducts, PropsSales } from "@/@types";
import { useLoadDefaultData } from "@/hooks/useLoadData/useLoadDefaultData";

interface PropUpdateSales {
  id: number;
  amount: number;
}

export interface PropsContext {
  cashiers: PropsCashiers;
  setCashiers: Dispatch<SetStateAction<PropsCashiers>>;

  sales: PropsSales;
  updateSales: (prop: PropUpdateSales) => void;

  products: PropsProducts;
  setProducts: Dispatch<SetStateAction<PropsProducts>>;
}
const placeholder = {
  cashiers: [],
  setCashiers: () => {},

  sales: [],
  updateSales: () => {},

  products: [],
  setProducts: () => {},
};

export const ContextLoadData = React.createContext<PropsContext>(placeholder);

interface Props {
  children: React.ReactNode;
}

export const ProviderLoadData = ({ children }: Props) => {
  const [cashiers, setCashiers] = useState<PropsCashiers | never[]>([]);
  const [sales, setSales] = useState<PropsSales | never[]>([]);
  const [products, setProducts] = useState<PropsProducts | never[]>([]);

  const { defaultCashiers, defaultSales, defaultProducts } =
    useLoadDefaultData();

  // on Refresh of page - if !sales preload loaded data ELSE restore sales from localStorage
  useEffect(() => {
    setCashiers(defaultCashiers);
    setProducts(defaultProducts);

    let updateSales = defaultSales;
    if (!localStorage.getItem("sales")) {
      localStorage.setItem("sales", JSON.stringify(defaultSales));
    } else {
      const strSales = localStorage.getItem("sales") || "";
      updateSales = JSON.parse(strSales) as PropsSales;
    }
    setSales(updateSales);
  }, []);

  const updateSales = ({ id, amount }: PropUpdateSales) => {
    setSales((prev) => {
      const updated = prev.slice();
      updated.push({
        currentCashierId: id,
        saleAmount: amount,
      });
      localStorage.setItem("sales", JSON.stringify(updated));
      return updated;
    });
  };

  const value = useMemo<PropsContext>(
    () => ({
      cashiers,
      setCashiers,
      sales,
      updateSales,
      products,
      setProducts,
    }),
    [cashiers]
  );

  // update window object
  (window as any).pointOfSale = {
    sales
  };

  return (
    <ContextLoadData.Provider value={value}>
      {children}
    </ContextLoadData.Provider>
  );
};

export const useProvideLoadData = () => React.useContext(ContextLoadData);
