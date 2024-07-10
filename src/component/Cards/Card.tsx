
import Card from "@mui/material/Card";
import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
}
export const CardSmall = ({ children, style }: Props) => {
  return <Card sx={{ padding: "4px 10px", ...style }}>{children}</Card>;
};
