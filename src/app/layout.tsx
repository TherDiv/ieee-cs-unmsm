import { ReactNode } from "react";
import "@/app/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/ieee-cs-icon.webp" type="image/webp" />
        <title>IEEE-CS UNMSM</title>
      </head>
      <body className="flex flex-col min-h-screen">
        {/* El Header fue eliminado del layout */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
