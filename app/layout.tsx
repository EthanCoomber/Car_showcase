import "./globals.css";
import Head from "next/head";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
  // image: "./favicon.ico"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
