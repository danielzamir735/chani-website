import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "חני כוכב לב — ייעוץ פיננסי אישי",
  description:
    "ליווי אישי ומקצועי ליציאה מחובות, ניהול תקציב חכם ובניית עתיד בטוח למשפחה שלכם.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <body className="antialiased font-[family-name:var(--font-assistant)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
