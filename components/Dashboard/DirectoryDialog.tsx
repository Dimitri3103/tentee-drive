import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCookie } from "cookies-next";
import axios from "axios";
import PermissionDialog from "./PermissionDialog";
import { toast } from "react-toastify";
import NotificationToast from "../Common/Notification";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "80%",
    borderRadius: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    "& .MuiDialog-paper": {
      width: "50%",
      borderRadius: "10px",
    },
  },
}));
export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: "0%",
  top: "2.5%",
  [theme.breakpoints.up("md")]: {
    right: "2%",
  },
}));
export const TitleDialog = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#000",
  lineHeight: "32px",
  textAlign: "center",
}));
export const DriveTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "Product Sans",
  fontSize: "14px",
  fontWeight: 500,
  color: "#878787",
  borderRadius: "10px 0px 0px 10px",
  width: "50%",
  "&.Mui-selected": {
    color: "#5932EA",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  marginTop: theme.spacing(4),
}));
export const DriveTabs = styled(Tabs)({
  borderBottom: "1px solid #0000001A",
  "& .MuiTabs-indicator": {
    backgroundColor: "#5932EA",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 5, pb: 5 }}>{children}</Box>}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const StyledLinear = styled(LinearProgress)(({ theme }) => ({
  "& .MuiLinearProgress-barColorSecondary": {
    backgroundColor: "#5932EA",
  },
  "&.MuiLinearProgress-colorSecondary": {
    backgroundColor: "#E3E5E5",
  },
}));
export const StyledCircular = styled(CircularProgress)(({ theme }) => ({
  "& .MuiCircularProgress-colorSecondary": {
    backgroundColor: "#5932EA",
  },
}));

export default function DirectoryDialog(props: any) {
  const { handleClose, open, selected } = props;

  const [listPerm, setListPerm] = useState([] as any[]);
  const [listFiles, setListFiles] = useState([] as any[]);

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
  if (tokenCookie) {
    axios
      .get(
        `https://www.googleapis.com/drive/v3/files/?q='${selected.id}'+in+parents`,
        {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setListFiles(res.data.files);
      })
      .catch((err) => toast.error(err));
  }
  const handleCopyFile = (id: any) => {
    setLoading(true);
    if (tokenCookie) {
      axios
        .post(
          `https://www.googleapis.com/drive/v3/files/${id}/copy?access_token=${tokenCookie}`
        )
        .then((res) => {
          handleClose();
        })
        .catch((err) => toast.error(err));
    }
  };
  const handleDeleteFile = (id: any) => {
    setLoading(true);
    if (tokenCookie) {
      axios
        .delete(
          `https://www.googleapis.com/drive/v3/files/${id}?access_token=${tokenCookie}`
        )
        .then((res) => {
          handleClose();
        })
        .catch((err) => toast.error(err));
    }
  };
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

  const [selectedPerm, setSelectedPerm] = useState({
    id: "",
    kind: "",
    mimeType: "",
    name: "",
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [openPerm, setOpenPerm] = React.useState(false);

  const handleClickOpenPerm = (perm: any) => {
    setSelectedPerm(perm);
    setOpenPerm(true);
  };

  const handleClosePerm = () => {
    setOpenPerm(false);
  };

  return (
    <>
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
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <DriveTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="directory tabs"
                >
                  <DriveTab
                    label="Fichiers"
                    {...a11yProps(0)}
                    sx={{ color: "#000000" }}
                  />
                  <DriveTab
                    label="Permissions"
                    {...a11yProps(1)}
                    sx={{ color: "#000000" }}
                  />
                </DriveTabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {listFiles.length != 0 ? (
                  listFiles!.map((file) => (
                    <Grid
                      item
                      container
                      xs={12}
                      key={file.id}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={12} sm={9}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M54.1667 37.5V14.5833L77.0834 37.5M25.0001 8.33334C20.3751 8.33334 16.6667 12.0417 16.6667 16.6667V83.3333C16.6667 85.5435 17.5447 87.6631 19.1075 89.2259C20.6703 90.7887 22.7899 91.6667 25.0001 91.6667H75.0001C77.2102 91.6667 79.3298 90.7887 80.8926 89.2259C82.4554 87.6631 83.3334 85.5435 83.3334 83.3333V33.3333L58.3334 8.33334H25.0001Z"
                              fill="#5932EA"
                            />
                          </svg>
                          <Typography
                            sx={{ fontSize: "12px", textAlign: "center" }}
                          >
                            {file.name}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Tooltip title="Voir les permissions">
                            <IconButton
                              onClick={(event) => handleClickOpenPerm(file)}
                            >
                              <RemoveRedEyeIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Copier le fichier">
                            <IconButton
                              onClick={(event) => handleCopyFile(file.id)}
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Supprimer le fichier">
                            <IconButton
                              onClick={(event) => handleDeleteFile(file.id)}
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
              <CustomTabPanel value={value} index={1}>
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
                              onClick={(event) =>
                                handleDeletePermission(perm.id)
                              }
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
        <PermissionDialog
          open={openPerm}
          handleClose={handleClosePerm}
          selected={selectedPerm}
        />
      </StyledDialog>
    </>
  );
}
