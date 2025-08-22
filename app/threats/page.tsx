'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Shield, 
  Search, 
  Filter,
  Clock,
  MapPin,
  Users,
  TrendingUp,
  Eye,
  BookOpen,
  Phone,
  Mail,
  CreditCard,
  Smartphone,
  Globe,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { Threat, ThreatCategory, RiskLevel, Demographic } from '@/types';
import { threats, getThreatsByDemographic, getThreatsByCategory } from '@/data/threats';

const threatCategories = [
  { id: 'phishing', label: 'Phishing', icon: Mail, color: 'bg-red-500' },
  { id: 'upi-scams', label: 'UPI Scams', icon: CreditCard, color: 'bg-orange-500' },
  { id: 'identity-theft', label: 'Identity Theft', icon: Users, color: 'bg-purple-500' },
  { id: 'social-engineering', label: 'Social Engineering', icon: MessageSquare, color: 'bg-blue-500' },
  { id: 'malware', label: 'Malware', icon: AlertTriangle, color: 'bg-green-500' },
  { id: 'fake-calls', label: 'Fake Calls', icon: Phone, color: 'bg-yellow-500' },
  { id: 'online-shopping', label: 'Online Shopping', icon: Smartphone, color: 'bg-pink-500' },
  { id: 'social-media', label: 'Social Media', icon: Globe, color: 'bg-indigo-500' }
];

const demographics = [
  { id: 'students', label: 'Students', color: 'bg-blue-500' },
  { id: 'professionals', label: 'Professionals', color: 'bg-green-500' },
  { id: 'homemakers', label: 'Homemakers', color: 'bg-purple-500' },
  { id: 'rural-users', label: 'Rural Users', color: 'bg-orange-500' },
  { id: 'senior-citizens', label: 'Senior Citizens', color: 'bg-red-500' }
];

export default function ThreatsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ThreatCategory | null>(null);
  const [selectedDemographic, setSelectedDemographic] = useState<Demographic | null>(null);
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<RiskLevel | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredThreats, setFilteredThreats] = useState<Threat[]>(threats);

  useEffect(() => {
    let filtered = threats;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(threat => threat.category === selectedCategory);
    }

    // Filter by demographic
    if (selectedDemographic) {
      filtered = filtered.filter(threat => 
        threat.demographics.includes(selectedDemographic)
      );
    }

    // Filter by risk level
    if (selectedRiskLevel) {
      filtered = filtered.filter(threat => threat.riskLevel === selectedRiskLevel);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(threat =>
        threat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        threat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        threat.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredThreats(filtered);
  }, [selectedCategory, selectedDemographic, selectedRiskLevel, searchTerm]);

  const getRiskLevelColor = (riskLevel: RiskLevel) => {
    switch (riskLevel) {
      case 'low': return 'bg-success-100 text-success-800';
      case 'medium': return 'bg-warning-100 text-warning-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-danger-100 text-danger-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskLevelIcon = (riskLevel: RiskLevel) => {
    switch (riskLevel) {
      case 'low': return '🟢';
      case 'medium': return '🟡';
      case 'high': return '🟠';
      case 'critical': return '🔴';
      default: return '⚪';
    }
  };

  const getCategoryIcon = (category: ThreatCategory) => {
    const categoryInfo = threatCategories.find(c => c.id === category);
    return categoryInfo?.icon || AlertTriangle;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cyber Threats & Scams
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about the latest cyber threats targeting Indians. 
              Learn to recognize, prevent, and respond to these scams.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Banner */}
      <div className="bg-gradient-to-r from-danger-600 to-orange-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">₹2.5L Cr</div>
              <div className="text-danger-100">Lost to cyber fraud in 2023</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15.4L</div>
              <div className="text-danger-100">Cyber crime complaints</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-danger-100">Increase in UPI fraud</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-danger-100">Threat monitoring</div>
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
                placeholder="Search threats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Category:</span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    !selectedCategory 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {threatCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id as ThreatCategory)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                      {category.label}
                    </button>
                  );
                })}
              </div>

              {/* Risk Level Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Risk Level:</span>
                <button
                  onClick={() => setSelectedRiskLevel(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    !selectedRiskLevel 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {(['low', 'medium', 'high', 'critical'] as RiskLevel[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedRiskLevel(level)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedRiskLevel === level
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getRiskLevelIcon(level)} {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>

              {/* Demographic Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Profile:</span>
                <button
                  onClick={() => setSelectedDemographic(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    !selectedDemographic 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {demographics.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemographic(demo.id as Demographic)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedDemographic === demo.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Threats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredThreats.length === 0 ? (
          <div className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No threats found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredThreats.map((threat, index) => {
              const CategoryIcon = getCategoryIcon(threat.category);
              return (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card hover:shadow-lg transition-all duration-300"
                >
                  {/* Threat Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <CategoryIcon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {threat.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`badge ${getRiskLevelColor(threat.riskLevel)}`}>
                            {getRiskLevelIcon(threat.riskLevel)} {threat.riskLevel.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-500">
                            {threatCategories.find(c => c.id === threat.category)?.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {threat.description}
                  </p>

                  {/* Examples */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Common Examples:</h4>
                    <ul className="space-y-1">
                      {threat.examples.slice(0, 2).map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-danger-500 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                      {threat.examples.length > 2 && (
                        <li className="text-sm text-gray-500">
                          +{threat.examples.length - 2} more examples
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Demographics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Affects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {threat.demographics.map((demo) => {
                        const demoInfo = demographics.find(d => d.id === demo);
                        return (
                          <span
                            key={demo}
                            className={`px-2 py-1 text-white text-xs rounded ${demoInfo?.color}`}
                          >
                            {demoInfo?.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Prevention Tips */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Quick Prevention Tips:</h4>
                    <ul className="space-y-1">
                      {threat.preventionTips.slice(0, 2).map((tip, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-success-500 mr-2">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/threats/${threat.id}`}
                      className="flex-1 btn-primary text-center"
                    >
                      <Eye className="h-4 w-4 mr-2 inline" />
                      Learn More
                    </Link>
                    <Link
                      href={`/learn?threat=${threat.id}`}
                      className="flex-1 btn-secondary text-center"
                    >
                      <BookOpen className="h-4 w-4 mr-2 inline" />
                      Take Course
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Emergency Section */}
      <div className="bg-danger-50 border-t border-danger-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Been a Victim of Cyber Fraud?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't panic! We're here to help you report the incident and get assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <Phone className="h-8 w-8 text-danger-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Emergency</h3>
              <p className="text-gray-600 mb-4">Contact cyber crime helpline immediately</p>
              <div className="text-2xl font-bold text-danger-600">1930</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <Shield className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Online</h3>
              <p className="text-gray-600 mb-4">File complaint on official portal</p>
              <Link href="/emergency" className="btn-primary">
                Report Now
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <BookOpen className="h-8 w-8 text-success-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn Prevention</h3>
              <p className="text-gray-600 mb-4">Take courses to stay protected</p>
              <Link href="/learn" className="btn-secondary">
                Start Learning
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
