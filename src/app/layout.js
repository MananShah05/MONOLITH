import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "MONOLITH | Luxury Oversized Hoodies",
  description: "Redefining streetwear through architectural design and uncompromising quality. Heavyweight 500GSM Italian Cotton hoodies designed for presence.",
  keywords: ["MONOLITH", "luxury streetwear", "oversized hoodie", "sustainable clothing", "minimalist architecture"],
  openGraph: {
    title: "MONOLITH | Luxury Oversized Hoodies",
    description: "Redefining streetwear through architectural design and uncompromising quality.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
