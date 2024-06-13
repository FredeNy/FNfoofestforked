import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RotateBanner from "./components/RotateBanner";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Foo Festival 2024",
  description: "Copenhagens biggest techno festival in 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <Header />
        {children}
        <RotateBanner/>
        <Footer />
        </body>
    </html>
  );
}
