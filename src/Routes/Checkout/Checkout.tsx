import { useTranslation } from "react-i18next";

import { Box, Button, FormControl, Typography } from "@mui/material";
import { ButtonBackToDashboard } from "@/component/Buttons/ButtonBackToDashboard";
import { CardSaleItems } from "@/component/Cards/CardSaleItems";
import { CardCost } from "@/component/Cards/CardCost";
import { CheckoutTable } from "@/component/CheckoutTable/CheckoutTable";
import { PropsProducts, PropsSalesRow } from "@/@types";
import { useProvideLoadData } from "@/contexts/ProviderLoadData";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { cropDecimal } from "@/util/util";
import { useCurrentCashier } from "@/hooks/useCurrentCashier";
import { useNavigate } from "react-router-dom";

export const styles = {
  maxWidth: 500,
};

const createResetRow = (products: PropsProducts) =>
  products.reduce((acc, cur) => {
    const obj: PropsSalesRow = {
      sku: cur.sku,
      name: cur.name,
      price: cur.price,
      qty: 0,
      total: 0,
    };
    acc.push(obj);
    return acc;
  }, [] as PropsSalesRow[]);

interface PropsUpdateRowTotal {
  prev: PropsSalesRow[];
  sku: number;
  qtyUpdate: number;
}

const updateRowTotal = ({ prev, sku, qtyUpdate }: PropsUpdateRowTotal) => {
  const indUpdate = prev.findIndex((item) => item.sku === sku);
  const rowsToChange = prev.slice();
  const itemToChange = { ...rowsToChange.at(indUpdate) } as PropsSalesRow;
  itemToChange.total = qtyUpdate * itemToChange?.price;
  itemToChange.qty = qtyUpdate;
  rowsToChange[indUpdate] = itemToChange;
  return rowsToChange;
};

export default function Checkout() {
  const { t } = useTranslation();

  const TEXT_checkout_title = t("Checkout.title");

  const { products, updateSales } = useProvideLoadData();

  const defaultRows = useMemo(() => createResetRow(products), [products]);

  const [rows, setRows] = useState<PropsSalesRow[]>([]);

  const { value: currentCashierId } = useCurrentCashier();

  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (defaultRows.length) {
      setRows(defaultRows.slice());
    }
  }, [defaultRows]);

  const handleQtyChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (evt) => {
    
    const target = evt.target;
    const sku = Number(target.getAttribute("datasku"));
    const qtyUpdate = Number(target.value) || 0;

    if (qtyUpdate) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setRows((prev) => {
      return updateRowTotal({ prev, sku, qtyUpdate });
    });
  };

  const cost = cropDecimal(rows.reduce((acc, cur) => acc + cur.total, 0));
  //Note: javascript .toFixed gives incorrect decimal value. Taking it to 3, then slicing the last number is more accurate
  const items = rows.reduce((acc, cur) => acc + cur.qty, 0);

  const handleSubmit = () => {
    updateSales({ id: Number(currentCashierId), amount: Number(cost) });
    setRows(() => {
      return defaultRows;
    });
    navigate("/sales-dashboard");
  };
  return (
    <FormControl>
      <Box
        component={"header"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"section"}
          sx={{
            marginRight: "auto",
          }}
        >
          <ButtonBackToDashboard />
        </Box>

        <Typography
          variant="h4"
          gutterBottom
          align="center"
          flex={1}
          textAlign={"center"}
        >
          {TEXT_checkout_title}
        </Typography>

        <Box
          component={"section"}
          sx={{
            marginLeft: "auto",
          }}
        >
          <CardSaleItems items={items} />
          <CardCost cost={cost} />
        </Box>
      </Box>

      <CheckoutTable rows={rows} handleQtyChange={handleQtyChange} />

      <Box
        component={"section"}
        sx={{
          display: "flex",
        }}
      >
        <Button
          type="button"
          variant="contained"
          disabled={disabled}
          sx={{
            marginTop: "20px",
            marginLeft: "auto",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </FormControl>
  );
}
