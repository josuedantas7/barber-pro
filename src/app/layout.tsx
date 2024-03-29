import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider/page";
import Notifier from "@/components/Notifier/Notifier";
import { SwitchProvider } from '@/context/SwitchContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barber PRO",
  description: "A melhor barbearia da região",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SwitchProvider>
          <AuthProvider>
            <Notifier/>
            <main>
              {children}
            </main>
          </AuthProvider>
        </SwitchProvider>
      </body>
    </html>
  );
}
