import {
  BasicSelect,
  SelectOptions,
  Props,
} from "@/component/Select/BasicSelect";
import { useTranslation } from "react-i18next";
import { useCashier } from "@/hooks/useCashier";
import { hyphenate } from "@/util/util";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { updateCashier, value } = useCashier();

  const TEXT_SelectCashier = t("SelectCashier.title");
  const TEXT_Cashier1 = t("SelectCashier.name.1");
  const TEXT_Cashier2 = t("SelectCashier.name.2");
  const TEXT_Cashier3 = t("SelectCashier.name.3");

  const id = useMemo(() => hyphenate(TEXT_SelectCashier), [TEXT_SelectCashier]);

  const selectOptions: SelectOptions = useMemo(
    () => [
      {
        label: TEXT_Cashier1,
        value: TEXT_Cashier1,
        key: hyphenate(TEXT_Cashier1),
      },
      {
        label: TEXT_Cashier2,
        value: TEXT_Cashier2,
        key: hyphenate(TEXT_Cashier2),
      },
      {
        label: TEXT_Cashier3,
        value: TEXT_Cashier3,
        key: hyphenate(TEXT_Cashier3),
      },
    ],
    [TEXT_Cashier1, TEXT_Cashier2, TEXT_Cashier3]
  );

  const handleSelect: Props["handleSelect"] = (evt) => {
    const value = evt.target.value;
    updateCashier(value);
    navigate('/sales-dashboard');
  };

  return (
    <BasicSelect
      id={id}
      label={TEXT_SelectCashier}
      selectOptions={selectOptions}
      handleSelect={handleSelect}
      value={value}
    />
  );
}
