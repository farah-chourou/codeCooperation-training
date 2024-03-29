import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mt-8 mb-8">
          <h4 className="scroll-m-20 border-b pb-2 text-3xl text text-center font-semibold tracking-tight first:mt-0 ">
            Welcome To Fafa store ! 😎
          </h4>
        </div>

        {children}
      </body>
    </html>
  );
}
