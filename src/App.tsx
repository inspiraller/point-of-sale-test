import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AllRoutes } from "./Routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AllRoutes />
    </ThemeProvider>
  );
};
