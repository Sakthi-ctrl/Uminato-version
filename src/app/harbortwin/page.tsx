import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import HarborTwinOnePager from '@/components/HarborTwinOnePager';

export const metadata = {
  title: 'HarborTwin™ | Maritime AI & Digital Twin Intelligence for Ports & Terminals',
  description: 'Enterprise AI & Real-Time Digital Twin Platform for Global Ports & Terminals by Uminato Maritime Group.',
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
