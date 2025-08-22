'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Target, 
  Award,
  Heart,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { number: '50K+', label: 'Users Protected', icon: Users },
  { number: '100+', label: 'Learning Modules', icon: Target },
  { number: '24/7', label: 'Emergency Support', icon: Shield },
  { number: '95%', label: 'Success Rate', icon: Award }
];

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We prioritize the security and privacy of our users above all else.'
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Making cyber safety education accessible to all Indians, regardless of technical background.'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'Understanding the unique challenges faced by different demographics in India.'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'Continuously evolving our platform with the latest cyber safety practices.'
  }
];

const team = [
  {
    name: 'Cyber Safety India Team',
    role: 'Development & Content',
    description: 'Dedicated to creating comprehensive cyber safety solutions for Indian users.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Cyber Safety India
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering Indians with comprehensive cyber safety education and tools to stay protected in the digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With cyber fraud cases rapidly increasing in India, we recognized the urgent need for a comprehensive, 
                accessible platform that could educate and protect users from online threats.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to make cyber safety simple, relatable, and trustworthy for all Indians, 
                regardless of their technical background or demographic.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Protecting India's Digital Future
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Targeted Approach</h3>
                    <p className="text-gray-600">Content tailored for different demographics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-success-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Practical Solutions</h3>
                    <p className="text-gray-600">Real-world scenarios and actionable advice</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-warning-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-warning-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">Regular updates with latest threats</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-primary-100">
              Making a difference in India's cyber safety landscape
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                    <Icon className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-3xl font-bold">{stat.number}</div>
                  </div>
                  <div className="text-primary-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making India safer online
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Making India Safer Online
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your cyber safety journey today and help protect yourself and your loved ones from online threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/learn" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Start Learning
            </Link>
            <Link 
              href="/checklist" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Take Safety Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">
                  Get help with cyber safety questions
                </p>
              </div>
              <div className="text-center">
                <div className="bg-success-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-success-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  Connect with other users
                </p>
              </div>
              <div className="text-center">
                <div className="bg-warning-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-warning-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback</h3>
                <p className="text-gray-600">
                  Share your suggestions with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
