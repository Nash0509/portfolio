import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nishant | Portfolio",
  description: "This is the portfolio of Nishant Singh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      { children }
      <ToastContainer />
        </body>
    </html>
  );
}
