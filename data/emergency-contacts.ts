import { EmergencyContact } from '@/types';

export const emergencyContacts: EmergencyContact[] = [
  {
    id: '1', // ✅ Add missing id field
    name: 'National Cyber Crime Reporting Portal',
    phone: '1930', // ✅ Change 'number' to 'phone' to match interface
    type: 'cyber-cell', // ✅ Use valid type from interface
    description: 'Official government portal for reporting cyber crimes. Available 24/7.',
    location: 'National' // ✅ Add location field
  },
  {
    id: '2',
    name: 'Cyber Crime Helpline',
    phone: '155260',
    type: 'cyber-cell',
    description: 'Dedicated helpline for cyber crime complaints and assistance.',
    location: 'National'
  },
  {
    id: '3',
    name: 'Women Helpline',
    phone: '1091',
    type: 'women-helpline', // ✅ Use valid type from interface
    description: 'Special helpline for women facing online harassment or cyber stalking.',
    location: 'National'
  },
  {
    id: '4',
    name: 'Child Helpline',
    phone: '1098',
    type: 'child-helpline', // ✅ Use valid type from interface
    description: 'Helpline for children facing online abuse or cyberbullying.',
    location: 'National'
  },
  {
    id: '5',
    name: 'Senior Citizen Helpline',
    phone: '14567',
    type: 'senior-citizen', // ✅ Use valid type from interface
    description: 'Special assistance for senior citizens facing cyber fraud.',
    location: 'National'
  },
  {
    id: '6',
    name: 'RBI Banking Ombudsman',
    phone: '14448',
    type: 'police', // ✅ Use valid type from interface
    description: 'For banking-related fraud complaints and disputes.',
    location: 'National'
  },
  {
    id: '7',
    name: 'SEBI Investor Helpline',
    phone: '1800 266 7575',
    type: 'police',
    description: 'For investment fraud and securities-related complaints.',
    location: 'National'
  },
  {
    id: '8',
    name: 'TRAI Consumer Helpline',
    phone: '1800 180 0000',
    type: 'cyber-cell',
    description: 'For telecom-related fraud and unsolicited calls/SMS.',
    location: 'National'
  },
  {
    id: '9',
    name: 'UPI Fraud Helpline',
    phone: '1800 425 3800',
    type: 'police',
    description: 'NPCI helpline for UPI-related fraud and disputes.',
    location: 'National'
  },
  {
    id: '10',
    name: 'Google India Support',
    phone: '1800 419 0157',
    type: 'cyber-cell',
    description: 'For Gmail, Google Pay, and other Google service issues.',
    location: 'National'
  },
  {
    id: '11',
    name: 'WhatsApp Support',
    phone: '1800 123 4567',
    type: 'cyber-cell',
    description: 'For WhatsApp-related fraud and account issues.',
    location: 'National'
  },
  {
    id: '12',
    name: 'Facebook India Support',
    phone: '1800 123 4567',
    type: 'cyber-cell',
    description: 'For Facebook and Instagram account security issues.',
    location: 'National'
  }
];

export const getContactsByType = (type: string): EmergencyContact[] => {
  return emergencyContacts.filter(contact => contact.type === type);
};

export const getEmergencyContacts = (): EmergencyContact[] => {
  return emergencyContacts;
};
