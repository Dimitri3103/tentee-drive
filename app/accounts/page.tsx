"use client";

import AccountsContainer from "@/components/Dashboard/Accounts";
import ClippedDrawer from "@/components/Dashboard/Drawer";
import React from "react";

export default function Accounts() {
  return (
    <ClippedDrawer>
      <AccountsContainer />
    </ClippedDrawer>
  );
}
