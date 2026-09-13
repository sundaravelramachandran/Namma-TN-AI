import React from 'react';
import { TNService, AppLanguage } from '../types';
import { FileText, ArrowRight, CheckCircle, ExternalLink, Sparkles, Building } from 'lucide-react';

interface ServiceCardProps {
  service: TNService;
  language: AppLanguage;
  onViewDetails: (service: TNService) => void;
  onAskAboutService: (service: TNService) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  language,
  onViewDetails,
  onAskAboutService,
}) => {
  const isTa = language === 'ta';

  return (
    <div className="bg-white border border-slate-200/90 hover:border-blue-300 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Category & Online badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-100">
            {isTa ? service.category_tamil : service.category}
          </span>
          {service.is_online && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {isTa ? 'இ-சேவை உண்டு' : 'e-Sevai'}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-800 transition-colors mb-1">
          {isTa ? service.name_tamil : service.name}
        </h3>
        <p className="text-xs text-slate-500 font-medium mb-3">
          {isTa ? service.name : service.name_tamil}
        </p>

        {/* Department */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-3">
          <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="line-clamp-1">{isTa ? service.department_tamil : service.department}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {isTa ? service.description_tamil : service.description}
        </p>
      </div>

      <div>
        {/* Quick specs pill */}
        <div className="pt-3 border-t border-slate-100 mb-4 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {service.documents.length} {isTa ? 'ஆவணங்கள் தேவை' : 'documents required'}
            </span>
          </span>
          <span className="font-semibold text-slate-700">
            {isTa ? service.processing_time_tamil : service.processing_time}
          </span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(service)}
            className="w-full text-xs font-bold py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center justify-center gap-1"
          >
            <span>{isTa ? 'முழு விவரம்' : 'View Details'}</span>
          </button>

          <button
            onClick={() => onAskAboutService(service)}
            className="w-full text-xs font-bold py-2.5 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{isTa ? 'AI விளக்கம்' : 'Ask AI'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
