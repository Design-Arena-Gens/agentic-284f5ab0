import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "خطة احتراف المنتجات الرقمية",
  description:
    "برنامج تعليمي وتصعيدي شامل يأخذك من مستوى المبتدئ إلى الاحتراف في بناء وإطلاق المنتجات الرقمية وريادة الأعمال عبر الإنترنت.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
