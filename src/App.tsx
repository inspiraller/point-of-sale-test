import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AllRoutes } from "./Routes";
import "./i18n";
import { Box } from "@mui/material";

import { ProviderLoadData } from "./contexts/ProviderLoadData";

export const App = () => {

  return (
    <ProviderLoadData>
      <ThemeProvider theme={theme}>
        <Box
          component={"section"}
          sx={{
            padding: "20px",
          }}
        >
          <AllRoutes />
        </Box>
      </ThemeProvider>
    </ProviderLoadData>
  );
};
