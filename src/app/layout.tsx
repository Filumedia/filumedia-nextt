import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FILUMEDIA – Webdesign",
  description: "Minimalistische, moderne Websites für Dienstleister & Marken.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.className} min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
