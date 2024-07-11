import { memo } from "react";
import { TextField } from "@mui/material";
import { PropHandleQtyChange } from "@/@types";

interface Props {
  handleQtyChange: PropHandleQtyChange;
}

export const CheckoutInputQty = ({  handleQtyChange }: Props) => {
  return (
    <TextField
      variant="outlined"
      sx={{ width: 80 }}
      type="number"
      onChange={handleQtyChange}
    />
  );
};

export default memo(CheckoutInputQty);
