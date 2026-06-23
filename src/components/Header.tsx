import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/90 backdrop-blur-md border-b border-bd-subtle">
      <div className="max-w-[1220px] mx-auto px-7 h-[62px] flex items-center justify-between">
        <div className="flex items-center gap-3 relative w-32 h-10">
          <Image src="/logo.png" alt="UMINATO Logo" fill className="object-contain object-left brightness-0 invert" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-t2">
          <Link href="/" className="hover:text-sky-base transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-sky-base transition-colors">ABOUT</Link>
          <Link href="/team" className="hover:text-sky-base transition-colors">TEAM</Link>
          <Link href="/projects" className="hover:text-sky-base transition-colors">PROJECTS</Link>
          <Link href="/podcast" className="hover:text-sky-base transition-colors">PODCAST</Link>
          <Link href="/blog" className="hover:text-sky-base transition-colors">BLOG</Link>
          <Link href="/contact" className="hover:text-sky-base transition-colors">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
