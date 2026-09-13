import React from 'react';
import { AppLanguage } from '../types';
import { Landmark, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'services' | 'about' | 'blog';
  setCurrentTab: (tab: 'home' | 'services' | 'about' | 'blog') => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
}) => {
  const isTa = language === 'ta';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Civic top announcement bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-300">
              {isTa
                ? 'தமிழ்நாடு அரசு சேவைகளுக்கான சரிபார்க்கப்பட்ட AI வழிகாட்டி'
                : 'Verified AI Guide for Tamil Nadu Government Services & Schemes'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="hidden sm:inline">Google Cloud Gen AI Academy • Hack2Skill</span>
            <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-800/60 font-semibold">
              v1.0 Verified
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:scale-102 transition-transform">
            <Landmark className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Namma <span className="text-blue-700">TN</span> AI
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                Civic
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {isTa ? 'தமிழ்நாடு அரசு சேவைகள், எளிமையாக' : 'Tamil Nadu Government Services, Simplified'}
            </p>
          </div>
        </button>

        {/* Navigation links & Language toggle */}
        <div className="flex items-center gap-1 sm:gap-4">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setCurrentTab('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'home'
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isTa ? 'முகப்பு' : 'Home'}
            </button>
            <button
              onClick={() => setCurrentTab('services')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'services'
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isTa ? 'சேவைகள் பட்டியல்' : 'Services'}
            </button>
            <button
              onClick={() => setCurrentTab('about')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'about'
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isTa ? 'எங்களைப் பற்றி' : 'About'}
            </button>
            <button
              onClick={() => setCurrentTab('blog')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentTab === 'blog'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs'
                  : 'text-amber-800 hover:text-amber-950 bg-amber-50/80 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isTa ? 'கட்டுரை (Blog)' : 'Meet the Builders'}</span>
            </button>
          </nav>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setLanguage('ta')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                language === 'ta'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="தமிழ் மொழியில் படிக்க"
            >
              தமிழ்
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to English"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
