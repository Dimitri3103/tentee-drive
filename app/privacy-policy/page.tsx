import PrivacyContainer from "@/components/Privacy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContainer />;
}
