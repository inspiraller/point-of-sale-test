import {useMemo} from 'react';
import { BasicSelect, Props, SelectOptions } from "@/component/Select/BasicSelect";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import { useCurrentCashier } from "@/hooks/useCurrentCashier";
import { useProvideLoadData } from "@/contexts/ProviderLoadData";
import { hyphenate } from '@/util/util';

export default function SelectCashier() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cashiers } = useProvideLoadData();
  const selectOptions = useMemo<SelectOptions>(
    () =>
      cashiers.map((item) => ({
        label: item.name,
        value: String(item.id),
        key: `select-${item.id}`,
      })),
    [cashiers]
  );
  const { updateCurrentCashier, value } = useCurrentCashier();

  const TEXT_SelectCashier = t("SelectCashier.title");

  const id = useMemo(() => hyphenate(TEXT_SelectCashier), [TEXT_SelectCashier]);

  const handleSelect: Props["handleSelect"] = (evt) => {
    const value = evt.target.value;
    updateCurrentCashier(value);
    navigate("/sales-dashboard");
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
