export type AppLanguage = 'ta' | 'en';

export interface TNService {
  id: string;
  name: string;
  name_tamil: string;
  category: 'Certificates' | 'Education' | 'Women' | 'Students' | 'Employment' | 'Agriculture' | 'Welfare' | 'Healthcare';
  category_tamil: string;
  department: string;
  department_tamil: string;
  description: string;
  description_tamil: string;
  eligibility: string[];
  eligibility_tamil: string[];
  documents: string[];
  documents_tamil: string[];
  application_steps: string[];
  application_steps_tamil: string[];
  official_source: string;
  official_url: string;
  processing_time: string;
  processing_time_tamil: string;
  fee: string;
  fee_tamil: string;
  verified_date: string;
  gazette_ref?: string;
  issuing_authority?: string;
  issuing_authority_tamil?: string;
  notes: string;
  notes_tamil: string;
  is_online: boolean;
  keywords: string[];
  target_audience: string[];
}

export interface SourceCitation {
  service_id?: string;
  title: string;
  title_tamil?: string;
  url: string;
  verified_date: string;
  department: string;
  chunk_type?: string;
}

export interface RecommendedService {
  id: string;
  name: string;
  name_tamil: string;
  reason: string;
  reason_tamil: string;
}

export interface AIChatResponse {
  language: 'ta' | 'en' | 'tanglish';
  intent: 'service_recommendation' | 'service_inquiry' | 'eligibility_check' | 'document_check' | 'fee_inquiry' | 'clarification' | 'out_of_scope_unsupported';
  matched_service_id?: string;
  service_title?: string;
  service_title_tamil?: string;
  summary: string;
  who_it_is_for: string;
  eligibility: string[];
  documents: string[];
  steps: string[];
  official_source: string;
  official_url: string;
  warning: string;
  needs_clarification: boolean;
  clarification_question?: string;
  clarification_options?: Array<{
    label: string;
    label_tamil: string;
    query: string;
  }>;
  follow_up_suggestions?: string[];
  source_verified: boolean;
  verified_date?: string;
  grounding_confidence?: 'high' | 'medium' | 'unverified';
  evidence_chunks_count?: number;
  source_citations?: SourceCitation[];
  recommended_services?: RecommendedService[];
  is_tanglish?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  structuredData?: AIChatResponse;
  rawError?: string;
  matchedService?: TNService;
}

