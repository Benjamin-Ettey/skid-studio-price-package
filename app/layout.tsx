import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: '400'
});


export const metadata: Metadata = {
  title: "Skid Studio",
  description: "Creative Studio to explore and have inspirations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BricolageGrotesque.className}  min-h-screen antialiased`}
      >
        {children}
      <NavBar/>

      </body>
    </html>
  );
}
