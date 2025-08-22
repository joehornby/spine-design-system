import "./globals.css";
import "@/styles/tokens.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))] antialiased">
        {children}
      </body>
    </html>
  );
}
