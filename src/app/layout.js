import "./globals.css";
import Bootstrap from "@/components/Bootstrap";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CRUD Personas",
  description: "CRUD básico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Bootstrap />
      </body>
    </html>
  );
}