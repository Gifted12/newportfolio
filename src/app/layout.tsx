import "./globals.css";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Josiah — Full-Stack Developer", 
  description:
    "Full-Stack Developer building scalable, high-performance web applications. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Web Developer"],
  authors: [{ name: "Reno" }],
  openGraph: {
    title: "Josiah — Full-Stack Developer",
    description: "Full-Stack Developer building scalable, high-performance web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josiah — Full-Stack Developer",
    description: "Full-Stack Developer building scalable, high-performance web applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased overflow-x-hidden">
        <div  />
        {children}
      </body>
    </html>
  );
}
