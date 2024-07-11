import { useState, useCallback } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  PropHandleQtyChange,
  PropHandleQtyUpdate,
  PropsSalesRow,
} from "@/@types";
import { cropDecimal } from "@/util/util";
import CheckoutInputQty from "./CheckoutInputQty";

interface Props {
  row: PropsSalesRow;
  handleQtyUpdate: PropHandleQtyUpdate;
}

export const CheckoutRow = ({ handleQtyUpdate, row }: Props) => {
  const [totalLocal, setTotalLocal] = useState<number>(0);

  const handleQtyChange = useCallback<PropHandleQtyChange>(
    (evt) => {
      const target = evt.target;
      const qtyUpdate = Number(target.value) || 0;
      const total = qtyUpdate * row.price;
      setTotalLocal(total);
      handleQtyUpdate({ qtyUpdate, total, sku: row.sku });
    },
    [row.sku]
  );
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell component="td">${row.price}</TableCell>
      <TableCell component="td">
        <CheckoutInputQty handleQtyChange={handleQtyChange} />
      </TableCell>
      <TableCell component="td">${cropDecimal(totalLocal)}</TableCell>
    </TableRow>
  );
};
