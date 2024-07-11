import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, FormControl, Typography } from "@mui/material";
import { ButtonBackToDashboard } from "@/component/Buttons/ButtonBackToDashboard";
import { CardSaleItems } from "@/component/Cards/CardSaleItems";
import { CardCost } from "@/component/Cards/CardCost";
import { CheckoutTable } from "@/component/CheckoutTable/CheckoutTable";
import { PropHandleQtyUpdate, PropsProducts, PropsSalesRow } from "@/@types";
import { useProvideLoadData } from "@/contexts/ProviderLoadData";
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

export default function Checkout() {
  const { t } = useTranslation();

  const TEXT_checkout_title = t("Checkout.title");

  const { products, updateSales } = useProvideLoadData();

  const defaultRows = useMemo(() => createResetRow(products), [products]);

  const [rows, setRows] = useState<PropsSalesRow[]>([]); // for rendering table rows - dont' update, to prevent rerendering during input changing.
  const [rowTotals, setRowTotals] = useState<PropsSalesRow[]>([]); // duplicate of rows, but can update total and qty without affecting rendered input

  const { value: currentCashierId } = useCurrentCashier();

  const navigate = useNavigate();

  const [enabledSubmit, setEnabledSubmit] = useState(false);
  useEffect(() => {
    if (defaultRows.length) {
      setRows(defaultRows.slice());
      setRowTotals(defaultRows.slice());
    }
  }, [defaultRows]);

  const handleQtyUpdate = useCallback<PropHandleQtyUpdate>(
    ({ qtyUpdate, sku, total }) => {
      setRowTotals((prev) => {
        const allRows = prev.slice();
        const rowToChange = allRows.find(
          (item) => item.sku === sku
        ) as PropsSalesRow;
        rowToChange.qty = qtyUpdate;
        rowToChange.total = total;
        return allRows;
      });
    },
    []
  );

  useEffect(() => {
    setEnabledSubmit(!!rowTotals.find(item => item.total !== 0));
    
  }, [rowTotals]);

  const cost = cropDecimal(rowTotals.reduce((acc, cur) => acc + cur.total, 0));
  //Note: javascript .toFixed gives incorrect decimal value. Taking it to 3, then slicing the last number is more accurate
  const items = rowTotals.reduce((acc, cur) => acc + cur.qty, 0);

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

      <CheckoutTable rows={rows} handleQtyUpdate={handleQtyUpdate} />

      <Box
        component={"section"}
        sx={{
          display: "flex",
        }}
      >
        <Button
          type="button"
          variant="contained"
          disabled={!enabledSubmit}
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
