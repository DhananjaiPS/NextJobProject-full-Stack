"use client";

import { Theme } from "@radix-ui/themes";
import "./globals.css";
import { useState } from "react";
import { MainContext } from "@/app/components/context/MainContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <html lang="en">
      <body>
        <Theme>
          <MainContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
          </MainContext.Provider>
        </Theme>
      </body>
    </html>
  );
}
