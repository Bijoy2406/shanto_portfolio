"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* Top Utility Bar - Hidden on mobile/tablet */}
      <div className="hidden md:flex bg-inverse-surface text-surface-container-lowest py-2 px-4 md:px-12 flex-col md:flex-row justify-center items-center text-[12px]">
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
      </div>
      {/* Main Navigation Bar */}
      <div className="bg-primary-container relative border-b border-on-surface/10">
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-on-primary tracking-wider flex-1 min-w-0 pr-[60px] lg:pr-0" style={{ fontSize: 'clamp(1rem, 5vw, 1.5rem)' }}>
            <span className="font-light opacity-80">KHONDOKAR</span>
            <span className="font-bold"> SHAHRIAR </span>
            <span className="font-light opacity-80">SHANTO</span>
          </div>
          
          {/* Hamburger Menu Button for Mobile/Tablet */}
          <button 
            className="absolute top-6 right-4 lg:hidden text-on-primary text-2xl z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row flex-wrap justify-center gap-6 text-[13px] font-bold text-surface-container-lowest tracking-widest">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group px-3 py-2">
                <Link
                  className={`${
                    isActive(link.href)
                      ? "text-surface-container-lowest"
                      : "hover:text-on-tertiary-container"
                  } transition-colors uppercase relative z-10`}
                  href={link.href}
                >
                  {link.name}
                </Link>
                {isActive(link.href) && (
                  <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"></div>
                )}
              </div>
            ))}
            
            <div className="relative group cursor-pointer px-3 py-2" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <div 
                className={`flex items-center gap-1 hover:text-on-tertiary-container transition-colors uppercase relative z-10 ${
                  ["/courses", "/workshops", "/projects", "/affiliations", "/volunteering"].some(path => pathname.startsWith(path)) ? "text-surface-container-lowest" : ""
                }`}
              >
                <span>More</span>
                <i className="fas fa-caret-down text-[10px]"></i>
              </div>
              { ["/courses", "/workshops", "/projects", "/affiliations", "/volunteering"].some(path => pathname.startsWith(path)) && (
                <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"></div>
              )}
              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full pt-2 z-50 ${moreOpen ? 'block' : 'hidden'} group-hover:block`}>
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
      
      {/* Mobile Sidebar Drawer */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-primary-container z-50 shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-on-primary text-lg tracking-wider">
                <span className="font-light opacity-80">KHONDOKAR</span>
                <span className="font-bold"> SHAHRIAR </span>
                <span className="font-light opacity-80">SHANTO</span>
              </div>
              <button 
                className="text-on-primary text-2xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex flex-col gap-2 text-[14px] font-bold text-surface-container-lowest tracking-widest">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={`relative uppercase px-3 py-2 border-b border-on-surface/10 transition-colors ${
                    isActive(link.href)
                      ? "text-surface-container-lowest"
                      : "hover:text-on-tertiary-container"
                  }`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isActive(link.href) && (
                    <span className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}

              <div className="relative">
                <div
                  className={`relative flex items-center justify-between gap-1 transition-colors uppercase px-3 py-2 border-b border-on-surface/10 cursor-pointer ${
                    ["/courses", "/workshops", "/projects", "/affiliations", "/volunteering", "/more"].some(p => pathname.startsWith(p))
                      ? "text-surface-container-lowest"
                      : "hover:text-on-tertiary-container"
                  }`}
                  onClick={() => setMoreOpen(!moreOpen)}
                >
                  {["/courses", "/workshops", "/projects", "/affiliations", "/volunteering", "/more"].some(p => pathname.startsWith(p)) && (
                    <span className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
                  )}
                  <span className="relative z-10">More</span>
                  <i className={`fas fa-caret-down text-[10px] transition-transform relative z-10 ${moreOpen ? 'rotate-180' : ''}`}></i>
                </div>

                {/* Mobile More Dropdown */}
                {moreOpen && (
                  <div className="flex flex-col mt-2 pl-4 gap-1">
                    {[
                      { href: "/courses", label: "Courses" },
                      { href: "/workshops", label: "Workshops" },
                      { href: "/projects", label: "Projects" },
                      { href: "/affiliations", label: "Affiliations" },
                      { href: "/volunteering", label: "Volunteering" },
                      { href: "/more/invited-talks", label: "Invited Talks" },
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        className={`px-4 py-2 text-[13px] font-bold tracking-widest transition-colors uppercase rounded-lg ${
                          pathname.startsWith(href)
                            ? "bg-white/10 border border-white/20 text-surface-container-lowest"
                            : "text-surface-container-lowest/70 hover:text-surface-container-lowest hover:bg-white/5"
                        }`}
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
