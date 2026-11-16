import type { Metadata } from "next";
import Script from "next/script";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.Kaushik - Software Developer",
  description:
    "Portfolio of A.Kaushik, a Computer Science undergraduate passionate about full-stack development and modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="portfolio-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.dataset.theme='light';",
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteEffects />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
