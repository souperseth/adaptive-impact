import type { Metadata } from "next";
import styles from "./globals.css";
import { kumbhSans } from "./ui/fonts";
import NavBar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Adaptive Impact",
  description: "Adaptive Impact",
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": any;
    }
  }
}

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
      <body className={styles.background}>
        <NavBar/>
        {children}
        {/* @ts-ignore */}
        <givebutter-widget id="L4DzEL"></givebutter-widget>
      </body>
    </html>
  );
}
