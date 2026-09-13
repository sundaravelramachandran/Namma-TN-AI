import { GoogleGenAI } from '@google/genai';
import { TN_SERVICES } from '../src/data/knowledgeBase';
import { TNService, SourceCitation } from '../src/types';

export interface DocumentChunk {
  chunk_id: string;
  service_id: string;
  service_name: string;
  service_name_tamil: string;
  chunk_type: 'overview' | 'eligibility' | 'documents' | 'application_steps' | 'fees_timing' | 'rules_notes';
  title: string;
  title_tamil: string;
  content_en: string;
  content_tamil: string;
  official_source: string;
  official_url: string;
  verified_date: string;
  department: string;
  search_keywords: string[];
  embedding?: number[];
}

export interface RetrievalResult {
  chunk: DocumentChunk;
  similarity: number;
  lexicalScore: number;
  hybridScore: number;
}

export interface RAGSearchOutput {
  evidenceChunks: DocumentChunk[];
  citations: SourceCitation[];
  groundingConfidence: 'high' | 'medium' | 'unverified';
  matchedService?: TNService;
  detectedTanglish: boolean;
  queryIntent: 'service_recommendation' | 'service_inquiry' | 'eligibility_check' | 'document_check' | 'fee_inquiry' | 'clarification' | 'out_of_scope_unsupported';
}

// 1. CHUNKING ENGINE: Converts the verified TN knowledge base into semantic chunks
export function generateDocumentChunks(): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];

  for (const service of TN_SERVICES) {
    // 1. Overview Chunk
    chunks.push({
      chunk_id: `${service.id}-overview`,
      service_id: service.id,
      service_name: service.name,
      service_name_tamil: service.name_tamil,
      chunk_type: 'overview',
      title: `${service.name} - Official Overview & Purpose`,
      title_tamil: `${service.name_tamil} - கண்ணோட்டம் மற்றும் நோக்கம்`,
      content_en: `Service: ${service.name}. Department: ${service.department}. Category: ${service.category}. Description: ${service.description} Target audience: ${service.target_audience.join(', ')}. Official portal: ${service.official_url}. Verified as of ${service.verified_date}.`,
      content_tamil: `சேவை: ${service.name_tamil}. துறை: ${service.department_tamil}. வகை: ${service.category_tamil}. விளக்கம்: ${service.description_tamil} பயனாளிகள்: ${service.target_audience.join(', ')}. அதிகாரப்பூர்வ இணையதளம்: ${service.official_url}. சரிபார்க்கப்பட்ட தேதி: ${service.verified_date}.`,
      official_source: service.official_source,
      official_url: service.official_url,
      verified_date: service.verified_date,
      department: service.department,
      search_keywords: [...service.keywords, service.name.toLowerCase(), service.name_tamil.toLowerCase(), 'what is', 'purpose', 'overview', 'நோக்கம்']
    });

    // 2. Eligibility Chunk
    chunks.push({
      chunk_id: `${service.id}-eligibility`,
      service_id: service.id,
      service_name: service.name,
      service_name_tamil: service.name_tamil,
      chunk_type: 'eligibility',
      title: `${service.name} - Eligibility Criteria & Qualifications`,
      title_tamil: `${service.name_tamil} - தகுதி வரம்புகள் மற்றும் நிபந்தனைகள்`,
      content_en: `Eligibility for ${service.name}: ${service.eligibility.join(' ')} Authority: ${service.issuing_authority || service.department}. Reference: ${service.gazette_ref || 'Official Citizen Charter'}.`,
      content_tamil: `${service.name_tamil} தகுதி வரம்புகள்: ${service.eligibility_tamil.join(' ')} வழங்கும் அதிகாரி: ${service.issuing_authority_tamil || service.department_tamil}. அரசாணை: ${service.gazette_ref || 'அரசு விதிகள்படி'}.`,
      official_source: service.official_source,
      official_url: service.official_url,
      verified_date: service.verified_date,
      department: service.department,
      search_keywords: [...service.keywords, 'eligibility', 'eligible', 'who can apply', 'rules', 'criteria', 'தகுதி', 'யாருக்கு', 'கிடைக்குமா']
    });

    // 3. Documents Chunk
    chunks.push({
      chunk_id: `${service.id}-documents`,
      service_id: service.id,
      service_name: service.name,
      service_name_tamil: service.name_tamil,
      chunk_type: 'documents',
      title: `${service.name} - Mandatory Documents Required`,
      title_tamil: `${service.name_tamil} - தேவையான முக்கிய ஆவணங்கள்`,
      content_en: `Mandatory documents required to apply for ${service.name}: ${service.documents.map((d, i) => `${i + 1}. ${d}`).join(' ')}`,
      content_tamil: `${service.name_tamil} பெற தேவையான ஆவணங்கள்: ${service.documents_tamil.map((d, i) => `${i + 1}. ${d}`).join(' ')}`,
      official_source: service.official_source,
      official_url: service.official_url,
      verified_date: service.verified_date,
      department: service.department,
      search_keywords: [...service.keywords, 'documents', 'proof', 'certificate', 'aadhaar', 'ration card', 'files', 'தேவையான ஆவணங்கள்', 'ஆதாரம்', 'டாக்குமெண்ட்']
    });

    // 4. Application Steps Chunk
    chunks.push({
      chunk_id: `${service.id}-steps`,
      service_id: service.id,
      service_name: service.name,
      service_name_tamil: service.name_tamil,
      chunk_type: 'application_steps',
      title: `${service.name} - Step-by-Step Application Procedure`,
      title_tamil: `${service.name_tamil} - விண்ணப்பிக்கும் படிநிலைகள்`,
      content_en: `Application steps for ${service.name}: ${service.application_steps.join(' ')} Official link: ${service.official_url}.`,
      content_tamil: `${service.name_tamil} விண்ணப்பிக்கும் முறைகள்: ${service.application_steps_tamil.join(' ')} அதிகாரப்பூர்வ தளம்: ${service.official_url}.`,
      official_source: service.official_source,
      official_url: service.official_url,
      verified_date: service.verified_date,
      department: service.department,
      search_keywords: [...service.keywords, 'how to apply', 'online application', 'steps', 'portal', 'esevai', 'tnesevai', 'விண்ணப்பிப்பது எப்படி', 'படிநிலைகள்']
    });

    // 5. Fees & Timing Chunk
    chunks.push({
      chunk_id: `${service.id}-fees-timing`,
      service_id: service.id,
      service_name: service.name,
      service_name_tamil: service.name_tamil,
      chunk_type: 'fees_timing',
      title: `${service.name} - Official Fees, Processing Time & Authority`,
      title_tamil: `${service.name_tamil} - அரசு கட்டணம், கால அவகாசம் மற்றும் அதிகாரி`,
      content_en: `Official government fee for ${service.name}: ${service.fee}. Expected processing timeline: ${service.processing_time}. Issuing Authority: ${service.issuing_authority || 'Competent Authority'}. Citizen portal: ${service.official_url}.`,
      content_tamil: `${service.name_tamil} அரசு கட்டணம்: ${service.fee_tamil}. செயலாக்க காலம்: ${service.processing_time_tamil}. வழங்கும் அதிகாரி: ${service.issuing_authority_tamil || 'அதிகாரப்பூர்வ அலுவலர்'}. தளம்: ${service.official_url}.`,
      official_source: service.official_source,
      official_url: service.official_url,
      verified_date: service.verified_date,
      department: service.department,
      search_keywords: [...service.keywords, 'fee', 'charge', 'cost', 'processing time', 'days', 'validity', 'கட்டணம்', 'ரூபாய்', 'நாட்கள்', 'காலம்']
    });

    // 6. Rules & Disclaimers Chunk
    chunks.push({
      chunk_id: `${service.id}-rules`,
      service_id: service.id,
      service_name: service.name,
      service_name_tamil: service.name_tamil,
      chunk_type: 'rules_notes',
      title: `${service.name} - Critical Notes, Verification Rules & Warnings`,
      title_tamil: `${service.name_tamil} - முக்கிய குறிப்புகள் மற்றும் கள ஆய்வு எச்சரிக்கை`,
      content_en: `Important rules for ${service.name}: ${service.notes} Verification note: All applications are subjected to field verification by Village Administrative Officer (VAO), Revenue Inspector (RI), or institutional nodal officers. Penalty for fraudulent declarations under IPC / TN Govt Service rules.`,
      content_tamil: `${service.name_tamil} முக்கிய குறிப்புகள்: ${service.notes_tamil} சரிபார்ப்பு குறிப்பு: VAO மற்றும் வருவாய் ஆய்வாளரின் நேரடி கள ஆய்வுக்குப் பிறகே ஒப்புதல் அளிக்கப்படும். தவறான தகவல்களுக்கு சட்டப்படி நடவடிக்கை உண்டு.`,
      official_source: service.official_source,
      official_url: service.official_url,
      verified_date: service.verified_date,
      department: service.department,
      search_keywords: [...service.keywords, 'rules', 'warning', 'appeal', 'vao inquiry', 'rejection', 'விதிகள்', 'எச்சரிக்கை', 'கள ஆய்வு']
    });
  }

  return chunks;
}

// Global in-memory chunk corpus
export const DOCUMENT_CHUNKS: DocumentChunk[] = generateDocumentChunks();

// Cosine similarity computation
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Tanglish word map for robust intent matching
const TANGLISH_PATTERNS: Record<string, string[]> = {
  'community-certificate': ['saathi', 'jaathi', 'caste', 'certificate', 'saadhi', 'sc', 'st', 'bc', 'mbc'],
  'income-certificate': ['varumanam', 'varumaanam', 'income', 'salary', 'earnings', 'annual'],
  'nativity-certificate': ['nativity', 'pirapidam', 'oor', 'tnea', 'neet', 'birthplace'],
  'first-graduate-certificate': ['mudhal', 'pattathari', 'first graduate', 'graduate', 'engineering fee discount', 'tnea'],
  'smart-ration-card': ['ration', 'smart card', 'family card', 'kudumba attai', 'rent', 'rented house', 'rent veedu', 'vadagai'],
  'pudhumai-penn': ['pudhumai penn', '1000 rupees', 'college girls', 'govt school girls', 'moovalur'],
  'tamil-pudhalvan': ['tamil pudhalvan', 'boys 1000', 'pudhalvan', 'college boys', 'govt school boys'],
  'kalaignar-magalir-urimai-thittam': ['kmut', 'magalir urimai', 'kudumba thalaivi', 'women 1000', '1000 scheme'],
  'pm-kisan-tn-farmer': ['pm kisan', 'farmer 6000', 'vivasaayi', 'uzhavar', '2 acre', 'land subsidy', 'kisan'],
  'small-marginal-farmer-certificate': ['siru vivasaayi', 'marginal farmer', 'kuru vivasaayi', 'drip irrigation', 'patta', 'chitta'],
  'cmchis-health-insurance': ['maruthuva kappeedhu', 'cm insurance', '5 lakhs hospital', 'insurance card', 'cashless hospital'],
  'legal-heir-certificate': ['varisu', 'legal heir', 'death certificate', 'father passed away', 'mother passed away'],
  'widow-certificate': ['vithavai', 'widow', 'destitute widow', 'husband died', 'husband passed away'],
  'unemployment-certificate': ['velaiyinmai', 'jobless', 'employment allowance', 'youth allowance'],
  'obc-certificate': ['obc', 'non creamy layer', 'central reservation', 'central govt job', 'ncl']
};

export function detectTanglishAndKeywords(query: string): { isTanglish: boolean; matchedServiceId?: string } {
  const lower = query.toLowerCase();
  
  // Tanglish detector: Latin script with characteristic Tamil phonetic words
  const tanglishMarkers = ['enakku', 'engalukku', 'enna', 'eppadi', 'thevai', 'veendum', 'kedaikkuma', 'veetla', 'irukom', 'pannalam', 'varum', 'solla', 'mudiyuma', 'thittam', 'attai', 'kudumbam'];
  const hasTanglishMarker = tanglishMarkers.some(marker => lower.includes(marker));
  const isLatinWithTamilContext = /^[a-z0-9\s.,?!'-]+$/i.test(query) && (hasTanglishMarker || /scheme|ration|urimai|penn|pudhalvan|varisu|saathi|vivasaayi/i.test(lower));

  let matchedServiceId: string | undefined;
  for (const [serviceId, keywords] of Object.entries(TANGLISH_PATTERNS)) {
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        matchedServiceId = serviceId;
        break;
      }
    }
    if (matchedServiceId) break;
  }

  return {
    isTanglish: hasTanglishMarker || isLatinWithTamilContext,
    matchedServiceId
  };
}

// Lexical BM25-style scorer for robust token matching
export function computeLexicalScore(chunk: DocumentChunk, queryTokens: string[], normalizedQuery: string): number {
  let score = 0;
  const chunkTextEn = (chunk.title + ' ' + chunk.content_en).toLowerCase();
  const chunkTextTa = (chunk.title_tamil + ' ' + chunk.content_tamil).toLowerCase();

  // Exact phrase matches in title or content
  if (chunkTextEn.includes(normalizedQuery) || chunkTextTa.includes(normalizedQuery)) {
    score += 50;
  }

  // Search keywords hit
  for (const kw of chunk.search_keywords) {
    if (normalizedQuery.includes(kw.toLowerCase())) {
      score += 25;
    }
  }

  // Token matches
  for (const token of queryTokens) {
    if (token.length <= 2) continue;
    if (chunkTextEn.includes(token)) score += 10;
    if (chunkTextTa.includes(token)) score += 15;
    if (chunk.title.toLowerCase().includes(token)) score += 15;
    if (chunk.title_tamil.toLowerCase().includes(token)) score += 20;
    if (chunk.search_keywords.some(k => k.toLowerCase().includes(token))) score += 12;
  }

  return score;
}

// Cache of embeddings
const embeddingCache = new Map<string, number[]>();

export async function getOrComputeEmbedding(client: GoogleGenAI | null, text: string, id: string): Promise<number[] | null> {
  if (embeddingCache.has(id)) {
    return embeddingCache.get(id)!;
  }

  if (!client) return null;

  try {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Embedding request timeout')), 1800)
    );

    const response: any = await Promise.race([
      client.models.embedContent({
        model: 'text-embedding-004',
        contents: text.slice(0, 1500),
      }),
      timeoutPromise
    ]);
    
    const values = response?.embedding?.values || response?.embeddings?.[0]?.values;
    if (Array.isArray(values) && values.length > 0) {
      embeddingCache.set(id, values);
      return values;
    }
  } catch (err) {
    // Graceful fallback if embedding endpoint is unavailable, timed out, or rate limited
    console.warn(`Embedding API call failed or timed out for ${id}, using lexical-semantic fallback.`);
  }

  return null;
}

// 2. VECTOR + HYBRID RAG SEARCH ENGINE
export async function retrieveRelevantEvidence(
  client: GoogleGenAI | null,
  query: string,
  preferredLanguage: string
): Promise<RAGSearchOutput> {
  const normalizedQuery = query.toLowerCase().trim();
  const queryTokens = normalizedQuery.split(/\s+/).filter(t => t.length > 2);
  const { isTanglish, matchedServiceId } = detectTanglishAndKeywords(query);

  // Compute query embedding if Gemini client available
  let queryEmbedding: number[] | null = null;
  if (client) {
    queryEmbedding = await getOrComputeEmbedding(client, query, `query-${normalizedQuery.slice(0, 40)}`);
  }

  // Rank all chunks using hybrid Vector + Lexical + Keyword matching
  const scoredChunks: RetrievalResult[] = [];

  for (const chunk of DOCUMENT_CHUNKS) {
    let lexical = computeLexicalScore(chunk, queryTokens, normalizedQuery);

    // Boost if matched directly by Tanglish or specific scheme pattern
    if (matchedServiceId && chunk.service_id === matchedServiceId) {
      lexical += 40;
    }

    let similarity = 0;
    if (queryEmbedding && chunk.embedding) {
      similarity = cosineSimilarity(queryEmbedding, chunk.embedding);
    }

    // Hybrid combination: Vector cosine (0-1) scaled to 60 pts + Lexical score
    const hybridScore = (similarity * 60) + lexical;

    scoredChunks.push({
      chunk,
      similarity,
      lexicalScore: lexical,
      hybridScore
    });
  }

  // Sort descending by hybrid score
  scoredChunks.sort((a, b) => b.hybridScore - a.hybridScore);

  // Top retrieved chunks
  const topResults = scoredChunks.filter(r => r.hybridScore > 10).slice(0, 5);

  // Determine grounding confidence
  let groundingConfidence: 'high' | 'medium' | 'unverified' = 'unverified';
  if (topResults.length > 0 && topResults[0].hybridScore >= 45) {
    groundingConfidence = 'high';
  } else if (topResults.length > 0 && topResults[0].hybridScore >= 18) {
    groundingConfidence = 'medium';
  }

  const evidenceChunks = topResults.map(r => r.chunk);

  // Find top matched service
  const matchedService = evidenceChunks.length > 0
    ? TN_SERVICES.find(s => s.id === evidenceChunks[0].service_id)
    : (matchedServiceId ? TN_SERVICES.find(s => s.id === matchedServiceId) : undefined);

  // Build official source citations
  const citations: SourceCitation[] = [];
  const seenUrls = new Set<string>();

  for (const c of evidenceChunks) {
    if (!seenUrls.has(c.official_url + c.chunk_type)) {
      seenUrls.add(c.official_url + c.chunk_type);
      citations.push({
        service_id: c.service_id,
        title: c.title,
        title_tamil: c.title_tamil,
        url: c.official_url,
        verified_date: c.verified_date,
        department: c.department,
        chunk_type: c.chunk_type
      });
    }
  }

  // Intent classification
  let queryIntent: RAGSearchOutput['queryIntent'] = 'service_inquiry';
  if (/document|proof|aadhaar|tc|file|தேவை|ஆவணம்|டாக்குமெண்ட்/i.test(normalizedQuery)) {
    queryIntent = 'document_check';
  } else if (/eligible|qualif|who can|age|income limit|தகுதி|யாருக்கு|கிடைக்குமா/i.test(normalizedQuery)) {
    queryIntent = 'eligibility_check';
  } else if (/fee|cost|how much|charge|validity|கட்டணம்|விலை|செல்லும்/i.test(normalizedQuery)) {
    queryIntent = 'fee_inquiry';
  } else if (/recommend|help me find|suggest|student scheme|farmer scheme|women scheme|உதவி வேண்டும்|என்ன திட்டம்/i.test(normalizedQuery)) {
    queryIntent = 'service_recommendation';
  } else if (groundingConfidence === 'unverified') {
    queryIntent = 'out_of_scope_unsupported';
  }

  return {
    evidenceChunks,
    citations: citations.slice(0, 4),
    groundingConfidence,
    matchedService,
    detectedTanglish: isTanglish,
    queryIntent
  };
}
