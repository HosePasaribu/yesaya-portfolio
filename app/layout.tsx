import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://yesaya-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yesaya Pasaribu — Penetration Tester | OSCP · CEH · CRTOM",
  description:
    "OSCP-, CEH- and CRTOM-certified Penetration Tester specializing in web, Android & API security. HackerOne & Google VRP researcher with Critical findings including SQLi, IDOR/BOLA and RCE.",
  keywords: [
    "Penetration Tester",
    "OSCP",
    "CEH",
    "CRTOM",
    "Bug Bounty",
    "HackerOne",
    "Google VRP",
    "Web Security",
    "API Security",
    "Android Security",
    "Yesaya Pasaribu",
  ],
  authors: [{ name: "Yesaya Pasaribu" }],
  openGraph: {
    title: "Yesaya Pasaribu — Penetration Tester | OSCP · CEH · CRTOM",
    description:
      "Offensive security researcher. HackerOne & Google VRP. Critical findings: SQLi, IDOR/BOLA, RCE.",
    url: siteUrl,
    siteName: "Yesaya Pasaribu — Security Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yesaya Pasaribu — Penetration Tester",
    description:
      "OSCP · CEH · CRTOM — offensive security researcher. HackerOne & Google VRP.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
