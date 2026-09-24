import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatbotWindow } from "@/components/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Lee's Portfolio",
  description: "Sam Lee's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="mx-auto flex flex-col min-h-screen w-full px-4 max-w-3xl sm:px-6 md:max-w-4xl xl:max-w-5xl">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <ChatbotWindow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
