import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/global.scss";
import "@/src/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "website about video",
  // icons: Logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
