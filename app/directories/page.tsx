"use client";

import DirectoriesContainer from "@/components/Dashboard/Directories";
import ClippedDrawer from "@/components/Dashboard/Drawer";
import React from "react";

export default function Directories() {
  return (
    <ClippedDrawer>
      <DirectoriesContainer />
    </ClippedDrawer>
  );
}
