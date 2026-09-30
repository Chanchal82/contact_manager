import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "A simple contact manager application built with Next.js and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">    
      <body className="min-h-full flex flex-col">
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
