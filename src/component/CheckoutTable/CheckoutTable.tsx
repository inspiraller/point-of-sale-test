import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { PropHandleQtyUpdate, PropsSalesRow } from "@/@types";
import { CheckoutRow } from "./CheckoutRow";

interface Props {
  rows: PropsSalesRow[];
  handleQtyUpdate: PropHandleQtyUpdate;
}

export const CheckoutTable = ({ rows, handleQtyUpdate }: Props) => {
  const { t } = useTranslation();
  const TEXT_th_item = t("Checkout.table.headings.item");
  const TEXT_th_price = t("Checkout.table.headings.price");
  const TEXT_th_quantity = t("Checkout.table.headings.quantity");
  const TEXT_th_total = t("Checkout.table.headings.total");

  // Note: key is set to qty. Hack - will reset when all qty becomes 0
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{TEXT_th_item}</TableCell>
            <TableCell>{TEXT_th_price}</TableCell>
            <TableCell>{TEXT_th_quantity}</TableCell>
            <TableCell>{TEXT_th_total}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <CheckoutRow
              key={`row-${row.sku}-${row.qty}`}
              row={row}
              handleQtyUpdate={handleQtyUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
