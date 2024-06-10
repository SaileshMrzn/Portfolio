import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sailesh's Porfolio",
  description: "Sailesh Maharjan - Frontend/Full-stack Developer",
  openGraph: {
    title: "Sailesh's Portfolio",
    description: "Sailesh Maharjan - Frontend/Full-stack Developer",
    url: "https://saileshmaharjan.com.np",
    type: "website",
    images: [
      {
        url: "https://saileshmaharjan.com.np/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Sailesh's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
