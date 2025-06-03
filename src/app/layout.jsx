import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Montserrat, Lora } from 'next/font/google'

export const metadata = {
  title: 'Empowering Independence with Compassionate Support',
  description: 'Discover a community where independence is cherished. Treasured Care For You provides dedicated support tailored to your needs under the NDIS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="font-heading">
          <head>
        <link rel="icon" href="/logo-bgremove.png" sizes="128x128" type="image/png" />
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