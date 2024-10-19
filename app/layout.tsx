import type { Metadata } from "next";
import "./globals.scss";



export const metadata: Metadata = {
  title: "Local Creamery",
  description: "Little example store front project to test out shadcn and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
