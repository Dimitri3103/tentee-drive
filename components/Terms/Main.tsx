import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";

export const TitleLoading = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: "#212832",
  textAlign: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    fontSize: "30px",
    marginTop: theme.spacing(10),
  },
}));

export default function TermsMain() {
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
        <TitleLoading>Conditions d&apos;utilisation</TitleLoading>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </Grid>
  );
}
