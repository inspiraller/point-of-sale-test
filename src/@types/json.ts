export type PropsCashiers = Array<{
  id: number;
  name: string;
}>;

export interface PropsProduct {
  sku: number;
  name: string;
  descr: string;
  price: number;
}
export interface PropsSalesRow extends Omit<PropsProduct, 'descr'> {
  qty: number;
  total: number;
}

export type PropsProducts = PropsProduct[];

export interface PropSale {
  currentCashierId: number;
  saleAmount: number;
}
export type PropsSales = PropSale[]
