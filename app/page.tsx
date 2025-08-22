'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  BookOpen, 
  Phone, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Home,
  MapPin,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import { Demographic } from '@/types';

const demographics = [
  {
    id: 'students' as Demographic,
    title: 'Students',
    description: 'Stay safe while learning online',
    icon: GraduationCap,
    color: 'bg-blue-500',
    features: ['Social Media Safety', 'Online Gaming', 'Academic Integrity']
  },
  {
    id: 'professionals' as Demographic,
    title: 'Professionals',
    description: 'Protect your work and data',
    icon: Briefcase,
    color: 'bg-green-500',
    features: ['Work Email Security', 'Data Protection', 'VPN Usage']
  },
  {
    id: 'homemakers' as Demographic,
    title: 'Homemakers',
    description: 'Safe online shopping and banking',
    icon: Home,
    color: 'bg-purple-500',
    features: ['Online Shopping Safety', 'Banking Security', 'Family Protection']
  },
  {
    id: 'rural-users' as Demographic,
    title: 'Rural Users',
    description: 'Digital literacy and safety',
    icon: MapPin,
    color: 'bg-orange-500',
    features: ['Mobile Banking', 'Government Services', 'Local Support']
  },
  {
    id: 'senior-citizens' as Demographic,
    title: 'Senior Citizens',
    description: 'Easy-to-use cyber safety',
    icon: UserCheck,
    color: 'bg-red-500',
    features: ['Phone Call Safety', 'Banking Security', 'Family Communication']
  }
];

export default function HomePage() {
  const [selectedDemographic, setSelectedDemographic] = useState<Demographic | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
             {/* Navigation */}
       <nav className="bg-white shadow-sm border-b">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-3">
               <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
               <span className="text-lg sm:text-xl font-bold text-gray-900">Cyber Safety India</span>
             </div>
             <div className="hidden sm:flex items-center space-x-4">
               <Link href="/learn" className="text-gray-600 hover:text-primary-600 transition-colors">
                 Learn
               </Link>
               <Link href="/threats" className="text-gray-600 hover:text-primary-600 transition-colors">
                 Threats
               </Link>
               <Link href="/checklist" className="text-gray-600 hover:text-primary-600 transition-colors">
                 Checklist
               </Link>
               <Link href="/emergency" className="text-gray-600 hover:text-primary-600 transition-colors">
                 Emergency
               </Link>
               <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                 About
               </Link>
             </div>
             {/* Mobile menu button */}
             <div className="sm:hidden">
               <button 
                 className="text-gray-600 hover:text-primary-600"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
               </button>
             </div>
           </div>
                  </div>
       </nav>

       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div className="sm:hidden bg-white border-b border-gray-200 shadow-lg">
           <div className="px-4 py-2 space-y-1">
             <Link 
               href="/learn" 
               className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Learn
             </Link>
             <Link 
               href="/threats" 
               className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Threats
             </Link>
             <Link 
               href="/checklist" 
               className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Checklist
             </Link>
             <Link 
               href="/emergency" 
               className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Emergency
             </Link>
             <Link 
               href="/about" 
               className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               About
             </Link>
           </div>
         </div>
       )}

       {/* Hero Section */}
       <section className="relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
           <div className="text-center">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
             >
               Stay Safe in the
               <span className="text-gradient"> Digital World</span>
             </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive cyber safety education and tools for all Indians. 
              Learn to recognize, prevent, and respond to online threats.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/learn" className="btn-primary text-lg px-8 py-3">
                Start Learning
              </Link>
              <Link href="/threats" className="btn-secondary text-lg px-8 py-3">
                View Threats
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-danger-600 mb-2">₹2.5L Cr</div>
              <div className="text-gray-600">Lost to cyber fraud in 2023</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-warning-600 mb-2">15.4L</div>
              <div className="text-gray-600">Cyber crime complaints</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-gray-600">Increase in UPI fraud</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-success-600 mb-2">50K+</div>
              <div className="text-gray-600">Users protected</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized cyber safety guidance based on your needs and lifestyle
            </p>
          </div>
          
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {demographics.map((demo, index) => {
              const Icon = demo.icon;
              return (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedDemographic(demo.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${demo.color} text-white mr-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{demo.title}</h3>
                      <p className="text-gray-600">{demo.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-success-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/learn?demographic=${demo.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Cyber Safety India?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive, accessible, and trustworthy cyber safety education
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
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Learn through real-world scenarios, quizzes, and interactive modules designed for your needs.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-success-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with others, share experiences, and get help from our community of cyber safety experts.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-warning-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Support</h3>
              <p className="text-gray-600">
                Quick access to emergency contacts and step-by-step guidance when you need help immediately.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Protect Yourself?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Indians who are already staying safe online with our comprehensive cyber safety platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Start Learning Now
            </Link>
            <Link href="/emergency" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Emergency Contacts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-lg font-semibold">Cyber Safety India</span>
              </div>
              <p className="text-gray-400">
                Empowering Indians with comprehensive cyber safety education and tools.
              </p>
            </div>
                         <div>
               <h3 className="font-semibold mb-4">Quick Links</h3>
               <ul className="space-y-2 text-gray-400">
                 <li><Link href="/learn" className="hover:text-white transition-colors">Learn</Link></li>
                 <li><Link href="/threats" className="hover:text-white transition-colors">Threats</Link></li>
                 <li><Link href="/checklist" className="hover:text-white transition-colors">Checklist</Link></li>
                 <li><Link href="/emergency" className="hover:text-white transition-colors">Emergency</Link></li>
                 <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
               </ul>
             </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/checklist" className="hover:text-white transition-colors">Safety Checklist</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">Latest News</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Emergency</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Cyber Crime: 1930</li>
                <li>Women Helpline: 1091</li>
                <li>Child Helpline: 1098</li>
                <li>Senior Citizens: 14567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cyber Safety India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
