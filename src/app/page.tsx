'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import BasicPercentageCalculator from '@/components/BasicPercentageCalculator';
import CommonPhrasesCalculator from '@/components/CommonPhrasesCalculator';
import PercentToFractionCalculator from '@/components/PercentToFractionCalculator';
import AddSubtractPercentageCalculator from '@/components/AddSubtractPercentageCalculator';
import PercentChangeCalculator from '@/components/PercentChangeCalculator';
import PercentErrorCalculator from '@/components/PercentErrorCalculator';
import PercentDifferenceCalculator from '@/components/PercentDifferenceCalculator';
import AdSenseAd from '@/components/AdSenseAd';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('basic');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-24 bg-card p-4 rounded-lg shadow-sm border border-border">
              <h2 className="text-lg font-semibold mb-4">Calculator Types</h2>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection('basic')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'basic' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Basic Percentage
                </button>
                <button 
                  onClick={() => scrollToSection('common-phrases')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'common-phrases' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Common Phrases
                </button>
                <button 
                  onClick={() => scrollToSection('percent-fraction')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'percent-fraction' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Percent to Fraction
                </button>
                <button 
                  onClick={() => scrollToSection('add-subtract')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'add-subtract' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Add/Subtract Percentage
                </button>
                <button 
                  onClick={() => scrollToSection('percent-change')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'percent-change' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Percent Change
                </button>
                <button 
                  onClick={() => scrollToSection('percent-error')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'percent-error' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Percent Error
                </button>
                <button 
                  onClick={() => scrollToSection('percent-difference')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === 'percent-difference' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  Percent Difference
                </button>
              </nav>
              
              {/* Sidebar Ad */}
              <div className="mt-6">
                <AdSenseAd
                  client="ca-pub-1234567890123456"
                  slot="2345678901"
                  format="rectangle"
                  style={{ display: 'block', height: '250px' }}
                  className="bg-white dark:bg-gray-800 rounded-md overflow-hidden"
                />
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5">
            <section id="basic" className="scroll-mt-24">
              <BasicPercentageCalculator 
                title="Percentage Calculator" 
                description="Calculate percentages using the standard percentage formula."
              />
            </section>
            
            <section id="common-phrases" className="scroll-mt-24">
              <CommonPhrasesCalculator 
                title="Percentage Calculator in Common Phrases" 
                description="Calculate percentages using common language phrases."
              />
            </section>
            
            <section id="percent-fraction" className="scroll-mt-24">
              <PercentToFractionCalculator 
                title="Percent to Fraction to Decimal" 
                description="Convert between percent, fraction, and decimal formats."
              />
            </section>
            
            {/* Ad between sections */}
            <div className="my-8">
              <AdSenseAd
                client="ca-pub-1234567890123456"
                slot="3456789012"
                format="horizontal"
                responsive={true}
                style={{ display: 'block', minHeight: '90px' }}
                className="bg-white dark:bg-gray-800 rounded-md overflow-hidden"
              />
            </div>
            
            <section id="add-subtract" className="scroll-mt-24">
              <AddSubtractPercentageCalculator 
                title="Add or Subtract a Percentage" 
                description="Calculate tips, sales price, percent off, discounted price, price with sales tax, etc."
              />
            </section>
            
            <section id="percent-change" className="scroll-mt-24">
              <PercentChangeCalculator 
                title="Percent Change" 
                description="Use when comparing an old value to a new value or when comparing a start value to an end value."
              />
            </section>
            
            {/* Ad between sections */}
            <div className="my-8">
              <AdSenseAd
                client="ca-pub-1234567890123456"
                slot="4567890123"
                format="horizontal"
                responsive={true}
                style={{ display: 'block', minHeight: '90px' }}
                className="bg-white dark:bg-gray-800 rounded-md overflow-hidden"
              />
            </div>
            
            <section id="percent-error" className="scroll-mt-24">
              <PercentErrorCalculator 
                title="Percent Error" 
                description="Use when comparing a theoretical (known) value to an experimental (measured) value."
              />
            </section>
            
            <section id="percent-difference" className="scroll-mt-24">
              <PercentDifferenceCalculator 
                title="Percent Difference" 
                description="Use when comparing two values where neither value is considered a start value or a reference value."
              />
            </section>
            
            {/* Bottom Ad */}
            <div className="mt-8">
              <AdSenseAd
                client="ca-pub-1234567890123456"
                slot="5678901234"
                format="rectangle"
                responsive={true}
                style={{ display: 'block', minHeight: '250px' }}
                className="bg-white dark:bg-gray-800 rounded-md overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
