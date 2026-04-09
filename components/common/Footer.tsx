import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  Services: [
    { label: "Eye Examinations", href: "/services" },
    { label: "Designer Frames", href: "/products" },
    { label: "Contact Lenses", href: "/services" },
    { label: "Lens Replacement", href: "/services" },
    { label: "Kids Eye Care", href: "/services" },
  ],
  Company: [
    { label: "About Occuvera", href: "/about" },
    { label: "Our Optometrists", href: "/about" },
    { label: "Blog & Eye Tips", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  Support: [
    { label: "Book Appointment", href: "#book-appointment" },
    { label: "FAQs", href: "/faqs" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Insurance & Claims", href: "/insurance" },
    { label: "Warranty Policy", href: "/warranty" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socials = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaXTwitter, href: "#", label: "Twitter" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(169,176,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(169,176,184,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top platinum accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A9B0B8] to-transparent opacity-40" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#A9B0B8]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#A9B0B8]/3 blur-[80px] pointer-events-none" />

      {/* Main footer grid */}
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/Occuvera_logo_update.jpeg"
                  alt="Occuvera logo"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain mb-5 transition-transform duration-500 group-hover:scale-105"
                />
                {/* shimmer sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
              </div>
            </Link>

            <p className="text-[#A9B0B8] text-sm leading-relaxed max-w-xs font-inter opacity-80">
              Occuvera is your trusted destination for expert eye care, precision
              vision testing, and premium designer eyewear. Serving India since 2010.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2.5 text-sm text-[#A9B0B8] hover:text-white transition-colors duration-200 group/link"
              >
                <Phone className="size-4 text-[#A9B0B8] group-hover/link:scale-110 transition-transform duration-200" />
                +91 98765 43210
              </a>
              <a
                href="mailto:occuveraoptical@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[#A9B0B8] hover:text-white transition-colors duration-200 group/link"
              >
                <Mail className="size-4 text-[#A9B0B8] group-hover/link:scale-110 transition-transform duration-200" />
                occuveraoptical@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-[#A9B0B8] opacity-80">
                <MapPin className="size-4 text-[#A9B0B8] shrink-0 mt-0.5" />
                <span>123 Vision Street, Satellite, Ahmedabad — 380015</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="relative w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#A9B0B8]/60 hover:bg-[#A9B0B8]/15 group/social overflow-hidden"
                >
                  <Icon className="size-4 text-[#A9B0B8] group-hover/social:text-white transition-colors duration-200 relative z-10" />
                  <span className="absolute inset-0 rounded-full bg-[#A9B0B8]/0 group-hover/social:bg-[#A9B0B8]/10 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-widest text-[11px] text-[#A9B0B8]">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-[#A9B0B8] text-sm hover:text-white transition-colors duration-200 group/footlink"
                    >
                      <span className="w-0 group-hover/footlink:w-3 transition-all duration-200 overflow-hidden">
                        <ArrowUpRight className="size-3 text-[#A9B0B8] shrink-0" />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A9B0B8] text-xs text-center sm:text-left opacity-70">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Occuvera</span>. All rights
            reserved. | Expert Eye Care & Premium Eyewear
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[#A9B0B8] text-xs hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}