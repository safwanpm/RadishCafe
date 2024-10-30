import localFont from "next/font/local";
import "./globals.css";

// Load Schulvokaldotless font
const schulvokaldotless = localFont({
  src: "./fonts/schulvokaldotless.ttf",
  variable: "--font-schulvokaldotless",
  weight: "100",  // Use the correct weight for the font
});
const kelvetica = localFont({
  src: "./fonts/kelvetica.otf",
  variable: "--font-kelvetica",
  weight: "100",  // Use the correct weight for the font
});

// Load Geist Sans font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Load Geist Mono font
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Radish",
  description: "Resto-Cafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${schulvokaldotless.variable} ${kelvetica.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
