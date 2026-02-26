import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
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
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="antialiased font-[family-name:var(--font-heebo)]">
        {children}
      </body>
    </html>
  );
}
