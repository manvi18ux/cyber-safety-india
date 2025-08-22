'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Target, 
  CheckCircle, 
  Play,
  Filter,
  Search,
  Star,
  Users,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LearningModule, Demographic } from '@/types';
import { learningModules, getModulesByDemographic } from '@/data/learning-modules';

function LearnPageContent() {
  const searchParams = useSearchParams();
  const [selectedDemographic, setSelectedDemographic] = useState<Demographic | null>(
    (searchParams.get('demographic') as Demographic) || null
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [filteredModules, setFilteredModules] = useState<LearningModule[]>(learningModules);

  const demographics = [
    { id: 'students', label: 'Students', color: 'bg-blue-500' },
    { id: 'professionals', label: 'Professionals', color: 'bg-green-500' },
    { id: 'homemakers', label: 'Homemakers', color: 'bg-purple-500' },
    { id: 'rural-users', label: 'Rural Users', color: 'bg-orange-500' },
    { id: 'senior-citizens', label: 'Senior Citizens', color: 'bg-red-500' }
  ];

  useEffect(() => {
    let filtered = learningModules;

    // Filter by demographic
    if (selectedDemographic) {
      filtered = filtered.filter(module => 
        module.demographics.includes(selectedDemographic)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(module =>
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by difficulty
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(module => module.difficulty === difficultyFilter);
    }

    setFilteredModules(filtered);
  }, [selectedDemographic, searchTerm, difficultyFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success-100 text-success-800';
      case 'intermediate': return 'bg-warning-100 text-warning-800';
      case 'advanced': return 'bg-danger-100 text-danger-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Learn Cyber Safety
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your learning path and master the skills to stay safe online. 
              Interactive modules designed for your specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Demographic Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDemographic(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !selectedDemographic 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Profiles
              </button>
              {demographics.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemographic(demo.id as Demographic)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedDemographic === demo.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>

            {/* Search and Difficulty Filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search modules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredModules.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-all duration-300"
              >
                {/* Module Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Module Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration} min
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Target className="h-4 w-4 mr-1" />
                      {module.quiz.length} questions
                    </div>
                  </div>
                  <span className={`badge ${getDifficultyColor(module.difficulty)}`}>
                    {getDifficultyLabel(module.difficulty)}
                  </span>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Topics covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {module.topics.slice(0, 3).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {topic}
                      </span>
                    ))}
                    {module.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{module.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Demographics */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Suitable for:</h4>
                  <div className="flex flex-wrap gap-1">
                    {module.demographics.map((demo) => {
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

                {/* Action Button */}
                <Link
                  href={`/learn/${module.id}`}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Learning
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Learning Paths */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recommended Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these structured paths to build your cyber safety knowledge step by step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginner Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card border-2 border-success-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-success-100 p-3 rounded-lg mr-4">
                  <Star className="h-6 w-6 text-success-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Beginner Path</h3>
                  <p className="text-gray-600">Start your cyber safety journey</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Basic Cyber Safety for Everyone
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  UPI Safety Masterclass
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Choose your demographic module
                </li>
              </ul>
              <Link
                href="/learn?difficulty=beginner"
                className="w-full btn-secondary flex items-center justify-center"
              >
                Start Beginner Path
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>

            {/* Intermediate Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card border-2 border-warning-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-warning-100 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-warning-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Intermediate Path</h3>
                  <p className="text-gray-600">Deepen your knowledge</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Complete beginner modules first
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Advanced threat recognition
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Professional security practices
                </li>
              </ul>
              <Link
                href="/learn?difficulty=intermediate"
                className="w-full btn-secondary flex items-center justify-center"
              >
                Start Intermediate Path
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>

            {/* Advanced Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card border-2 border-danger-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-danger-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-danger-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Advanced Path</h3>
                  <p className="text-gray-600">Master cyber security</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Complete all previous modules
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Professional security training
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                  Incident response skills
                </li>
              </ul>
              <Link
                href="/learn?difficulty=advanced"
                className="w-full btn-secondary flex items-center justify-center"
              >
                Start Advanced Path
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading learning modules...</p>
      </div>
    </div>}>
      <LearnPageContent />
    </Suspense>
  );
}
