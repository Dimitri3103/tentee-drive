"use client";

import React, { useEffect, useState } from "react";
import { DirBox, Title } from "./Directories";
import { getCookie } from "cookies-next";
import axios from "axios";
import { CircularProgress, Grid, Typography } from "@mui/material";
import FileDialog from "./FileDialog";
import { StyledCircular } from "./DirectoryDialog";
import { toast } from "react-toastify";
import NotificationToast from "../Common/Notification";

export default function FilesContainer() {
  const [listFiles, setListFiles] = useState([] as any[]);
  const reload = () => window.location.reload();

  const [selected, setSelected] = useState({
    id: "",
    kind: "",
    mimeType: "",
    name: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpenFile = (dir: any) => {
    setSelected(dir);
    setOpen(true);
  };

  const handleCloseFile = () => {
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
          setListFiles(res.data.files);
        })
        .catch((err) => toast.error(err));
    }
  }, []);

  return (
    <>
      <NotificationToast />
      <Title>Liste des fichiers du Drive</Title>
      <br />
      <br />
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {listFiles.length != 0 ? (
          listFiles!
            .filter((dir: any) => {
              return dir.mimeType != "application/vnd.google-apps.folder";
            })
            .map((file) => (
              <Grid item xs={12} md={3} key={file.id}>
                <DirBox
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={(event) => handleClickOpenFile(file)}
                >
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54.1667 37.5V14.5833L77.0834 37.5M25.0001 8.33334C20.3751 8.33334 16.6667 12.0417 16.6667 16.6667V83.3333C16.6667 85.5435 17.5447 87.6631 19.1075 89.2259C20.6703 90.7887 22.7899 91.6667 25.0001 91.6667H75.0001C77.2102 91.6667 79.3298 90.7887 80.8926 89.2259C82.4554 87.6631 83.3334 85.5435 83.3334 83.3333V33.3333L58.3334 8.33334H25.0001Z"
                      fill="#5932EA"
                    />
                  </svg>
                  <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                    {file!.name}
                  </Typography>
                </DirBox>
              </Grid>
            ))
        ) : (
          <StyledCircular color="secondary" />
        )}
      </Grid>
      <FileDialog
        open={open}
        handleClose={handleCloseFile}
        selected={selected}
      />
    </>
  );
}
