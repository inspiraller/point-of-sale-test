import { memo } from "react";
import { TextField } from "@mui/material";
import { PropHandleQtyChange } from "@/@types";

interface Props {
  sku: number;
  handleQtyChange: PropHandleQtyChange;
}

export const CheckoutInputQty = ({ sku, handleQtyChange }: Props) => {
  return (
    <TextField
      variant="outlined"
      sx={{ width: 80 }}
      type="number"
      inputProps={{ datasku: sku }}
      onChange={handleQtyChange}
    />
  );
};

export default memo(CheckoutInputQty);
