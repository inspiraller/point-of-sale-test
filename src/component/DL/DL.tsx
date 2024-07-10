import Typography from "@mui/material/Typography";

interface Props {
  children: React.ReactNode;
}
export const DL = ({ children }: Props) => {
  return (
    <Typography component={"dl"} margin={0} padding={0}>
      {children}
    </Typography>
  );
};
