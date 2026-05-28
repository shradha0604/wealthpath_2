import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "WealthPath AI — Financial Freedom Without Confusion",
  description:
    "Your AI-powered money mentor that helps you save smarter, avoid scams, reduce stress, and build wealth safely.",
  keywords: ["personal finance", "AI financial advisor", "scam detection", "budget planner", "India"],
  openGraph: {
    title: "WealthPath AI",
    description: "Financial Freedom Without Financial Confusion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <ThemeProvider>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
