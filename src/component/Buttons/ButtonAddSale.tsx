import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const ButtonAddSale = () => {
  const {t} = useTranslation();
  const TEXT_add_sale = t('SalesDashboard.addSale')

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <Button
      type="button"
      onClick={handleClick}
      variant="contained"
      style={{marginLeft: 'auto'}}

    >
      {TEXT_add_sale}
    </Button>
  );
};
