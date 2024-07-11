import { PropsSalesRow } from "./json";

export type PropHandleQtyUpdate = ({
  qtyUpdate,
  total,
  sku
}: {
  qtyUpdate: number;
  total: number;
  sku: number;
}) => void;

export interface PropsUpdateRowTotal {
  prev: PropsSalesRow[];
  sku: number;
  qtyUpdate: number;
}
