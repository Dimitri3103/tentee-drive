"use client";

import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import DirectoryDialog, { StyledCircular } from "./DirectoryDialog";
import { toast } from "react-toastify";
import NotificationToast from "../Common/Notification";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Product Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "24px",
  color: "#000000",
}));
export const DirBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    background: "#F8F8F8",
    cursor: "pointer",
  },
}));

export default function DirectoriesContainer() {
  const [listDir, setListDir] = useState([] as any[]);
  const reload = () => window.location.reload();

  const [selected, setSelected] = useState({
    id: "",
    kind: "",
    mimeType: "",
    name: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpenDir = (dir: any) => {
    setSelected(dir);
    setOpen(true);
  };

  const handleCloseDir = () => {
    setOpen(false);
    reload();
  };

  useEffect(() => {
    const tokenCookie = getCookie("tokenGoogle");
    if (tokenCookie) {
      axios
        .get(
          `https://www.googleapis.com/drive/v3/files?access_token=${tokenCookie}`
        )
        .then((res) => {
          setListDir(res.data.files);
        })
        .catch((err) => toast.error(err));
    }
  }, []);

  return (
    <>
      <NotificationToast />
      <Title>Liste des répertoires du Drive</Title>
      <br />
      <br />
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {listDir.length != 0 ? (
          listDir!
            .filter((dir: any) => {
              return dir.mimeType == "application/vnd.google-apps.folder";
            })
            .map((dir) => (
              <Grid item xs={12} md={3} key={dir.id}>
                <DirBox
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={(event) => handleClickOpenDir(dir)}
                >
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M83.3334 75H16.6667V33.3333H83.3334M83.3334 25H50L41.6667 16.6667H16.6667C12.0417 16.6667 8.33337 20.375 8.33337 25V75C8.33337 77.2101 9.21135 79.3297 10.7742 80.8925C12.337 82.4553 14.4566 83.3333 16.6667 83.3333H83.3334C85.5435 83.3333 87.6631 82.4553 89.2259 80.8925C90.7887 79.3297 91.6667 77.2101 91.6667 75V33.3333C91.6667 28.7083 87.9167 25 83.3334 25Z"
                      fill="#5932EA"
                    />
                  </svg>
                  <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                    {dir!.name}
                  </Typography>
                </DirBox>
              </Grid>
            ))
        ) : (
          <StyledCircular color="secondary" />
        )}
      </Grid>
      <DirectoryDialog
        open={open}
        handleClose={handleCloseDir}
        selected={selected}
      />
    </>
  );
}
