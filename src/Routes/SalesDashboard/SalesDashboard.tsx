import { useTranslation } from "react-i18next";

import { Box, ButtonGroup, Typography } from "@mui/material";

import { ButtonSwitchCashier } from "@/component/Buttons/ButtonSwitchCashier";
import { ButtonAddSale } from "@/component/Buttons/ButtonAddSale";
import { BarchartCashiers } from "@/component/BarCharts/BarchartCashiers";
import { useCurrentCashier } from "@/hooks/useCurrentCashier";
import { useProvideLoadData } from "@/contexts/ProviderLoadData";

export const styles = {
  maxWidth: 500,
};

export default function SelectDashboard() {
  const { t } = useTranslation();

  const TEXT_SalesDashboard = t("SalesDashboard.title");
  const { value: currentCashier } = useCurrentCashier();

  const { cashiers} = useProvideLoadData();
  
  const sales = JSON.parse(localStorage.getItem("sales") as '');
  const cashierName = cashiers.find(item => String(item.id) === currentCashier)?.name;

  return (
    <section>
      <Box
        component={"header"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          flex={1}
          textAlign={"center"}
        >
          {TEXT_SalesDashboard}
        </Typography>

        <Typography variant="body1" gutterBottom margin={"0 0 0 auto"}>
          {cashierName}
        </Typography>
      </Box>

      <Box
        component={"article"}
        sx={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <BarchartCashiers sales={sales} />
      </Box>

      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: styles.maxWidth,
        }}
      >
        <ButtonSwitchCashier />
        <ButtonAddSale />
      </ButtonGroup>
    </section>
  );
}
