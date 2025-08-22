import { Threat, CaseStudy } from '@/types';

export const threats: Threat[] = [
  {
    id: 'phishing-emails',
    title: 'Phishing Emails',
    description: 'Fake emails that appear to be from legitimate sources to steal personal information',
    category: 'phishing',
    riskLevel: 'high',
    demographics: ['students', 'professionals', 'homemakers', 'rural-users', 'senior-citizens'],
    examples: [
      'Email claiming to be from your bank asking to verify account details',
      'Fake job offer emails asking for personal documents',
      'Emails about winning prizes or lottery',
      'Fake government notices asking for immediate action'
    ],
    preventionTips: [
      'Never click on suspicious links in emails',
      'Check the sender\'s email address carefully',
      'Don\'t share personal information via email',
      'Use two-factor authentication',
      'Keep your email client updated'
    ],
    whatToDo: [
      'Don\'t reply to suspicious emails',
      'Mark as spam and delete',
      'Report to your email provider',
      'If you clicked a link, change passwords immediately',
      'Contact your bank if financial information was shared'
    ],
    realLifeCases: [
      {
        id: 'case-1',
        title: 'Student Falls for Fake Job Scam',
        description: 'A 22-year-old engineering student received an email offering a high-paying remote job. The scammer asked for bank details and Aadhaar card for "verification".',
        outcome: 'Lost ₹50,000 from bank account',
        lessons: ['Never share Aadhaar details via email', 'Verify job offers through official channels', 'Be suspicious of high-paying remote jobs'],
        demographic: 'students',
        location: 'Mumbai, Maharashtra',
        date: '2024-01-15'
      }
    ]
  },
  {
    id: 'upi-scams',
    title: 'UPI Payment Scams',
    description: 'Scammers trick users into making UPI payments or steal UPI credentials',
    category: 'upi-scams',
    riskLevel: 'critical',
    demographics: ['students', 'professionals', 'homemakers', 'rural-users', 'senior-citizens'],
    examples: [
      'Fake customer care calls asking for UPI PIN',
      'QR code scams at petrol pumps or shops',
      'Fake refund scams asking for UPI details',
      'Social media scams offering free money via UPI'
    ],
    preventionTips: [
      'Never share UPI PIN with anyone',
      'Verify QR codes before scanning',
      'Don\'t trust unsolicited calls about refunds',
      'Use UPI apps with biometric authentication',
      'Check transaction details carefully'
    ],
    whatToDo: [
      'Immediately block your UPI ID if compromised',
      'Contact your bank and report the fraud',
      'File a complaint with cyber crime portal',
      'Change UPI PIN and passwords',
      'Monitor account for suspicious transactions'
    ],
    realLifeCases: [
      {
        id: 'case-2',
        title: 'Senior Citizen Loses Savings in UPI Scam',
        description: 'A 65-year-old received a call claiming to be from his bank, asking to "verify" his UPI PIN for account security.',
        outcome: 'Lost ₹2,50,000 from savings account',
        lessons: ['Banks never ask for UPI PIN over phone', 'Verify caller identity with bank', 'Don\'t trust urgent security requests'],
        demographic: 'senior-citizens',
        location: 'Delhi',
        date: '2024-02-20'
      }
    ]
  },
  {
    id: 'fake-otp-calls',
    title: 'Fake OTP Calls',
    description: 'Scammers call pretending to be from banks or services to get OTP codes',
    category: 'fake-calls',
    riskLevel: 'high',
    demographics: ['professionals', 'homemakers', 'rural-users', 'senior-citizens'],
    examples: [
      'Calls claiming to be from bank asking for OTP',
      'Fake delivery calls asking for OTP verification',
      'Calls about account suspension requiring OTP',
      'Fake government service calls asking for OTP'
    ],
    preventionTips: [
      'Never share OTP with anyone over phone',
      'Banks never ask for OTP over calls',
      'Verify caller identity independently',
      'Don\'t trust urgent requests',
      'Use official apps for verification'
    ],
    whatToDo: [
      'Hang up immediately if asked for OTP',
      'Block the caller number',
      'Report to your bank if financial',
      'File complaint with cyber crime portal',
      'Change passwords if compromised'
    ],
    realLifeCases: [
      {
        id: 'case-3',
        title: 'Homemaker Scammed by Fake Bank Call',
        description: 'A homemaker received a call from someone claiming to be from her bank, saying her account was compromised and needed OTP to secure it.',
        outcome: 'Lost ₹75,000 from account',
        lessons: ['Banks never call asking for OTP', 'Always verify with official bank number', 'Don\'t panic with urgent requests'],
        demographic: 'homemakers',
        location: 'Bangalore, Karnataka',
        date: '2024-03-10'
      }
    ]
  },
  {
    id: 'identity-theft',
    title: 'Identity Theft',
    description: 'Scammers steal personal information to commit fraud in your name',
    category: 'identity-theft',
    riskLevel: 'critical',
    demographics: ['students', 'professionals', 'homemakers', 'rural-users', 'senior-citizens'],
    examples: [
      'Fake loan applications using stolen documents',
      'Credit card fraud using stolen identity',
      'Fake SIM card applications',
      'Social media account hacking'
    ],
    preventionTips: [
      'Never share Aadhaar, PAN, or other documents online',
      'Use strong, unique passwords',
      'Enable two-factor authentication',
      'Monitor credit reports regularly',
      'Shred documents before disposal'
    ],
    whatToDo: [
      'Immediately report to police',
      'Contact banks and credit bureaus',
      'Freeze credit reports',
      'Change all passwords',
      'Monitor accounts for suspicious activity'
    ],
    realLifeCases: [
      {
        id: 'case-4',
        title: 'Professional\'s Identity Used for Fake Loans',
        description: 'A software professional found out that someone had taken multiple loans using his PAN and Aadhaar details.',
        outcome: '₹15 lakh in fake loans taken in his name',
        lessons: ['Never share PAN/Aadhaar online', 'Monitor credit reports regularly', 'Report identity theft immediately'],
        demographic: 'professionals',
        location: 'Hyderabad, Telangana',
        date: '2024-01-30'
      }
    ]
  },
  {
    id: 'social-media-scams',
    title: 'Social Media Scams',
    description: 'Fraudulent schemes spread through social media platforms',
    category: 'social-media',
    riskLevel: 'medium',
    demographics: ['students', 'professionals', 'homemakers'],
    examples: [
      'Fake investment schemes on WhatsApp',
      'Instagram shopping scams',
      'Facebook job scams',
      'Telegram crypto investment frauds'
    ],
    preventionTips: [
      'Don\'t trust investment promises on social media',
      'Verify business accounts before purchasing',
      'Don\'t share personal information in groups',
      'Be cautious of unsolicited messages',
      'Use secure payment methods'
    ],
    whatToDo: [
      'Stop all communication with scammers',
      'Report to social media platform',
      'Contact payment provider if money sent',
      'File police complaint',
      'Warn friends and family'
    ],
    realLifeCases: [
      {
        id: 'case-5',
        title: 'Student Scammed by WhatsApp Investment Group',
        description: 'A college student joined a WhatsApp group promising high returns on cryptocurrency investments.',
        outcome: 'Lost ₹25,000 in fake investment',
        lessons: ['Don\'t trust investment promises on social media', 'Research before investing', 'Be wary of high-return promises'],
        demographic: 'students',
        location: 'Chennai, Tamil Nadu',
        date: '2024-02-15'
      }
    ]
  },
  {
    id: 'online-shopping-fraud',
    title: 'Online Shopping Fraud',
    description: 'Fake websites and sellers that take money without delivering products',
    category: 'online-shopping',
    riskLevel: 'medium',
    demographics: ['students', 'professionals', 'homemakers', 'rural-users'],
    examples: [
      'Fake e-commerce websites',
      'Social media shopping scams',
      'Fake product listings',
      'Advance payment frauds'
    ],
    preventionTips: [
      'Shop only from trusted websites',
      'Check seller ratings and reviews',
      'Use secure payment methods',
      'Don\'t pay in advance for unknown sellers',
      'Verify website URLs carefully'
    ],
    whatToDo: [
      'Contact payment provider for refund',
      'Report to e-commerce platform',
      'File complaint with consumer forum',
      'Report to cyber crime portal',
      'Warn others about the scam'
    ],
    realLifeCases: [
      {
        id: 'case-6',
        title: 'Rural User Scammed by Fake Mobile Website',
        description: 'A farmer ordered a smartphone from a fake website that looked like a popular e-commerce site.',
        outcome: 'Lost ₹15,000, never received the phone',
        lessons: ['Check website URLs carefully', 'Use trusted e-commerce sites', 'Verify seller authenticity'],
        demographic: 'rural-users',
        location: 'Punjab',
        date: '2024-03-05'
      }
    ]
  }
];

export const getThreatsByDemographic = (demographic: string): Threat[] => {
  return threats.filter(threat => threat.demographics.includes(demographic as any));
};

export const getThreatsByCategory = (category: string): Threat[] => {
  return threats.filter(threat => threat.category === category);
};

export const getThreatById = (id: string): Threat | undefined => {
  return threats.find(threat => threat.id === id);
};
