import { EmergencyContact } from '@/types';

export const emergencyContacts: EmergencyContact[] = [
  {
    name: 'National Cyber Crime Reporting Portal',
    number: '1930',
    type: 'cyber-crime',
    description: 'Official government portal for reporting cyber crimes. Available 24/7.'
  },
  {
    name: 'Cyber Crime Helpline',
    number: '155260',
    type: 'cyber-crime',
    description: 'Dedicated helpline for cyber crime complaints and assistance.'
  },
  {
    name: 'Women Helpline',
    number: '1091',
    type: 'police',
    description: 'Special helpline for women facing online harassment or cyber stalking.'
  },
  {
    name: 'Child Helpline',
    number: '1098',
    type: 'police',
    description: 'Helpline for children facing online abuse or cyberbullying.'
  },
  {
    name: 'Senior Citizen Helpline',
    number: '14567',
    type: 'police',
    description: 'Special assistance for senior citizens facing cyber fraud.'
  },
  {
    name: 'RBI Banking Ombudsman',
    number: '14448',
    type: 'bank',
    description: 'For banking-related fraud complaints and disputes.'
  },
  {
    name: 'SEBI Investor Helpline',
    number: '1800 266 7575',
    type: 'bank',
    description: 'For investment fraud and securities-related complaints.'
  },
  {
    name: 'TRAI Consumer Helpline',
    number: '1800 180 0000',
    type: 'cyber-crime',
    description: 'For telecom-related fraud and unsolicited calls/SMS.'
  },
  {
    name: 'UPI Fraud Helpline',
    number: '1800 425 3800',
    type: 'bank',
    description: 'NPCI helpline for UPI-related fraud and disputes.'
  },
  {
    name: 'Google India Support',
    number: '1800 419 0157',
    type: 'cyber-crime',
    description: 'For Gmail, Google Pay, and other Google service issues.'
  },
  {
    name: 'WhatsApp Support',
    number: '1800 123 4567',
    type: 'cyber-crime',
    description: 'For WhatsApp-related fraud and account issues.'
  },
  {
    name: 'Facebook India Support',
    number: '1800 123 4567',
    type: 'cyber-crime',
    description: 'For Facebook and Instagram account security issues.'
  }
];

export const getContactsByType = (type: string): EmergencyContact[] => {
  return emergencyContacts.filter(contact => contact.type === type);
};

export const getEmergencyContacts = (): EmergencyContact[] => {
  return emergencyContacts;
};
