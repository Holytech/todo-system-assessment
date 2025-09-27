import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/module/lib/components/ui/provider";
import { Box, Grid } from "@chakra-ui/react";
import SideBar from "@/module/lib/components/SideBar/SideBar";
import TopNav from "@/module/lib/components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo System [Frontend Developer Assignment]",
  description:
    "A responsive Todo management application built with Next.js and Chakra UI. Developed as a frontend assignment to showcase component-based design, UI development, and state management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Grid w="full" h="100vh" overflow="hidden" templateColumns="auto 1fr">
            <SideBar />
            <Box h="100vh">
              <TopNav />
              <Box h="full" overflow="hidden" bg="gray.50" px={5} pt={3} pb={8}>
                {children}
              </Box>
            </Box>
          </Grid>
        </Provider>
      </body>
    </html>
  );
}
