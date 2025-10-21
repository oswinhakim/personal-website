import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Oswin Hakim | Data & AI Professional",
  description:
    "Data & AI Professional with Microsoft Azure and Databricks certifications — focused on delivering business value through collaboration and technical excellence.",
  openGraph: {
    title: "Oswin Hakim | Data & AI Professional",
    description:
      "Data & AI Professional with Microsoft Azure and Databricks certifications.",
    url: "https://oswinhakim.vercel.app",
    siteName: "Oswin Hakim",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}