import type { Metadata } from "next";
import { ThemeProvider } from '@/hooks/useTheme';
import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'EZLinks - Deep links made simple.',
  description: 'Ship deep links in minutes, not days. We handle the complex plumbing of deep linking automatically, so you can focus on building your product.',
};


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        <ThemeProvider>
          {children}
          {/* <Script
            id="inline-script-id"
            dangerouslySetInnerHTML={{
              __html: `
                  window.EZLinksConfig = {
                    link: 'https://playsq.ezl.link/',
                    title: 'Use the Amtrak app for a better travel experience',
                    icon: 'https://ezlinks.netlify.app/app-icon.png'
                  };          
                console.log('Hello from inline script!');
              `,
            }}
          />
          <Script
            src="https://ezlinks.netlify.app/scripts/banner.js"
            strategy="afterInteractive"
          /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}




