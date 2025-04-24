'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import AdSenseAd from './AdSenseAd';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary text-4xl font-bold mr-2">%</div>
          <h1 className="text-xl font-bold">Percentage Calculator</h1>
        </div>
        <nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
      <div className="w-full bg-primary py-2">
        <div className="container mx-auto px-4">
          <div className="text-center text-white text-sm">
            {/* AdSense Banner Ad */}
            <AdSenseAd
              client="ca-pub-1234567890123456"
              slot="1234567890"
              format="horizontal"
              style={{ display: 'block', height: '90px' }}
              className="bg-white dark:bg-gray-800 rounded-md overflow-hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
