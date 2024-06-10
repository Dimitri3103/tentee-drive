import TermsContainer from "@/components/Terms";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
};

export default function TermsOfService() {
  return <TermsContainer />;
}
