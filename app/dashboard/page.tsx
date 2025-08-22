'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  User, 
  LogOut, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Cyber Safety Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">{session.user?.name}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session.user?.name}!
          </h1>
          <p className="text-gray-600">
            Track your cyber safety progress and access personalized resources.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Modules Completed</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center">
              <div className="bg-success-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-success-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Safety Score</p>
                <p className="text-2xl font-bold text-gray-900">85%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center">
              <div className="bg-warning-100 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-warning-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Threats Identified</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Achievements</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm border p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/learn"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Continue Learning</h3>
                <p className="text-sm text-gray-600">Resume your cyber safety modules</p>
              </div>
            </Link>

            <Link
              href="/threats"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-colors"
            >
              <AlertTriangle className="h-6 w-6 text-warning-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">View Threats</h3>
                <p className="text-sm text-gray-600">Learn about current cyber threats</p>
              </div>
            </Link>

            <Link
              href="/checklist"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-colors"
            >
              <CheckCircle className="h-6 w-6 text-success-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Safety Checklist</h3>
                <p className="text-sm text-gray-600">Complete your safety checklist</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm border p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-success-100 p-2 rounded-full mr-3">
                <CheckCircle className="h-4 w-4 text-success-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Completed "Phishing Awareness" module</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <TrendingUp className="h-4 w-4 text-primary-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Safety score increased by 15%</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-warning-100 p-2 rounded-full mr-3">
                <AlertTriangle className="h-4 w-4 text-warning-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Identified suspicious email threat</p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
