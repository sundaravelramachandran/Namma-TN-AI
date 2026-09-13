# Namma TN AI (நம்ம TN AI)
**Tamil Nadu Citizen-Services AI Assistant**
*Built for the Google Cloud Gen AI Academy / Hack2Skill “Meet the Builders” Campaign*

---

## 🏛️ Project Purpose
**Namma TN AI** is a bilingual civic assistant designed to solve a critical information challenge for everyday citizens in Tamil Nadu:

Millions of residents know they need government certificates (like Income, Community, or Nativity certificates), scholarships (like Pudhumai Penn or Tamil Pudhalvan), or welfare schemes (like Kalaignar Magalir Urimai Thittam), but they struggle with:
- Navigating complex department portals and disjointed schemes
- Determining whether they satisfy strict annual income, landholding, or school criteria
- Identifying the exact required documents before travelling to e-Sevai centres
- Deciphering dense bureaucratic and administrative circulars
- Language barriers (need for colloquial Tamil, Tanglish, and English)

**Namma TN AI** bridges this gap using Google Gemini 3.8 Flash, combined with a rigorously verified, grounded Tamil Nadu government registry (TNeGA guidelines).

---

## ⚡ Key Capabilities
1. **Natural Language Understanding in Tamil, English, and Tanglish**:
   - Understands native Tamil scripts (`வருமானச் சான்றிதழ் பெறுவது எப்படி?`)
   - Understands standard English (`How do I get a community certificate?`)
   - Understands colloquial Tanglish (`Income certificate epdi apply panradhu?`)
2. **Strict Civic Anti-Hallucination Grounding**:
   - Constrained by system instructions to use the verified state database.
   - Never fabricates government schemes, criteria, fees, deadlines, or offices.
   - When a service is outside the verified registry, clearly prompts citizens to check official portals.
3. **Structured Citizen-Friendly Answers**:
   - **What it is** (*இது என்ன?*)
   - **Who may be eligible** (*யாருக்கு?*)
   - **Required Documents Checklist** (*தேவையான ஆவணங்கள்*)
   - **Application Steps** (*எப்படி விண்ணப்பிப்பது?*)
   - **Official Government Source Link** (*அதிகாரப்பூர்வ தளம்*)
   - **Cautionary Advisory** (*பொறுப்புத் துறப்பு*)
4. **Smart Follow-Up & Clarification Logic**:
   - If a citizen asks an ambiguous question (e.g. *"எனக்கு அரசு உதவி வேண்டும்"* / *"I want government scheme"*), Gemini avoids guessing and instead prompts the user with structured category buttons (Education, Employment, Women Welfare, Agriculture, etc.).
5. **Full-Featured Services Directory**:
   - Browse and search 14+ essential Tamil Nadu certificates and welfare schemes with instant category filters.

---

## 🛠️ Architecture & Tech Stack

```
[ Citizen (Browser) ]
       │
       ▼
[ React 18 + Vite + Tailwind CSS ]  (Bilingual UI: Tamil / English)
       │
       ▼
[ Express Node.js Server ]          (server.ts on Port 3000)
       │
       ├──► Grounded Knowledge Base (src/data/knowledgeBase.ts)
       │
       └──► Google GenAI SDK (@google/genai)
                  │
                  ▼
         [ Gemini 3.8 Flash ]
         - Multi-lingual reasoning
         - Anti-hallucination structured JSON schema
```

- **Frontend**: React 18, Tailwind CSS, Lucide Icons, Mukta Malar & Plus Jakarta Sans fonts.
- **Backend**: Node.js Express server (`server.ts`) running on port 3000 with Vite middleware in development and static asset serving in production.
- **AI Engine**: `@google/genai` using `gemini-3.8-flash` with strict JSON Schema output.
- **Security**: Zero client-side API key leakage (`GEMINI_API_KEY` accessed exclusively server-side).

---

## 🚀 Setup & Local Development

### Prerequisites
- Node.js 18+ and npm installed
- Google Gemini API Key from Google AI Studio

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API Key:
   ```env
   GEMINI_API_KEY="your_actual_gemini_api_key_here"
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will start at `http://localhost:3000`.

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

---

## 🛡️ Trust, Safety & Official Disclaimer
> “Namma TN AI is an independent informational prototype and is not an official Government of Tamil Nadu website. Information is provided for guidance and should be verified through official government sources (such as [tnesevai.tn.gov.in](https://www.tnesevai.tn.gov.in)) before taking action.”
