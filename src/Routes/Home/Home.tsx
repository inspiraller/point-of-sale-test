import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        Home
      </Typography>

      <Typography variant="body1" gutterBottom>
        text example here...
      </Typography>
     
    </Box>
  );
}
