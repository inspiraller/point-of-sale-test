
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { PropHandleQtyChange, PropsSalesRow } from "@/@types";
import { cropDecimal } from "@/util/util";
import CheckoutInputQty from './CheckoutInputQty';

interface Props {
  row: PropsSalesRow;
  handleQtyChange: PropHandleQtyChange;
}

export const CheckoutRow = ({ row, handleQtyChange }: Props) => {
  console.log('update row=', row);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell component="td">${row.price}</TableCell>
      <TableCell component="td">
        <CheckoutInputQty sku={row.sku} handleQtyChange={handleQtyChange} />
      </TableCell>
      <TableCell component="td">${cropDecimal(row.total)}</TableCell>
    </TableRow>
  );
};
