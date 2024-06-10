"use client";

import ClippedDrawer from "@/components/Dashboard/Drawer";
import FilesContainer from "@/components/Dashboard/Files";
import React from "react";

export default function Files() {
  return (
    <ClippedDrawer>
      <FilesContainer />
    </ClippedDrawer>
  );
}
