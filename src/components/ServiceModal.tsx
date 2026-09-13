import React, { useEffect } from 'react';
import { TNService, AppLanguage } from '../types';
import {
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Layers,
  Clock,
  Coins,
  Building,
  AlertTriangle,
  Sparkles
} from 'lucide-react';

interface ServiceModalProps {
  service: TNService | null;
  language: AppLanguage;
  onClose: () => void;
  onAskAI: (service: TNService) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  language,
  onClose,
  onAskAI,
}) => {
  const isTa = language === 'ta';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {isTa ? service.category_tamil : service.category}
            </span>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {isTa ? 'அதிகாரப்பூர்வ தமிழ்நாடு அரசு சேவை' : 'Official TN Citizen Service'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mb-1">
            {isTa ? service.name_tamil : service.name}
          </h2>
          <p className="text-sm text-slate-300 font-medium">
            {isTa ? service.name : service.name_tamil}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
            <Building className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{isTa ? service.department_tamil : service.department}</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-slate-800">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              {isTa ? 'சேவை விளக்கம்' : 'About this Service'}
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {isTa ? service.description_tamil : service.description}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isTa ? 'தகுதி வரம்புகள்' : 'Eligibility Criteria'}</span>
            </h4>
            <ul className="space-y-2">
              {(isTa ? service.eligibility_tamil : service.eligibility).map((cond, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                  <span>{cond}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>{isTa ? 'விண்ணப்பிக்க தேவையான ஆவணங்கள்' : 'Required Documents'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(isTa ? service.documents_tamil : service.documents).map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs sm:text-sm text-slate-800 flex items-start gap-2 font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-step application */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-700" />
              <span>{isTa ? 'விண்ணப்பிக்கும் படிமுறைகள் (e-Sevai & Online)' : 'Application Procedure'}</span>
            </h4>
            <div className="space-y-3">
              {(isTa ? service.application_steps_tamil : service.application_steps).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <div className="pt-0.5">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Facts / Fee / Processing Time */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Clock className="w-4 h-4 text-slate-600" />
                <span>{isTa ? 'கால அளவு' : 'Processing Time'}</span>
              </div>
              <div className="text-sm font-bold text-slate-800">
                {isTa ? service.processing_time_tamil : service.processing_time}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Coins className="w-4 h-4 text-slate-600" />
                <span>{isTa ? 'அரசு கட்டணம்' : 'Government Fee'}</span>
              </div>
              <div className="text-sm font-bold text-slate-800">
                {isTa ? service.fee_tamil : service.fee}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{isTa ? 'சரிபார்க்கப்பட்டது' : 'Verified'}</span>
              </div>
              <div className="text-sm font-bold text-slate-800">
                {service.verified_date || service.last_verified || '2025-02-15'}
              </div>
            </div>
          </div>

          {/* Official Issuing Authority & Source */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-slate-500">{isTa ? 'அதிகாரப்பூர்வ வழங்கல் அதிகாரம்:' : 'Official Issuing Authority:'} </span>
              <strong className="text-slate-800">{service.issuing_authority || service.department}</strong>
            </div>
            {service.gazette_ref && (
              <span className="text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                Ref: {service.gazette_ref}
              </span>
            )}
          </div>

          {/* Notes */}
          {service.notes && (
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">{isTa ? 'முக்கிய குறிப்பு:' : 'Important Note:'} </strong>
                <span>{isTa ? service.notes_tamil : service.notes}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              onAskAI(service);
            }}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{isTa ? 'இச்சேவை பற்றி AI-யிடம் கேள்' : 'Ask Namma TN AI about this'}</span>
          </button>

          <a
            href={service.official_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-xs"
          >
            <span>{isTa ? 'அதிகாரப்பூர்வ தளத்திற்குச் செல் ↗' : 'Visit Official Portal ↗'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
