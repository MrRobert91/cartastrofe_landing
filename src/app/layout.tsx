import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartástrofe | Juego de cartas para parejas",
  description:
    "Cartástrofe es el juego de cartas para parejas que convierte cualquier momento en una aventura impredecible. Gratis en Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Script id="mailerlite-universal" strategy="beforeInteractive">
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account', '2144562');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
