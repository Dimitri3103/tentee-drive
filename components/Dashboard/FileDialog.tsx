import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useState } from "react";
import {
  CloseButton,
  CustomTabPanel,
  DriveTab,
  DriveTabs,
  StyledCircular,
  StyledDialog,
  StyledLinear,
  TitleDialog,
  a11yProps,
} from "./DirectoryDialog";
import {
  Box,
  CircularProgress,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import NotificationToast from "../Common/Notification";

export default function FileDialog(props: any) {
  const { handleClose, open, selected } = props;

  const [listPerm, setListPerm] = useState([] as any[]);

  const [isLoading, setLoading] = useState(false);

  const tokenCookie = getCookie("tokenGoogle");

  if (tokenCookie) {
    axios
      .get(
        `https://www.googleapis.com/drive/v3/files/${selected.id}/permissions?fields=permissions(id,emailAddress,role)`,
        {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setListPerm(res.data.permissions);
      })
      .catch((err) => toast.error(err));
  }
  const handleDeletePermission = (id: any) => {
    setLoading(true);
    if (tokenCookie) {
      axios
        .delete(
          `https://www.googleapis.com/drive/v3/files/${selected.id}/permissions/${id}?access_token=${tokenCookie}`
        )
        .then((res) => {
          handleClose();
        })
        .catch((err) => toast.error(err));
    }
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle>
        <TitleDialog>{selected.name}</TitleDialog>
        <CloseButton onClick={handleClose}>
          <CancelOutlinedIcon style={{ color: "#6B4EFF" }} />
        </CloseButton>
      </DialogTitle>
      <NotificationToast />
      {isLoading && (
        <Stack sx={{ width: "100%" }}>
          <StyledLinear color="secondary" />
        </Stack>
      )}
      <DialogContent>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <DriveTabs
                value={value}
                onChange={handleChange}
                aria-label="File tabs"
              >
                <DriveTab
                  label="Permissions"
                  {...a11yProps(0)}
                  sx={{ color: "#000000" }}
                />
              </DriveTabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              {listPerm.length != 0 ? (
                listPerm!.map((perm) => (
                  <Grid
                    item
                    container
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                    key={perm.id}
                  >
                    <Grid item xs={12} sm={10}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{ textAlign: "center", fontSize: "14px" }}
                        >
                          {perm.emailAddress}
                        </Typography>
                        <Typography
                          sx={{ textAlign: "center", fontSize: "12px" }}
                        >
                          {perm.role}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Tooltip title="Supprimer permission">
                          <IconButton
                            onClick={(event) => handleDeletePermission(perm.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Grid>
                  </Grid>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledCircular color="secondary" />
                </Box>
              )}
            </CustomTabPanel>
          </Box>
        </Grid>
      </DialogContent>
    </StyledDialog>
  );
}
