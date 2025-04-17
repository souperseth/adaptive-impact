import type { Metadata } from "next";
import "./globals.css";
import { kumbhSans } from "./ui/fonts";
import NavBar from "./Navbar";

export const metadata: Metadata = {
  title: "Adaptive Impact",
  description: "Adaptive Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=lWUgvX8EzEFcXOXe&p=other"/>
      </head>
      <body className={kumbhSans.className}>
        <NavBar/>
        {children}
        <givebutter-widget id="L4DzEL"></givebutter-widget>
      </body>
    </html>
  );
}
