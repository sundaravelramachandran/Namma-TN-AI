import { TNService } from '../types';

export const TN_SERVICES: TNService[] = [
  {
    id: 'community-certificate',
    name: 'Community Certificate (Caste Certificate)',
    name_tamil: 'சமுதாயச் சான்றிதழ் (சாதிச் சான்றிதழ்)',
    category: 'Certificates',
    category_tamil: 'சான்றிதழ்கள்',
    department: 'Revenue and Disaster Management Department',
    department_tamil: 'வருவாய் மற்றும் பேரிடர் மேலாண்மைத் துறை',
    description: 'An official certificate issued by the Revenue Department validating the applicant’s community/caste (SC, ST, BC, MBC, DNC) for academic admissions, reservations, scholarships, and government employment benefits.',
    description_tamil: 'கல்வி சேர்க்கை, இடஒதுக்கீடு, அரசு வேலைவாய்ப்புகள் மற்றும் கல்வி உதவித்தொகை பெற விண்ணப்பதாரரின் சாதி/சமூகத்தை (SC, ST, BC, MBC, DNC) உறுதிப்படுத்தும் வருவாய்த் துறை சான்றிதழ்.',
    eligibility: [
      'The applicant must be a resident/native of Tamil Nadu.',
      'Parents or blood relatives should possess a valid Community Certificate or School TC mentioning community.',
      'Applicable for Scheduled Castes (SC), Scheduled Tribes (ST), Backward Classes (BC), Most Backward Classes (MBC), and Denotified Communities (DNC).'
    ],
    eligibility_tamil: [
      'விண்ணப்பதாரர் தமிழ்நாட்டின் வசிப்பிடத்தைக் கொண்டவராக இருக்க வேண்டும்.',
      'பெற்றோர் அல்லது ரத்த உறவினர்களின் சாதிச் சான்றிதழ் அல்லது மாற்றுச் சான்றிதழ் (TC) சமர்ப்பிக்க வேண்டும்.',
      'ஆதிதிராவிடர் (SC), பழங்குடியினர் (ST), பிற்படுத்தப்பட்டோர் (BC), மிகவும் பிற்படுத்தப்பட்டோர் (MBC), சீர்மரபினர் (DNC) பிரிவினருக்கு வழங்கப்படும்.'
    ],
    documents: [
      'Applicant Passport size photograph',
      'Proof of Identity (Aadhaar Card, Voter ID, or Ration Card)',
      'Community Certificate of Father / Mother / Siblings',
      'Transfer Certificate (TC) or School mark sheet mentioning community',
      'Self-declaration form / Address proof (Smart Ration Card or EB Bill)'
    ],
    documents_tamil: [
      'விண்ணப்பதாரரின் பாஸ்போர்ட் அளவு புகைப்படம்',
      'அடையாள அட்டை (ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை அல்லது ரேஷன் அட்டை)',
      'தந்தை / தாய் அல்லது உடன்பிறந்தோரின் சமுதாயச் சான்றிதழ்',
      'சாதி குறிப்பிடப்பட்ட பள்ளி மாற்றுச் சான்றிதழ் (TC)',
      'சுய அறிவிப்புப் படிவம் மற்றும் இருப்பிடச் சான்று (ஸ்மார்ட் ரேஷன் அட்டை / மின்கட்டண ரசீது)'
    ],
    application_steps: [
      'Step 1: Visit the official Tamil Nadu e-Sevai portal (tnesevai.tn.gov.in) or visit your nearest Citizen e-Sevai Centre (இ-சேவை மையம்).',
      'Step 2: Register for a CAN (Citizen Access Number) if you do not have one already.',
      'Step 3: Select "Revenue Department" -> "REV-101 Community Certificate".',
      'Step 4: Fill in applicant details, caste details, and upload scanned copies of parent certificate and school TC.',
      'Step 5: Pay the nominal government processing fee (₹60) and submit.',
      'Step 6: Track status online. After Village Administrative Officer (VAO), Revenue Inspector (RI), and Zonal Deputy Tahsildar approval, download digitally signed certificate.'
    ],
    application_steps_tamil: [
      'படி 1: அதிகாரப்பூர்வ தமிழ்நாடு இ-சேவை தளம் (tnesevai.tn.gov.in) அல்லது அருகிலுள்ள இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: உங்களிடம் CAN எண் இல்லையெனில் புதிய CAN எண்ணைப் பதிவு செய்யவும்.',
      'படி 3: "வருவாய்த் துறை" -> "REV-101 சமுதாயச் சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 4: உங்கள் விவரங்களை உள்ளிட்டு, பெற்றோர் சான்றிதழ் மற்றும் பள்ளி TC போன்ற ஆவணங்களை பதிவேற்றவும்.',
      'படி 5: அரசு நிர்ணயித்த கட்டணத்தை (ரூ. 60) செலுத்தி விண்ணப்பத்தை சமர்ப்பிக்கவும்.',
      'படி 6: கிராம நிர்வாக அலுவலர் (VAO), வருவாய் ஆய்வாளர் (RI), மண்டல துணை வட்டாட்சியர் சரிபார்ப்பிற்குப் பிறகு மின்-கையொப்பமிடப்பட்ட சான்றிதழைப் பதிவிறக்கம் செய்துகொள்ளலாம்.'
    ],
    official_source: 'Tamil Nadu e-Governance Agency (TNeGA) / Revenue Dept',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60 (e-Sevai citizen portal charge)',
    fee_tamil: 'ரூ. 60 (இ-சேவை பயன்பாட்டுக் கட்டணம்)',
    verified_date: '2025-02-15',
    gazette_ref: 'Revenue Administration Citizen Charter REV-101 / G.O.(Ms) No. 235',
    issuing_authority: 'Zonal Deputy Tahsildar / Revenue Divisional Officer (for ST)',
    issuing_authority_tamil: 'மண்டல துணை வட்டாட்சியர் / வருவாய் கோட்டாட்சியர் (ST பிரிவினருக்கு)',
    notes: 'Validity is permanent for life. Subject to VAO, RI, and Tahsildar field verification. ST certificates are issued strictly by the Revenue Divisional Officer (RDO).',
    notes_tamil: 'ஆயுள் முழுவதும் செல்லுபடியாகும். VAO மற்றும் RI நேரடி ஆய்வுக்கு உட்பட்டது. ST சான்றிதழ்கள் வருவாய் கோட்டாட்சியர் (RDO) அவர்களால் மட்டுமே வழங்கப்படும்.',
    is_online: true,
    keywords: ['caste', 'community', 'jaathi', 'saathi', 'sc', 'st', 'bc', 'mbc', 'dnc', 'certificate', 'சாதி', 'சமுதாயம்'],
    target_audience: ['Students', 'Job Seekers', 'Citizens']
  },
  {
    id: 'income-certificate',
    name: 'Income Certificate',
    name_tamil: 'வருமானச் சான்றிதழ்',
    category: 'Certificates',
    category_tamil: 'சான்றிதழ்கள்',
    department: 'Revenue and Disaster Management Department',
    department_tamil: 'வருவாய் மற்றும் பேரிடர் மேலாண்மைத் துறை',
    description: 'An authoritative certificate testifying to the annual income earned by an individual or family from all declared sources (salary, agriculture, business, rent, or daily wages).',
    description_tamil: 'ஒரு நபர் அல்லது குடும்பத்தின் அனைத்து வழிகளிலிருந்தும் (ஊதியம், விவசாயம், வணிகம், வாடகை, கூலி) பெறப்படும் ஆண்டு வருமானத்தை உறுதிப்படுத்தும் அரசுச் சான்றிதழ்.',
    eligibility: [
      'Any permanent citizen/resident of Tamil Nadu.',
      'Required when applying for government fee concessions, post-matric scholarships, welfare schemes, and bank educational loans.'
    ],
    eligibility_tamil: [
      'தமிழ்நாட்டில் வசிக்கும் எந்தவொரு நிரந்தர குடிமகனும் விண்ணப்பிக்கலாம்.',
      'அரசு கல்வி உதவித்தொகை, கட்டணச் சலுகை, நலத்திட்டங்கள் மற்றும் கல்விக் கடன் பெற இந்தச் சான்றிதழ் அவசியம்.'
    ],
    documents: [
      'Applicant Passport size photograph',
      'Address proof (Smart Family Card / Ration Card or Voter ID)',
      'Identity proof (Aadhaar Card)',
      'Salary slip or Form 16 (for salaried employees) or Bank Statement',
      'IT Returns or self-declaration for business / daily wages',
      'Land revenue tax receipt (for agriculturists)'
    ],
    documents_tamil: [
      'விண்ணப்பதாரரின் புகைப்படம்',
      'முகவரிச் சான்று (ஸ்மார்ட் குடும்ப அட்டை அல்லது வாக்காளர் அடையாள அட்டை)',
      'அடையாளச் சான்று (ஆதார் அட்டை)',
      'மாத ஊதியச் சீட்டு (Salary Slip) / Form 16 அல்லது வங்கி கணக்கு அறிக்கை (அரசு/தனியார் பணியாளர்களுக்கு)',
      'தொழில் அல்லது கூலித் தொழிலாளருக்கான சுய வருமான அறிவிப்புப் படிவம்',
      'விவசாயிகளுக்கான நில வருவாய் ரசீது (இருந்தால்)'
    ],
    application_steps: [
      'Step 1: Open tnesevai.tn.gov.in or approach your local Arasu e-Sevai centre.',
      'Step 2: Sign in using your Citizen login or provide mobile number to the e-Sevai operator.',
      'Step 3: Select "REV-103 Income Certificate" under Revenue Department services.',
      'Step 4: Enter family members’ details, individual occupations, and annual earnings from each source.',
      'Step 5: Attach Smart Card, Aadhaar, and proof of income. Pay ₹60 fee.',
      'Step 6: VAO field inspection and Tahsildar approval followed by digital certificate issuance with QR code.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in தளத்தைத் திறக்கவும் அல்லது அருகிலுள்ள அரசு இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: உங்கள் பயனர் கணக்கு அல்லது CAN எண்ணைப் பயன்படுத்தி உள்நுழையவும்.',
      'படி 3: வருவாய்த் துறையின் கீழ் "REV-103 வருமானச் சான்றிதழ்" பிரிவைத் தேர்ந்தெடுக்கவும்.',
      'படி 4: குடும்ப உறுப்பினர்கள், அவர்களின் தொழில் மற்றும் அனைத்து வழிகளிலிருந்தும் வரும் ஆண்டு வருமான விவரங்களை உள்ளிடவும்.',
      'படி 5: ஸ்மார்ட் கார்டு, ஆதார் மற்றும் வருமான ஆதாரங்களை இணைத்து ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: கிராம நிர்வாக அலுவலர் (VAO) மற்றும் வட்டாட்சியர் ஒப்புதலுக்குப் பிறகு QR குறியீட்டுடன் கூடிய மின்-சான்றிதழைப் பதிவிறக்கலாம்.'
    ],
    official_source: 'Tamil Nadu e-Governance Agency (TNeGA)',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Revenue Administration Citizen Charter REV-103',
    issuing_authority: 'Tahsildar / Zonal Deputy Tahsildar',
    issuing_authority_tamil: 'வட்டாட்சியர் / மண்டல துணை வட்டாட்சியர்',
    notes: 'Valid strictly for 1 financial year (April 1 to March 31). Declared income must include all agricultural, salaried, business, and rental receipts across all family members.',
    notes_tamil: 'வருமானச் சான்றிதழ் வழங்கப்பட்ட தேதியிலிருந்து 1 நிதி ஆண்டுக்கு (மார்ச் 31 வரை) மட்டுமே செல்லும். குடும்பத்தின் அனைத்து வருமான வழிகளும் சேர்க்கப்பட வேண்டும்.',
    is_online: true,
    keywords: ['income', 'varumanam', 'salary', 'earnings', 'annual income', 'scholarship income', 'வருமானம்', 'வருமான சான்றிதழ்'],
    target_audience: ['Students', 'Citizens', 'Families']
  },
  {
    id: 'nativity-certificate',
    name: 'Nativity Certificate',
    name_tamil: 'பிறப்பிட / இருப்பிடச் சான்றிதழ் (நேட்டிவிட்டி சான்றிதழ்)',
    category: 'Certificates',
    category_tamil: 'சான்றிதழ்கள்',
    department: 'Revenue and Disaster Management Department',
    department_tamil: 'வருவாய் மற்றும் பேரிடர் மேலாண்மைத் துறை',
    description: 'An official certificate verifying that an individual is an indigenous native of Tamil Nadu by birth or ancestral lineage, essential for medical/engineering state quota counseling (TNEA/NEET state quota).',
    description_tamil: 'ஒரு நபர் பிறப்பால் அல்லது பரம்பரை பூர்வீகத்தால் தமிழ்நாட்டைச் சேர்ந்தவர் என்பதை உறுதிப்படுத்தும் சான்றிதழ். TNEA பொறியியல் மற்றும் NEET மருத்துவ மாநில ஒதுக்கீட்டு சேர்க்கைக்கு இது மிகவும் முக்கியம்.',
    eligibility: [
      'The applicant must be born in Tamil Nadu, or parents must have ancestral origin in Tamil Nadu.',
      'Applicants residing continuously in Tamil Nadu for at least 5 continuous years.'
    ],
    eligibility_tamil: [
      'விண்ணப்பதாரர் தமிழ்நாட்டில் பிறந்தவராக இருக்க வேண்டும் அல்லது பெற்றோர் தமிழ்நாட்டைப் பூர்வீகமாகக் கொண்டிருக்க வேண்டும்.',
      'குறைந்தது தொடர்ந்து 5 ஆண்டுகள் தமிழ்நாட்டில் வசித்திருக்க வேண்டும்.'
    ],
    documents: [
      'Birth Certificate of Applicant',
      'School Study Certificates from 1st to 12th standard (or continuous study proof in TN)',
      'Birth Certificate or School TC of Parents to prove native heritage',
      'Smart Family Card / Ration Card & Aadhaar Card',
      'Voter ID / Land document / Property tax receipt of parents'
    ],
    documents_tamil: [
      'விண்ணப்பதாரரின் பிறப்புச் சான்றிதழ்',
      '1 முதல் 12-ம் வகுப்பு வரை தமிழ்நாட்டில் படித்ததற்கான பள்ளி படிப்புச் சான்றிதழ் (Bonafide / Study certificate)',
      'பெற்றோரின் பிறப்புச் சான்றிதழ் அல்லது பள்ளி மாற்றுச் சான்றிதழ் (பூர்வீகத்தை உறுதி செய்ய)',
      'ஸ்மார்ட் குடும்ப அட்டை மற்றும் ஆதார் அட்டை',
      'பெற்றோரின் வாக்காளர் அடையாள அட்டை / சொத்து வரி ரசீது'
    ],
    application_steps: [
      'Step 1: Access the TNeGA portal (tnesevai.tn.gov.in) or visit an e-Sevai Kendra.',
      'Step 2: Choose "REV-104 Nativity Certificate".',
      'Step 3: Enter birth details, school education history, and parental roots in Tamil Nadu.',
      'Step 4: Upload applicant birth certificate, school bonafide certificates, and parent documents.',
      'Step 5: Pay the fee of ₹60 and submit.',
      'Step 6: Approved by Revenue Inspector and Tahsildar after verifying continuous educational and residential records.'
    ],
    application_steps_tamil: [
      'படி 1: தமிழ்நாடு இ-சேவை தளம் (tnesevai.tn.gov.in) அல்லது இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: "REV-104 இருப்பிட / பிறப்பிடச் சான்றிதழ் (Nativity)" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: பிறப்பு விவரங்கள், பள்ளி கல்வி விவரங்கள் மற்றும் பெற்றோரின் பூர்வீகத் தகவல்களை நிரப்பவும்.',
      'படி 4: பிறப்புச் சான்றிதழ், பள்ளி படிப்புச் சான்றிதழ்கள் மற்றும் பெற்றோரின் ஆவணங்களை பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தி விண்ணப்பத்தைச் சமர்ப்பிக்கவும்.',
      'படி 6: கிராம நிர்வாக அலுவலர், வருவாய் ஆய்வாளர் மற்றும் வட்டாட்சியர் ஒப்புதலுக்குப் பின் பதிவிறக்கம் செய்யலாம்.'
    ],
    official_source: 'Revenue and Disaster Management Department, TN',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Revenue Administration Citizen Charter REV-104 / TNEA Regulations',
    issuing_authority: 'Tahsildar / Zonal Deputy Tahsildar',
    issuing_authority_tamil: 'வட்டாட்சியர் / மண்டல துணை வட்டாட்சியர்',
    notes: 'Do not confuse Nativity with Residence certificate. Nativity proves origin/birthright for state-quota college admissions.',
    notes_tamil: 'இருப்பிடச் சான்றிதழையும் பிறப்பிடச் சான்றிதழையும் குழப்ப வேண்டாம். நேட்டிவிட்டி என்பது மருத்துவ/பொறியியல் மாநில ஒதுக்கீட்டுக்காக பூர்வீகத்தை உறுதி செய்வது.',
    is_online: true,
    keywords: ['nativity', 'origin', 'native', 'birthplace', 'tnea', 'neet state quota', 'பிறப்பிடம்', 'நேட்டிவிட்டி'],
    target_audience: ['Students', 'Higher Education Aspirants']
  },
  {
    id: 'first-graduate-certificate',
    name: 'First Graduate Certificate (முதல் பட்டதாரி சான்றிதழ்)',
    name_tamil: 'முதல் பட்டதாரி சான்றிதழ்',
    category: 'Education',
    category_tamil: 'கல்வி',
    department: 'Directorate of Technical Education / Revenue Department',
    department_tamil: 'தொழில்நுட்பக் கல்வி இயக்ககம் / வருவாய்த் துறை',
    description: 'A certificate providing substantial tuition fee concessions in higher educational institutions (engineering, medical, agriculture counseling) for students who are the very first members in their family to pursue a graduation degree.',
    description_tamil: 'குடும்பத்திலேயே முதன்முதலில் பட்டப்படிப்பு படிக்கச் செல்லும் மாணவர்களுக்கு உயர் கல்வி சேர்க்கையில் (பொறியியல், மருத்துவம், வேளாண்மை) அரசு வழங்கும் கல்விக் கட்டணச் சலுகைக்கான சான்றிதழ்.',
    eligibility: [
      'The applicant must be joining an undergraduate degree or professional degree course in Tamil Nadu.',
      'Neither the father, mother, nor any sibling (brother or sister) should have graduated with any degree.',
      'Only one candidate in a family can avail the First Graduate fee concession (if elder sibling already claimed it, younger cannot).'
    ],
    eligibility_tamil: [
      'மாணவர் தமிழ்நாட்டில் இளங்கலை அல்லது தொழில்முறை பட்டப்படிப்பில் சேருபவராக இருக்க வேண்டும்.',
      'குடும்பத்தில் தந்தை, தாய், அண்ணன், தம்பி, அக்கா, தங்கை என யாரும் பட்டதாரியாக இருக்கக் கூடாது.',
      'குடும்பத்தில் ஒருவருக்கு மட்டுமே முதல் பட்டதாரி சலுகை கிடைக்கும் (மூத்தவர் பெற்றிருந்தால் இளையவருக்கு கிடைக்காது).'
    ],
    documents: [
      'Self-declaration of the candidate signed by parents',
      'Applicant 10th and 12th Mark sheets / TC',
      'School TC or educational proof of Father and Mother showing non-graduate status',
      'Educational proof / TC of all siblings (brothers/sisters)',
      'Smart Ration Card / Family Card showing all family members',
      'Aadhaar Card'
    ],
    documents_tamil: [
      'பெற்றோர் மற்றும் மாணவர் கையொப்பமிட்ட சுய உறுதிமொழிப் படிவம் (Self-declaration)',
      'மாணவரின் 10 மற்றும் 12-ம் வகுப்பு மதிப்பெண் பட்டியல் / மாற்றுச் சான்றிதழ்',
      'பெற்றோரின் பள்ளி மாற்றுச் சான்றிதழ் (அவர்கள் பட்டதாரி அல்ல என்பதை உறுதி செய்ய)',
      'உடன்பிறந்தோரின் (சகோதர/சகோதரிகளின்) பள்ளி/கல்லூரி மாற்றுச் சான்றிதழ்',
      'அனைத்து குடும்ப உறுப்பினர்களின் பெயரும் உள்ள ஸ்மார்ட் ரேஷன் அட்டை',
      'ஆதார் அட்டை'
    ],
    application_steps: [
      'Step 1: Go to tnesevai.tn.gov.in or any authorized e-Sevai Kendra.',
      'Step 2: Choose "REV-107 First Graduate Certificate".',
      'Step 3: Enter the family hierarchy: parents, siblings, their highest educational qualifications.',
      'Step 4: Upload signed Joint Declaration Form and education certificates of all members.',
      'Step 5: Submit application with ₹60 fee.',
      'Step 6: Revenue Inspector verifies non-graduate family status; Tahsildar issues the digital certificate with QR code for TNEA/DoTE counseling.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in அல்லது இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: "REV-107 முதல் பட்டதாரி சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: பெற்றோர் மற்றும் உடன்பிறந்தோரின் கல்வித் தகுதியை உள்ளிடவும்.',
      'படி 4: கையொப்பமிட்ட கூட்டறிக்கை (Joint Declaration) மற்றும் குடும்பத்தினரின் கல்விச் சான்றுகளை பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தி விண்ணப்பத்தைச் சமர்ப்பிக்கவும்.',
      'படி 6: வருவாய் ஆய்வாளர் மற்றும் வட்டாட்சியர் ஆய்வு செய்த பின் மின்-சான்றிதழ் வழங்கப்படும்.'
    ],
    official_source: 'Revenue Department & Higher Education Department, TN',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'G.O.(Ms) No. 85, Higher Education (J2) Dept & REV-107',
    issuing_authority: 'Tahsildar / Zonal Deputy Tahsildar',
    issuing_authority_tamil: 'வட்டாட்சியர் / மண்டல துணை வட்டாட்சியர்',
    notes: 'Saves up to ₹20,000 - ₹25,000 per year in government and surrendered seats in self-financing engineering colleges.',
    notes_tamil: 'பொறியியல் கல்லூரிகளில் அரசு ஒதுக்கீட்டு இடங்களில் ஆண்டுக்கு சுமார் ₹20,000 முதல் ₹25,000 வரை கட்டணச் சலுகை பெற்றுத்தரும்.',
    is_online: true,
    keywords: ['first graduate', 'mudhal pattathari', 'tuition fee concession', 'tnea discount', 'முதல் பட்டதாரி', 'பட்டதாரி சான்றிதழ்'],
    target_audience: ['Students', 'College Aspirants']
  },
  {
    id: 'unemployment-certificate',
    name: 'Unemployment Certificate',
    name_tamil: 'வேலையின்மைச் சான்றிதழ்',
    category: 'Employment',
    category_tamil: 'வேலைவாய்ப்பு',
    department: 'Revenue Department / Employment and Training',
    department_tamil: 'வருவாய்த் துறை / வேலைவாய்ப்பு மற்றும் பயிற்சித் துறை',
    description: 'A certificate confirming that an educated individual is currently unemployed, used to avail government unemployment allowance, fee waivers, or specialized youth skill training programs.',
    description_tamil: 'படித்த இளைஞர் தற்போது எந்த அரசு அல்லது தனியார் பணியிலும் ஊதியம் பெறாமல் வேலைவாய்ப்பின்றி இருக்கிறார் என்பதை உறுதிப்படுத்தும் சான்றிதழ். அரசு உதவித்தொகை மற்றும் கட்டண விலக்கு பெறப் பயன்படும்.',
    eligibility: [
      'Applicant must be a permanent resident of Tamil Nadu.',
      'Must have registered in the District Employment Exchange.',
      'Must not be gainfully employed in government, public sector, or formal organized private sector.'
    ],
    eligibility_tamil: [
      'தமிழ்நாட்டில் நிரந்தரமாக வசிக்கும் நபராக இருக்க வேண்டும்.',
      'மாவட்ட வேலைவாய்ப்பு அலுவலகத்தில் பதிவு செய்திருக்க வேண்டும்.',
      'அரசு, பொதுத்துறை அல்லது முறையான தனியார் நிறுவனங்களில் பணியில் இருக்கக் கூடாது.'
    ],
    documents: [
      'Applicant Passport size photograph',
      'Aadhaar Card',
      'Smart Family Card / Ration Card',
      'Educational Qualification certificates (SSLC, HSC, Degree)',
      'Employment Exchange Registration card (showing renewal status)',
      'Self-declaration of unemployment'
    ],
    documents_tamil: [
      'பாஸ்போர்ட் அளவு புகைப்படம்',
      'ஆதார் அட்டை',
      'ஸ்மார்ட் குடும்ப அட்டை',
      'கல்வித் தகுதிச் சான்றிதழ்கள் (10-ம், 12-ம் வகுப்பு அல்லது பட்டப்படிப்பு)',
      'வேலைவாய்ப்பு அலுவலக பதிவு அட்டை (Employment Card)',
      'வேலையின்மைக்கான சுய அறிவிப்புப் படிவம்'
    ],
    application_steps: [
      'Step 1: Visit tnesevai.tn.gov.in or local e-Sevai Kendra.',
      'Step 2: Apply under Revenue services for Unemployment Certificate.',
      'Step 3: Fill personal, educational, and employment exchange registration details.',
      'Step 4: Upload educational proof, employment card, and self-declaration.',
      'Step 5: Pay the fee of ₹60.',
      'Step 6: Tahsildar validates with local VAO and issues certificate.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in தளம் அல்லது அரசு இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: வருவாய்த் துறை சேவைகளில் வேலையின்மைச் சான்றிதழைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: கல்வி மற்றும் வேலைவாய்ப்பு அலுவலக பதிவு விவரங்களைப் பூர்த்தி செய்யவும்.',
      'படி 4: கல்விச் சான்றிதழ்கள், எம்ப்ளாய்மென்ட் கார்டு மற்றும் சுய அறிவிப்பைப் பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: VAO மற்றும் வட்டாட்சியர் ஒப்புதலுக்குப் பிறகு சான்றிதழைப் பெறலாம்.'
    ],
    official_source: 'Revenue Department & Employment Exchange TN',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Department of Employment & Training Guidelines REV-118',
    issuing_authority: 'Tahsildar with District Employment Exchange',
    issuing_authority_tamil: 'வட்டாட்சியர் மற்றும் மாவட்ட வேலைவாய்ப்பு அலுவலர்',
    notes: 'Used to claim Tamil Nadu monthly unemployment allowance for SSLC, HSC, and graduate job seekers registered for over 5 continuous years.',
    notes_tamil: 'வேலைவாய்ப்பு அலுவலகத்தில் 5 ஆண்டுகளுக்கு மேல் காத்திருக்கும் SSLC, HSC, பட்டதாரிகளுக்கான மாதாந்திர உதவித்தொகை பெற உதவும்.',
    is_online: true,
    keywords: ['unemployment', 'velaiyinmai', 'jobless', 'employment allowance', 'வேலையின்மை', 'உதவித்தொகை'],
    target_audience: ['Job Seekers', 'Youth']
  },
  {
    id: 'widow-certificate',
    name: 'Widow / Destitute Widow Certificate',
    name_tamil: 'விதவைச் சான்றிதழ் / ஆதரவற்ற விதவைச் சான்றிதழ்',
    category: 'Women',
    category_tamil: 'பெண்கள் நலன்',
    department: 'Revenue & Social Welfare Department',
    department_tamil: 'வருவாய்த் துறை மற்றும் சமூக நலத் துறை',
    description: 'A certificate recognizing a woman who has lost her husband (and Destitute Widow certificate if she lacks independent income), granting priority reservations in TNPSC government recruitment, higher education admissions, and monthly pensions.',
    description_tamil: 'கணவரை இழந்த பெண்ணை உறுதிப்படுத்தும் சான்றிதழ் (வருமானம் இல்லாதவர்களுக்கு ஆதரவற்ற விதவை சான்றிதழ்). TNPSC அரசுப் பணி நியமனங்களில் முன்னுரிமை மற்றும் மாதாந்திர முதியோர்/விதவை ஓய்வூதியம் பெற உதவும்.',
    eligibility: [
      'Resident woman whose husband has passed away.',
      'For Destitute Widow certificate: Monthly income should not exceed the prescribed limit (generally ₹4,000/month or less than poverty line) and she should have no adult sons capable of supporting her or own significant property.'
    ],
    eligibility_tamil: [
      'கணவரை இழந்த தமிழ்நாட்டில் வசிக்கும் பெண்.',
      'ஆதரவற்ற விதவைச் சான்றிதழுக்கு: மாத வருமானம் அரசு நிர்ணயித்த வரம்பிற்குள் (மாதம் ₹4,000-க்கு மிகாமல்) இருக்க வேண்டும் மற்றும் ஆதரவளிக்கக்கூடிய மேஜர் மகன்கள் அல்லது அதிக சொத்துக்கள் இருக்கக் கூடாது.'
    ],
    documents: [
      'Applicant Photograph & Aadhaar Card',
      'Death Certificate of Husband',
      'Marriage Certificate or Legal Proof of Marriage (Smart Ration card containing husband name)',
      'Income Certificate / Proof of no taxable income',
      'Legal Heir Certificate of deceased husband',
      'Self-declaration of not remarried'
    ],
    documents_tamil: [
      'விண்ணப்பதாரரின் புகைப்படம் மற்றும் ஆதார் அட்டை',
      'கணவரின் இறப்புச் சான்றிதழ்',
      'திருமணச் சான்றிதழ் அல்லது திருமண ஆதாரம் (கணவர் பெயர் உள்ள ரேஷன் கார்டு)',
      'வருமானச் சான்றிதழ் (வருமானம் இல்லை என்பதற்கான சான்று)',
      'கணவரின் சட்டப்பூர்வ வாரிசுச் சான்றிதழ்',
      'மறுமணம் செய்துகொள்ளவில்லை என்பதற்கான சுய உறுதிமொழி'
    ],
    application_steps: [
      'Step 1: Apply via e-Sevai Kendra or TNeGA portal.',
      'Step 2: Choose "Widow Certificate" or "Destitute Widow Certificate" (under RDO/Tahsildar jurisdiction).',
      'Step 3: Enter husband’s details, date of demise, income, and dependent information.',
      'Step 4: Upload husband death certificate, marriage proof, and non-remarriage affidavit.',
      'Step 5: Pay ₹60 processing fee.',
      'Step 6: Direct field inquiry by Revenue Inspector & VAO before Revenue Divisional Officer (RDO) / Tahsildar approval.'
    ],
    application_steps_tamil: [
      'படி 1: இ-சேவை மையம் அல்லது tnesevai.tn.gov.in மூலம் விண்ணப்பிக்கவும்.',
      'படி 2: "விதவைச் சான்றிதழ்" அல்லது "ஆதரவற்ற விதவைச் சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: கணவரின் விவரங்கள், மறைந்த தேதி மற்றும் வருமான விவரங்களைப் பூர்த்தி செய்யவும்.',
      'படி 4: கணவரின் இறப்புச் சான்றிதழ், திருமண ஆதாரம் மற்றும் மறுமணம் செய்யாமைக்கான பிரமாணப் பத்திரத்தைப் பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: கிராம நிர்வாக அலுவலர் மற்றும் வருவாய் ஆய்வாளர் நேரடி விசாரணைக்குப் பின் சான்றிதழ் வழங்கப்படும்.'
    ],
    official_source: 'Revenue Department & Social Welfare Dept, TN',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 to 30 working days',
    processing_time_tamil: '15 முதல் 30 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Social Welfare & Revenue Dept Citizen Charter REV-112',
    issuing_authority: 'Revenue Divisional Officer (RDO) / Tahsildar',
    issuing_authority_tamil: 'வருவாய் கோட்டாட்சியர் (RDO) / வட்டாட்சியர்',
    notes: 'Destitute Widow certificate provides 10% special reservation in certain TNPSC recruitments and age relaxation up to 58 years.',
    notes_tamil: 'ஆதரவற்ற விதவை சான்றிதழ் TNPSC அரசுப் பணிகளில் சிறப்பு இடஒதுக்கீடு மற்றும் வயது வரம்பில் தளர்வு (58 வயது வரை) அளிக்கிறது.',
    is_online: true,
    keywords: ['widow', 'destitute widow', 'kanavan irandhar', 'vithavai', 'pension', 'விதவை', 'ஆதரவற்ற விதவை'],
    target_audience: ['Women']
  },
  {
    id: 'legal-heir-certificate',
    name: 'Legal Heir Certificate (வாரிசுச் சான்றிதழ்)',
    name_tamil: 'சட்டப்பூர்வ வாரிசுச் சான்றிதழ்',
    category: 'Certificates',
    category_tamil: 'சான்றிதழ்கள்',
    department: 'Revenue and Disaster Management Department',
    department_tamil: 'வருவாய் மற்றும் பேரிடர் மேலாண்மைத் துறை',
    description: 'An essential legal certificate identifying all surviving immediate lawful heirs (spouse, children, parents) of a deceased person, vital for transferring property, claiming bank deposits, pension claims, and provident fund.',
    description_tamil: 'மறைந்த ஒரு நபரின் சட்டப்பூர்வ வாரிசுகள் (மனைவி/கணவர், பிள்ளைகள், பெற்றோர்) யார் என்பதை உறுதிப்படுத்தும் சான்றிதழ். சொத்து மாற்றம், வங்கி பணப்பரிமாற்றம், பி.எஃப் மற்றும் ஓய்வூதியம் பெற கட்டாயம்.',
    eligibility: [
      'Class-I legal heirs of the deceased individual: Surviving spouse, sons, daughters, and mother of the deceased.',
      'Father or siblings can apply if deceased was unmarried and had no Class-I heirs.'
    ],
    eligibility_tamil: [
      'மறைந்த நபரின் முதல் நிலை வாரிசுகள்: கணவர் / மனைவி, மகன்கள், மகள்கள் மற்றும் மறைந்தவரின் தாய்.',
      'மறைந்தவர் திருமணமாகாதவராக இருந்தால் தாய், தந்தை அல்லது உடன்பிறந்தோர் விண்ணப்பிக்கலாம்.'
    ],
    documents: [
      'Death Certificate of the deceased person (from Corporation/Municipality/Panchayat)',
      'Identity and Address proof of all legal heirs (Aadhaar, Ration Card)',
      'Birth Certificate or School TC of all children proving relationship',
      'Marriage Certificate or Ration Card showing marital relation with spouse',
      'Applicant self-declaration affidavit with family genealogy'
    ],
    documents_tamil: [
      'மறைந்த நபரின் அதிகாரப்பூர்வ இறப்புச் சான்றிதழ் (மாநகராட்சி / நகராட்சி / ஊராட்சி மன்றம் வழங்கியது)',
      'அனைத்து வாரிசுகளின் ஆதார் அட்டை மற்றும் ஸ்மார்ட் குடும்ப அட்டை',
      'பிள்ளைகளின் பிறப்புச் சான்றிதழ் அல்லது பள்ளி TC (உறவு முறையை நிரூபிக்க)',
      'மனைவி/கணவருக்கான திருமண ஆதாரம் / ரேஷன் கார்டு',
      'குடும்ப வாரிசு மரம் மற்றும் நோட்டரி வழக்கறிஞர் உறுதிமொழிப் பத்திரம்'
    ],
    application_steps: [
      'Step 1: Go to tnesevai.tn.gov.in or your nearest e-Sevai Kendra.',
      'Step 2: Select "REV-114 Legal Heir Certificate".',
      'Step 3: Enter details of the deceased (death certificate number, date, address).',
      'Step 4: Add all living legal heirs with relationship and age.',
      'Step 5: Upload death certificate, identity proofs, and family relationship documents.',
      'Step 6: Pay ₹60. The VAO and Revenue Inspector conduct field inquiry, followed by Tahsildar approval.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in அல்லது இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: "REV-114 வாரிசுச் சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: மறைந்த நபரின் இறப்பு விவரங்கள் (இறப்புச் சான்றிதழ் எண், தேதி, முகவரி) உள்ளிடவும்.',
      'படி 4: உயிருடன் உள்ள அனைத்து வாரிசுகளின் பெயர்கள், உறவுமுறை மற்றும் வயதை உள்ளிடவும்.',
      'படி 5: தேவையான ஆவணங்களை பதிவேற்றி ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: VAO மற்றும் வருவாய் ஆய்வாளர் நேரடி விசாரணை நடத்தி, வட்டாட்சியர் ஒப்புதல் அளித்த பின் மின்-சான்றிதழ் வழங்கப்படும்.'
    ],
    official_source: 'Revenue Department, Government of Tamil Nadu',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 to 30 working days',
    processing_time_tamil: '15 முதல் 30 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'G.O.(Ms) No. 478, Revenue & Disaster Management & REV-114',
    issuing_authority: 'Tahsildar',
    issuing_authority_tamil: 'வட்டாட்சியர்',
    notes: 'If there are contested property disputes or multiple marriages, the Tahsildar may instruct parties to obtain a Succession Certificate from a Civil Court.',
    notes_tamil: 'குடும்பத்தில் வாரிசு தகராறு அல்லது சிக்கலான வழக்குகள் இருந்தால், உரிமையியல் நீதிமன்றத்தை அணுகி Succession Certificate பெற வட்டாட்சியர் உத்தரவிடலாம்.',
    is_online: true,
    keywords: ['legal heir', 'varisu', 'inheritance', 'death of parent', 'property transfer', 'வாரிசு', 'வாரிசு சான்றிதழ்'],
    target_audience: ['Citizens', 'Families']
  },
  {
    id: 'obc-certificate',
    name: 'Other Backward Classes (OBC) Certificate',
    name_tamil: 'இதர பிற்படுத்தப்பட்ட வகுப்பு (OBC) சான்றிதழ்',
    category: 'Certificates',
    category_tamil: 'சான்றிதழ்கள்',
    department: 'Revenue and Disaster Management Department',
    department_tamil: 'வருவாய் மற்றும் பேரிடர் மேலாண்மைத் துறை',
    description: 'A certificate issued under the Government of India Central list confirming that the applicant belongs to an OBC community and falls outside the "Creamy Layer", required for Central Government jobs (UPSC, SSC, RRB, Banking) and Central admissions (IIT, NIT, AIIMS, Central Universities).',
    description_tamil: 'மத்திய அரசு கல்வி நிறுவனங்கள் (IIT, NIT, AIIMS) மற்றும் மத்திய அரசு பணிகளில் (UPSC, SSC, வங்கி, ரயில்வே) 27% OBC இடஒதுக்கீடு பெற கிரீமி லேயர் வரம்பிற்குள் இல்லாததை உறுதிப்படுத்தும் சான்றிதழ்.',
    eligibility: [
      'The applicant’s community must be listed in the Central List of Other Backward Classes for Tamil Nadu.',
      'Non-Creamy Layer (NCL) condition: Gross annual income of parents must be less than ₹8 Lakhs per annum (excluding agricultural income and salary as per central norms).',
      'Parents should not hold Group A / Class I equivalent constitutional or corporate posts.'
    ],
    eligibility_tamil: [
      'விண்ணப்பதாரரின் சமூகம் தமிழ்நாட்டிற்கான மத்திய அரசு OBC பட்டியலில் இடம்பெற்றிருக்க வேண்டும்.',
      'கிரீமி லேயர் அற்றவர் (Non-Creamy Layer) நிபந்தனை: பெற்றோரின் ஆண்டு வருமானம் ₹8 லட்சத்திற்குள் இருக்க வேண்டும் (மத்திய அரசு விதிகளின்படி).',
      'பெற்றோர் குரூப் A / கிளாஸ் 1 அந்தஸ்துள்ள உயர் பதவிகளில் இருக்கக் கூடாது.'
    ],
    documents: [
      'Applicant Photograph and Aadhaar Card',
      'State Community Certificate (BC / MBC / DNC certificate issued by TN Revenue Dept)',
      'Income Certificate of Parents for the past 3 consecutive financial years / Form 16 / ITR',
      'Smart Family Card / Ration Card',
      'Self-declaration of Non-Creamy Layer status'
    ],
    documents_tamil: [
      'விண்ணப்பதாரரின் புகைப்படம் மற்றும் ஆதார் அட்டை',
      'தமிழ்நாடு மாநில சமுதாயச் சான்றிதழ் (BC / MBC / DNC சான்றிதழ்)',
      'பெற்றோரின் கடந்த 3 ஆண்டுகளுக்கான வருமானச் சான்றிதழ் அல்லது Form 16 / IT ரிட்டர்ன்',
      'ஸ்மார்ட் குடும்ப அட்டை',
      'கிரீமி லேயரில் இல்லை என்பதற்கான சுய உறுதிமொழிப் படிவம்'
    ],
    application_steps: [
      'Step 1: Visit tnesevai.tn.gov.in or any e-Sevai Kendra.',
      'Step 2: Select "REV-115 Other Backward Class (OBC) Certificate".',
      'Step 3: Provide CAN, applicant community in the Central List, and parent employment details.',
      'Step 4: Upload state community certificate, parental income proof, and salary/pension slips.',
      'Step 5: Pay ₹60 and submit.',
      'Step 6: Tahsildar reviews Non-Creamy Layer status and issues the certificate.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in அல்லது இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: "REV-115 இதர பிற்படுத்தப்பட்ட வகுப்பு (OBC) சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: மத்திய பட்டியலில் உள்ள சமூகம் மற்றும் பெற்றோரின் வேலை விவரங்களை உள்ளிடவும்.',
      'படி 4: மாநில சாதிச் சான்றிதழ், 3 ஆண்டு வருமானச் சான்று போன்றவற்றை பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: கிரீமி லேயர் இல்லாததை உறுதிசெய்து வட்டாட்சியர் ஒப்புதல் அளிப்பார்.'
    ],
    official_source: 'Revenue Department TN / Ministry of Social Justice & Empowerment',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Central List of OBCs & DoPT Guidelines REV-115',
    issuing_authority: 'Tahsildar',
    issuing_authority_tamil: 'வட்டாட்சியர்',
    notes: 'OBC Non-Creamy Layer certificates are valid for 1 year from the financial year of issuance for central entrance exams and recruitment.',
    notes_tamil: 'மத்திய அரசு தேர்வுகள் மற்றும் சேர்க்கைகளுக்கு OBC நான்-கிரீமி லேயர் சான்றிதழ் 1 நிதி ஆண்டுக்கு மட்டுமே செல்லுபடியாகும்.',
    is_online: true,
    keywords: ['obc', 'non creamy layer', 'ncl', 'central government reservation', 'upsc', 'ssc', 'neet all india quota', 'ஓபிசி', 'சாதி சான்றிதழ்'],
    target_audience: ['Job Seekers', 'Students', 'Competitive Exam Aspirants']
  },
  {
    id: 'residence-certificate',
    name: 'Residence Certificate (வசிப்பிடச் சான்றிதழ்)',
    name_tamil: 'வசிப்பிடச் சான்றிதழ் (இருப்பிடச் சான்றிதழ்)',
    category: 'Certificates',
    category_tamil: 'சான்றிதழ்கள்',
    department: 'Revenue and Disaster Management Department',
    department_tamil: 'வருவாய் மற்றும் பேரிடர் மேலாண்மைத் துறை',
    description: 'A certificate confirming that an individual currently resides at a specific residential address within a designated village, town, or city in Tamil Nadu.',
    description_tamil: 'ஒரு நபர் தமிழ்நாட்டின் குறிப்பிட்ட ஊர் அல்லது முகவரியில் தற்போது வசித்து வருகிறார் என்பதை உறுதிப்படுத்தும் சான்றிதழ். பாஸ்போர்ட், எரிவாயு இணைப்பு மற்றும் வங்கி பயன்பாடுகளுக்குத் தேவை.',
    eligibility: [
      'Any individual currently living in a specific locality in Tamil Nadu for more than 6 months.',
      'Tenants or homeowners.'
    ],
    eligibility_tamil: [
      'தமிழ்நாட்டின் குறிப்பிட்ட பகுதியில் 6 மாதங்களுக்கு மேலாக வசிக்கும் எந்தவொரு நபரும் விண்ணப்பிக்கலாம்.',
      'வாடகை வீட்டில் வசிப்பவர்கள் அல்லது சொந்த வீடு உள்ளவர்கள்.'
    ],
    documents: [
      'Applicant Photograph & Aadhaar Card',
      'Smart Family Card / Ration Card or Voter ID card',
      'Electricity Bill (EB Bill) / Water Tax / Property Tax receipt',
      'Rental Agreement (if living in a rented house)',
      'Gas connection book or Bank Passbook with current address'
    ],
    documents_tamil: [
      'விண்ணப்பதாரரின் புகைப்படம் மற்றும் ஆதார் அட்டை',
      'ஸ்மார்ட் குடும்ப அட்டை அல்லது வாக்காளர் அடையாள அட்டை',
      'மின்கட்டண ரசீது (EB Bill) / சொத்து வரி ரசீது',
      'வாடகை ஒப்பந்தப் பத்திரம் (வாடகை வீட்டில் வசித்தால்)',
      'எரிவாயு இணைப்பு புத்தகம் அல்லது முகவரி உள்ள வங்கி கணக்குப் புத்தகம்'
    ],
    application_steps: [
      'Step 1: Open tnesevai.tn.gov.in or visit the local e-Sevai Kendra.',
      'Step 2: Choose "REV-105 Residence Certificate".',
      'Step 3: Enter the present address, duration of stay at the address, and previous address.',
      'Step 4: Upload address proof, Aadhaar, and photograph.',
      'Step 5: Pay the fee of ₹60.',
      'Step 6: Verified by the Village Administrative Officer and issued with digital signature.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in அல்லது அரசு இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: "REV-105 வசிப்பிடச் சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: தற்போதைய முகவரி மற்றும் எத்தனை ஆண்டுகளாக அங்கு வசிக்கிறீர்கள் என்ற தகவலை உள்ளிடவும்.',
      'படி 4: மின்கட்டண ரசீது, ஆதார் மற்றும் புகைப்படத்தை பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: VAO சரிபார்த்து வட்டாட்சியர் ஒப்புதலுடன் மின்-சான்றிதழ் பதிவிறக்கத்திற்கு வரும்.'
    ],
    official_source: 'Revenue Department, TN',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Revenue Administration Citizen Charter REV-105',
    issuing_authority: 'Tahsildar / Zonal Deputy Tahsildar',
    issuing_authority_tamil: 'வட்டாட்சியர் / மண்டல துணை வட்டாட்சியர்',
    notes: 'Differs from Nativity Certificate: Residence proves current living address, while Nativity proves ancestry/state origin.',
    notes_tamil: 'நேட்டிவிட்டி சான்றிதழில் இருந்து இது வேறுபட்டது: வசிப்பிடச் சான்றிதழ் தற்போதைய இருப்பிட முகவரியை மட்டுமே உறுதி செய்கிறது.',
    is_online: true,
    keywords: ['residence', 'address proof', 'stay certificate', 'vasippidam', 'இருப்பிடம்', 'வசிப்பிடம்'],
    target_audience: ['Citizens', 'Tenants', 'General Public']
  },
  {
    id: 'small-marginal-farmer-certificate',
    name: 'Small / Marginal Farmer Certificate (சிறு / குறு விவசாயி சான்றிதழ்)',
    name_tamil: 'சிறு / குறு விவசாயி சான்றிதழ்',
    category: 'Agriculture',
    category_tamil: 'விவசாயம்',
    department: 'Revenue & Agriculture and Farmers Welfare Department',
    department_tamil: 'வருவாய் மற்றும் வேளாண்மை - உழவர் நலத்துறை',
    description: 'A certificate recognizing a farmer as a Marginal Farmer (holding up to 2.5 acres of dry land / 1.25 acres of wet land) or Small Farmer (holding up to 5 acres of dry land / 2.5 acres of wet land), unlocking heavy subsidies for drip irrigation, farm machinery, crop loans, and free electricity.',
    description_tamil: 'ஒரு விவசாயியை குறு விவசாயி (1.25 ஏக்கர் நன்செய் அல்லது 2.5 ஏக்கர் புன்செய்) அல்லது சிறு விவசாயி (2.5 ஏக்கர் நன்செய் அல்லது 5 ஏக்கர் புன்செய்) என வகைப்படுத்தும் சான்றிதழ். சொட்டு நீர்ப்பாசன மானியம் (100% வரை), உழவு இயந்திர மானியம் மற்றும் விவசாய பயிர்க்கடன் பெற அவசியம்.',
    eligibility: [
      'Marginal Farmer: Total agricultural landholding up to 1.25 acres of wetland (nansei) OR up to 2.50 acres of dryland (punsei).',
      'Small Farmer: Total agricultural landholding up to 2.50 acres of wetland OR up to 5.00 acres of dryland.',
      'Land must be situated within Tamil Nadu and registered under applicant’s name.'
    ],
    eligibility_tamil: [
      'குறு விவசாயி: நன்செய் நிலம் 1.25 ஏக்கருக்குள் அல்லது புன்செய் நிலம் 2.50 ஏக்கருக்குள் நில உடைமை கொண்டவர்.',
      'சிறு விவசாயி: நன்செய் நிலம் 2.50 ஏக்கருக்குள் அல்லது புன்செய் நிலம் 5.00 ஏக்கருக்குள் நில உடைமை கொண்டவர்.',
      'விண்ணப்பதாரர் பெயரில் தமிழ்நாட்டில் விவசாய நிலம் பட்டா இருக்க வேண்டும்.'
    ],
    documents: [
      'Farmer’s Aadhaar Card & Photograph',
      'Smart Family Card / Ration Card',
      'Patta / Chitta copy of the agricultural land',
      'Adangal extract / Kist receipt (land tax receipt)',
      'Sale Deed or Partition Deed of the property'
    ],
    documents_tamil: [
      'விவசாயியின் ஆதார் அட்டை மற்றும் புகைப்படம்',
      'ஸ்மார்ட் குடும்ப அட்டை',
      'நிலத்தின் பட்டா / சிட்டா நகல்',
      'அடங்கல் சான்று / நில வரி செலுத்திய கிஸ்தி ரசீது',
      'கிரயப் பத்திரம் அல்லது பாகப்பிரிவினை பத்திரம்'
    ],
    application_steps: [
      'Step 1: Access tnesevai.tn.gov.in or visit the nearest Arasu e-Sevai Kendra or Agriculture Extension Centre.',
      'Step 2: Choose "REV-116 Small / Marginal Farmer Certificate".',
      'Step 3: Enter Patta numbers, survey numbers, district, taluk, and village details.',
      'Step 4: Upload Patta copy, Chitta, Kist receipt, and Aadhaar.',
      'Step 5: Pay ₹60 government fee.',
      'Step 6: VAO field inspection verifies actual land classification (wet/dry) and Tahsildar issues certificate.'
    ],
    application_steps_tamil: [
      'படி 1: tnesevai.tn.gov.in அல்லது அரசு இ-சேவை மையம் / வேளாண் விரிவாக்க மையத்திற்குச் செல்லவும்.',
      'படி 2: "REV-116 சிறு / குறு விவசாயி சான்றிதழ்" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: பட்டா எண், சர்வே எண், கிராமம் மற்றும் நில வகை விவரங்களை உள்ளிடவும்.',
      'படி 4: பட்டா, சிட்டா, கிஸ்தி ரசீது மற்றும் ஆதாரைப் பதிவேற்றவும்.',
      'படி 5: ரூ. 60 கட்டணம் செலுத்தவும்.',
      'படி 6: VAO நிலத்தை ஆய்வு செய்து வட்டாட்சியர் ஒப்புதல் அளித்த பின் சான்றிதழ் வழங்கப்படும்.'
    ],
    official_source: 'Agriculture and Farmers Welfare Dept / Revenue Dept, TN',
    official_url: 'https://www.tnesevai.tn.gov.in',
    processing_time: '15 working days',
    processing_time_tamil: '15 வேலை நாட்கள்',
    fee: '₹60',
    fee_tamil: 'ரூ. 60',
    verified_date: '2025-02-15',
    gazette_ref: 'Agriculture & Farmers Welfare Dept REV-116',
    issuing_authority: 'Tahsildar & Agriculture Officer',
    issuing_authority_tamil: 'வட்டாட்சியர் மற்றும் வேளாண்மை அலுவலர்',
    notes: 'Essential for getting 100% subsidy for micro-irrigation (drip/sprinkler) under PMKSY in Tamil Nadu.',
    notes_tamil: 'தமிழ்நாட்டில் நுண்ணீர்ப்பாசன (சொட்டுநீர்/தெளிப்புநீர்) திட்டத்தில் 100% மானியம் பெற இந்தச் சான்றிதழ் கட்டாயம்.',
    is_online: true,
    keywords: ['farmer', 'agriculture', 'small farmer', 'marginal farmer', 'patta', 'drip irrigation subsidy', 'விவசாயி', 'சிறு விவசாயி', 'மானியம்'],
    target_audience: ['Farmers', 'Rural Landowners']
  },
  {
    id: 'pudhumai-penn',
    name: 'Pudhumai Penn Scheme (Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme)',
    name_tamil: 'புதுமைப் பெண் திட்டம் (மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதித் திட்டம்)',
    category: 'Women',
    category_tamil: 'பெண்கள் நலன்',
    department: 'Social Welfare and Women Empowerment Department',
    department_tamil: 'சமூக நலன் மற்றும் மகளிர் உரிமைத் துறை',
    description: 'Flagship Tamil Nadu Government welfare scheme providing financial assistance of ₹1,000 per month directly into the bank accounts of female students who studied in Government Schools (Classes 6 to 12) until they complete their undergraduate degree, diploma, or ITI course.',
    description_tamil: 'அரசுப் பள்ளிகளில் 6 முதல் 12-ம் வகுப்பு வரை படித்து உயர்கல்வி (பட்டப்படிப்பு, டிப்ளமோ, ITI) பயிலும் மாணவிகளுக்கு மாதந்தோறும் ₹1,000 அவர்களின் வங்கிக் கணக்கில் நேரடியாக வழங்கும் வரலாற்றுச் சிறப்புமிக்க திட்டம்.',
    eligibility: [
      'Female students only.',
      'Must have studied continuously from 6th to 12th standard in Tamil Nadu Government schools.',
      'Must be enrolled in recognized Undergraduate Degrees (B.A, B.Sc, B.Com, B.E, MBBS, etc.), Diploma, or ITI courses in Tamil Nadu.',
      'Students eligible even if already receiving merit scholarships.'
    ],
    eligibility_tamil: [
      'மாணவிகள் மட்டுமே விண்ணப்பிக்க முடியும்.',
      'தமிழ்நாடு அரசுப் பள்ளிகளில் 6 முதல் 12-ம் வகுப்பு வரை தொடர்ந்து படித்திருக்க வேண்டும்.',
      'அங்கீகரிக்கப்பட்ட இளங்கலை பட்டப்படிப்பு (B.A, B.Sc, B.Com, B.E, மருத்துவம் போன்றவை), டிப்ளமோ அல்லது ITI படிப்புகளில் சேர்ந்திருக்க வேண்டும்.',
      'பிற கல்வி உதவித்தொகை பெறுபவர்களும் இத்திட்டத்தில் பயன்பெறலாம்.'
    ],
    documents: [
      'Student Aadhaar Card (linked with Active Bank Account)',
      'School Bonafide / Transfer Certificate (TC) confirming study in Govt School from 6th to 12th standard (EMIS ID proof)',
      'College Admission confirmation receipt / Student ID Card',
      'Bank Account Passbook (must have single account in student’s name with Aadhaar seeding / NPCI mapping)'
    ],
    documents_tamil: [
      'மாணவியின் ஆதார் அட்டை (வங்கி கணக்குடன் இணைக்கப்பட்டது)',
      '6 முதல் 12 வரை அரசுப் பள்ளியில் படித்ததற்கான பள்ளி மாற்றுச் சான்றிதழ் / போனஃபைட் (EMIS எண் சான்று)',
      'கல்லூரி சேர்க்கை ரசீது / அடையாள அட்டை',
      'மாணவியின் பெயரிலான தனி வங்கி கணக்கு புத்தகம் (ஆதார் இணைக்கப்பட்ட NPCI mapped account)'
    ],
    application_steps: [
      'Step 1: Applications are primarily processed through the college or institution where the student is enrolled.',
      'Step 2: The college Nodal Officer verifies the student’s EMIS number from school records.',
      'Step 3: Details are uploaded directly on the official Pudhumai Penn portal (pudhumaippen.tn.gov.in).',
      'Step 4: Verification of Aadhaar-seeded bank account through NPCI.',
      'Step 5: District Social Welfare Officer sanctions the application.',
      'Step 6: ₹1,000 is credited via Direct Benefit Transfer (DBT) into the bank account every month until completion of the course.'
    ],
    application_steps_tamil: [
      'படி 1: மாணவி படிக்கும் கல்லூரி / கல்வி நிறுவனத்தின் மூலமாகவே விண்ணப்பங்கள் நேரடியாகப் பதிவு செய்யப்படுகின்றன.',
      'படி 2: கல்லூரியின் ஒருங்கிணைப்பாளர் (Nodal Officer) மாணவியின் பள்ளி EMIS எண்ணை சரிபார்ப்பார்.',
      'படி 3: அதிகாரப்பூர்வ தளம் (pudhumaippen.tn.gov.in) வழியாக விவரங்கள் பதிவேற்றப்படும்.',
      'படி 4: NPCI முறையில் ஆதார் இணைக்கப்பட்ட வங்கிக் கணக்கு சரிபார்க்கப்படும்.',
      'படி 5: மாவட்ட சமூக நல அலுவலர் ஒப்புதல் அளிப்பார்.',
      'படி 6: படிப்பு முடியும் வரை மாதந்தோறும் ₹1,000 நேரடியாக மாணவிகளின் வங்கிக் கணக்கில் வரவு வைக்கப்படும்.'
    ],
    official_source: 'Social Welfare & Women Empowerment Dept, TN',
    official_url: 'https://www.pudhumaippen.tn.gov.in',
    processing_time: 'Academic cycle enrollment (Monthly DBT)',
    processing_time_tamil: 'கல்லூரி வழியே விண்ணப்பம் (மாதாந்திர DBT)',
    fee: 'Free (No fee)',
    fee_tamil: 'இலவசம் (கட்டணம் இல்லை)',
    verified_date: '2025-02-15',
    gazette_ref: 'G.O.(Ms) No. 29, Social Welfare & Women Empowerment Dept',
    issuing_authority: 'District Social Welfare Officer & College Nodal Officer',
    issuing_authority_tamil: 'மாவட்ட சமூக நல அலுவலர் மற்றும் கல்லூரி ஒருங்கிணைப்பாளர்',
    notes: 'Money is deposited through DBT. Ensure your bank account has Aadhaar DBT enabled; otherwise payments will fail.',
    notes_tamil: 'பணம் DBT முறையில் வருவதால் வங்கிக் கணக்கில் ஆதார் NPCI இணைப்பு கட்டாயம் இருக்க வேண்டும்.',
    is_online: true,
    keywords: ['pudhumai penn', '1000 rupees girl student', 'higher education assistance', 'moovalur ramamirtham', 'girls scholarship', 'புதுமைப் பெண்', 'மாதம் 1000'],
    target_audience: ['Female Students', 'College Students', 'Youth']
  },
  {
    id: 'tamil-pudhalvan',
    name: 'Tamil Pudhalvan Scheme (தமிழ்ப் புதல்வன் திட்டம்)',
    name_tamil: 'தமிழ்ப் புதல்வன் திட்டம்',
    category: 'Students',
    category_tamil: 'மாணவர்கள் நலன்',
    department: 'Higher Education & Social Welfare Department',
    department_tamil: 'உயர்கல்வி மற்றும் சமூக நலத் துறை',
    description: 'A transformative financial incentive scheme providing ₹1,000 per month to male students who studied in Tamil Nadu Government Schools (Classes 6 to 12) pursuing higher education (Undergraduate, Diploma, ITI) to purchase books, study materials, and meet higher educational expenses.',
    description_tamil: 'அரசுப் பள்ளிகளில் 6 முதல் 12-ம் வகுப்பு வரை படித்துக் கல்லூரி, பாலிடெக்னிக், ITI போன்ற உயர்கல்வி பயிலும் மாணவர்களுக்குப் பாடப்புத்தகங்கள் மற்றும் கல்விச் செலவுகளுக்காக மாதம் ₹1,000 வழங்கும் திட்டம்.',
    eligibility: [
      'Male students studying in Government schools from 6th to 12th standard.',
      'Must be pursuing undergraduate degree (Arts, Science, Engineering, Medicine, Law, Agriculture) or Diploma / ITI courses in recognized institutions in Tamil Nadu.',
      'Students in private colleges under government quota or management quota are also eligible provided they studied in government schools in 6th-12th.'
    ],
    eligibility_tamil: [
      'அரசுப் பள்ளிகளில் 6 முதல் 12-ம் வகுப்பு வரை படித்த மாணவர்கள்.',
      'அங்கீகரிக்கப்பட்ட கல்லூரிகளில் இளங்கலை பட்டம் (கலை, அறிவியல், பொறியியல், மருத்துவம், சட்டம்), பாலிடெக்னிக் டிப்ளமோ அல்லது ITI படிப்பவர்.',
      'அரசுப் பள்ளியில் படித்திருந்தால் அரசு அல்லது சுயநிதி கல்லூரிகளில் படிக்கும் மாணவர்களுக்கும் பொருந்தும்.'
    ],
    documents: [
      'Student Aadhaar Card (linked with bank account)',
      'School EMIS Number / Proof of studying in Tamil Nadu Govt School from 6th to 12th (TC / Bonafide)',
      'College ID card / Admission proof',
      'Bank passbook showing Account Number, IFSC code, and Aadhaar seeding status'
    ],
    documents_tamil: [
      'மாணவரின் ஆதார் அட்டை (வங்கி கணக்குடன் இணைக்கப்பட்டது)',
      'அரசுப் பள்ளியில் 6 முதல் 12 வரை படித்ததற்கான EMIS எண் / பள்ளி மாற்றுச் சான்றிதழ்',
      'கல்லூரி சேர்க்கை ரசீது / அடையாள அட்டை',
      'ஆதார் இணைக்கப்பட்ட தனி நபர் வங்கி கணக்குப் புத்தகம்'
    ],
    application_steps: [
      'Step 1: Enrollment happens via your College / Polytechnic / ITI Nodal Officer.',
      'Step 2: The institution verifies school education records using the student’s School EMIS ID.',
      'Step 3: Registration on the official Tamil Pudhalvan portal (tamilpudhalvan.tn.gov.in).',
      'Step 4: Bank account verification via PFMS / Aadhaar Payment Bridge.',
      'Step 5: Direct deposit of ₹1,000 every month into the student’s bank account.'
    ],
    application_steps_tamil: [
      'படி 1: மாணவர் பயிலும் கல்லூரி / பாலிடெக்னிக் / ITI-ல் உள்ள சிறப்பு ஒருங்கிணைப்பாளர் வழியே விண்ணப்பம் பதிவு செய்யப்படுகிறது.',
      'படி 2: மாணவரின் பள்ளி EMIS எண்ணைக் கொண்டு 6-12 அரசுப் பள்ளி படிப்பு சரிபார்க்கப்படும்.',
      'படி 3: அதிகாரப்பூர்வ தளத்தில் (tamilpudhalvan.tn.gov.in) விவரங்கள் சமர்ப்பிக்கப்படும்.',
      'படி 4: வங்கி கணக்கு மற்றும் ஆதார் இணைப்பு சரிபார்க்கப்படும்.',
      'படி 5: ஒவ்வொரு மாதமும் ₹1,000 மாணவரின் வங்கிக் கணக்கில் நேரடியாக வரவு வைக்கப்படும்.'
    ],
    official_source: 'Higher Education Department, Government of Tamil Nadu',
    official_url: 'https://tamilpudhalvan.tn.gov.in',
    processing_time: 'Academic cycle enrollment (Monthly DBT)',
    processing_time_tamil: 'கல்லூரி வழியே விண்ணப்பம் (மாதாந்திர DBT)',
    fee: 'Free (No fee)',
    fee_tamil: 'இலவசம் (கட்டணம் இல்லை)',
    verified_date: '2025-02-15',
    gazette_ref: 'G.O.(Ms) No. 46, Higher Education Department',
    issuing_authority: 'Higher Education Department & College Nodal Officer',
    issuing_authority_tamil: 'உயர்கல்வித் துறை மற்றும் கல்லூரி ஒருங்கிணைப்பாளர்',
    notes: 'Introduced to increase the gross enrollment ratio of boys from government schools into colleges.',
    notes_tamil: 'அரசுப் பள்ளி மாணவர்கள் உயர்கல்வி பயில்வதை ஊக்குவிக்க இத்திட்டம் தொடங்கப்பட்டது.',
    is_online: true,
    keywords: ['tamil pudhalvan', 'boys scholarship', '1000 rupees boys', 'higher education allowance', 'govt school boys 1000', 'தமிழ்ப் புதல்வன்', 'மாணவர் உதவித்தொகை'],
    target_audience: ['Male Students', 'College Students', 'Youth']
  },
  {
    id: 'kalaignar-magalir-urimai-thittam',
    name: 'Kalaignar Magalir Urimai Thittam (KMUT - Women Basic Income)',
    name_tamil: 'கலைஞர் மகளிர் உரிமைத் திட்டம்',
    category: 'Women',
    category_tamil: 'பெண்கள் நலன்',
    department: 'Special Programme Implementation & Revenue Department',
    department_tamil: 'சிறப்புத் திட்டச் செயலாக்கத் துறை / வருவாய்த் துறை',
    description: 'A historic basic income entitlement scheme providing ₹1,000 per month directly into the bank accounts of over 1.15 crore eligible women heads of families across Tamil Nadu, recognizing their unpaid household labor.',
    description_tamil: 'குடும்பத் தலைவிகளின் உழைப்பை அங்கீகரித்து, தகுதியுள்ள 1.15 கோடிக்கும் அதிகமான குடும்பத் தலைவிகளுக்கு மாதம் ₹1,000 அவர்களின் வங்கிக் கணக்கில் நேரடியாக வழங்கும் திட்டம்.',
    eligibility: [
      'Woman head of the family as recorded in the Smart Family Card.',
      'Age limit: Minimum 21 years of age completed.',
      'Family annual income must be below ₹2.5 Lakhs.',
      'Family must own less than 5 acres of wetland OR less than 10 acres of dryland.',
      'Family annual domestic electricity consumption should be less than 3,600 units.'
    ],
    eligibility_tamil: [
      'ஸ்மார்ட் குடும்ப அட்டையில் குடும்பத் தலைவியாகக் குறிப்பிடப்பட்டுள்ள பெண்.',
      'விண்ணப்பதாரர் 21 வயது பூர்த்தி அடைந்திருக்க வேண்டும்.',
      'குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்.',
      '5 ஏக்கருக்குக் குறைவாக நன்செய் அல்லது 10 ஏக்கருக்குக் குறைவாக புன்செய் நிலம் கொண்டிருக்க வேண்டும்.',
      'ஆண்டு மின் பயன்பாடு 3,600 யூனிட்டுகளுக்குள் இருக்க வேண்டும்.'
    ],
    documents: [
      'Smart Family Card / Ration Card',
      'Aadhaar Card of the woman head of family',
      'Electricity Consumer Number (EB connection number)',
      'Bank passbook with single account in applicant’s name'
    ],
    documents_tamil: [
      'ஸ்மார்ட் குடும்ப அட்டை (ரேஷன் கார்டு)',
      'குடும்பத் தலைவியின் ஆதார் அட்டை',
      'வீட்டு மின் நுகர்வோர் எண் (EB Number)',
      'விண்ணப்பதாரரின் தனி நபர் வங்கிக் கணக்குப் புத்தகம்'
    ],
    application_steps: [
      'Step 1: Special registration camps are organized at ration shop / ward levels periodically by the Tamil Nadu Government.',
      'Step 2: Biometric Aadhaar authentication is completed at the camp.',
      'Step 3: Verification of electricity, land records, and vehicle registration data automatically through state databases.',
      'Step 4: If application was earlier rejected, citizens can file an appeal on the official portal or e-Sevai Kendra within 30 days.',
      'Step 5: Eligible beneficiaries receive ₹1,000 on the 15th of every month via DBT.'
    ],
    application_steps_tamil: [
      'படி 1: தமிழக அரசால் நியாயவிலைக் கடைகள் மற்றும் வார்டு அளவில் நடத்தப்படும் சிறப்பு முகாம்களில் பதிவு செய்யப்படுகிறது.',
      'படி 2: முகாமில் கைரேகை பயோமெட்ரிக் மூலம் ஆதார் சரிபார்க்கப்படும்.',
      'படி 3: அரசு தகவல் அமைப்புகள் மூலம் மின் பயன்பாடு மற்றும் நில விவரங்கள் தானாக சரிபார்க்கப்படும்.',
      'படி 4: நிராகரிக்கப்பட்டவர்கள் 30 நாட்களுக்குள் இ-சேவை மையம் அல்லது இணையதளம் வழியாக மேல்முறையீடு செய்யலாம்.',
      'படி 5: தகுதியான பயனாளிகளுக்கு மாதந்தோறும் 15-ம் தேதி ₹1,000 வங்கிக் கணக்கில் செலுத்தப்படும்.'
    ],
    official_source: 'Government of Tamil Nadu Special Programme Implementation',
    official_url: 'https://kmut.tn.gov.in',
    processing_time: 'Camp enrollment & appeal review (Monthly DBT)',
    processing_time_tamil: 'முகாம் பதிவு மற்றும் மேல்முறையீடு (மாதாந்திர DBT)',
    fee: 'Free (No fee)',
    fee_tamil: 'இலவசம் (கட்டணம் இல்லை)',
    verified_date: '2025-02-15',
    gazette_ref: 'G.O.(Ms) No. 5, Special Programme Implementation Dept',
    issuing_authority: 'Special Programme Implementation & Revenue Administration',
    issuing_authority_tamil: 'சிறப்புத் திட்டச் செயலாக்கத் துறை & வருவாய்த் துறை',
    notes: 'Income tax payers, government employees, and families with four-wheelers (car/jeep) are excluded from the scheme.',
    notes_tamil: 'வருமான வரி செலுத்துவோர், அரசு ஊழியர்கள், ஓய்வூதியதாரர்கள் மற்றும் நான்கு சக்கர வாகனம் (கார்) உள்ள குடும்பங்களுக்கு விலக்கு அளிக்கப்பட்டுள்ளது.',
    is_online: true,
    keywords: ['kmut', 'magalir urimai', '1000 rupees women', 'kudumba thalaivi', 'kalaignar magalir', 'மகளிர் உரிமைத் திட்டம்', 'குடும்பத் தலைவி 1000'],
    target_audience: ['Women', 'Homemakers', 'Low Income Families']
  },
  {
    id: 'cmchis-health-insurance',
    name: 'Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS)',
    name_tamil: 'முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்',
    category: 'Healthcare',
    category_tamil: 'சுகாதாரம்',
    department: 'Health and Family Welfare Department',
    department_tamil: 'மக்கள் நல்வாழ்வு மற்றும் குடும்ப நலத்துறை',
    description: 'Provides cashless medical treatment up to ₹5,00,000 per family per year across empanelled government and private hospitals in Tamil Nadu for over 1,500 specialized medical and surgical procedures.',
    description_tamil: 'தமிழ்நாட்டின் அரசு மற்றும் தனியார் மருத்துவமனைகளில் 1,500-க்கும் மேற்பட்ட நோய்களுக்கான சிகிச்சைக்கு குடும்பத்திற்கு ஆண்டுக்கு ₹5,00,000 வரை கட்டணமில்லா பணமில்லா மருத்துவ சிகிச்சை வழங்கும் விரிவான திட்டம்.',
    eligibility: [
      'Family must be resident of Tamil Nadu holding a valid Smart Family Card.',
      'Annual family income should be below ₹1,20,000 (or holding rice-drawing Smart Ration Card).',
      'All members listed on the Smart Ration Card are covered.'
    ],
    eligibility_tamil: [
      'தமிழ்நாட்டில் வசிக்கும் செல்லுபடியாகும் ஸ்மார்ட் குடும்ப அட்டை உள்ள குடும்பங்கள்.',
      'குடும்ப ஆண்டு வருமானம் ₹1,20,000-க்கு மிகாமல் இருக்க வேண்டும் (அரிசி பெறும் ரேஷன் அட்டை உள்ளவர்களுக்கு முன்னுரிமை).',
      'ஸ்மார்ட் கார்டில் உள்ள அனைத்து குடும்ப உறுப்பினர்களுக்கும் இக்காப்பீடு பொருந்தும்.'
    ],
    documents: [
      'Smart Family Card / Ration Card (original and photocopy)',
      'Aadhaar Card of all family members to be enrolled',
      'Income Certificate (showing annual income below ₹1.2 Lakhs) from VAO/Tahsildar',
      'Passport size photographs of the family'
    ],
    documents_tamil: [
      'ஸ்மார்ட் குடும்ப அட்டை (ரேஷன் கார்டு அசல் மற்றும் நகல்)',
      'குடும்ப உறுப்பினர்கள் அனைவரின் ஆதார் அட்டைகள்',
      'வருமானச் சான்றிதழ் (ஆண்டு வருமானம் ₹1,20,000-க்குள் உள்ளதற்கான சான்று)',
      'குடும்ப உறுப்பினர்களின் புகைப்படங்கள்'
    ],
    application_steps: [
      'Step 1: Visit the District Kiosk located at the District Collectorate or Government Medical College Hospital.',
      'Step 2: Submit Smart Ration Card, Aadhaar cards, and Income Certificate.',
      'Step 3: Biometric enrollment (photograph and fingerprints) of all family members.',
      'Step 4: Smart CMCHIS Health Insurance Card with URN (Uniform Registration Number) is printed and handed over on the spot.',
      'Step 5: Present the card at any empanelled hospital at the "Chief Minister Insurance Desk" for cashless pre-authorization.'
    ],
    application_steps_tamil: [
      'படி 1: மாவட்ட ஆட்சியர் அலுவலகம் அல்லது அரசு மருத்துவக் கல்லூரி மருத்துவமனையில் உள்ள முதலமைச்சர் காப்பீட்டு மையத்திற்குச் செல்லவும்.',
      'படி 2: ஸ்மார்ட் ரேஷன் கார்டு, ஆதார் மற்றும் வருமானச் சான்றிதழைச் சமர்ப்பிக்கவும்.',
      'படி 3: குடும்ப உறுப்பினர்களின் புகைப்படம் மற்றும் கைரேகை பயோமெட்ரிக் பதிவு செய்யப்படும்.',
      'படி 4: உடனடியாக URN எண்ணுடன் கூடிய முதலமைச்சரின் மருத்துவக் காப்பீட்டு ஸ்மார்ட் கார்டு வழங்கப்படும்.',
      'படி 5: அனுமதிக்கப்பட்ட மருத்துவமனைகளில் உள்ள முதலமைச்சர் காப்பீட்டு உதவி மையத்தில் கார்டைக் காட்டி கட்டணமில்லா சிகிச்சை பெறலாம்.'
    ],
    official_source: 'Tamil Nadu Health Systems Project (TNHSP)',
    official_url: 'https://cmchistn.com',
    processing_time: 'Same-day issuance at District Kiosk',
    processing_time_tamil: 'மாவட்ட மையத்தில் அன்றே உடனடியாக வழங்கப்படும்',
    fee: 'Free (No fee)',
    fee_tamil: 'இலவசம் (கட்டணம் இல்லை)',
    verified_date: '2025-02-15',
    gazette_ref: 'Health and Family Welfare Dept G.O. / TNHSP Guidelines',
    issuing_authority: 'Tamil Nadu Health Systems Project (TNHSP) / District Kiosk',
    issuing_authority_tamil: 'தமிழ்நாடு சுகாதார திட்ட இயக்குநரகம் / மாவட்ட காப்பீட்டு மையம்',
    notes: '24x7 Toll-free Helpline: 1800 425 3993 for finding nearest empanelled hospitals and emergency authorizations.',
    notes_tamil: '24 மணி நேர இலவச உதவி எண்: 1800 425 3993 மூலம் அருகிலுள்ள மருத்துவமனைகள் மற்றும் அவசர சிகிச்சை தகவல்களை அறியலாம்.',
    is_online: true,
    keywords: ['cmchis', 'health insurance', '5 lakhs medical treatment', 'maruthuva kappeedhu', 'hospital cashless', 'மருத்துவக் காப்பீடு', 'காப்பீட்டு அட்டை'],
    target_audience: ['Families', 'Low Income Households', 'Senior Citizens']
  },
  {
    id: 'smart-ration-card',
    name: 'Smart Family Card / New Ration Card (TNPDS)',
    name_tamil: 'புதிய ஸ்மார்ட் மின்னணு குடும்ப அட்டை (ரேஷன் கார்டு)',
    category: 'Welfare',
    category_tamil: 'பொது நலன் & விநியோகம்',
    department: 'Civil Supplies and Consumer Protection Department',
    department_tamil: 'உணவு மற்றும் நுகர்வோர் பாதுகாப்புத் துறை',
    description: 'Official digital family identity card entitling Tamil Nadu households to subsidized or free food grains, pulses, oil, sugar under the Public Distribution System (PDS), and serving as the primary proof of family status for state welfare schemes.',
    description_tamil: 'பொது விநியோகத் திட்டத்தின் (PDS) கீழ் அரிசி, பருப்பு, சமையல் எண்ணெய், சர்க்கரை போன்ற அத்தியாவசியப் பொருட்களைப் பெறவும், தமிழக அரசின் அனைத்து நலத்திட்டங்களுக்கும் முதன்மை ஆதாரமாகவும் பயன்படும் அதிகாரப்பூர்வ ஸ்மார்ட் குடும்ப அட்டை.',
    eligibility: [
      'Applicant and family members must be residents of Tamil Nadu.',
      'The applicant must not be included in any other active ration card across India (must submit surrender/deletion certificate if splitting from parents’ card).',
      'Available for both homeowners and tenant families living in rented houses.'
    ],
    eligibility_tamil: [
      'விண்ணப்பதாரர் மற்றும் குடும்ப உறுப்பினர்கள் தமிழ்நாட்டில் வசிப்பவராக இருக்க வேண்டும்.',
      'குடும்பத்தில் உள்ளவர்கள் வேறு எந்த ரேஷன் கார்டிலும் இடம்பெற்றிருக்கக் கூடாது (பெற்றோர் கார்டில் இருந்து பெயர் நீக்கிய சான்று சமர்ப்பிக்க வேண்டும்).',
      'சொந்த வீடு உள்ளவர்கள் மற்றும் வாடகை வீட்டில் வசிப்பவர்கள் இருவருமே விண்ணப்பிக்கலாம்.'
    ],
    documents: [
      'Aadhaar Card of all family members to be included in the card',
      'Proof of Residence: Registered Rental Agreement / Tenancy receipt OR Property Tax Receipt / EB Bill in owner name',
      'LPG Gas connection details / Gas receipt (to verify non-subsidized / subsidized cylinder allotment)',
      'Surrender / Name Deletion Certificate from previous family ration card',
      'Passport size photograph of the Head of the Family'
    ],
    documents_tamil: [
      'கார்டில் சேர்க்கப்பட வேண்டிய அனைத்து உறுப்பினர்களின் ஆதார் அட்டைகள்',
      'இருப்பிட முகவரிச் சான்று: வாடகை வீட்டில் இருந்தால் வாடகை ஒப்பந்தப் பத்திரம் (Rental Agreement) மற்றும் வீட்டு உரிமையாளரின் EB பில் / சொந்த வீடாக இருந்தால் சொத்து வரி ரசீது',
      'சமையல் எரிவாயு (Gas) இணைப்பு புத்தகம் அல்லது ரசீது',
      'முந்தைய குடும்ப அட்டையிலிருந்து பெயர் நீக்கம் செய்யப்பட்ட சான்றிதழ் (Name Deletion Certificate)',
      'குடும்பத் தலைவரின் பாஸ்போர்ட் அளவு புகைப்படம்'
    ],
    application_steps: [
      'Step 1: Open the official TNPDS portal (www.tnpds.gov.in) or visit nearest Arasu e-Sevai Kendra.',
      'Step 2: Click on "Apply for New Smart Card" (புதிய மின்னணு அட்டை விண்ணப்பிக்க).',
      'Step 3: Enter family head details, address, taluk, and village / ward.',
      'Step 4: Add each family member with their 12-digit Aadhaar number.',
      'Step 5: Upload photograph, residential proof (rental agreement or EB bill), and gas connection receipt.',
      'Step 6: Choose card option (e.g. Rice Card - PHH/NPHH, Sugar Card, or Non-commodity card).',
      'Step 7: Track application online. After Inspection by Taluk Supply Officer (TSO), card is approved and can be downloaded as e-Card or collected as physical Smart Card.'
    ],
    application_steps_tamil: [
      'படி 1: அதிகாரப்பூர்வ TNPDS தளம் (www.tnpds.gov.in) அல்லது இ-சேவை மையத்திற்குச் செல்லவும்.',
      'படி 2: "புதிய மின்னணு அட்டை விண்ணப்பிக்க" என்பதைத் தேர்ந்தெடுக்கவும்.',
      'படி 3: குடும்பத் தலைவர் விவரங்கள், முகவரி, வட்டம் (Taluk), கிராமம்/வார்டு ஆகியவற்றை உள்ளிடவும்.',
      'படி 4: அனைத்து உறுப்பினர்களின் பெயர்கள் மற்றும் ஆதார் எண்களைச் சேர்க்கவும்.',
      'படி 5: வாடகை ஒப்பந்தம் (வாடகை வீடாக இருந்தால்) அல்லது EB பில், எரிவாயு ரசீது மற்றும் புகைப்படத்தைப் பதிவேற்றவும்.',
      'படி 6: அட்டை வகையைத் தேர்ந்தெடுக்கவும் (அரிசி அட்டை, சர்க்கரை அட்டை அல்லது பொருட்கள் இல்லா அட்டை).',
      'படி 7: வட்ட வழங்கல் அலுவலர் (TSO) கள ஆய்வு செய்து ஒப்புதல் அளித்தவுடன், மின்-கார்டை உடனே பதிவிறக்கலாம் அல்லது இ-சேவை மையத்தில் பிளாஸ்டிக் ஸ்மார்ட் கார்டாகப் பெறலாம்.'
    ],
    official_source: 'Civil Supplies and Consumer Protection Department, TN',
    official_url: 'https://www.tnpds.gov.in',
    processing_time: '15 to 30 working days',
    processing_time_tamil: '15 முதல் 30 வேலை நாட்கள்',
    fee: '₹0 for online application / ₹20 for physical smart card print at e-Sevai',
    fee_tamil: 'ஆன்லைனில் விண்ணப்பிக்க ₹0 இலவசம் / பிளாஸ்டிக் அட்டை அச்சிட ரூ. 20',
    verified_date: '2025-02-15',
    gazette_ref: 'TNPDS Citizen Charter & G.O. on Digital Public Distribution',
    issuing_authority: 'Taluk Supply Officer (TSO) / Assistant Commissioner of Civil Supplies',
    issuing_authority_tamil: 'வட்ட வழங்கல் அலுவலர் (TSO) / உதவி ஆணையாளர் (உணவுப் பொருள் வழங்கல்)',
    notes: 'For tenants in rented houses: An official Rental Agreement signed by the house owner alongside electricity bill is valid residence proof. Name deletion from previous card is mandatory.',
    notes_tamil: 'வாடகை வீட்டில் வசிப்பவர்கள்: வீட்டு உரிமையாளருடன் போடப்பட்ட வாடகை ஒப்பந்தப் பத்திரம் (Rental Agreement) மற்றும் மின்கட்டண ரசீது செல்லுபடியாகும் முகவரிச் சான்றாகும்.',
    is_online: true,
    keywords: ['ration card', 'smart card', 'tnpds', 'family card', 'kudumba attai', 'rent house ration card', 'ரேஷன் கார்டு', 'குடும்ப அட்டை', 'ஸ்மார்ட் கார்டு', 'வாடகை வீடு ரேஷன்'],
    target_audience: ['Families', 'Citizens', 'Tenants', 'Housewives']
  },
  {
    id: 'pm-kisan-tn-farmer',
    name: 'PM-KISAN & Tamil Nadu Chief Minister’s Uzhavar Pathukappu Thittam',
    name_tamil: 'PM-KISAN & முதலமைச்சரின் உழவர் பாதுகாப்புத் திட்டம்',
    category: 'Agriculture',
    category_tamil: 'விவசாயம்',
    department: 'Agriculture and Farmers Welfare Department',
    department_tamil: 'வேளாண்மை - உழவர் நலத்துறை',
    description: 'A dual agricultural safety net providing ₹6,000 per year income support via PM-KISAN (in 3 installments of ₹2,000 each) alongside Tamil Nadu’s CM Uzhavar Pathukappu scheme offering comprehensive life/accident insurance, children’s higher education scholarships, and old-age pensions for farmers and agricultural laborers.',
    description_tamil: 'விவசாயிகளுக்கு ஆண்டுக்கு ₹6,000 நேரடி உதவித்தொகை (4 மாதத்திற்கு ஒருமுறை ₹2,000) வழங்கும் PM-KISAN திட்டம் மற்றும் விபத்து நிவாரணம் (₹1,00,000 வரை), கல்வி உதவித்தொகை மற்றும் முதியோர் ஓய்வூதியம் வழங்கும் முதலமைச்சரின் உழவர் பாதுகாப்புத் திட்டம்.',
    eligibility: [
      'Small and marginal farmer families possessing cultivable landholding up to 2 hectares (approx. 5 acres) in Tamil Nadu.',
      'Land records (Patta/Chitta) must be registered in the farmer’s name.',
      'Uzhavar Pathukappu Thittam also covers landless agricultural wage laborers and tenant farmers who do not own land.',
      'Institutional landholders, income-tax payers, and government employees are excluded.'
    ],
    eligibility_tamil: [
      'தமிழ்நாட்டில் 2 ஹெக்டேர் (சுமார் 5 ஏக்கர்) வரை சாகுபடி நிலம் வைத்துள்ள சிறு/குறு விவசாய குடும்பங்கள்.',
      'விவசாய நிலத்தின் பட்டா/சிட்டா விவசாயியின் பெயரில் இருக்க வேண்டும்.',
      'உழவர் பாதுகாப்புத் திட்டத்தில் நிலமற்ற விவசாய கூலித் தொழிலாளர்களும் குத்தகை விவசாயிகளும் பயன்பெறலாம்.',
      'வருமான வரி செலுத்துவோர் மற்றும் அரசு ஊழியர்களுக்கு இத்திட்டம் பொருந்தாது.'
    ],
    documents: [
      'Farmer Aadhaar Card (mandatory with bank link)',
      'Land Ownership Proof: Computerized Patta / Chitta and Adangal copy',
      'Bank Account Passbook (must be NPCI mapped for DBT)',
      'Smart Family Card / Ration Card',
      'Self-declaration of landholding'
    ],
    documents_tamil: [
      'விவசாயியின் ஆதார் அட்டை (வங்கி கணக்குடன் இணைக்கப்பட்டது)',
      'நில உரிமைச் சான்று: கணினி பட்டா / சிட்டா மற்றும் அடங்கல் நகல்',
      'ஆதார் NPCI இணைக்கப்பட்ட வங்கி கணக்குப் புத்தகம்',
      'ஸ்மார்ட் குடும்ப அட்டை',
      'நில உடைமைக்கான சுய உறுதிமொழிப் படிவம்'
    ],
    application_steps: [
      'Step 1: Apply online via the PM-KISAN portal (pmkisan.gov.in) or visit your local Block Agriculture Extension Centre (வேளாண் விரிவாக்க மையம்) or e-Sevai Kendra.',
      'Step 2: Submit Aadhaar number, mobile number, and land details (District, Taluk, Village, Survey / Patta Number).',
      'Step 3: Verification of land records by the Village Administrative Officer (VAO) and Assistant Director of Agriculture.',
      'Step 4: e-KYC authentication via Aadhaar OTP or facial recognition.',
      'Step 5: Every 4 months, ₹2,000 is directly credited to the farmer’s bank account via DBT.',
      'Step 6: For CM Uzhavar Pathukappu Card: Apply at the Taluk Office Uzhavar Pathukappu Thittam cell with smart card and photo.'
    ],
    application_steps_tamil: [
      'படி 1: pmkisan.gov.in தளம் அல்லது உங்கள் வட்டார வேளாண் விரிவாக்க மையம் / இ-சேவை மையம் மூலம் விண்ணப்பிக்கவும்.',
      'படி 2: ஆதார் எண், மொபைல் எண் மற்றும் நில விவரங்களை (வட்டம், கிராமம், பட்டா / சர்வே எண்) உள்ளிடவும்.',
      'படி 3: கிராம நிர்வாக அலுவலர் (VAO) மற்றும் வேளாண்மை உதவி இயக்குநர் மூலம் நில ஆவணங்கள் சரிபார்க்கப்படும்.',
      'படி 4: ஆதார் OTP அல்லது பயோமெட்ரிக் மூலம் e-KYC சரிபார்ப்பு முடிக்கப்பட வேண்டும்.',
      'படி 5: நான்கு மாதங்களுக்கு ஒருமுறை ₹2,000 நேரடியாக விவசாயியின் வங்கிக் கணக்கில் வரவு வைக்கப்படும்.',
      'படி 6: முதலமைச்சரின் உழவர் பாதுகாப்பு திட்ட அட்டை பெற: வட்டாட்சியர் அலுவலக உழவர் பாதுகாப்பு மையத்தில் விண்ணப்பித்து அடையாள அட்டை பெறலாம்.'
    ],
    official_source: 'Agriculture and Farmers Welfare Department, TN & MoA&FW',
    official_url: 'https://tnagrisnet.tn.gov.in',
    processing_time: 'Quarterly DBT disbursement (₹2,000 every 4 months)',
    processing_time_tamil: '4 மாதங்களுக்கு ஒருமுறை ₹2,000 நேரடி வரவு (DBT)',
    fee: 'Free (No fee)',
    fee_tamil: 'இலவசம் (கட்டணம் இல்லை)',
    verified_date: '2025-02-15',
    gazette_ref: 'PM-KISAN Guidelines & G.O.(Ms) No. 129, Agriculture Dept',
    issuing_authority: 'Assistant Director of Agriculture & Revenue Department',
    issuing_authority_tamil: 'வேளாண்மை உதவி இயக்குநர் & வருவாய்த் துறை',
    notes: 'Completing e-KYC on the PM-KISAN portal is mandatory to receive installments. Land records must be linked with Aadhaar.',
    notes_tamil: 'உதவித்தொகை தொடர்ந்து பெற pmkisan.gov.in தளத்தில் ஆதார் e-KYC முடித்திருப்பது கட்டாயம்.',
    is_online: true,
    keywords: ['pm kisan', 'farmer scheme', 'uzhavar pathukappu', 'vivasaayi 6000', '2 acres land subsidy', 'விவசாயி உதவித்தொகை', 'உழவர் பாதுகாப்பு', 'பிஎம் கிசான்'],
    target_audience: ['Farmers', 'Agricultural Laborers', 'Rural Families']
  }
];

// Fast retrieval helper for RAG / Local Grounding
const STOP_WORDS = new Set([
  'the', 'and', 'for', 'can', 'how', 'what', 'where', 'when', 'who', 'with', 'from', 'this',
  'that', 'are', 'was', 'were', 'will', 'need', 'apply', 'get', 'give', 'any', 'some', 'please',
  'online', 'portal', 'government', 'esevai', 'e-sevai', 'sevai', 'seva', 'scheme', 'service',
  'வேண்டும்', 'எப்படி', 'என்ன', 'எங்கு', 'யாருக்கு', 'கிடைக்குமா', 'அரசு', 'சேவை', 'திட்டம்',
  'விண்ணப்பிக்க', 'பதிவு'
]);

export function searchKnowledgeBase(query: string): TNService[] {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return TN_SERVICES;

  // Split into distinctive tokens
  const tokens = normalized
    .split(/[\s,?.!/\\-]+/)
    .filter(t => t.length > 2 && !STOP_WORDS.has(t));

  const scored = TN_SERVICES.map(service => {
    let score = 0;
    const nameLower = service.name.toLowerCase();
    const nameTaLower = service.name_tamil.toLowerCase();
    const descLower = service.description.toLowerCase();
    const descTaLower = service.description_tamil.toLowerCase();
    const catLower = service.category.toLowerCase();
    const idLower = service.id.toLowerCase();

    // Exact or phrase matches
    if (nameLower.includes(normalized) || nameTaLower.includes(normalized)) score += 140;
    if (idLower.includes(normalized)) score += 100;

    // Keyword hits
    for (const kw of service.keywords) {
      const kwLower = kw.toLowerCase();
      if (normalized.includes(kwLower)) {
        score += 50;
      }
    }

    // Token hits with substantive matching
    for (const token of tokens) {
      if (nameLower.includes(token)) score += 25;
      if (nameTaLower.includes(token)) score += 30;
      if (catLower.includes(token)) score += 15;
      for (const kw of service.keywords) {
        if (kw.toLowerCase().includes(token)) score += 20;
      }
      if (descLower.includes(token)) score += 8;
      if (descTaLower.includes(token)) score += 8;
    }

    return { service, score };
  });

  return scored
    .filter(item => item.score >= 35)
    .sort((a, b) => b.score - a.score)
    .map(item => item.service);
}
