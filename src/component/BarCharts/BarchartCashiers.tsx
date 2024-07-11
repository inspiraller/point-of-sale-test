import { PropsSales } from "@/@types";
import { useProvideLoadData } from "@/contexts/ProviderLoadData";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTranslation } from "react-i18next";
import { Loading } from "../Loading/Loading";

const tallySales = (sales: PropsSales) => {
  return sales?.reduce((acc, cur) => {
    const ind = cur.currentCashierId - 1;
    if (!acc[ind]) {
      acc[ind] = 0;
    }
    acc[ind] += cur.saleAmount;
    return acc;
  }, [] as number[]);
};

interface Props {
  sales: PropsSales;
}
export const BarchartCashiers = ({sales}: Props) => {
  const { t } = useTranslation();
  const { cashiers } = useProvideLoadData();
  const xLabels = cashiers.map((item) => item.name);
  const TEXT_total_sales = t("SalesDashboard.totalSales");

  const pData = tallySales(sales); // [1,2,4];

  console.log('pData=', {pData, sales});
  return pData ? (
    <BarChart
      width={500}
      height={300}
      series={[{ data: pData, label: TEXT_total_sales, id: "pvId" }]}
      xAxis={[
        {
          data: xLabels,
          scaleType: "band",

          // TODO - investigate and make label same colour bfore applying
          // colorMap: {
          //   type: 'piecewise',
          //   thresholds: [0],
          //   colors: ['blue'],
          // }
        },
      ]}
    />
  ) : <Loading />;
};
