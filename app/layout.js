import { Roboto,Montserrat,Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"], 
});


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"], 
});


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"], 
});

export const metadata = {
  title: "Rent House",
  description: "Un site de location des maisons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} ${montserrat.variable} ${poppins.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
