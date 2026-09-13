import React from 'react';
import { AppLanguage } from '../types';
import { Landmark, ShieldAlert, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  language: AppLanguage;
  onNavigate: (tab: 'home' | 'services' | 'about' | 'blog') => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const isTa = language === 'ta';

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center">
                <Landmark className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                Namma <span className="text-blue-400">TN</span> AI
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {isTa
                ? 'தமிழ்நாடு அரசு நலத்திட்டங்கள், சான்றிதழ்கள் மற்றும் பொதுச்சேவைகளை எளிய தமிழ் மற்றும் ஆங்கிலத்தில் அறிந்துகொள்ள உதவும் குடிமக்கள் வழிகாட்டி.'
                : 'A conversational citizen-services AI assistant simplifying Tamil Nadu government certificates, welfare schemes, and public entitlements with verified ground truth.'}
            </p>
            <div className="text-[11px] text-slate-500">
              Built for the <strong>Google Cloud Gen AI Academy / Hack2Skill “Meet the Builders”</strong> campaign.
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {isTa ? 'பக்கங்கள்' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  {isTa ? 'முகப்பு (Home)' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  {isTa ? 'சேவைகள் பட்டியல் (Services)' : 'Services Directory'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  {isTa ? 'எங்களைப் பற்றி (About)' : 'About Namma TN AI'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  {isTa ? 'சமர்ப்பிப்பு கட்டுரை (Meet the Builders Blog)' : 'Meet the Builders Submission Blog'}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {isTa ? 'அரசு இணையதளங்கள்' : 'Official Portals'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a
                  href="https://www.tnesevai.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>TNeGA e-Sevai Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Government of Tamil Nadu</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pudhumaippen.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Pudhumai Penn Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://kmut.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Kalaignar Magalir Urimai</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Civic Disclaimer Notice */}
        <div className="pt-6 border-t border-slate-800/80 bg-slate-950/40 p-4 rounded-xl flex items-start gap-3 text-slate-400 leading-relaxed text-[11px]">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p>
            <strong>{isTa ? 'சட்டப்பூர்வ அறிவிப்பு:' : 'Disclaimer:'}</strong>{' '}
            “Namma TN AI is an independent informational prototype and is not an official Government of Tamil Nadu website. Information is provided for guidance and should be verified through official government sources before taking action.”
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Namma TN AI. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <span className="text-blue-400 font-semibold">Google Gemini 3.8 Flash</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
