import { ReactNode } from "react";
import "@/app/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ieee-cs-icon.png" type="image/png" />
        <title>IEEE-CS UNMSM</title>
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Contenido principal */}
        <main className="flex-grow">{children}</main>
        {/* Footer común */}
        <Footer />
      </body>
    </html>
  );
}
