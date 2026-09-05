import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jibelectrical.co.za"),
  title: "JIB Electrical Enterprises — Power Architecture for Cape Town",
  description:
    "Engineered by John Ibala. High-end electrical systems, heavy industrial perimeters, gate motor repairs, and regulatory safety compliance (OHS Act No. 85 of 1993) in Goodwood, Cape Town.",
  keywords: [
    "JIB Electrical",
    "Cape Town Electrician",
    "House Wiring Cape Town",
    "Electric Fencing Cape Town",
    "Gate Motor Repairs Goodwood",
    "Electrical Certificate of Compliance Cape Town",
    "John Ibala",
  ],
  authors: [{ name: "John Ibala", url: "https://jibelectrical.co.za" }],
  openGraph: {
    title: "JIB Electrical Enterprises — Power Architecture for Cape Town",
    description:
      "High-end domestic house wiring, electric fencing, gate automation, and COC compliance certifications across the Western Cape.",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/JIB Eletrical-Enterprise-logo.png",
        width: 800,
        height: 600,
        alt: "JIB Electrical Enterprises Logo",
      },
    ],
  },
  icons: {
    icon: "/images/JIB Eletrical-Enterprice-logo-transparent background.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#100904] text-[#ffedd7] min-h-screen">
        {children}
      </body>
    </html>
  );
}
