import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/90 backdrop-blur-md border-b border-bd-subtle">
      <div className="max-w-[1220px] mx-auto px-7 h-[70px] flex items-center justify-between">
        {/* Logo — full colour, enlarged */}
        <Link href="/" className="relative flex items-center" style={{ width: '180px', height: '52px' }}>
          <Image
            src="/logo.png"
            alt="UMINATO Logo"
            fill
            sizes="180px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-t2">
          <Link href="/" className="hover:text-sky-base transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-sky-base transition-colors">ABOUT</Link>
          <Link href="/projects" className="hover:text-sky-base transition-colors">PROJECTS</Link>
          <Link href="/podcast" className="hover:text-sky-base transition-colors">PODCAST</Link>
          <Link href="/contact" className="hover:text-sky-base transition-colors">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
