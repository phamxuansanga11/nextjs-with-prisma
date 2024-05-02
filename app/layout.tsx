import { ThemeProvider } from "@/providers/theme";
import Header from "@/src/components/Header";
import "@/src/styles/global.scss";
import "@/src/styles/tailwind.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AntdRegistry>{children}</AntdRegistry>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
