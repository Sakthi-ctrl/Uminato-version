import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import HarborTwinOnePager from '@/components/HarborTwinOnePager';

export const metadata = {
  title: 'HarborTwin Executive One-Pager | Uminato Maritime Group',
  description: 'Maritime AI & Digital Intelligence Solutions for Ports & Terminals — Executive Overview of HarborTwin platform by Uminato Maritime Group.',
};

export default function HarborTwinPage() {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void">
        <HarborTwinOnePager />
      </main>
      <Footer hideCTA />
    </SmoothScroll>
  );
}
