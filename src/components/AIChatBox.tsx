import React, { useState, useRef } from 'react';
import { AppLanguage, AIChatResponse, ChatMessage, TNService } from '../types';
import { TN_SERVICES } from '../data/knowledgeBase';
import {
  Send,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileText,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  BookOpen,
  Building,
  UserCheck,
  Loader2,
  Clock,
  Layers,
  Search,
  CheckCircle,
  Database,
  Info,
  BadgeAlert,
  Compass
} from 'lucide-react';

interface AIChatBoxProps {
  language: AppLanguage;
  onSelectService?: (service: TNService) => void;
  initialQuery?: string;
}

export const AIChatBox: React.FC<AIChatBoxProps> = ({
  language,
  onSelectService,
  initialQuery = '',
}) => {
  const isTa = language === 'ta';
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Phase 4: 6 Highly realistic real-life Tamil & Tanglish questions
  const realisticQuestions = [
    {
      icon: '🏠',
      category: isTa ? 'வாடகை வீடு ரேஷன் கார்டு' : 'Tenant Ration Card',
      label: isTa
        ? 'வாடகை வீட்ல இருக்கோம், ரேஷன் கார்டு அப்ளை பண்ண என்ன ஆவணங்கள் வேணும்?'
        : 'Living in a rented house, what documents are needed to apply for a ration card?',
      query: 'நாங்க சொந்த வீடு இல்லாம வாடகை வீட்ல இருக்கோம், புதிய ரேஷன் கார்டு அப்ளை பண்ண என்ன ஆவணங்கள் வேணும்?',
      badge: isTa ? 'அதிகாரப்பூர்வ TNPDS' : 'Official TNPDS'
    },
    {
      icon: '🌾',
      category: isTa ? 'சிறு விவசாயி மானியம்' : 'Farmer 2 Acres Subsidy',
      label: isTa
        ? 'எங்க அப்பா விவசாயி, 2 ஏக்கர் நிலம் இருக்கு, PM-KISAN அல்லது உழவர் மானியம் கிடைக்குமா?'
        : 'My father is a farmer with 2 acres, can we get PM-KISAN or TN subsidy?',
      query: 'எங்க அப்பா விவசாயி, 2 ஏக்கர் நிலம் இருக்கு, PM-KISAN அல்லது தமிழ்நாடு உழவர் மானியம் கிடைக்குமா?',
      badge: isTa ? 'வேளாண்மைத் துறை' : 'Agriculture Dept'
    },
    {
      icon: '🎓',
      category: isTa ? 'புதுமைப் பெண் திட்டம்' : 'Pudhumai Penn ₹1,000',
      label: isTa
        ? 'அரசுப் பள்ளியில் படித்த கல்லூரி மாணவிக்கு மாதம் ₹1,000 பெற எப்படி விண்ணப்பிப்பது?'
        : 'How does a girl student from govt school apply for ₹1,000 monthly college aid?',
      query: 'அரசுப் பள்ளியில் 6 முதல் 12 வரை படித்து இப்போது கல்லூரியில் சேர்ந்த மாணவிக்கு மாதம் ₹1,000 உதவித்தொகை பெற எப்படி விண்ணப்பிப்பது?',
      badge: isTa ? 'உயர்கல்வி உறுதி' : 'Higher Education'
    },
    {
      icon: '📜',
      category: isTa ? 'முதல் பட்டதாரி சலுகை' : 'First Graduate Concession',
      label: isTa
        ? 'குடும்பத்தில் நான் தான் முதல் பட்டதாரி, என்ஜினியரிங் காலேஜ் பீஸ் குறைய என்ன செய்யணும்?'
        : 'First graduate in my family, what certificate reduces engineering college fees?',
      query: 'குடும்பத்தில் நான் தான் முதல் பட்டதாரி, பொறியியல் கல்லூரியில் கல்விக் கட்டணச் சலுகை பெற என்ன சான்றிதழ் தேவை?',
      badge: isTa ? 'TNEA கட்டண விலக்கு' : 'TNEA Fee Waiver'
    },
    {
      icon: '❓',
      category: isTa ? 'பொது உதவி (Clarification)' : 'Clarification Demo',
      label: isTa
        ? 'எனக்கு அரசு உதவி வேண்டும், என்னென்ன திட்டங்கள் இருக்கு?'
        : 'I need government assistance, what schemes are available?',
      query: 'எனக்கு அரசு உதவி வேண்டும், என்னென்ன திட்டங்கள் இருக்கு?',
      badge: isTa ? 'வழிகாட்டுதல்' : 'Smart Intake'
    },
    {
      icon: '🗣️',
      category: isTa ? 'Tanglish வினா' : 'Tanglish Colloquial',
      label: isTa
        ? 'Appa expired aagitaaru, family சொத்து மாத்த Legal Heir certificate epdi apply panradhu?'
        : 'Father passed away, how to apply for Legal Heir certificate to transfer property?',
      query: 'Appa expired aagitaaru, family சொத்து மாத்த Legal Heir certificate epdi apply panradhu?',
      badge: isTa ? 'Tanglish முறை' : 'Tanglish AI'
    },
  ];

  const handleSend = async (queryToSend?: string) => {
    const q = (queryToSend !== undefined ? queryToSend : inputQuery).trim();
    if (!q || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, language }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const aiResponse: AIChatResponse = data.response;

      // Match full service object from knowledge base if available
      let matchedService: TNService | undefined;
      if (aiResponse.matched_service_id) {
        matchedService = TN_SERVICES.find((s) => s.id === aiResponse.matched_service_id);
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: aiResponse.summary,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        structuredData: aiResponse,
        matchedService,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: isTa
          ? 'மன்னிக்கவும், தகவல்களைப் பெறுவதில் சிறு தாமதம் ஏற்பட்டுள்ளது. அதிகாரப்பூர்வ இ-சேவை தளத்தைப் பார்க்கவும்.'
          : 'Unable to connect to the assistant service at this moment. Please verify on the official Tamil Nadu e-Sevai portal.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        rawError: err.message,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([]);
    setInputQuery('');
  };

  return (
    <div id="ai-chat-section" className="w-full max-w-4xl mx-auto">
      {/* Container Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
        {/* Box Top Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-700/80 border border-blue-400/30 flex items-center justify-center shadow-inner">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-bold text-base sm:text-lg tracking-tight">
                  {isTa ? 'நம்ம TN AI - குடிமக்கள் சேவை மையம்' : 'Namma TN Citizen AI Assistant'}
                </h2>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  RAG Grounded
                </span>
              </div>
              <p className="text-xs text-blue-200">
                {isTa
                  ? 'தமிழ், ஆங்கிலம் அல்லது Tanglish-ல் கேட்கலாம் — சரிபார்க்கப்பட்ட அரசு விதிகள் மட்டுமே'
                  : 'Ask in Tamil, English, or Tanglish — grounded with verified Tamil Nadu government rules'}
              </p>
            </div>
          </div>

          {messages.length > 0 && (
            <button
              onClick={handleResetChat}
              className="flex items-center gap-1.5 text-xs text-blue-200 hover:text-white bg-blue-950/40 hover:bg-blue-950/70 px-3 py-1.5 rounded-lg border border-blue-400/20 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isTa ? 'புதிய உரையாடல்' : 'New Chat'}</span>
            </button>
          )}
        </div>

        {/* Phase 4: Quick Launch "Try a real question" strip */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              {isTa ? 'உண்மையான கேள்விகள் (Try a Real Question):' : 'Try a Real Question:'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {realisticQuestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item.query)}
                disabled={isLoading}
                className="text-left bg-white hover:bg-blue-50/80 border border-slate-200/90 hover:border-blue-300 p-2.5 rounded-xl transition-all shadow-2xs group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-800">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-700 group-hover:text-blue-950 font-medium line-clamp-2 leading-relaxed">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Chat History & Dynamic Responses */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[750px] overflow-y-auto bg-slate-50/40">
          {messages.length === 0 ? (
            <div className="py-8 px-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3 shadow-xs">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                {isTa ? 'எந்த அரசு சேவையைப் பற்றி அறிய விரும்புகிறீர்கள்?' : 'Which government service can we help you with?'}
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
                {isTa
                  ? 'மேலே உள்ள மாதிரி கேள்விகளில் ஒன்றை தேர்வு செய்யவும் அல்லது உங்கள் சொந்த கேள்வியை நேரடியாக டைப் செய்யவும்.'
                  : 'Select one of the verified questions above or type your exact query below.'}
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="space-y-4">
                {/* User Message Bubble */}
                {msg.sender === 'user' && (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] sm:max-w-[70%] bg-blue-800 text-white px-4 py-3 rounded-2xl rounded-tr-xs shadow-xs text-sm sm:text-base leading-relaxed">
                      <p className="font-medium">{msg.text}</p>
                      <span className="block text-right text-[10px] text-blue-200/80 mt-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                )}

                {/* AI Assistant Message Bubble & Rich Structured Card */}
                {msg.sender === 'assistant' && (
                  <div className="flex flex-col gap-3">
                    {/* Error fallback */}
                    {msg.rawError && (
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">{msg.text}</p>
                          <a
                            href="https://www.tnesevai.tn.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-700 font-medium mt-1 inline-block"
                          >
                            Go to official tnesevai.tn.gov.in ↗
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Clarification Flow Card (e.g. When user asked vague "எனக்கு உதவி வேண்டும்") */}
                    {msg.structuredData?.needs_clarification && (
                      <div className="bg-white border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                        <div className="flex items-center gap-2.5 text-blue-900 font-bold text-base mb-2">
                          <HelpCircle className="w-5 h-5 text-blue-600" />
                          <span>
                            {msg.structuredData.clarification_question ||
                              (isTa
                                ? 'உங்களுக்கு சரியான திட்டத்தைத் தேட சில தகவல்கள் தேவை.'
                                : 'To guide you correctly, please select a department category:')}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{msg.structuredData.summary}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                          {msg.structuredData.clarification_options?.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleSend(opt.query)}
                              className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 p-3 rounded-xl text-left transition-all group"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover:text-blue-900">
                                {isTa ? opt.label_tamil : opt.label}
                              </div>
                              <div className="text-[11px] text-slate-500 group-hover:text-blue-700 mt-0.5 line-clamp-1">
                                {isTa ? opt.label : opt.label_tamil}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Phase 3: "I Don't Know" Behavior for Unsupported/Out of Scope Schemes */}
                    {msg.structuredData && msg.structuredData.intent === 'out_of_scope_unsupported' && (
                      <div className="bg-amber-50/90 border border-amber-300/80 rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base mb-2">
                          <BadgeAlert className="w-5 h-5 text-amber-700 shrink-0" />
                          <span>
                            {isTa
                              ? 'சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ தகவல் கிடைக்கவில்லை'
                              : 'Official Information Needs Verification'}
                          </span>
                        </div>
                        <p className="text-sm text-amber-950 leading-relaxed mb-4">
                          {msg.structuredData.summary}
                        </p>

                        <div className="bg-white/80 border border-amber-200 rounded-xl p-3.5 space-y-2 text-xs text-amber-900 mb-4">
                          <div className="font-bold flex items-center gap-1.5 text-amber-800">
                            <Info className="w-3.5 h-3.5" />
                            <span>{isTa ? 'பாதுகாப்பு வழிகாட்டுதல்:' : 'Citizen Safety Notice:'}</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-slate-700">
                            <li>{isTa ? 'சமூக வலைதளங்களில் பரவும் உறுதிப்படுத்தப்படாத செய்திகளை நம்ப வேண்டாம்.' : 'Do not rely on unverified social media claims.'}</li>
                            <li>{isTa ? 'அரசு கட்டண ரசீது இன்றி இடைத்தரகர்களுக்கு பணம் செலுத்த வேண்டாம்.' : 'Never pay any fees without an official government acknowledgement receipt.'}</li>
                            <li>{isTa ? 'அரசு தளம் www.tn.gov.in அல்லது வட்டாட்சியர் அலுவலகத்தில் உறுதி செய்யவும்.' : 'Confirm authenticity directly via www.tn.gov.in or your local Taluk office.'}</li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href="https://www.tn.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-blue-800 hover:bg-blue-900 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors"
                          >
                            <span>{isTa ? 'அதிகாரப்பூர்வ TN அரசு போர்டல் ↗' : 'Visit Official TN Portal ↗'}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Full Structured Service Response */}
                    {msg.structuredData && !msg.structuredData.needs_clarification && msg.structuredData.intent !== 'out_of_scope_unsupported' && (
                      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100">
                        {/* Header Banner with Grounding Confidence Badge */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 sm:p-6">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                {msg.matchedService?.category || 'Tamil Nadu Civic Service'}
                              </span>
                              {msg.matchedService?.is_online && (
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                                  {isTa ? 'இ-சேவை வசதி உண்டு' : 'e-Sevai Available'}
                                </span>
                              )}
                              {msg.structuredData.is_tanglish && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                                  Tanglish Detected
                                </span>
                              )}
                            </div>

                            {/* Grounding Confidence & Verification Date */}
                            <div className="flex items-center gap-2 text-[11px]">
                              <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-500/30">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                {isTa ? 'சரிபார்க்கப்பட்டது: 2025' : 'Verified: 2025'}
                              </span>
                              {msg.structuredData.grounding_confidence === 'high' && (
                                <span className="text-emerald-300 flex items-center gap-1 font-medium">
                                  <Database className="w-3 h-3 text-emerald-400" />
                                  High Confidence RAG
                                </span>
                              )}
                            </div>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1">
                            {msg.structuredData.service_title_tamil || msg.matchedService?.name_tamil || msg.structuredData.service_title}
                          </h3>
                          {msg.structuredData.service_title && (
                            <p className="text-sm text-slate-300 font-medium">
                              {msg.structuredData.service_title}
                            </p>
                          )}
                          {msg.matchedService?.department && (
                            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5 text-amber-400" />
                              <span>{isTa ? msg.matchedService.department_tamil : msg.matchedService.department}</span>
                            </p>
                          )}
                        </div>

                        {/* Section 1: Summary / Explanation */}
                        <div className="p-5 sm:p-6">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{isTa ? 'இது என்ன? (விளக்கம்)' : 'What is this service?'}</span>
                          </div>
                          <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                            {msg.structuredData.summary}
                          </p>
                        </div>

                        {/* Section 2: Eligibility */}
                        {msg.structuredData.eligibility && msg.structuredData.eligibility.length > 0 && (
                          <div className="p-5 sm:p-6 bg-slate-50/60">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                              <UserCheck className="w-4 h-4 text-emerald-600" />
                              <span>{isTa ? 'யாருக்கு? (தகுதி வரம்புகள்)' : 'Who may be eligible?'}</span>
                            </div>
                            <ul className="space-y-2">
                              {msg.structuredData.eligibility.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-normal">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Section 3: Required Documents */}
                        {msg.structuredData.documents && msg.structuredData.documents.length > 0 && (
                          <div className="p-5 sm:p-6">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
                              <FileText className="w-4 h-4 text-indigo-600" />
                              <span>{isTa ? 'தேவையான ஆவணங்கள் (Checklist)' : 'Required Documents'}</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {msg.structuredData.documents.map((doc, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 p-2.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs sm:text-sm text-slate-800 font-medium"
                                >
                                  <span className="w-5 h-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <span>{doc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Section 4: Application Procedure */}
                        {msg.structuredData.steps && msg.structuredData.steps.length > 0 && (
                          <div className="p-5 sm:p-6 bg-slate-50/60">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                              <Layers className="w-4 h-4 text-amber-600" />
                              <span>{isTa ? 'எப்படி விண்ணப்பிப்பது? (படிமுறைகள்)' : 'Application Procedure'}</span>
                            </div>
                            <div className="space-y-2.5">
                              {msg.structuredData.steps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-normal">
                                  <span className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0">
                                    {idx + 1}
                                  </span>
                                  <div className="pt-0.5">{step}</div>
                                </div>
                              ))}
                            </div>

                            {/* Processing timeline & fee indicator */}
                            {msg.matchedService && (
                              <div className="mt-4 pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-slate-500" />
                                  <span>
                                    <strong className="text-slate-800">
                                      {isTa ? 'கால அளவு:' : 'Estimated Time:'}
                                    </strong>{' '}
                                    {isTa ? msg.matchedService.processing_time_tamil : msg.matchedService.processing_time}
                                  </span>
                                </div>
                                <div>
                                  <strong className="text-slate-800">
                                    {isTa ? 'அரசு கட்டணம்:' : 'Official Fee:'}
                                  </strong>{' '}
                                  {isTa ? msg.matchedService.fee_tamil : msg.matchedService.fee}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Phase 3: Official Source Citations Block */}
                        {msg.structuredData.source_citations && msg.structuredData.source_citations.length > 0 && (
                          <div className="p-4 sm:p-5 bg-slate-50/90 border-t border-slate-200">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                              <span>{isTa ? 'அதிகாரப்பூர்வ ஆதார மேற்கோள்கள் (Verified Citations):' : 'Verified State Sources & Citations:'}</span>
                            </div>
                            <div className="space-y-1.5">
                              {msg.structuredData.source_citations.map((cite, cIdx) => (
                                <div
                                  key={cIdx}
                                  className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs"
                                >
                                  <div>
                                    <span className="font-bold text-slate-800">{cite.title}</span>
                                    <span className="text-slate-500 ml-2">({cite.department})</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                                      Verified: {cite.verified_date}
                                    </span>
                                    <a
                                      href={cite.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold underline"
                                    >
                                      <span>Portal</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Direct Action Link */}
                        <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="text-xs text-slate-500 font-semibold">
                            <span>{isTa ? 'அதிகாரப்பூர்வ தளம்:' : 'Official Portal:'} </span>
                            <span className="font-bold text-slate-800">{msg.structuredData.official_source}</span>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            {msg.matchedService && onSelectService && (
                              <button
                                onClick={() => onSelectService(msg.matchedService!)}
                                className="flex-1 sm:flex-none text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                              >
                                {isTa ? 'முழு விவரம்' : 'Full Details'}
                              </button>
                            )}

                            <a
                              href={msg.structuredData.official_url || 'https://www.tnesevai.tn.gov.in'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-colors"
                            >
                              <span>{isTa ? 'விண்ணப்பிக்க தளம் செல்க ↗' : 'Apply on Official Portal ↗'}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>

                        {/* Official Caution / Disclaimer */}
                        <div className="p-4 bg-amber-50/70 border-t border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
                          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <p className="leading-relaxed">
                            {msg.structuredData.warning ||
                              (isTa
                                ? 'இந்தத் தகவல் வழிகாட்டுதலுக்காக மட்டுமே. அனைத்து விண்ணப்பங்களும் கிராம நிர்வாக அலுவலர் (VAO) மற்றும் வருவாய் ஆய்வாளரின் நேரடி கள ஆய்வுக்குப் பிறகே ஏற்றுக்கொள்ளப்படும்.'
                                : 'This information is for guidance only. All applications are subject to mandatory field verification by local Village Administrative Officers (VAO) or Revenue Inspectors.')}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Follow-up Question Suggestions */}
                    {msg.structuredData?.follow_up_suggestions && msg.structuredData.follow_up_suggestions.length > 0 && (
                      <div className="pt-1">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-blue-600" />
                          <span>{isTa ? 'தொடர்புடைய அடுத்த கேள்விகள்:' : 'Recommended Follow-up Questions:'}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {msg.structuredData.follow_up_suggestions.map((sug, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleSend(sug)}
                              className="text-xs bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-900 px-3 py-1.5 rounded-full transition-colors shadow-2xs"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}

          {/* Real-time Loading Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3 p-4 bg-white border border-blue-200/80 rounded-2xl shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center animate-spin">
                <Loader2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  {isTa
                    ? 'சரிபார்க்கப்பட்ட தமிழ்நாடு அரசு விதிகளுடன் Gemini AI பதிலைத் தயாரிக்கிறது...'
                    : 'Searching verified Tamil Nadu service database & consulting Gemini AI...'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isTa ? 'போலி தகவல்கள் தவிர்க்கப்பட்டு அரசு ஆவணங்கள் மட்டுமே பரிசீலிக்கப்படுகின்றன' : 'Grounding with official government criteria only'}
                </p>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Box Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-end gap-2"
          >
            <div className="relative flex-1">
              <textarea
                ref={inputRef}
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isTa
                    ? 'எ.கா: "வாடகை வீட்டில் இருக்கிறோம், ரேஷன் கார்டு பெற என்ன செய்ய வேண்டும்?" அல்லது "First graduate certificate documents?"'
                    : 'e.g. "We live in a rented house, what documents are needed for ration card?" or "Pudhumai penn eligibility?"'
                }
                rows={2}
                className="w-full resize-none rounded-xl border border-slate-300 p-3 pr-10 text-sm focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600 leading-relaxed"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="h-[52px] px-5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs shrink-0"
            >
              <span>{isTa ? 'கேளுங்கள்' : 'Send'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-2 text-center">
            <span className="text-[11px] text-slate-400">
              {isTa
                ? 'நம்ம TN AI அரசு வழிகாட்டி மட்டுமே. அதிகாரப்பூர்வ தகவல்களுக்கு எப்போதும் tnesevai.tn.gov.in ஐப் பார்க்கவும்.'
                : 'Namma TN AI is a civic AI guide. Always verify on official government portals (tnesevai.tn.gov.in).'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
