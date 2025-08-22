'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Shield, 
  Search, 
  Filter,
  AlertTriangle,
  Users,
  CreditCard,
  Building,
  ExternalLink,
  Copy,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { EmergencyContact } from '@/types';
import { emergencyContacts, getContactsByType } from '@/data/emergency-contacts';

const contactTypes = [
  { id: 'cyber-crime', label: 'Cyber Crime', icon: Shield, color: 'bg-red-500' },
  { id: 'police', label: 'Police', icon: Building, color: 'bg-blue-500' },
  { id: 'bank', label: 'Banking', icon: CreditCard, color: 'bg-green-500' },
  { id: 'family', label: 'Family', icon: Users, color: 'bg-purple-500' }
];

export default function EmergencyPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [filteredContacts, setFilteredContacts] = useState<EmergencyContact[]>(emergencyContacts);

  useEffect(() => {
    let filtered = emergencyContacts;

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(contact => contact.type === selectedType);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.number.includes(searchTerm)
      );
    }

    setFilteredContacts(filtered);
  }, [selectedType, searchTerm]);

  const copyToClipboard = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedNumber(number);
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch (err) {
      console.error('Failed to copy number:', err);
    }
  };

  const getTypeIcon = (type: string) => {
    const typeInfo = contactTypes.find(t => t.id === type);
    return typeInfo?.icon || Phone;
  };

  const getTypeColor = (type: string) => {
    const typeInfo = contactTypes.find(t => t.id === type);
    return typeInfo?.color || 'bg-gray-500';
  };

  const getTypeLabel = (type: string) => {
    const typeInfo = contactTypes.find(t => t.id === type);
    return typeInfo?.label || type;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Contacts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick access to emergency services and support when you need help with cyber fraud or online threats.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-danger-600 to-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Need Immediate Help?</h2>
            <p className="text-danger-100 mb-4">
              If you're currently experiencing cyber fraud or online threats, call these numbers immediately
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">1930</div>
                <div className="text-sm">National Cyber Crime Portal</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">155260</div>
                <div className="text-sm">Cyber Crime Helpline</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">1091</div>
                <div className="text-sm">Women Helpline</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Filter by:</span>
              <button
                onClick={() => setSelectedType(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedType 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Types
              </button>
              {contactTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${
                      selectedType === type.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-12">
            <Phone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact, index) => {
              const TypeIcon = getTypeIcon(contact.type);
              return (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card hover:shadow-lg transition-all duration-300"
                >
                  {/* Contact Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(contact.type)} text-white`}>
                        <TypeIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {contact.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {getTypeLabel(contact.type)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {contact.description}
                  </p>

                  {/* Phone Number */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-lg font-mono font-semibold text-gray-900">
                          {contact.number}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => copyToClipboard(contact.number)}
                          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Copy number"
                        >
                          {copiedNumber === contact.number ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                        <a
                          href={`tel:${contact.number}`}
                          className="p-1 text-primary-600 hover:text-primary-700 transition-colors"
                          title="Call now"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={`tel:${contact.number}`}
                      className="flex-1 btn-primary text-center text-sm"
                    >
                      Call Now
                    </a>
                    {contact.type === 'cyber-crime' && (
                      <a
                        href="https://cybercrime.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary text-center text-sm flex items-center justify-center"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Report Online
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Do If You're a Victim
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these steps immediately if you've been targeted by cyber fraud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-danger-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-danger-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Don't Panic</h3>
              <p className="text-gray-600 text-sm">
                Stay calm and don't make any more payments or share additional information
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-warning-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-warning-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Emergency</h3>
              <p className="text-gray-600 text-sm">
                Contact cyber crime helpline (1930) or your bank immediately
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Online</h3>
              <p className="text-gray-600 text-sm">
                File a complaint on the official cyber crime portal
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-success-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-success-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Accounts</h3>
              <p className="text-gray-600 text-sm">
                Change passwords and enable two-factor authentication
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More ways to get help and stay protected
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <Shield className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn Prevention</h3>
              <p className="text-gray-600 mb-4">Take our courses to prevent future attacks</p>
              <a href="/learn" className="btn-primary">
                Start Learning
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <AlertTriangle className="h-8 w-8 text-warning-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Threat Information</h3>
              <p className="text-gray-600 mb-4">Stay updated on latest cyber threats</p>
              <a href="/threats" className="btn-secondary">
                View Threats
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <Users className="h-8 w-8 text-success-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 mb-4">Connect with others for support and advice</p>
              <a href="/community" className="btn-secondary">
                Join Community
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
