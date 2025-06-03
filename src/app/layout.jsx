import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Montserrat, Lora } from 'next/font/google'

export const metadata = {
  title: 'Treasured Care For You',
  description: 'Providing nurturing support and care services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="font-heading">
          <head>
        <link rel="icon" href="/logo.jpg" sizes="128x128" type="image/png" />
      </head>
      <body className="font-heading">
        <Navbar />
        <main>  {/* page content */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}