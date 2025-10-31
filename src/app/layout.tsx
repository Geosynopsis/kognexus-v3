import { KognexusThemeProvider } from "@/theme/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kognexus | Rethinking Robotics",
  description:
    "Pioneering robotic system designs that merge advanced AI with precision engineering for a sustainable future.",
  keywords:
    "artificial intelligence, AI robotics, intelligent robots, human-robot collaboration, robotics technology",
  authors: [{ name: "Kognexus Robotics" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <KognexusThemeProvider>
          {children}
          {/** We don't need cookie concent while using cloudflare. We aren't
          setting up the google analytics as for now.**/}
          {/**
           * Make sure there is only 1 component,
           * placed at the root of your app
           */}
          {/* <CookieConsentComponent /> */}
        </KognexusThemeProvider>
      </body>
    </html>
  );
}
