import React from 'react';
import { AppLanguage } from '../types';
import {
  Sparkles,
  ShieldCheck,
  Award,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Languages,
  Cpu,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';

interface AboutViewProps {
  language: AppLanguage;
}

export const AboutView: React.FC<AboutViewProps> = ({ language }) => {
  const isTa = language === 'ta';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Hero Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-4 border border-blue-200/80">
          <Award className="w-4 h-4 text-blue-700" />
          <span>Google Cloud Gen AI Academy • Hack2Skill "Meet the Builders"</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          {isTa ? 'Namma TN AI பற்றி' : 'About Namma TN AI'}
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {isTa
            ? 'தமிழ்நாடு குடிமக்கள் அரசு சேவைகளையும் நலத்திட்டங்களையும் எளிய தமிழ் மற்றும் ஆங்கிலத்தில் சுலபமாக அறிந்துகொள்ள உதவும் செயற்கை நுண்ணறிவு உதவியாளர்.'
            : 'A citizen-services conversational AI assistant helping people understand Tamil Nadu government schemes, eligibility, and procedures in simple Tamil, English, and Tanglish.'}
        </p>
      </div>

      {/* 1. The Problem */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>{isTa ? 'எங்கள் முன் உள்ள சவால் (The Problem)' : 'The Civic Challenge'}</span>
        </div>
        <h2 className="text-xl font-black text-slate-900 mb-3">
          {isTa
            ? 'அரசுத் திட்டங்கள் இருந்தாலும், அவை பலருக்கு சென்றடைவதில் உள்ள தடைகள்'
            : 'Why Citizens Struggle with Government Information'}
        </h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
          {isTa
            ? 'தமிழ்நாட்டில் மாணவிகளுக்கான புதுமைப் பெண் திட்டம், மாணவர்களுக்கான தமிழ்ப் புதல்வன், குடும்பத் தலைவிகளுக்கான கலைஞர் மகளிர் உரிமைத் திட்டம், முதல் பட்டதாரி கட்டணச் சலுகை, சாதி மற்றும் வருமானச் சான்றிதழ்கள் என நூற்றுக்கணக்கான பயனுள்ள அரசு திட்டங்கள் உள்ளன. ஆனாலும் பல குடிமக்கள்:'
            : 'Tamil Nadu operates some of the most progressive welfare and e-governance systems in India. However, everyday citizens frequently struggle with:'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
            <span>
              <strong>{isTa ? 'சரியான திட்டம் தெரியாமை:' : 'Which scheme applies:'}</strong>{' '}
              {isTa ? 'தனக்கு எந்தச் சான்றிதழ் அல்லது திட்டம் பொருந்தும் எனத் தெரியாமல் இருப்பது.' : 'Not knowing which certificate or welfare scheme matches their personal need.'}
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
            <span>
              <strong>{isTa ? 'தகுதி குழப்பம்:' : 'Eligibility confusion:'}</strong>{' '}
              {isTa ? 'வருமான வரம்பு, நில உடைமை அல்லது வயது நிபந்தனைகள் புரிவதில் குழப்பம்.' : 'Whether they meet specific landholding, annual income, or school criteria.'}
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
            <span>
              <strong>{isTa ? 'ஆவணங்கள் அலைச்சல்:' : 'Document hurdles:'}</strong>{' '}
              {isTa ? 'தேவையான சரியான ஆவணங்கள் தெரியாமல் அரசு அலுவலகங்களுக்கும் இ-சேவை மையங்களுக்கும் அலைய நேரிடுவது.' : 'Making multiple trips to e-Sevai centres because of missing documents.'}
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
            <span>
              <strong>{isTa ? 'கடினமான அரசு மொழி:' : 'Formal bureaucratic jargon:'}</strong>{' '}
              {isTa ? 'அரசு ஆணைகள் மற்றும் விதிகளில் உள்ள சிக்கலான உத்தியோகபூர்வ மொழி நடை.' : 'Official circulars written in complex administrative vocabulary.'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. The Solution */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{isTa ? 'எங்கள் தீர்வு (The Solution)' : 'The Namma TN AI Solution'}</span>
        </div>
        <h2 className="text-xl font-black text-slate-900 mb-3">
          {isTa
            ? 'அரசு சேவைகளை உரையாடல் வழியே எளிமைப்படுத்தும் தொழில்நுட்பம்'
            : 'Conversational Civic Guidance Grounded in Ground Truth'}
        </h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
          {isTa
            ? 'Namma TN AI குடிமக்களின் இயல்பான மொழியில் (தமிழ், ஆங்கிலம் மற்றும் Tanglish) கேட்கப்படும் கேள்விகளைப் புரிந்துகொண்டு, தமிழ்நாடு அரசின் சரிபார்க்கப்பட்ட தகவல் தொகுப்பின் (Verified Knowledge Base) அடிப்படையில் துல்லியமான, எளிமையான விளக்கங்களை வழங்குகிறது.'
            : 'Namma TN AI provides a conversational interface that speaks the citizen’s language. Instead of forcing users to navigate complex dropdowns or search dense PDF gazettes, citizens can type or ask questions naturally in conversational Tamil, English, or Tanglish.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl">
            <Languages className="w-6 h-6 text-blue-700 mb-2" />
            <h4 className="font-bold text-sm text-slate-900 mb-1">{isTa ? 'முழுமையான இருமொழி' : 'Bilingual & Tanglish'}</h4>
            <p className="text-xs text-slate-600">
              {isTa ? 'தூய தமிழிலும், ஆங்கிலத்திலும், அன்றாட பேச்சுவழக்கு Tanglish-லும் தடையின்றிப் பேசலாம்.' : 'Understands queries like "Income certificate epdi apply panradhu?" effortlessly.'}
            </p>
          </div>

          <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-emerald-700 mb-2" />
            <h4 className="font-bold text-sm text-slate-900 mb-1">{isTa ? '100% சரிபார்க்கப்பட்டது' : 'Strict Zero-Hallucination'}</h4>
            <p className="text-xs text-slate-600">
              {isTa ? 'அரசு அதிகாரப்பூர்வ விதிமுறைகளின்படி மட்டுமே பதில்கள் உருவாக்கப்படுகின்றன.' : 'Gemini answers are grounded solely in verified TN e-Governance guidelines.'}
            </p>
          </div>

          <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-xl">
            <Layers className="w-6 h-6 text-purple-700 mb-2" />
            <h4 className="font-bold text-sm text-slate-900 mb-1">{isTa ? 'படிமுறைகள் & ஆவணங்கள்' : 'Structured Checklists'}</h4>
            <p className="text-xs text-slate-600">
              {isTa ? 'தேவையான ஆவணப் பட்டியல் மற்றும் இ-சேவை படிமுறைகள் வரிசையாகத் தரப்படும்.' : 'Returns clean document checklists, e-Sevai fees, and step-by-step instructions.'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Why Google AI? */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-9 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Google AI & Gemini Integration</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
          {isTa
            ? 'ஏன் கூகுள் ஜெமினி (Google Gemini)?'
            : 'Why Google Gemini Powers Namma TN AI'}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {isTa
            ? 'இந்திய மொழிகளில் கூகுள் ஜெமினி (Gemini 3.8 Flash) கொண்டுள்ள அபார மொழித்திறன் தமிழ், ஆங்கிலம் மற்றும் Tanglish கலந்த கேள்விகளைப் பிழையின்றிப் புரிந்துகொள்ள உதவுகிறது.'
            : 'Google Gemini 3.8 Flash offers industry-leading multilingual and code-switching capabilities, making it the ideal foundation for Indian vernacular citizen services.'}
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">{isTa ? 'இயல்பான மொழிப் புரிதல் (NLU)' : 'Natural Language Understanding & Intent Recognition'}</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {isTa
                  ? 'பயனாளியின் நோக்கம் என்ன என்பதை அடையாளம் கண்டு, சான்றிதழ் விசாரணையா அல்லது தகுதி சோதனையா என்பதைப் பகுப்பாய்வு செய்கிறது.'
                  : 'Distinguishes between specific certificate queries, broad welfare inquiries, eligibility questions, and document checklists.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <Search className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">{isTa ? 'தகவல் உறுதிப்படுத்தல் (Context Grounding)' : 'Knowledge-Base Grounding (Anti-Hallucination)'}</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {isTa
                  ? 'AI தானாகக் கற்பனை செய்து எந்தத் திட்டங்களையும் உருவாக்காமல், பயன்பாட்டின் சரிபார்க்கப்பட்ட தகவல்களை மட்டுமே ஆதாரமாகக் கொண்டு விடையளிக்கிறது.'
                  : 'Gemini is constrained via strict system instructions to rely purely on the verified registry context, completely eliminating fabricated rules, fees, or fake schemes.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">{isTa ? 'தொடர் வழிகாட்டும் வினாக்கள் (Smart Follow-ups)' : 'Clarification & Conversational Follow-up Logic'}</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {isTa
                  ? 'பயனாளி "எனக்கு அரசு உதவி வேண்டும்" என்று பொதுவாகக் கேட்டால், உடனடியாக தவறாக கணிக்காமல் கல்வி, விவசாயம், பெண்கள் நலன் எனப் பொருத்தமான தெரிவுகளைக் கேட்கிறது.'
                  : 'When a citizen gives ambiguous queries like "I want government aid", Gemini halts immediate assumptions and presents structured category options.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Trust & Safety Disclaimer */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 text-amber-950">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          <span>{isTa ? 'பொறுப்புத் துறப்பு & அதிகாரப்பூர்வ அறிவிப்பு' : 'Civic Trust, Safety & Legal Non-Affiliation'}</span>
        </div>
        <h3 className="font-extrabold text-base sm:text-lg mb-2 text-amber-950">
          {isTa
            ? 'Namma TN AI - குடிமக்கள் பயன்பாட்டிற்கான வழிகாட்டி மட்டுமே'
            : 'Namma TN AI is an Independent Informational Prototype'}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-amber-900 mb-4">
          {isTa
            ? 'Namma TN AI என்பது தமிழ்நாடு அரசின் அதிகாரப்பூர்வ இணையதளம் அல்ல. இது Google Cloud Gen AI Academy "Meet the Builders" பிரச்சாரத்திற்காக உருவாக்கப்பட்ட கல்வி மற்றும் வழிகாட்டுதல் முன்மாதிரி ஆகும். குடிமக்கள் எந்தவொரு சான்றிதழ் அல்லது திட்டத்திற்கும் விண்ணப்பிப்பதற்கு முன் தமிழ்நாடு அரசின் அதிகாரப்பூர்வ தளங்களான tnesevai.tn.gov.in மற்றும் tn.gov.in ஆகியவற்றில் தற்போதைய அதிகாரப்பூர்வ அரசு ஆணைகளைச் சரிபார்த்துக் கொள்ளுமாறு கேட்டுக்கொள்ளப்படுகிறார்கள்.'
            : 'Namma TN AI is an independent informational prototype developed for the Google Cloud Gen AI Academy / Hack2Skill "Meet the Builders" campaign and is not an official Government of Tamil Nadu website. All guidance is synthesized from public government resources and must be verified through official government channels (tnesevai.tn.gov.in) before filing formal applications.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-blue-900">
          <a
            href="https://www.tnesevai.tn.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline hover:text-blue-700"
          >
            <span>Tamil Nadu e-Governance Agency (TNeGA)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span>•</span>
          <a
            href="https://www.tn.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline hover:text-blue-700"
          >
            <span>Government of Tamil Nadu Portal (tn.gov.in)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
