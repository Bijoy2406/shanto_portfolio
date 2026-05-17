"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "Achievements", href: "/achievements" },
    { name: "Writings", href: "/writings" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-inverse-surface text-surface-container-lowest py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[12px]">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-1">
            <i className="fas fa-map-marker-alt text-[14px]"></i>
            <span>Modhubagh, Mogbazar, Dhaka</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-phone-alt text-[14px]"></i>
            <span>+8801904651273</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-envelope text-[14px]"></i>
            <span>shahzada1456@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a className="hover:opacity-80 transition-opacity" href="#"><i className="fas fa-link"></i></a>
          <a className="hover:opacity-80 transition-opacity" href="#"><i className="fab fa-linkedin-in"></i></a>
          <a className="hover:opacity-80 transition-opacity" href="#"><i className="fab fa-x-twitter"></i></a>
          <a className="hover:opacity-80 transition-opacity" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="hover:opacity-80 transition-opacity" href="#"><i className="fab fa-telegram-plane"></i></a>
        </div>
      </div>
      {/* Main Navigation Bar */}
      <div className="bg-primary-container relative border-b border-on-surface/10">
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 py-6 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-on-primary text-2xl tracking-wider mb-4 lg:mb-0">
            <span className="font-light opacity-80">KHONDOKAR</span>
            <span className="font-bold"> SHAHRIAR </span>
            <span className="font-light opacity-80">SHANTO</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[13px] font-bold text-surface-container-lowest tracking-widest">
            {navLinks.map((link) => (
              <div key={link.href} className="relative pb-1 group">
                <Link
                  className={`${
                    isActive(link.href)
                      ? "text-surface-container-lowest"
                      : "hover:text-on-tertiary-container"
                  } transition-colors uppercase`}
                  href={link.href}
                >
                  {link.name}
                </Link>
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-on-tertiary-container"></div>
                )}
              </div>
            ))}
            
            <div className="relative group cursor-pointer" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <div className={`flex items-center gap-1 hover:text-on-tertiary-container transition-colors uppercase ${
                ["/courses", "/workshops", "/projects", "/affiliations", "/volunteering"].some(path => pathname.startsWith(path)) ? "text-surface-container-lowest" : ""
              }`}>
                <span>More</span>
                <i className="fas fa-caret-down text-[10px]"></i>
              </div>
              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full pt-2 z-50 ${moreOpen ? 'block' : 'hidden'}`}>
                <div className="bg-surface-container-lowest border border-outline-variant shadow-lg min-w-[200px] flex flex-col rounded-lg overflow-hidden text-left">
                  <Link className={`px-6 py-3 border-b border-surface-variant text-secondary text-[13px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase ${pathname.startsWith("/courses") ? "bg-surface-container-low" : ""}`} href="/courses">Courses</Link>
                  <Link className={`px-6 py-3 border-b border-surface-variant text-secondary text-[13px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase ${pathname.startsWith("/workshops") ? "bg-surface-container-low" : ""}`} href="/workshops">Workshops</Link>
                  <Link className={`px-6 py-3 border-b border-surface-variant text-secondary text-[13px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase ${pathname.startsWith("/projects") ? "bg-surface-container-low" : ""}`} href="/projects">Projects</Link>
                  <Link className={`px-6 py-3 border-b border-surface-variant text-secondary text-[13px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase ${pathname.startsWith("/affiliations") ? "bg-surface-container-low" : ""}`} href="/affiliations">Affiliations</Link>
                  <Link className={`px-6 py-3 border-b border-surface-variant text-secondary text-[13px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase ${pathname.startsWith("/volunteering") ? "bg-surface-container-low" : ""}`} href="/volunteering">Volunteering</Link>
                  <Link className={`px-6 py-3 text-secondary text-[13px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase ${pathname.startsWith("/more/invited-talks") ? "bg-surface-container-low" : ""}`} href="/more/invited-talks">Invited Talks</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
