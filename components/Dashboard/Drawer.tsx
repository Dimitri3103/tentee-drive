"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BoxLogo, StyledImgLogo } from "../Home";
import Logo from "@/assets/images/Logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import ActiveLinkUser from "../Utils/ActiveLinkUser";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { StyledLinear } from "./DirectoryDialog";

const drawerWidth = 240;
export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  background: "#FFF",
  boxShadow: "none",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "var(--Color-Palettes-Indigo-50, #E8EAF6)",
  "&:hover": {
    backgroundColor: "var(--Color-Palettes-Indigo-50, #E8EAF6)",
  },
  marginLeft: theme.spacing(2),
  width: "150px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(6),
    width: "350px",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
interface Props {
  children: React.ReactNode;
}

export default function ClippedDrawer({ children }: Props) {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);

  const handleLogout = () => {
    setLoading(true);
    deleteCookie("tokenGoogle");
    router.push("/");
  };

  return (
    <>
      {isLoading && (
        <Stack sx={{ width: "100%" }}>
          <StyledLinear color="secondary" />
        </Stack>
      )}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <StyledAppbar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Link href="/directories">
              <BoxLogo>
                <Image alt="Logo" src={Logo} style={StyledImgLogo} />
              </BoxLogo>
            </Link>

            <Search>
              <SearchIconWrapper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_256_684)">
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="#5932EA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 22L20 20"
                      stroke="#5932EA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_256_684">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Recherche..."
                inputProps={{ "aria-label": "search" }}
                sx={{
                  input: {
                    "&::placeholder": {
                      color: "var(--Color-Palettes-Indigo-400, #5932EA)",
                      fontStyle: "normal",
                      fontSize: { xs: "14px", sm: "18px" },
                      fontFamily: "Product Sans",
                      fontWeight: 400,
                    },
                    fontStyle: "normal",
                    fontSize: { xs: "14px", sm: "18px" },
                    fontFamily: "Product Sans",
                    fontWeight: 400,
                  },
                }}
              />
            </Search>
          </Toolbar>
        </StyledAppbar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: 5,
                pb: 5,
              }}
            >
              <Avatar sx={{ bgcolor: "#5932EA" }}>T</Avatar>
            </Box>
            <Divider />
            <List>
              <ActiveLinkUser parent="/directories">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"
                        />
                      </svg>
                    </ListItemIcon>
                    <ListItemText>Répertoires</ListItemText>
                  </ListItemButton>
                </ListItem>
              </ActiveLinkUser>

              <ActiveLinkUser parent="/files">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                        />
                      </svg>
                    </ListItemIcon>
                    <ListItemText>Fichiers</ListItemText>
                  </ListItemButton>
                </ListItem>
              </ActiveLinkUser>

              {/* <ActiveLinkUser parent="/accounts">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </ListItemIcon>
                  <ListItemText>Comptes</ListItemText>
                </ListItemButton>
              </ListItem>
            </ActiveLinkUser> */}
            </List>
            <Divider />
            <List>
              <ListItem disablePadding onClick={handleLogout}>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.729 25.7884H17.5822C12.5687 25.7884 10.1523 23.8124 9.73451 19.3861C9.68934 18.9231 10.0281 18.5053 10.5023 18.4602C10.954 18.415 11.3831 18.765 11.4283 19.228C11.7557 22.7736 13.4269 24.0947 17.5935 24.0947H17.7403C22.336 24.0947 23.962 22.4687 23.962 17.873V10.5108C23.962 5.91509 22.336 4.28909 17.7403 4.28909H17.5935C13.4043 4.28909 11.7331 5.63279 11.4283 9.24613C11.3718 9.70909 10.9766 10.0591 10.5023 10.014C10.0281 9.98009 9.68934 9.56229 9.72322 9.09934C10.1071 4.60525 12.5348 2.59534 17.5822 2.59534H17.729C23.2732 2.59534 25.6445 4.96659 25.6445 10.5108V17.873C25.6445 23.4172 23.2732 25.7884 17.729 25.7884Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.4565 15.0388H4.60658C4.14362 15.0388 3.7597 14.6549 3.7597 14.1919C3.7597 13.7289 4.14362 13.345 4.60658 13.345H17.4565C17.9194 13.345 18.3033 13.7289 18.3033 14.1919C18.3033 14.6549 17.9194 15.0388 17.4565 15.0388Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.12499 18.8216C6.91045 18.8216 6.69591 18.7426 6.52653 18.5732L2.74382 14.7905C2.41637 14.463 2.41637 13.921 2.74382 13.5936L6.52653 9.81084C6.85399 9.48338 7.39599 9.48338 7.72345 9.81084C8.05091 10.1383 8.05091 10.6803 7.72345 11.0078L4.5392 14.192L7.72345 17.3763C8.05091 17.7037 8.05091 18.2457 7.72345 18.5732C7.56537 18.7426 7.33953 18.8216 7.12499 18.8216Z"
                        fill="currentColor"
                      />
                    </svg>
                  </ListItemIcon>
                  <ListItemText>Déconnexion</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
}
