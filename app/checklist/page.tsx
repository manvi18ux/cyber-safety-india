'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckSquare, 
  Square, 
  Search, 
  Filter,
  AlertTriangle,
  Shield,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  CheckCircle,
  Clock,
  TrendingUp,
  Target
} from 'lucide-react';
import { SafetyChecklist, Demographic, ThreatCategory } from '@/types';
import { safetyChecklists, getChecklistsByDemographic, getChecklistsByCategory } from '@/data/safety-checklists';

const demographics = [
  { id: 'students', label: 'Students', icon: Users, color: 'bg-blue-500' },
  { id: 'professionals', label: 'Professionals', icon: Shield, color: 'bg-green-500' },
  { id: 'homemakers', label: 'Homemakers', icon: CreditCard, color: 'bg-purple-500' },
  { id: 'rural-users', label: 'Rural Users', icon: Smartphone, color: 'bg-orange-500' },
  { id: 'senior-citizens', label: 'Senior Citizens', icon: Users, color: 'bg-red-500' }
];

const threatCategories = [
  { id: 'phishing', label: 'Phishing', icon: Globe, color: 'bg-red-500' },
  { id: 'upi-scams', label: 'UPI Scams', icon: CreditCard, color: 'bg-orange-500' },
  { id: 'identity-theft', label: 'Identity Theft', icon: Shield, color: 'bg-purple-500' },
  { id: 'fake-calls', label: 'Fake Calls', icon: Smartphone, color: 'bg-yellow-500' },
  { id: 'social-media', label: 'Social Media', icon: Globe, color: 'bg-blue-500' },
  { id: 'online-shopping', label: 'Online Shopping', icon: CreditCard, color: 'bg-pink-500' }
];

export default function ChecklistPage() {
  const [selectedDemographic, setSelectedDemographic] = useState<Demographic | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ThreatCategory | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredChecklists, setFilteredChecklists] = useState<SafetyChecklist[]>(safetyChecklists);
  const [checklistStates, setChecklistStates] = useState<Record<string, Record<string, boolean>>>({});

  useEffect(() => {
    let filtered = safetyChecklists;

    // Filter by demographic
    if (selectedDemographic) {
      filtered = filtered.filter(checklist => checklist.demographic === selectedDemographic);
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(checklist => checklist.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(checklist =>
        checklist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        checklist.items.some(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredChecklists(filtered);
  }, [selectedDemographic, selectedCategory, searchTerm]);

  const toggleChecklistItem = (checklistId: string, itemId: string) => {
    setChecklistStates(prev => ({
      ...prev,
      [checklistId]: {
        ...prev[checklistId],
        [itemId]: !prev[checklistId]?.[itemId]
      }
    }));
  };

  const getProgress = (checklist: SafetyChecklist) => {
    const checklistState = checklistStates[checklist.id] || {};
    const completedItems = checklist.items.filter(item => checklistState[item.id]);
    return {
      completed: completedItems.length,
      total: checklist.items.length,
      percentage: Math.round((completedItems.length / checklist.items.length) * 100)
    };
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-danger-600 bg-danger-50';
      case 'medium': return 'text-warning-600 bg-warning-50';
      case 'low': return 'text-success-600 bg-success-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  const getDemographicIcon = (demographic: Demographic) => {
    const demoInfo = demographics.find(d => d.id === demographic);
    return demoInfo?.icon || Users;
  };

  const getCategoryIcon = (category: ThreatCategory) => {
    const catInfo = threatCategories.find(c => c.id === category);
    return catInfo?.icon || Globe;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Safety Checklists
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Assess your cyber safety with these comprehensive checklists. 
              Track your progress and identify areas for improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {safetyChecklists.length}
              </div>
              <div className="text-primary-100">Available Checklists</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {safetyChecklists.reduce((total, checklist) => total + checklist.items.length, 0)}
              </div>
              <div className="text-primary-100">Total Safety Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Object.values(checklistStates).reduce((total, checklist) => 
                  total + Object.values(checklist).filter(Boolean).length, 0
                )}
              </div>
              <div className="text-primary-100">Completed Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round(
                  (Object.values(checklistStates).reduce((total, checklist) => 
                    total + Object.values(checklist).filter(Boolean).length, 0
                  ) / safetyChecklists.reduce((total, checklist) => total + checklist.items.length, 0)) * 100
                )}%
              </div>
              <div className="text-primary-100">Overall Progress</div>
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
                placeholder="Search checklists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4">
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
                  All Profiles
                </button>
                {demographics.map((demo) => {
                  const Icon = demo.icon;
                  return (
                    <button
                      key={demo.id}
                      onClick={() => setSelectedDemographic(demo.id as Demographic)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${
                        selectedDemographic === demo.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                      {demo.label}
                    </button>
                  );
                })}
              </div>

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
                  All Categories
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
            </div>
          </div>
        </div>
      </div>

      {/* Checklists Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredChecklists.length === 0 ? (
          <div className="text-center py-12">
            <CheckSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No checklists found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredChecklists.map((checklist, index) => {
              const progress = getProgress(checklist);
              const DemographicIcon = getDemographicIcon(checklist.demographic);
              const CategoryIcon = getCategoryIcon(checklist.category);
              
              return (
                <motion.div
                  key={checklist.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  {/* Checklist Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <DemographicIcon className="h-5 w-5 text-gray-600" />
                        <CategoryIcon className="h-5 w-5 text-gray-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {checklist.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{demographics.find(d => d.id === checklist.demographic)?.label}</span>
                        <span>•</span>
                        <span>{threatCategories.find(c => c.id === checklist.category)?.label}</span>
                        <span>•</span>
                        <span>{checklist.items.length} items</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">
                        {progress.percentage}%
                      </div>
                      <div className="text-sm text-gray-500">
                        {progress.completed}/{progress.total} completed
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-3">
                    {checklist.items.map((item) => {
                      const isChecked = checklistStates[checklist.id]?.[item.id] || false;
                      return (
                        <div
                          key={item.id}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <button
                            onClick={() => toggleChecklistItem(checklist.id, item.id)}
                            className="flex-shrink-0 mt-0.5"
                          >
                            {isChecked ? (
                              <CheckSquare className="h-5 w-5 text-success-600" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                          <div className="flex-1">
                            <span className={`text-sm ${isChecked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                              {item.text}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                            {getPriorityIcon(item.priority)} {item.priority}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        {progress.completed === progress.total ? (
                          <span className="text-success-600 font-medium">
                            🎉 All items completed! Great job!
                          </span>
                        ) : (
                          `${progress.total - progress.completed} items remaining`
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            const newState: Record<string, boolean> = {};
                            checklist.items.forEach(item => {
                              newState[item.id] = true;
                            });
                            setChecklistStates(prev => ({
                              ...prev,
                              [checklist.id]: newState
                            }));
                          }}
                          className="btn-secondary text-sm"
                        >
                          Mark All Complete
                        </button>
                        <button
                          onClick={() => {
                            setChecklistStates(prev => ({
                              ...prev,
                              [checklist.id]: {}
                            }));
                          }}
                          className="btn-secondary text-sm"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tips for Using Safety Checklists
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make the most of these checklists to improve your cyber safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start with High Priority</h3>
              <p className="text-gray-600">
                Focus on high-priority items first as they provide the most protection against cyber threats.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-success-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Regularly</h3>
              <p className="text-gray-600">
                Revisit these checklists monthly to ensure you're maintaining good cyber safety practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-warning-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-warning-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your completion percentage to see your cyber safety improvement over time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
