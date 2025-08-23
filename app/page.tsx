'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  BookOpen, 
  Phone, 
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
              <Link href="/learn" className="text-gray-600 hover:text-primary-600 transition-colors">Learn</Link>
              <Link href="/threats" className="text-gray-600 hover:text-primary-600 transition-colors">Threats</Link>
              <Link href="/checklist" className="text-gray-600 hover:text-primary-600 transition-colors">Checklist</Link>
              <Link href="/emergency" className="text-gray-600 hover:text-primary-600 transition-colors">Emergency</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About</Link>
              <Link href="/auth/signin" className="btn-primary px-4 py-2 text-sm">Sign In</Link>
            </div>
            <div className="sm:hidden">
              <button className="text-gray-600 hover:text-primary-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            {['/learn', '/threats', '/checklist', '/emergency', '/about'].map(path => (
              <Link key={path} href={path} className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {path.replace('/', '').charAt(0).toUpperCase() + path.replace('/', '').slice(1)}
              </Link>
            ))}
            <Link href="/auth/signin" className="block px-3 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
          </div>
        </div>
      )}

      {/* Hero, Stats, Demographics, Features, CTA, Footer sections */}
      {/* ... (keep your JSX as it is, just fix the className and href issues below) */}

      {/* Example fix for demographics card */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {demographics.map(demo => (
              <Link key={demo.id} href={`/learn?demographic=${demo.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 rounded-lg ${demo.color} text-white cursor-pointer shadow-lg`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <demo.icon className="w-8 h-8" />
                    <h3 className="text-lg font-bold">{demo.title}</h3>
                  </div>
                  <p className="text-sm mb-2">{demo.description}</p>
                  <ul className="text-xs space-y-1">
                    {demo.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" /> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
