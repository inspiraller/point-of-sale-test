import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const ButtonSwitchCashier = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const TEXT_switchCashier = t('SalesDashboard.switchCashier')

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Button
      type="button"
      onClick={handleClick}
      variant="contained"
      color={'secondary'}

    >
      {TEXT_switchCashier}
    </Button>
  );
};
