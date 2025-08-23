import "./globals.css";
import "@/styles/tokens.css";
import { azeretMono } from "@/styles/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={azeretMono.variable}>
      <body className="font-mono bg-[rgb(var(--bg))] text-[rgb(var(--fg))] antialiased">
        {children}
      </body>
    </html>
  );
}
