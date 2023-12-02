import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next simple e-commerce",
  description: "Nest js simple e-commerce with typescript and stripe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-2xl mx-auto mt-20">{children}</div>
      </body>
    </html>
  );
}
