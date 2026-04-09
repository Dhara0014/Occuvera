import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Occuvera | Premium Eye Care, Vision Testing & Designer Eyewear",
  description:
    "Expert eye care at Occuvera. Experience precision vision testing, personalized prescriptions, and premium designer eyewear. Book your comprehensive eye exam today.",
  keywords:
    "eye care, eye test, optical store, designer eyewear, glasses, contact lenses, optometrist, prescription glasses, Ahmedabad",
    icons: {
    icon: [
      // { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon0.svg"],
    apple: ["/icon0.svg"], // works but PNG is better for Apple (optional upgrade later)
  },
  openGraph: {
    title: "Occuvera | Premium Eye Care & Designer Eyewear",
    description:
      "Expert eye care at Occuvera. Precision vision testing and premium designer eyewear.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} bg-white text-[#0B1C2D] antialiased`}
      >
        <Header />
        {/* pt accounts for fixed header: topbar (38px) + nav (~76px) = ~114px.
            On mobile the topbar is hidden so only the nav height applies. */}
        <main className="pt-[72px] md:pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}