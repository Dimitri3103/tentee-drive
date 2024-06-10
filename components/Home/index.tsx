"use client";

import { Box, Button, styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { setCookie } from "cookies-next";
import axios from "axios";

export const AuthWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr",
  backgroundColor: "#F8FAFB",
}));
export const AuthContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
export const BoxLogo = styled(Box)(({ theme }) => ({
  width: "200px",
  display: "flex",
}));
export const StyledImgLogo = {
  width: "200px",
  height: "auto",
};
export const GoogleButtonAuth = styled(Button)(({ theme }) => ({
  textTransform: "none",
  width: "450px",
  height: "50px",
  fontSize: "14px",
  background: "#FFF",
  borderRadius: "25px",
  fontWeight: 700,
  color: "#000",
  border: "1px solid #E5E7EB",
  fontFamily: "Product Sans",
  "&:hover": { background: "#FFF", color: "#000" },
  [theme.breakpoints.up("sm")]: {
    width: "600px",
    fontSize: "18px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

export default function HomeContainer() {
  const router = useRouter();

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      if (codeResponse) {
        setCookie("tokenGoogle", codeResponse.access_token, {
          maxAge: 60 * 60,
        });
        router.push("/directories");

        // axios
        // .get(
        //   `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${codeResponse.access_token}`,
        //       Accept: "application/json",
        //     },
        //   }
        // )
        // .then((res) => {
        //   console.log(res);
        // })
        // .catch((err) => console.log(err));

        // Liste des répertoires
        // axios
        //   .get(
        //     `https://www.googleapis.com/drive/v3/files?access_token=${codeResponse.access_token}`
        //   )
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => console.log(err));

        //Liste des fichiers avec permissions
        // axios
        //   .get(
        //     `https://www.googleapis.com/drive/v3/files/1vgB6ZzdaWpLCyJM3KN4FZWWkOnQOwZAK/permissions?fields=permissions(id,emailAddress,role)`,
        //     {
        //       headers: {
        //         Authorization: `Bearer ${codeResponse.access_token}`,
        //         Accept: "application/json",
        //       },
        //     }
        //   )
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => console.log(err));
      }
    },
    onError: (error) => console.log("La connexion a échoué:", error),
  });

  return (
    <AuthWrapper>
      <AuthContent>
        <Link href="/">
          <BoxLogo>
            <Image alt="Logo" src={Logo} style={StyledImgLogo} />
          </BoxLogo>
        </Link>
        <br />
        <br />
        <GoogleButtonAuth onClick={() => loginGoogle()}>
          <FcGoogle />
          &nbsp; &nbsp; &nbsp; Se connecter avec Google
        </GoogleButtonAuth>
      </AuthContent>
    </AuthWrapper>
  );
}
