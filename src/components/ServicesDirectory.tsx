import React, { useState, useMemo } from 'react';
import { TNService, AppLanguage } from '../types';
import { TN_SERVICES } from '../data/knowledgeBase';
import { ServiceCard } from './ServiceCard';
import { Search, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServicesDirectoryProps {
  language: AppLanguage;
  onViewDetails: (service: TNService) => void;
  onAskAboutService: (service: TNService) => void;
}

export const ServicesDirectory: React.FC<ServicesDirectoryProps> = ({
  language,
  onViewDetails,
  onAskAboutService,
}) => {
  const isTa = language === 'ta';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'All', label: 'All Services', label_tamil: 'அனைத்து சேவைகள்' },
    { id: 'Certificates', label: 'Certificates', label_tamil: 'சான்றிதழ்கள்' },
    { id: 'Education', label: 'Education', label_tamil: 'கல்வி' },
    { id: 'Women', label: 'Women Welfare', label_tamil: 'பெண்கள் நலன்' },
    { id: 'Students', label: 'Students', label_tamil: 'மாணவர்கள்' },
    { id: 'Employment', label: 'Employment', label_tamil: 'வேலைவாய்ப்பு' },
    { id: 'Agriculture', label: 'Agriculture', label_tamil: 'விவசாயம்' },
    { id: 'Healthcare', label: 'Healthcare', label_tamil: 'சுகாதாரம்' },
  ];

  const filteredServices = useMemo(() => {
    return TN_SERVICES.filter((service) => {
      const matchCategory =
        selectedCategory === 'All' || service.category === selectedCategory;

      if (!searchQuery.trim()) return matchCategory;

      const q = searchQuery.toLowerCase();
      const matchQuery =
        service.name.toLowerCase().includes(q) ||
        service.name_tamil.toLowerCase().includes(q) ||
        service.department.toLowerCase().includes(q) ||
        service.department_tamil.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.description_tamil.toLowerCase().includes(q) ||
        service.keywords.some((k) => k.toLowerCase().includes(q));

      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Directory Title & Intro */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{isTa ? 'தமிழ்நாடு அரசு சேவைகள் தகவல் தளம்' : 'Tamil Nadu Government Services Directory'}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          {isTa ? 'அரசு சேவைகள் மற்றும் திட்டங்கள்' : 'Government Services & Welfare Directory'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          {isTa
            ? 'அனைத்து முக்கிய தமிழ்நாடு அரசு சான்றிதழ்கள், மகளிர் உதவித்தொகை, மாணவர் நலத்திட்டங்கள் மற்றும் விவசாய மானியங்களின் முழு பட்டியல்.'
            : 'Explore verified Tamil Nadu revenue certificates, student scholarships, women welfare stipends, and farmer subsidies.'}
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs mb-8 space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isTa
                ? 'சான்றிதழ் அல்லது திட்டத்தின் பெயரைத் தேடுங்கள்... (எ.கா: வருமானம், முதல் பட்டதாரி, புதுமைப் பெண்)'
                : 'Search services, certificates, or keywords (e.g. Income, First Graduate, OBC)...'
            }
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900 placeholder:text-slate-400"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isTa ? 'பிரிவு:' : 'Category:'}</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isTa ? cat.label_tamil : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-500 font-semibold">
        <span>
          {isTa
            ? `${filteredServices.length} சேவைகள் கண்டறியப்பட்டன`
            : `Showing ${filteredServices.length} verified services`}
        </span>
        <span className="flex items-center gap-1 text-emerald-700">
          <CheckCircle2 className="w-4 h-4" />
          {isTa ? 'அனைத்தும் TNeGA வழிகாட்டுதலின்படி சரிபார்க்கப்பட்டது' : 'All cross-verified with TNeGA'}
        </span>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
              onViewDetails={onViewDetails}
              onAskAboutService={onAskAboutService}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-700 font-bold text-base mb-1">
            {isTa ? 'பொருத்தமான சேவைகள் எதுவும் கிடைக்கவில்லை' : 'No matching services found'}
          </p>
          <p className="text-xs text-slate-500 mb-4">
            {isTa
              ? 'வேறு சொற்களைப் பயன்படுத்தி தேடவும் அல்லது AI உதவியாளரிடம் நேரடியாகக் கேட்கவும்.'
              : 'Try searching with different keywords or ask Namma TN AI directly.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors"
          >
            {isTa ? 'அனைத்து சேவைகளையும் காட்டு' : 'Reset Filters'}
          </button>
        </div>
      )}
    </div>
  );
};
