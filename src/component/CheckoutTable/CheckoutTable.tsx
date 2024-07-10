import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { PropsSalesRow } from "@/@types";
import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";
import { cropDecimal } from "@/util/util";

interface Props {
  rows: PropsSalesRow[];
  handleQtyChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

export const CheckoutTable = ({ rows, handleQtyChange }: Props) => {
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
            <TableRow key={`row-${row.sku}-${row.qty}`}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="td">${row.price}</TableCell>
              <TableCell component="td">
                <TextField
                  variant="outlined"
                  value={row.qty || ""}
                  sx={{ width: 80 }}
                  type="number"
                  inputProps={{ datasku: row.sku }}
                  onChange={handleQtyChange}
                />
              </TableCell>
              <TableCell component="td">${cropDecimal(row.total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
