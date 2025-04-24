import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Percentage Calculator - Fast, Free, and Easy to Use",
  description: "Free online percentage calculator with multiple calculation types. Calculate percentages, convert between percent, decimal and fraction, find percent change, error, and more.",
  keywords: "percentage calculator, percent calculator, calculate percentage, percent to decimal, percent to fraction, percent change calculator, percent error calculator, percent difference calculator",
  openGraph: {
    title: "Percentage Calculator - Fast, Free, and Easy to Use",
    description: "Free online percentage calculator with multiple calculation types. Calculate percentages, convert between percent, decimal and fraction, find percent change, error, and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator - Fast, Free, and Easy to Use",
    description: "Free online percentage calculator with multiple calculation types. Calculate percentages, convert between percent, decimal and fraction, find percent change, error, and more.",
  },
  alternates: {
    canonical: "https://percentagecalculator.example.com",
  },
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
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
          crossOrigin="anonymous"
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(require('../../public/schema.json'))
          }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
          <footer className="mt-auto py-6 bg-secondary">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Percentage Calculator. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:underline">Privacy Policy</a> | 
                <a href="#" className="hover:underline ml-2">Terms of Service</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
