"use client";
import { Toaster } from "react-hot-toast";
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
          <MainContext.Provider
            value={{ email, setEmail, password, setPassword }}
          >
            {children}
            {/* Add Toaster so toast() can show notifications */}
            <Toaster position="top-right" reverseOrder={false} />
          </MainContext.Provider>
        </Theme>
      </body>
    </html>
  );
}
