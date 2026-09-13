# Meet the Builders: Building “Namma TN AI” — A Grounded, Citizen-Services AI Assistant for Tamil Nadu

*A submission for the Google Cloud Gen AI Academy & Hack2Skill “Meet the Builders” Campaign*
*By Sundaravel Ramachandran (`sundaravelramachandran@gmail.com`)*

---

## 🌟 Executive Summary & Inspiration

Tamil Nadu is one of India's most socially progressive states, pioneering public welfare programs such as:
- **Kalaignar Magalir Urimai Thittam** (providing ₹1,000 monthly basic income to over 1.15 crore women)
- **Pudhumai Penn** & **Tamil Pudhalvan** (providing ₹1,000 monthly higher education assistance to girls and boys from government schools)
- **TNPDS Smart Family Cards** (universal public distribution for rice and groceries)
- **Revenue Department e-Certificates** (Income, Community, Nativity, First Graduate tuition concessions)

Yet, everyday citizens — daily wage earners, tenant families, agricultural workers, and first-generation college aspirants — face a recurring, painful barrier:
1. **Navigational Blindness**: Not knowing which scheme applies to their specific life condition.
2. **Document Shock**: Traveling multiple kilometers to an e-Sevai centre only to be turned away because they missed an unstated annexure (e.g., a registered rental agreement, gas receipt, or school EMIS transfer certificate).
3. **Bureaucratic Jargon**: Reading lengthy Tamil Government Orders (G.O.s) or English circulars written in dense legalese.
4. **Social Media Misinformation**: Falling prey to rumors, fake WhatsApp forwarding messages claiming free money, and unauthorized private agents asking for fees.

To solve this, we built **Namma TN AI (நம்ம TN AI)**: an accessible, bilingual conversational AI assistant grounded strictly in verified Tamil Nadu e-Governance rules, powered by **Google Gemini 3.8 Flash** and a multi-stage **Retrieval-Augmented Generation (RAG)** engine.

---

## 🏛️ System Architecture: Strict Grounding & Anti-Hallucination

In public civic services, **factual hallucination is unacceptable**. Recommending the wrong document or promising a benefit that doesn't exist wastes a citizen's time and money.

### The 5-Stage RAG Pipeline:

```
[ Citizen Query (Tamil / English / Tanglish) ]
                     │
                     ▼
  [ Intent Analysis & Tanglish Normalization ]
                     │
                     ▼
    [ Lexical-Semantic Hybrid Search Engine ]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
 [ Vector Similarity ]   [ BM25 Token Matching ]
 (text-embedding-004)    (Tamil Root + Eng Stem)
         └───────────┬───────────┘
                     ▼
  [ 58 Verified Document Chunks Scored & Filtered ]
  (Overview, Eligibility, Documents, Steps, Fees, Official Gazette)
                     │
                     ▼
  [ Grounding Confidence Assessment: High / Medium / Unverified ]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
  (High / Medium)           (Unverified)
         │                       │
         ▼                       ▼
 [ Gemini 3.8 Flash ]    [ "I Don't Know" Safe Exit ]
 Enforces Structured     Respectfully explains no verified record exists;
 Output & Citations      directs to www.tn.gov.in / Taluk office
         │
         ▼
 [ Structured Civic Card with Citations, Fees, Timeline & Direct Portal Link ]
```

### Key Technical Pillars:
1. **Curated & Verified Knowledge Corpus**:
   - Every service includes issuing department, legal gazette reference, official URL, exact statutory fee, timeline, and `verified_date: 2025-02-15`.
   - Outdated and informal claims have been purged.
2. **Chunk-Level Indexing**:
   - The knowledge base is segmented into granular semantic chunks (`overview`, `eligibility`, `documents`, `steps`, `rules`, `fees`).
3. **Hybrid Search**:
   - Combines vector embeddings (`text-embedding-004`) with lexical term scoring, ensuring colloquial Tamil query variations (like *"வாடகை வீட்ல இருக்கோம்"* or *"Appa expired aagitaaru"*) match the official legal terms (*"Rental Agreement"*, *"TNPDS"*, *"Legal Heir"*).
4. **"I Don't Know" & Verification Behavior**:
   - If a citizen asks about a fabricated social media rumor or non-Tamil Nadu service (e.g. foreign visas, lotteries), the model avoids guessing and flags `grounding_confidence="unverified"` with citizen safety warnings.
5. **Responsible Civic Caution**:
   - Uses prudent wording: *"You may be eligible"* rather than guaranteeing approval, reminding citizens that official field inspection by the Village Administrative Officer (VAO) or Revenue Inspector (RI) is mandatory under state law.

---

## 💡 Real Demonstration Scenarios ("Try a Real Question")

Namma TN AI was tested against 6 real-life citizen queries:

| Query Type | Citizen Input | How Namma TN AI Responds |
| :--- | :--- | :--- |
| **Tenant Ration Card** | *“நாங்க சொந்த வீடு இல்லாம வாடகை வீட்ல இருக்கோம், ரேஷன் கார்டு அப்ளை பண்ண என்ன ஆவணங்கள் வேணும்?”* | Identifies TNPDS rules; highlights mandatory Registered Tenancy Agreement, Gas connection receipt, or EB Card; explains online e-PDS verification flow. |
| **Small Farmer Subsidy** | *“எங்க அப்பா விவசாயி, 2 ஏக்கர் நிலம் இருக்கு, PM-KISAN அல்லது தமிழ்நாடு உழவர் மானியம் கிடைக்குமா?”* | Verifies 2-acre landholding meets the small/marginal farmer (<5 acres) threshold; specifies Patta/Chitta, Aadhaar, and e-KYC requirement; lists ₹6,000/yr benefit. |
| **Girl Student Higher Ed** | *“அரசுப் பள்ளியில் 6 முதல் 12 வரை படித்து இப்போது கல்லூரியில் சேர்ந்த மாணவிக்கு மாதம் ₹1,000 எப்படி பெறுவது?”* | Recommends **Pudhumai Penn**; details EMIS verification from government school; explains application is submitted through college principal/nodal officer. |
| **First Graduate Concession** | *“குடும்பத்தில் நான் தான் முதல் பட்டதாரி, பொறியியல் கல்லூரியில் கட்டணச் சலுகை பெற என்ன சான்றிதழ் தேவை?”* | Explains First Graduate Certificate under Revenue Dept; checks sibling rule (no elder sibling has availed it); links directly to TNEA counselling fee concession. |
| **Broad Intake / Clarification** | *“எனக்கு அரசு உதவி வேண்டும், என்னென்ன திட்டங்கள் இருக்கு?”* | Refuses to hallucinate; triggers interactive clarification buttons for Education, Revenue Certificates, Agriculture, and Women Welfare. |
| **Colloquial Tanglish** | *“Appa expired aagitaaru, family சொத்து மாத்த Legal Heir certificate epdi apply panradhu?”* | Understands colloquial Tanglish; explains Revenue Legal Heir certificate prerequisites (Death Certificate, Family Tree, No-Objection Affidavit); guides through e-Sevai steps. |

---

## 🛠️ Technology Stack

- **Large Language Model**: Google Gemini 3.8 Flash (`gemini-3.8-flash`) via the modern `@google/genai` TypeScript SDK.
- **Embeddings**: Google Gemini Embedding API (`text-embedding-004`).
- **Server**: Express.js on Node.js (strictly bundled via `esbuild` to CommonJS `dist/server.cjs` for Cloud Run container cold-start performance).
- **Client**: React 18, Vite, Tailwind CSS, Lucide Icons, bilingual typography (Plus Jakarta Sans + Mukta Malar).
- **Hosting & Infrastructure**: Google Cloud Run with custom health check endpoints (`/api/health`), zero-downtime container configuration, and secure server-side API key containment.

---

## 🎯 Impact & Future Vision

Namma TN AI proves how Generative AI can be used for genuine public good:
- **Zero Hallucinations in Critical Public Services**: Grounded RAG ensures answers come exclusively from verified state policy.
- **True Linguistic Inclusivity**: Overcoming English-only digital divides by catering to Tamil script, English, and phonetic Tanglish.
- **Dignity in Civic Access**: Empowering every citizen with clear knowledge before they walk into a government office.

*Developed with pride for the people of Tamil Nadu and the Google Cloud Gen AI Academy “Meet the Builders” initiative.*
