import Link from "next/link";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tech Blog",
    default: "Tech Blog",
  },
  description: "A modern tech blog built with Next.js",
  metadataBase: new URL("https://techblog1.com"),
  openGraph: {
    title: "Tech Blog",
    description: "Tips on monetizing your coding skills.",
    url: "https://techblog1.com",
    siteName: "Tech Blog",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog",
    description: "Tips on monetizing your coding skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1124557496204857"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <main className="flex-1">{children}</main>
        <footer className="py-6 border-t md:px-8 bg-background">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 mx-auto max-w-3xl">
            <p className="text-sm text-muted-foreground">
              © 2026 Tech Blog. Built with Next.js.
            </p>
            <nav className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/contact" className="hover:underline">お問い合わせ</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
