import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Membresías · ${site.profile.name}`,
  description: site.profile.note,
  openGraph: {
    title: site.share.title,
    description: site.share.text,
    images: [site.profile.cover],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F0FAFA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
