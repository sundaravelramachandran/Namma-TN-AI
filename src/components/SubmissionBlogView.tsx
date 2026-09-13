import React from 'react';
import { AppLanguage } from '../types';
import { Award, ShieldCheck, Sparkles, ExternalLink, Database, Cpu, Compass, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface SubmissionBlogViewProps {
  language: AppLanguage;
  onTryDemo: () => void;
}

export const SubmissionBlogView: React.FC<SubmissionBlogViewProps> = ({ language, onTryDemo }) => {
  const isTa = language === 'ta';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Blog Header */}
      <div className="border-b border-slate-200 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-4 border border-blue-200">
          <Award className="w-4 h-4 text-blue-700" />
          <span>Meet the Builders • Google Cloud Gen AI Academy & Hack2Skill Submission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          {isTa
            ? 'நம்ம TN AI: தமிழ்நாடு குடிமக்களுக்கான சரிபார்க்கப்பட்ட செயற்கை நுண்ணறிவு உதவியாளர்'
            : 'Building “Namma TN AI” — A Grounded, Citizen-Services AI Assistant for Tamil Nadu'}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <span>By Sundaravel Ramachandran</span>
          <span>•</span>
          <span>Google Gemini 3.8 Flash + RAG</span>
          <span>•</span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Verified Production Release
          </span>
        </div>
      </div>

      {/* 1. Inspiration & Problem */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
          <span>🌟</span>
          <span>{isTa ? 'உத்வேகம் மற்றும் சமூகப் பிரச்சினை' : 'Inspiration & The Civic Problem'}</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isTa
            ? 'தமிழ்நாடு கலைஞர் மகளிர் உரிமைத் திட்டம், புதுமைப் பெண், தமிழ்ப் புதல்வன், முதல் பட்டதாரி சலுகை மற்றும் ரேஷன் கார்டுகள் என இந்தியாவின் தலைசிறந்த நலத்திட்டங்களை செயல்படுத்துகிறது. ஆனாலும், ஏழை எளிய குடும்பங்கள், விவசாயிகள் மற்றும் மாணவிகள் சரியான ஆவணங்கள் தெரியாமல் இ-சேவை மையங்களுக்கும் வட்டாட்சியர் அலுவலகங்களுக்கும் பலமுறை அலைந்து சிரமப்படுகின்றனர்.'
            : 'Tamil Nadu is home to pioneering citizen welfare programs like Kalaignar Magalir Urimai Thittam (₹1,000/month basic income), Pudhumai Penn, First Graduate tuition concessions, and TNPDS Smart Ration Cards. However, everyday citizens — daily wagers, tenants, farmers, and students — repeatedly face four critical hurdles:'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong className="text-slate-900 block font-bold text-sm">
              {isTa ? '1. சரியான திட்டம் தெரியாமை' : '1. Navigational Blindness'}
            </strong>
            <span>{isTa ? 'தன் வாழ்க்கைத் தேவைக்கு எந்த அரசுத் துறை சான்றிதழ் பொருந்தும் எனத் தெரியாமை.' : 'Not knowing which specific certificate or scheme applies to their personal situation.'}</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong className="text-slate-900 block font-bold text-sm">
              {isTa ? '2. ஆவணங்கள் அதிர்ச்சி' : '2. Document Shocks at e-Sevai'}
            </strong>
            <span>{isTa ? 'வாடகை ஒப்பந்தம் அல்லது முந்தைய சான்றிதழ் இல்லாததால் விண்ணப்பங்கள் நிராகரிக்கப்படுவது.' : 'Facing rejection at service desks due to missing rental deeds, gas receipts, or affidavits.'}</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong className="text-slate-900 block font-bold text-sm">
              {isTa ? '3. சிக்கலான அரசு மொழி' : '3. Bureaucratic Jargon'}
            </strong>
            <span>{isTa ? 'அரசாணைகளில் உள்ள கடினமான நிர்வாகத் தமிழ் மற்றும் ஆங்கிலச் சொற்கள்.' : 'Dense circulars and legal statutes that intimidate non-technical citizens.'}</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong className="text-slate-900 block font-bold text-sm">
              {isTa ? '4. போலி தகவல்கள் & வதந்திகள்' : '4. WhatsApp Rumors & Intermediaries'}
            </strong>
            <span>{isTa ? 'இடைத்தரகர்கள் மற்றும் சமூக ஊடக போலி செய்திகளால் ஏமாற்றப்படுவது.' : 'Citizens losing money to unauthorized middlemen claiming false approvals.'}</span>
          </div>
        </div>
      </div>

      {/* 2. RAG Architecture */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
          <span>🏛️</span>
          <span>{isTa ? 'உண்மையான RAG கட்டமைப்பு (Architecture)' : 'Architecture: Grounded Multi-Stage RAG'}</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isTa
            ? 'அரசு சேவைகளில் தவறான தகவல் (Hallucination) இருக்கவே கூடாது. எனவே Namma TN AI-யில் கூகுள் Gemini 3.8 Flash மற்றும் உத்தியோகபூர்வ ஆவணப் பகுப்பாய்வு (Chunking) இணைக்கப்பட்டு உருவாக்கப்பட்டுள்ளது.'
            : 'In public administration, hallucinations are harmful. Namma TN AI implements a strict 5-stage Retrieval-Augmented Generation (RAG) architecture:'}
        </p>

        <div className="p-4 bg-slate-900 text-white rounded-2xl font-mono text-xs overflow-x-auto space-y-2">
          <p className="text-emerald-400 font-bold">// RAG Verification Flow</p>
          <p>Citizen Query (Tamil / English / Tanglish)</p>
          <p className="text-slate-400">  ↓ Intent Classifier & Tanglish Parser</p>
          <p className="text-slate-400">  ↓ Hybrid Search: Vector (text-embedding-004) + Lexical (BM25)</p>
          <p className="text-slate-400">  ↓ Granular Chunks Filter (Eligibility, Documents, Fees, Steps)</p>
          <p className="text-amber-300">  ↓ Confidence Evaluator (High / Medium / Unverified)</p>
          <p className="text-blue-300">  ↓ Gemini 3.8 Flash Structured Grounded Generation</p>
          <p className="text-emerald-400">  → Verified Response Card with Direct Citations & Portal Links</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs">
            <span className="font-bold text-blue-900 block mb-1">58 Semantic Chunks</span>
            <span className="text-slate-600">Every service split into overview, eligibility, documents, steps, and fee rules.</span>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
            <span className="font-bold text-emerald-900 block mb-1">"I Don't Know" Behavior</span>
            <span className="text-slate-600">Rejects unsupported schemes safely; instructs citizen to verify on tn.gov.in.</span>
          </div>
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs">
            <span className="font-bold text-purple-900 block mb-1">Tanglish & Tamil Mastery</span>
            <span className="text-slate-600">Handles mixed language naturally without losing legal grounding.</span>
          </div>
        </div>
      </div>

      {/* 3. Real Demonstration Queries */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
          <span>🎯</span>
          <span>{isTa ? 'உண்மையான மாதிரி சோதனைகள் (Verified Demo Scenarios)' : 'Real Citizen Test Cases'}</span>
        </h2>
        <div className="space-y-3">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <strong className="text-slate-900 font-bold block mb-1">
              1. வாடகை வீடு ரேஷன் கார்டு (Tenant Ration Card):
            </strong>
            <p className="text-slate-600">
              User asks: <em>“நாங்க சொந்த வீடு இல்லாம வாடகை வீட்ல இருக்கோம், ரேஷன் கார்டு அப்ளை பண்ண என்ன ஆவணங்கள் வேணும்?”</em>
              <br />
              <strong>AI Response:</strong> Accurately specifies Registered Tenancy Agreement, Gas connection receipt, Aadhaar for all members, and explains TNPDS field inspection by Supply Officer.
            </p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <strong className="text-slate-900 font-bold block mb-1">
              2. சிறு விவசாயி மானியம் (Small Farmer 2 Acres Subsidy):
            </strong>
            <p className="text-slate-600">
              User asks: <em>“எங்க அப்பா விவசாயி, 2 ஏக்கர் நிலம் இருக்கு, PM-KISAN அல்லது உழவர் மானியம் கிடைக்குமா?”</em>
              <br />
              <strong>AI Response:</strong> Identifies 2-acre land qualifies under the &lt;5 acre marginal farmer rule for PM-KISAN (₹6,000/yr) and Tamil Nadu Uzhavar Pathukappu Thittam.
            </p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <strong className="text-slate-900 font-bold block mb-1">
              3. புதுமைப் பெண் உயர்கல்வி உதவித்தொகை (Pudhumai Penn ₹1,000):
            </strong>
            <p className="text-slate-600">
              User asks: <em>“அரசுப் பள்ளியில் 6 முதல் 12 வரை படித்த மாணவிக்கு மாதம் ₹1,000 உதவித்தொகை எப்படி கிடைக்கும்?”</em>
              <br />
              <strong>AI Response:</strong> Clarifies EMIS school verification requirement and directs applicant to apply via the college nodal officer on the official portal.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center py-4">
        <button
          onClick={onTryDemo}
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all hover:scale-102"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{isTa ? 'செயல்முறை மாதிரி AI உதவியாளரை முயற்சிக்கவும்' : 'Try the Live Namma TN AI Assistant'}</span>
        </button>
      </div>
    </div>
  );
};
