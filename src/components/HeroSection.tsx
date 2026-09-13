import React from 'react';
import { AppLanguage } from '../types';
import { Sparkles, ShieldCheck, ArrowDown, HelpCircle, CheckCircle, Award } from 'lucide-react';

interface HeroSectionProps {
  language: AppLanguage;
  onAskClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language, onAskClick }) => {
  const isTa = language === 'ta';

  return (
    <section className="relative overflow-hidden pt-10 pb-8 sm:pt-14 sm:pb-12 bg-radial from-blue-50/70 via-slate-50 to-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Civic badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-semibold mb-6 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>
              {isTa
                ? 'தமிழ்நாடு அரசு சேவைகளுக்கான சரிபார்க்கப்பட்ட தகவல் தளம்'
                : 'Verified Tamil Nadu Government Services Intelligence'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {isTa ? (
              <>
                அரசு சேவைகளை <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-700">
                  எளிதாக அறிந்துகொள்ளுங்கள்.
                </span>
              </>
            ) : (
              <>
                Government services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-700">
                  made simpler.
                </span>
              </>
            )}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            {isTa
              ? 'உங்கள் கேள்வியை தமிழ், ஆங்கிலம் அல்லது Tanglish-ல் கேட்கலாம். சரிபார்க்கப்பட்ட தகவல்களைக் கொண்டு உங்கள் தேவைகளுக்கான தமிழ்நாடு அரசு சேவைகள் மற்றும் நலத்திட்டங்களை Namma TN AI எளிதாக விளக்குகிறது.'
              : 'Ask your question in Tamil, English, or Tanglish. Namma TN AI helps you understand relevant Tamil Nadu government services using verified information.'}
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onAskClick}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-700/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{isTa ? 'நம்ம TN AI-யிடம் கேளுங்கள்' : 'Ask Namma TN'}</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="#popular-services"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-300 shadow-2xs transition-all"
            >
              <span>{isTa ? 'முக்கிய சேவைகளைப் பார்க்க' : 'Browse Popular Services'}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">{isTa ? '100% உண்மை' : '100% Verified'}</div>
                <div className="text-slate-500">{isTa ? 'அரசு விதிகளுக்கு உட்பட்டது' : 'Official TN Rules'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">{isTa ? 'இருமொழி உதவி' : 'Bilingual & Tanglish'}</div>
                <div className="text-slate-500">{isTa ? 'தமிழ் & English' : 'Tamil & English'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">{isTa ? 'இ-சேவை இணைப்பு' : 'e-Sevai Portal'}</div>
                <div className="text-slate-500">{isTa ? 'நேரடி இணையதள சுட்டிகள்' : 'Direct Portal Links'}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">{isTa ? 'Google Gemini' : 'Google Gemini'}</div>
                <div className="text-slate-500">{isTa ? 'Gen AI தொழில்நுட்பம்' : 'Grounded AI Engine'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
