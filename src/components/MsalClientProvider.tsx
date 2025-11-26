"use client";
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import React from 'react';

const msalConfig = {
  auth: {
    clientId: "TU_CLIENT_ID_ENTRA_ID",
    authority: "https://login.microsoftonline.com/TU_TENANT_ID",
    redirectUri: "/",
  },
};
const msalInstance = new PublicClientApplication(msalConfig);

export default function MsalClientProvider({ children }: { children: React.ReactNode }) {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}