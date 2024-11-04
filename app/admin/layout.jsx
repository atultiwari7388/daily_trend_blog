"use client";

import AuthContextProvider from "./../../lib/context/AuthContext";

export default function Layout({ children }) {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  );
}
