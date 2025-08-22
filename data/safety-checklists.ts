import { SafetyChecklist, Demographic, ThreatCategory } from '@/types';

export const safetyChecklists: SafetyChecklist[] = [
  {
    id: 'general-safety',
    title: 'General Cyber Safety Checklist',
    demographic: 'students',
    category: 'phishing',
    items: [
      {
        id: 'strong-passwords',
        text: 'Use strong, unique passwords for all accounts',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'two-factor',
        text: 'Enable two-factor authentication on important accounts',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'software-updates',
        text: 'Keep software and apps updated regularly',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'antivirus',
        text: 'Install and maintain antivirus software',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'backup-data',
        text: 'Regularly backup important data',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'suspicious-links',
        text: 'Never click on suspicious links or attachments',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'personal-info',
        text: 'Don\'t share personal information online unnecessarily',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'public-wifi',
        text: 'Avoid using public WiFi for sensitive transactions',
        isCompleted: false,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'upi-safety',
    title: 'UPI Safety Checklist',
    demographic: 'homemakers',
    category: 'upi-scams',
    items: [
      {
        id: 'upi-pin',
        text: 'Never share UPI PIN with anyone',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'qr-verification',
        text: 'Always verify QR codes before scanning',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'transaction-details',
        text: 'Check transaction details carefully before confirming',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'biometric-auth',
        text: 'Use UPI apps with biometric authentication',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'refund-calls',
        text: 'Don\'t trust unsolicited calls about refunds',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'upi-limits',
        text: 'Set reasonable UPI transaction limits',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'official-apps',
        text: 'Use only official UPI apps from trusted sources',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'monitor-transactions',
        text: 'Regularly monitor UPI transaction history',
        isCompleted: false,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'senior-citizen-safety',
    title: 'Senior Citizen Cyber Safety Checklist',
    demographic: 'senior-citizens',
    category: 'fake-calls',
    items: [
      {
        id: 'bank-calls',
        text: 'Never share banking details over phone calls',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'verify-caller',
        text: 'Always verify caller identity with official numbers',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'otp-safety',
        text: 'Never share OTP codes with anyone',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'urgent-requests',
        text: 'Be suspicious of urgent requests for information',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'family-help',
        text: 'Ask family members for help with digital transactions',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'official-websites',
        text: 'Use only official websites for online services',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'emergency-contacts',
        text: 'Keep emergency contact numbers handy',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'suspicious-emails',
        text: 'Don\'t open emails from unknown senders',
        isCompleted: false,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'student-safety',
    title: 'Student Online Safety Checklist',
    demographic: 'students',
    category: 'social-media',
    items: [
      {
        id: 'privacy-settings',
        text: 'Review and update social media privacy settings',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'personal-photos',
        text: 'Never share personal photos with strangers',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'cyberbullying',
        text: 'Know how to report cyberbullying incidents',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'online-gaming',
        text: 'Be careful with personal information in online games',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'academic-integrity',
        text: 'Avoid sharing academic work online',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'peer-pressure',
        text: 'Don\'t succumb to peer pressure for online activities',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'stranger-danger',
        text: 'Never meet online friends in person without safety measures',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'digital-footprint',
        text: 'Be mindful of your digital footprint',
        isCompleted: false,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'professional-safety',
    title: 'Professional Cyber Security Checklist',
    demographic: 'professionals',
    category: 'identity-theft',
    items: [
      {
        id: 'work-email',
        text: 'Use work email only for work-related communications',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'vpn-usage',
        text: 'Use VPN when accessing work data remotely',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'data-protection',
        text: 'Follow company data protection policies',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'password-policy',
        text: 'Use strong passwords and change them regularly',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'suspicious-emails-work',
        text: 'Report suspicious work emails to IT security',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'device-security',
        text: 'Keep work devices secure and updated',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'data-backup',
        text: 'Regularly backup important work data',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'incident-response',
        text: 'Know the incident response procedures',
        isCompleted: false,
        priority: 'high'
      }
    ]
  },
  {
    id: 'rural-user-safety',
    title: 'Rural User Digital Safety Checklist',
    demographic: 'rural-users',
    category: 'online-shopping',
    items: [
      {
        id: 'mobile-banking',
        text: 'Learn mobile banking from official tutorials',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'trusted-websites',
        text: 'Use only trusted websites for online shopping',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'government-services',
        text: 'Access government services through official portals',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'local-support',
        text: 'Seek help from local bank branches or government centers',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'payment-methods',
        text: 'Use secure payment methods for online transactions',
        isCompleted: false,
        priority: 'high'
      },
      {
        id: 'seller-verification',
        text: 'Verify seller authenticity before making payments',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'digital-literacy',
        text: 'Participate in digital literacy programs',
        isCompleted: false,
        priority: 'medium'
      },
      {
        id: 'emergency-help',
        text: 'Know emergency contact numbers for digital fraud',
        isCompleted: false,
        priority: 'high'
      }
    ]
  }
];

export const getChecklistsByDemographic = (demographic: Demographic): SafetyChecklist[] => {
  return safetyChecklists.filter(checklist => checklist.demographic === demographic);
};

export const getChecklistsByCategory = (category: ThreatCategory): SafetyChecklist[] => {
  return safetyChecklists.filter(checklist => checklist.category === category);
};

export const getChecklistById = (id: string): SafetyChecklist | undefined => {
  return safetyChecklists.find(checklist => checklist.id === id);
};

export const getAllChecklists = (): SafetyChecklist[] => {
  return safetyChecklists;
};
