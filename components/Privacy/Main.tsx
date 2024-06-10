import { Box, Grid } from "@mui/material";
import React from "react";
import { TitleLoading } from "../Terms/Main";

export default function PrivacyMain() {
  return (
    <Grid item xs={12} justifyContent="center" alignItems="center">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleLoading>Politique de confidentialité</TitleLoading>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </Grid>
  );
}
