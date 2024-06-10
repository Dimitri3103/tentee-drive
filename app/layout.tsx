import type { Metadata } from "next";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata: Metadata = {
  title: {
    default: "Tentee Drive",
    template: "%s - Gestion de Google Drive",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/product-sans"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/short-icon.png" />
      </head>
      <body>
        <GoogleOAuthProvider clientId="591928232019-nn37enh2d2q8uo6ggh4015kehs2uqk1s.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
