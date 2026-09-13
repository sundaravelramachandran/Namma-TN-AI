import React, { useState, useEffect } from 'react';
import { AppLanguage, TNService } from './types';
import { TN_SERVICES } from './data/knowledgeBase';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AIChatBox } from './components/AIChatBox';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { ServicesDirectory } from './components/ServicesDirectory';
import { AboutView } from './components/AboutView';
import { SubmissionBlogView } from './components/SubmissionBlogView';
import { Footer } from './components/Footer';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
  Users,
  Compass
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'services' | 'about' | 'blog'>('home');
  const [language, setLanguage] = useState<AppLanguage>('ta');
  const [selectedService, setSelectedService] = useState<TNService | null>(null);
  const [activeAIQuery, setActiveAIQuery] = useState<string>('');

  const isTa = language === 'ta';

  // Highlighted popular services as specifically requested:
  // Income Certificate, Community Certificate, Nativity Certificate, First Graduate Certificate, Scholarships, Women Welfare, Smart Ration Card, PM-KISAN
  const popularServiceIds = [
    'income-certificate',
    'community-certificate',
    'nativity-certificate',
    'first-graduate-certificate',
    'pudhumai-penn',
    'kalaignar-magalir-urimai-thittam',
    'smart-ration-card',
    'pm-kisan-tn-farmer'
  ];

  const popularServices = popularServiceIds
    .map((id) => TN_SERVICES.find((s) => s.id === id))
    .filter(Boolean) as TNService[];

  const handleAskClick = () => {
    if (currentTab !== 'home') setCurrentTab('home');
    setTimeout(() => {
      const el = document.getElementById('ai-chat-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAskAboutService = (service: TNService) => {
    const q = isTa
      ? `${service.name_tamil} எப்படி விண்ணப்பிப்பது? தேவையான ஆவணங்கள் என்ன?`
      : `How to apply for ${service.name}? What are the required documents?`;

    setActiveAIQuery(q);
    if (currentTab !== 'home') setCurrentTab('home');

    setTimeout(() => {
      const el = document.getElementById('ai-chat-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <div>
            {/* Hero Section */}
            <HeroSection language={language} onAskClick={handleAskClick} />

            {/* AI Conversational Assistant Section */}
            <div className="py-10 px-4 sm:px-6">
              <AIChatBox
                key={activeAIQuery || 'default'}
                language={language}
                onSelectService={setSelectedService}
                initialQuery={activeAIQuery}
              />
            </div>

            {/* Popular Services Section */}
            <section id="popular-services" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{isTa ? 'அடிக்கடி கேட்கப்படும் சேவைகள்' : 'Most Popular Services'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {isTa ? 'அதிகம் தேவைப்படும் தமிழ்நாடு அரசு சேவைகள்' : 'Frequently Requested Citizen Services'}
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    {isTa
                      ? 'வருமானம், சாதி, இருப்பிடம் மற்றும் மகளிர்/மாணவர் நலத்திட்டங்களுக்கான உடனடி வழிகாட்டி.'
                      : 'Essential certificates and direct welfare schemes for students, families, and citizens.'}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 bg-white hover:bg-blue-50/60 border border-slate-200 px-4 py-2.5 rounded-xl shadow-2xs transition-colors shrink-0"
                >
                  <span>{isTa ? 'அனைத்து 14 சேவைகளையும் பார்க்க' : 'View All 14 Services'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Grid of 6 popular cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    language={language}
                    onViewDetails={setSelectedService}
                    onAskAboutService={handleAskAboutService}
                  />
                ))}
              </div>
            </section>

            {/* 3-Step Civic Process Guide */}
            <section className="bg-white border-y border-slate-200/80 py-14">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {isTa ? 'எளிய வழிமுறை' : 'How Namma TN Works'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
                    {isTa ? 'அரசு சேவைகளைப் பெறுவது இனி எளிது' : '3 Simple Steps to Access Citizen Services'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {isTa
                      ? 'அலையாமல், தவறான தகவல்களை நம்பாமல் சரியான அரசு ஆவணங்களுடன் தயாராகுங்கள்.'
                      : 'Eliminate confusion and prepare the exact documents needed before visiting e-Sevai centres.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Step 1 */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 font-black text-base flex items-center justify-center mb-4">
                      1
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-2">
                      {isTa ? 'உங்கள் மொழியில் கேளுங்கள்' : 'Ask in Your Natural Language'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isTa
                        ? 'தமிழ், ஆங்கிலம் அல்லது Tanglish-ல் எளிய முறையில் உங்கள் தேவையைத் தட்டச்சு செய்யுங்கள். ஜெமினி AI உங்கள் நோக்கத்தைப் புரிந்துகொள்ளும்.'
                        : 'Type questions naturally in Tamil, English, or Tanglish. Gemini AI detects your intent and identifies the right scheme.'}
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-black text-base flex items-center justify-center mb-4">
                      2
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-2">
                      {isTa ? 'சரிபார்க்கப்பட்ட ஆவணப் பட்டியல்' : 'Get Verified Checklists'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isTa
                        ? 'அரசு விதிமுறைகளின்படி தகுதி வரம்புகள், தேவையான ஆவணங்கள் மற்றும் கட்டண விவரங்களை உடனுக்குடன் சரிபார்க்கவும்.'
                        : 'Receive clear, grounded eligibility rules, document checklists, and application steps from official state databases.'}
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 font-black text-base flex items-center justify-center mb-4">
                      3
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-2">
                      {isTa ? 'அதிகாரப்பூர்வ தளம் வழியே விண்ணப்பிக்க' : 'Apply via Official Portals'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isTa
                        ? 'தமிழ்நாடு இ-சேவை தளம் (tnesevai.tn.gov.in) அல்லது உங்கள் பகுதி இ-சேவை மையம் வழியே தைரியமாக விண்ணப்பியுங்கள்.'
                        : 'Visit authorized e-Sevai Kendra or directly apply online at tnesevai.tn.gov.in with all required documents ready.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === 'services' && (
          <ServicesDirectory
            language={language}
            onViewDetails={setSelectedService}
            onAskAboutService={handleAskAboutService}
          />
        )}

        {currentTab === 'about' && <AboutView language={language} />}

        {currentTab === 'blog' && (
          <SubmissionBlogView
            language={language}
            onTryDemo={() => {
              setCurrentTab('home');
              handleAskClick();
            }}
          />
        )}
      </main>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        language={language}
        onClose={() => setSelectedService(null)}
        onAskAI={handleAskAboutService}
      />

      {/* Footer */}
      <Footer language={language} onNavigate={setCurrentTab} />
    </div>
  );
}
