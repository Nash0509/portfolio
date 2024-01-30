import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}