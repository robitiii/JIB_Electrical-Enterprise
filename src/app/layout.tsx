import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jib-electrical.online"),
  title: "JIB Electrical Enterprises | Professional Electrical Solutions Cape Town",
  description:
    "Certified electrical solutions and contracting in Goodwood, Cape Town. Specialising in house wiring, solar backup installations, electric fencing, gate motors, and electrical compliance certificates (ECOC).",
  keywords: [
    "electrical solutions Cape Town",
    "professional electrician Goodwood",
    "residential electrical contracting",
    "commercial wiring",
    "JIB Electrical",
    "solar installations",
    "electric fence compliance",
  ],
  authors: [{ name: "John Ibala", url: "https://jib-electrical.online" }],
  creator: "John Ibala",
  publisher: "JIB Electrical Enterprises",
  alternates: {
    canonical: "https://jib-electrical.online",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://jib-electrical.online",
    title: "JIB Electrical Enterprises | Electrical Contracting & Solutions Cape Town",
    description:
      "SANS 10142-1 certified electrical solutions. From full house wiring and solar integration to electric fencing and ECOC compliance testing in the Western Cape.",
    siteName: "JIB Electrical Enterprises",
    locale: "en_ZA",
    images: [
      {
        url: "https://jib-electrical.online/assets/images/jib-share-preview.jpg",
        width: 1200,
        height: 630,
        alt: "JIB Electrical Enterprises — Professional Electrical Solutions Cape Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JIB Electrical Enterprises | Electrical Contracting & Solutions Cape Town",
    description:
      "SANS 10142-1 certified electrical solutions. From full house wiring and solar integration to electric fencing and ECOC compliance testing in the Western Cape.",
    images: ["https://jib-electrical.online/assets/images/jib-share-preview.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  verification: {
    google: "jlVHNL1cx9wzrP4-LpvuvGEL2nCv_50xWaQpUhVYPek",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "JIB Electrical Enterprises",
  image: "https://jib-electrical.online/assets/images/jib-share-preview.jpg",
  url: "https://jib-electrical.online",
  telephone: "+27 67 818 6280",
  email: "jibelectrical2@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Hamilton Street",
    addressLocality: "Goodwood",
    addressRegion: "Western Cape",
    postalCode: "7463",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9142,
    longitude: 18.5526,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Cape Town",
    },
    {
      "@type": "AdministrativeArea",
      name: "Goodwood",
    },
    {
      "@type": "AdministrativeArea",
      name: "Western Cape",
    },
  ],
  founder: {
    "@type": "Person",
    name: "John Ibala",
    jobTitle: "Lead Electrical Engineer & Director",
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Contracting & Compliance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential & Commercial House Wiring",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Backup & Inverter Installations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electric Fencing Installation & Compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gate Motor Repairs & Access Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electrical Compliance Certificates (ECOC)",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta
          name="google-site-verification"
          content="jlVHNL1cx9wzrP4-LpvuvGEL2nCv_50xWaQpUhVYPek"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#100904] text-[#ffedd7] min-h-screen">
        {children}
      </body>
    </html>
  );
}
