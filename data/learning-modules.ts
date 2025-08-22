import { LearningModule, QuizQuestion } from '@/types';

export const learningModules: LearningModule[] = [
  {
    id: 'basic-cyber-safety',
    title: 'Basic Cyber Safety for Everyone',
    description: 'Learn the fundamentals of staying safe online, including password security, safe browsing, and recognizing common threats.',
    duration: 15,
    difficulty: 'beginner',
    demographics: ['students', 'professionals', 'homemakers', 'rural-users', 'senior-citizens'],
    topics: ['Password Security', 'Safe Browsing', 'Email Safety', 'Social Media Privacy'],
    quiz: [
      {
        id: 'q1',
        question: 'What is the best practice for creating a strong password?',
        options: [
          'Use your name and birthdate',
          'Use a combination of letters, numbers, and symbols',
          'Use the same password for all accounts',
          'Use simple words that are easy to remember'
        ],
        correctAnswer: 1,
        explanation: 'Strong passwords should include a mix of uppercase and lowercase letters, numbers, and special characters.'
      },
      {
        id: 'q2',
        question: 'What should you do if you receive a suspicious email?',
        options: [
          'Reply immediately to clarify',
          'Click on any links to see what they are',
          'Delete it without opening',
          'Forward it to friends to warn them'
        ],
        correctAnswer: 2,
        explanation: 'Suspicious emails should be deleted without opening to avoid potential malware or phishing attempts.'
      }
    ]
  },
  {
    id: 'upi-safety',
    title: 'UPI Safety Masterclass',
    description: 'Master UPI security to protect your digital payments from fraud and scams.',
    duration: 20,
    difficulty: 'intermediate',
    demographics: ['students', 'professionals', 'homemakers', 'rural-users', 'senior-citizens'],
    topics: ['UPI PIN Security', 'QR Code Safety', 'Transaction Verification', 'Fraud Prevention'],
    quiz: [
      {
        id: 'q1',
        question: 'Should you share your UPI PIN with anyone?',
        options: [
          'Yes, if they claim to be from your bank',
          'Yes, if they say it\'s for verification',
          'No, never share your UPI PIN',
          'Yes, if they call from a trusted number'
        ],
        correctAnswer: 2,
        explanation: 'Never share your UPI PIN with anyone, including bank officials. Banks never ask for PIN over phone.'
      },
      {
        id: 'q2',
        question: 'What should you do before scanning a QR code?',
        options: [
          'Scan immediately to save time',
          'Verify the source and amount',
          'Ask someone else to scan it',
          'Ignore QR codes completely'
        ],
        correctAnswer: 1,
        explanation: 'Always verify the source and amount before scanning any QR code to prevent fraud.'
      }
    ]
  },
  {
    id: 'senior-citizen-safety',
    title: 'Cyber Safety for Senior Citizens',
    description: 'Specialized guidance for senior citizens to navigate the digital world safely.',
    duration: 25,
    difficulty: 'beginner',
    demographics: ['senior-citizens'],
    topics: ['Phone Call Safety', 'Banking Security', 'Family Communication', 'Emergency Contacts'],
    quiz: [
      {
        id: 'q1',
        question: 'What should you do if someone calls claiming to be from your bank?',
        options: [
          'Give them all your details immediately',
          'Hang up and call the bank\'s official number',
          'Share your account number for verification',
          'Tell them your PIN to prove it\'s you'
        ],
        correctAnswer: 1,
        explanation: 'Always hang up and call the bank\'s official number to verify any requests.'
      },
      {
        id: 'q2',
        question: 'Who should you trust with your banking information?',
        options: [
          'Anyone who calls you',
          'Only immediate family members',
          'No one - keep it private',
          'People who sound professional'
        ],
        correctAnswer: 2,
        explanation: 'Never share banking information with anyone, including family members.'
      }
    ]
  },
  {
    id: 'student-online-safety',
    title: 'Online Safety for Students',
    description: 'Essential cyber safety knowledge for students using the internet for education and social media.',
    duration: 18,
    difficulty: 'beginner',
    demographics: ['students'],
    topics: ['Social Media Safety', 'Online Gaming', 'Academic Integrity', 'Peer Pressure'],
    quiz: [
      {
        id: 'q1',
        question: 'What should you do if someone online asks for your personal photos?',
        options: [
          'Send them immediately',
          'Ask for their photos first',
          'Refuse and block them',
          'Ask your friends for advice'
        ],
        correctAnswer: 2,
        explanation: 'Never share personal photos with strangers online. Block and report such requests.'
      },
      {
        id: 'q2',
        question: 'How should you handle cyberbullying?',
        options: [
          'Fight back online',
          'Ignore it completely',
          'Report it and tell a trusted adult',
          'Share it on social media'
        ],
        correctAnswer: 2,
        explanation: 'Always report cyberbullying to platform moderators and tell a trusted adult.'
      }
    ]
  },
  {
    id: 'professional-security',
    title: 'Professional Cyber Security',
    description: 'Advanced security practices for professionals handling sensitive work data.',
    duration: 30,
    difficulty: 'advanced',
    demographics: ['professionals'],
    topics: ['Work Email Security', 'Data Protection', 'VPN Usage', 'Incident Response'],
    quiz: [
      {
        id: 'q1',
        question: 'What should you do with work emails on personal devices?',
        options: [
          'Access them freely',
          'Use company-approved apps only',
          'Forward them to personal email',
          'Ignore security policies'
        ],
        correctAnswer: 1,
        explanation: 'Always use company-approved apps and follow security policies for work data.'
      },
      {
        id: 'q2',
        question: 'How should you handle suspicious work emails?',
        options: [
          'Reply to clarify',
          'Forward to IT security team',
          'Delete immediately',
          'Share with colleagues'
        ],
        correctAnswer: 1,
        explanation: 'Report suspicious emails to your IT security team for proper investigation.'
      }
    ]
  },
  {
    id: 'rural-digital-literacy',
    title: 'Digital Literacy for Rural Users',
    description: 'Basic digital skills and safety for users in rural areas new to online services.',
    duration: 22,
    difficulty: 'beginner',
    demographics: ['rural-users'],
    topics: ['Mobile Banking', 'Government Services', 'Digital Payments', 'Local Support'],
    quiz: [
      {
        id: 'q1',
        question: 'What should you do before using mobile banking?',
        options: [
          'Ask anyone nearby for help',
          'Learn from official bank tutorials',
          'Try random apps',
          'Ignore security warnings'
        ],
        correctAnswer: 1,
        explanation: 'Always learn from official bank tutorials and use only official banking apps.'
      },
      {
        id: 'q2',
        question: 'Where should you go for help with digital services?',
        options: [
          'Any internet cafe',
          'Official government centers',
          'Random people on the street',
          'Unknown websites'
        ],
        correctAnswer: 1,
        explanation: 'Visit official government centers or bank branches for reliable help with digital services.'
      }
    ]
  }
];

export const getModulesByDemographic = (demographic: string): LearningModule[] => {
  return learningModules.filter(module => module.demographics.includes(demographic as any));
};

export const getModuleById = (id: string): LearningModule | undefined => {
  return learningModules.find(module => module.id === id);
};

export const getModulesByDifficulty = (difficulty: string): LearningModule[] => {
  return learningModules.filter(module => module.difficulty === difficulty);
};
