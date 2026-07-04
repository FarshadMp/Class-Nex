import type { Metadata } from "next";
import { Darker_Grotesque, Noto_Kufi_Arabic, Inter } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.classnext.ai"),
  title: "Class Nex - AI-Powered School Management System",
  description: "Class Nex is an AI-powered, all-in-one School Management System that unifies academics, administration, finance, and communication in Saudi Arabia, India, UAE, and Qatar.",
  keywords: "School Management System, School ERP Software, AI School MIS, Student Information System KSA, Classroom Attendance App UAE, School Finance Software Qatar, Best School ERP India",
  alternates: {
    canonical: "https://www.classnext.ai/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Class Nex",
  "operatingSystem": "All",
  "applicationCategory": "BusinessApplication",
  "description": "Class Nex is an intelligent, AI-powered school management system combining academics, admin desk, online finance payments, and communication portals.",
  "offers": {
    "@type": "Offer",
    "price": "Contact for Quote",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "180"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${darkerGrotesque.variable} ${notoKufiArabic.variable} ${inter.variable} antialiased font-sans bg-[#fbfbf9] text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
