"use client";

import { usePathname, useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ActiveLinkUser({ parent, children }: any) {
  const currentRoute = usePathname();
  const router = useRouter();

  const [isCurrentPath, setIsCurrentPath] = useState(false);

  const setActive = () => {
    if (currentRoute.includes(parent)) {
      setIsCurrentPath(true);
    } else {
      setIsCurrentPath(currentRoute === parent);
    }
  };

  useEffect(() => {
    setActive();
  });

  const ActiveBox = styled(Box)(({ theme }) => ({
    background: isCurrentPath ? "#F8F8F8" : "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: isCurrentPath ? "#5932EA" : "#000000"
  }));

  return <ActiveBox onClick={() => router.push(parent)}>{children}</ActiveBox>;
}
