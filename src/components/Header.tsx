"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/podcast', label: 'PODCAST' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/90 backdrop-blur-md border-b border-bd-subtle">
      <div className="max-w-[1220px] mx-auto px-4 md:px-7 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center min-h-[44px]" style={{ width: '150px', height: '44px' }} onClick={closeMobileMenu}>
          <Image
            src="/logo.png"
            alt="UMINATO Logo"
            fill
            sizes="(max-width: 768px) 150px, 180px"
            className="object-contain object-left md:w-[180px] md:h-[52px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-t2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-sky-base transition-colors min-h-[44px] flex items-center">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-t1 hover:text-sky-base transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-bg-deep/95 backdrop-blur-lg border-b border-bd-subtle h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="flex flex-col px-6 py-8 gap-6 text-[18px] font-medium text-t1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-sky-base transition-colors py-3 border-b border-bd-subtle/50 min-h-[44px] flex items-center"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
