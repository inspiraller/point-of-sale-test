import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const ButtonBackToDashboard = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const TEXT_back = t('Checkout.back')

  const handleClick = () => {
    navigate("/sales-dashboard");
  };
  return (
    <Button
      type="button"
      onClick={handleClick}
      variant="contained"
      color="secondary"
    >
      {TEXT_back}
    </Button>
  );
};
