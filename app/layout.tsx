import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import "@/src/styles/global.scss";
import "@/src/styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

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
      <body className={inter.className}>
        <div>{children}</div>
        <ToastContainer />
      </body>
    </html>
  );
}
