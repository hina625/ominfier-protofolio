'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Mail, 
  Phone, 
  MessageCircle, 
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  Shield,
  Lock,
  Unlock,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Activity,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  Zap,
  Target,
  PieChart,
  LineChart,
  Settings,
  Bell,
  Grid3X3,
  Plus,
  ArrowUp,
  ArrowDown,
  Sparkles
} from 'lucide-react';

// Omnifier Background Component
const OmnifierBackground = () => (
  <div className="fixed inset-0 overflow-hidden">
    {/* Main omnifier gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950" />
    
    {/* Omnifier energy fields */}
    <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-600/20 via-purple-800/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-indigo-600/20 via-blue-800/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-gradient-radial from-pink-600/15 via-purple-700/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    
    {/* Omnifier particles */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
    
    {/* Omnifier energy streams */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`stream-${i}`}
        className="absolute w-1 h-1 bg-gradient-to-r from-white via-purple-300 to-transparent rounded-full"
        style={{
          left: `-10px`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, (typeof window !== 'undefined' ? window.innerWidth : 1920) + 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 3,
          ease: "easeOut"
        }}
      />
    ))}
  </div>
);

interface ContactData {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface DashboardStats {
  totalContacts: number;
  unreadContacts: number;
  readContacts: number;
  todayContacts: number;
  weeklyGrowth: number;
  responseTime: string;
  satisfactionRate: number;
}

export default function OmnifierAdminDashboard() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'contacts' | 'analytics'>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ADMIN_PASSWORD = 'mananrajpout@123';

  // API Base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setShowPasswordForm(false);
      fetchContacts();
      fetchDashboardStats();
    }
  }, []);

  // Fetch contacts from API
  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }
      
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (filterStatus !== 'all') params.append('status', filterStatus);
      params.append('limit', '50'); // Get more contacts for admin panel
      
      const response = await fetch(`${API_BASE_URL}/contacts?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Transform API data to match our interface
        const transformedContacts = result.data.map((contact: any) => ({
          id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          message: contact.message,
          timestamp: contact.createdAt,
          isRead: contact.isRead
        }));
        setContacts(transformedContacts);
      } else {
        throw new Error(result.error || 'Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setError('Failed to load contacts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch dashboard stats from API
  const fetchDashboardStats = async () => {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }
      
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Stats are calculated locally, no need to set state
        console.log('Dashboard stats fetched successfully:', result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch stats');
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      // Don't throw error for stats as they're calculated locally
    }
  };

  // Refresh data when search or filter changes
  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [searchTerm, filterStatus, isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send login request to backend
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: password
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
      setIsAuthenticated(true);
      setShowPasswordForm(false);
      sessionStorage.setItem('adminAuthenticated', 'true');
        sessionStorage.setItem('adminToken', result.data.token);
        fetchContacts();
        fetchDashboardStats();
    } else {
        alert(result.error || 'Invalid credentials!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowPasswordForm(true);
    setPassword('');
    setMobileMenuOpen(false);
    sessionStorage.removeItem('adminAuthenticated');
    sessionStorage.removeItem('adminToken');
  };

  const markAsRead = async (id: string) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }
      
      const response = await fetch(`${API_BASE_URL}/contacts/${id}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Update local state
    const updatedContacts = contacts.map(contact => 
      contact.id === id ? { ...contact, isRead: true } : contact
    );
    setContacts(updatedContacts);
      } else {
        throw new Error(result.error || 'Failed to mark contact as read');
      }
    } catch (error) {
      console.error('Error marking contact as read:', error);
      alert('Failed to mark contact as read. Please try again.');
    }
  };

  const deleteContact = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        const token = sessionStorage.getItem('adminToken');
        if (!token) {
          throw new Error('No authentication token found');
        }
        
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        const result = await response.json();

        if (response.ok && result.success) {
          // Update local state
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
        } else {
          throw new Error(result.error || 'Failed to delete contact');
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete contact. Please try again.');
      }
    }
  };

  const exportContacts = () => {
    const csvContent = [
      ['Name', 'Email', 'Subject', 'Message', 'Date', 'Status'],
      ...contacts.map(contact => [
        contact.name,
        contact.email,
        contact.subject,
        contact.message.replace(/\n/g, ' '),
        contact.timestamp,
        contact.isRead ? 'Read' : 'Unread'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'read' && contact.isRead) ||
                         (filterStatus === 'unread' && !contact.isRead);
    
    return matchesSearch && matchesFilter;
  });

  const unreadCount = contacts.filter(contact => !contact.isRead).length;
  const todayContacts = contacts.filter(contact => {
    const contactDate = new Date(contact.timestamp);
    const today = new Date();
    return contactDate.toDateString() === today.toDateString();
  }).length;

  const dashboardStats: DashboardStats = {
    totalContacts: contacts.length,
    unreadContacts: unreadCount,
    readContacts: contacts.length - unreadCount,
    todayContacts,
    weeklyGrowth: 15.8,
    responseTime: "2.5 hours",
    satisfactionRate: 94.5
  };

  if (showPasswordForm) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <OmnifierBackground />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md mx-4"
        >
          {/* Login Card with Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-900/20">
            <div className="text-center mb-8">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20 shadow-lg shadow-purple-500/25"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(147, 51, 234, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Omnifier Admin
              </h1>
              <p className="text-purple-200/80 text-lg">Secure Portal Access</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-purple-200/90 mb-3">
                  Authentication Code
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300"
                  placeholder="Enter secure access code"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-2xl border border-white/20 shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                Access Omnifier Portal
              </motion.button>
            </form>

          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <OmnifierBackground />
      
      <div className="relative z-10 flex h-screen">
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Glassmorphism Sidebar */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${
            sidebarCollapsed ? 'w-20' : 'w-80'
          } ${
            mobileMenuOpen ? 'fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto' : 'hidden lg:flex'
          } transition-all duration-300 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col shadow-2xl shadow-purple-900/20`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10">
            <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
              <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg shadow-purple-500/25"
                  animate={{ 
                    boxShadow: [
                      "0 0 15px rgba(147, 51, 234, 0.2)",
                      "0 0 25px rgba(147, 51, 234, 0.4)",
                      "0 0 15px rgba(147, 51, 234, 0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Grid3X3 className="w-6 h-6 text-white" />
                </motion.div>
                {!sidebarCollapsed && (
                  <div>
                    <h2 className="text-xl font-bold text-white">Omnifier Control</h2>
                    <p className="text-purple-300/80 text-sm">Admin Dashboard</p>
                  </div>
                )}
              </div>
              {!sidebarCollapsed && (
                <div className="flex gap-2">
                <button
                  onClick={() => setSidebarCollapsed(true)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden lg:block"
                >
                  <ArrowUp className="w-5 h-5 text-purple-300 rotate-[-90deg]" />
                </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
                  >
                    <ArrowUp className="w-5 h-5 text-purple-300 rotate-[-90deg]" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="p-6 space-y-4">
            {[
              { icon: Users, label: 'Total', value: contacts.length, color: 'from-purple-500/80 to-pink-500/80' },
              { icon: MessageCircle, label: 'Unread', value: unreadCount, color: 'from-cyan-500/80 to-blue-500/80' },
              { icon: Clock, label: 'Today', value: todayContacts, color: 'from-emerald-500/80 to-teal-500/80' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
              >
                <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3'}`}>
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  {!sidebarCollapsed && (
                    <div>
                      <p className="text-purple-200/90 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar Actions */}
          <div className="p-6 space-y-3 mt-auto">
            {[
              { icon: RefreshCw, label: 'Refresh', action: fetchContacts, color: 'from-purple-500/80 to-pink-500/80' },
              { icon: Download, label: 'Export', action: exportContacts, color: 'from-cyan-500/80 to-blue-500/80' },
              { icon: Unlock, label: 'Logout', action: handleLogout, color: 'from-pink-500/80 to-red-500/80' }
            ].map((action, index) => (
              <motion.button
                key={action.label}
                onClick={action.action}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 bg-gradient-to-r ${action.color} backdrop-blur-sm text-white rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:shadow-purple-500/25`}
              >
                <action.icon className="w-5 h-5" />
                {!sidebarCollapsed && action.label}
              </motion.button>
            ))}
          </div>

          {!sidebarCollapsed && (
            <div className="p-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-purple-300/80 text-sm">System Status</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <p className="text-white font-medium text-sm">Online</p>
                </div>
              </div>
            </div>
          )}

          {sidebarCollapsed && (
            <button
              onClick={() => setSidebarCollapsed(false)}
              className="p-4 hover:bg-white/10 transition-colors hidden lg:block"
            >
              <ArrowDown className="w-5 h-5 text-purple-300 rotate-[90deg]" />
            </button>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Glassmorphism Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border-b border-white/10 p-4 lg:p-6 shadow-lg shadow-purple-900/10"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center justify-between w-full lg:w-auto">
              <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Omnifier Dashboard
                </h1>
                  <p className="text-purple-200/80 text-sm lg:text-base">Mission Control Center</p>
                </div>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Grid3X3 className="w-6 h-6 text-purple-300" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-1 lg:gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-white/10 w-full lg:w-auto overflow-x-auto">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, shortLabel: 'Dash' },
                  { id: 'contacts', label: 'Contacts', icon: MessageCircle, shortLabel: 'Msgs' },
                  { id: 'analytics', label: 'Analytics', icon: TrendingUp, shortLabel: 'Stats' }
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-3 lg:px-6 py-2 lg:py-3 rounded-xl transition-all duration-300 flex items-center gap-1 lg:gap-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white shadow-lg border border-white/20'
                        : 'text-purple-300/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                  </motion.button>
                ))}
              </div>

              {/* Search and Filter - Only show in contacts tab */}
              {activeTab === 'contacts' && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full lg:w-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4 lg:w-5 lg:h-5" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 lg:pl-10 pr-4 py-2 lg:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 text-sm lg:text-base"
                    />
                  </div>

                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as any)}
                    className="px-3 lg:px-4 py-2 lg:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 text-sm lg:text-base min-w-[120px]"
                  >
                    <option value="all" className="bg-gray-900">All</option>
                    <option value="unread" className="bg-gray-900">Unread</option>
                    <option value="read" className="bg-gray-900">Read</option>
                  </select>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6">
            <AnimatePresence mode="wait">
              {/* Dashboard Content */}
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {[
                      {
                        title: 'Total Contacts',
                        value: dashboardStats.totalContacts,
                        change: `+${dashboardStats.weeklyGrowth}%`,
                        icon: Users,
                        color: 'from-purple-500/80 to-pink-500/80',
                        trend: 'up'
                      },
                      {
                        title: 'Unread Messages',
                        value: dashboardStats.unreadContacts,
                        change: 'Pending',
                        icon: MessageCircle,
                        color: 'from-cyan-500/80 to-blue-500/80',
                        trend: 'alert'
                      },
                      {
                        title: 'Response Time',
                        value: dashboardStats.responseTime,
                        change: 'Excellent',
                        icon: Zap,
                        color: 'from-emerald-500/80 to-teal-500/80',
                        trend: 'up'
                      },
                      {
                        title: 'Satisfaction',
                        value: `${dashboardStats.satisfactionRate}%`,
                        change: '+2.5%',
                        icon: Star,
                        color: 'from-amber-500/80 to-orange-500/80',
                        trend: 'up'
                      }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg`}>
                            <metric.icon className="w-6 h-6 text-white" />
                          </div>
                          {metric.trend === 'up' && <TrendingUp className="w-5 h-5 text-emerald-400" />}
                          {metric.trend === 'alert' && <AlertCircle className="w-5 h-5 text-amber-400" />}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{metric.value}</h3>
                        <p className="text-purple-200/80 text-xs lg:text-sm mb-2">{metric.title}</p>
                        <div className={`text-sm ${metric.trend === 'up' ? 'text-emerald-400' : metric.trend === 'alert' ? 'text-amber-400' : 'text-purple-400'}`}>
                          {metric.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {/* Activity Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg lg:text-xl font-bold text-white">Omnifier Activity</h3>
                          <p className="text-purple-300/80 text-xs lg:text-sm">7-day connection pattern</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                          const height = Math.random() * 60 + 20;
                          return (
                            <div key={day} className="flex items-center gap-4">
                              <span className="text-purple-300/80 text-sm w-8">{day}</span>
                              <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/10">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${height}%` }}
                                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                                  className="h-full bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-cyan-500/80 rounded-full"
                                />
                              </div>
                              <span className="text-white text-sm w-8 text-right">{Math.round(height)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Status Distribution */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/80 to-blue-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                          <PieChart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Connection Distribution</h3>
                          <p className="text-cyan-300/80 text-sm">Message status overview</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <span className="text-white">Read Messages</span>
                          </div>
                          <span className="text-purple-300 font-semibold text-lg">{dashboardStats.readContacts}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-white">Unread Messages</span>
                          </div>
                          <span className="text-cyan-300 font-semibold text-lg">{dashboardStats.unreadContacts}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                            <span className="text-white">Today's Activity</span>
                          </div>
                          <span className="text-emerald-300 font-semibold text-lg">{dashboardStats.todayContacts}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500/80 to-purple-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Mission Control</h3>
                        <p className="text-pink-300/80 text-sm">Quick access to core functions</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <motion.button
                        onClick={() => setActiveTab('contacts')}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-left group"
                      >
                        <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8 text-purple-400 mb-3 lg:mb-4 group-hover:text-purple-300 transition-colors" />
                        <h4 className="text-white font-semibold mb-2 text-sm lg:text-base">View Connections</h4>
                        <p className="text-purple-300/80 text-xs lg:text-sm">Browse incoming messages</p>
                      </motion.button>
                      
                      <motion.button
                        onClick={exportContacts}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-left group"
                      >
                        <Download className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 mb-3 lg:mb-4 group-hover:text-cyan-300 transition-colors" />
                        <h4 className="text-white font-semibold mb-2 text-sm lg:text-base">Export Data</h4>
                        <p className="text-cyan-300/80 text-xs lg:text-sm">Download connection logs</p>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setActiveTab('analytics')}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-left group"
                      >
                        <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-400 mb-3 lg:mb-4 group-hover:text-emerald-300 transition-colors" />
                        <h4 className="text-white font-semibold mb-2 text-sm lg:text-base">Deep Analysis</h4>
                        <p className="text-emerald-300/80 text-xs lg:text-sm">Advanced data insights</p>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Contacts Content */}
              {activeTab === 'contacts' && (
                <motion.div
                  key="contacts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {loading ? (
                    <div className="text-center py-20">
                      <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                        <RefreshCw className="w-12 h-12 text-purple-400 animate-spin" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Loading Connections...</h3>
                      <p className="text-purple-300/80 text-lg max-w-md mx-auto">
                        Fetching data from the omnifier database
                      </p>
                    </div>
                  ) : error ? (
                    <div className="text-center py-20">
                      <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                        <AlertCircle className="w-12 h-12 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Connection Error</h3>
                      <p className="text-red-300/80 text-lg max-w-md mx-auto mb-6">
                        {error}
                      </p>
                      <motion.button
                        onClick={fetchContacts}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white rounded-xl hover:from-purple-600/80 hover:to-pink-600/80 transition-all duration-300 flex items-center gap-2 mx-auto backdrop-blur-sm border border-white/20 shadow-lg"
                      >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                      </motion.button>
                    </div>
                  ) : filteredContacts.length === 0 ? (
                    <div className="text-center py-20">
                      <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                        <MessageCircle className="w-12 h-12 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">No Connections Found</h3>
                      <p className="text-purple-300/80 text-lg max-w-md mx-auto">
                        {searchTerm || filterStatus !== 'all' 
                          ? 'Try adjusting your search parameters or filter settings'
                          : 'The omnifier is quiet for now. Check back for incoming connections!'
                        }
                      </p>
                    </div>
                  ) : (
                    <div className="grid gap-4 lg:gap-6">
                      {filteredContacts.map((contact, index) => (
                        <motion.div
                          key={contact.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.05 }}
                          className={`bg-white/5 backdrop-blur-xl border rounded-2xl lg:rounded-3xl p-4 lg:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden ${
                            contact.isRead 
                              ? 'border-white/10 hover:border-white/20' 
                              : 'border-cyan-500/50 bg-gradient-to-r from-cyan-900/20 to-blue-900/10 hover:border-cyan-400/70'
                          }`}
                        >
                          {/* Unread indicator glow */}
                          {!contact.isRead && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                          )}
                          
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 lg:mb-6 gap-4">
                            <div className="flex items-center gap-3 lg:gap-4">
                              <motion.div 
                                className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl lg:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg shadow-purple-500/25"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span className="text-white font-bold text-lg lg:text-xl">
                                  {contact.name.charAt(0).toUpperCase()}
                                </span>
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                  <h3 className="text-lg lg:text-2xl font-bold text-white truncate">{contact.name}</h3>
                                  {!contact.isRead && (
                                    <span className="px-2 lg:px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm border border-white/20 shadow-lg shadow-cyan-500/25 animate-pulse whitespace-nowrap">
                                      NEW
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs lg:text-sm text-purple-300/80">
                                  <div className="flex items-center gap-2">
                                    <Mail className="w-3 h-3 lg:w-4 lg:h-4 text-purple-400" />
                                    <span className="truncate">{contact.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-purple-400" />
                                    <span>{new Date(contact.timestamp).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                              {!contact.isRead && (
                                <motion.button
                                  onClick={() => markAsRead(contact.id)}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-3 lg:px-4 py-2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white rounded-lg lg:rounded-xl hover:from-cyan-600/80 hover:to-blue-600/80 transition-all duration-300 flex items-center justify-center gap-1 lg:gap-2 text-xs lg:text-sm backdrop-blur-sm border border-white/20 shadow-lg shadow-cyan-500/25"
                                >
                                  <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                                  <span className="hidden sm:inline">Mark Read</span>
                                  <span className="sm:hidden">Read</span>
                                </motion.button>
                              )}
                              
                              <motion.button
                                onClick={() => deleteContact(contact.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 lg:px-4 py-2 bg-gradient-to-r from-pink-500/80 to-red-500/80 text-white rounded-lg lg:rounded-xl hover:from-pink-600/80 hover:to-red-600/80 transition-all duration-300 flex items-center justify-center gap-1 lg:gap-2 text-xs lg:text-sm backdrop-blur-sm border border-white/20 shadow-lg shadow-pink-500/25"
                              >
                                <Trash2 className="w-3 h-3 lg:w-4 lg:h-4" />
                                <span className="hidden sm:inline">Delete</span>
                                <span className="sm:hidden">Del</span>
                              </motion.button>
                            </div>
                          </div>

                          <div className="mb-4 lg:mb-6">
                            <h4 className="text-lg lg:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400" />
                              <span className="truncate">{contact.subject}</span>
                            </h4>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/10">
                              <p className="text-purple-200/90 leading-relaxed text-sm lg:text-base">
                                {contact.message}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs lg:text-sm text-purple-400/80 pt-3 lg:pt-4 border-t border-white/10 gap-2">
                            <span className="font-mono truncate">ID: {contact.id}</span>
                            <span>{new Date(contact.timestamp).toLocaleString()}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Analytics Content */}
              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Performance Metrics */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/80 to-teal-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Performance Matrix</h3>
                          <p className="text-emerald-300/80 text-sm">System efficiency metrics</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { label: 'Response Rate', value: 98.5, color: 'emerald' },
                          { label: 'Processing Speed', value: 94.2, color: 'cyan' },
                          { label: 'User Satisfaction', value: dashboardStats.satisfactionRate, color: 'purple' },
                          { label: 'System Uptime', value: 99.9, color: 'pink' }
                        ].map((metric, index) => (
                          <div key={metric.label} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-white font-medium">{metric.label}</span>
                              <span className="text-purple-300 font-bold">{metric.value}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${metric.value}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className={`h-full rounded-full ${
                                  metric.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                                  metric.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                                  metric.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                                  'bg-gradient-to-r from-pink-500 to-rose-500'
                                }`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* System Status */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/80 to-orange-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">System Status</h3>
                          <p className="text-amber-300/80 text-sm">Real-time monitoring</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { component: 'Message Gateway', status: 'Optimal', uptime: '99.9%', color: 'emerald' },
                          { component: 'Omnifier Core', status: 'Running', uptime: '100%', color: 'cyan' },
                          { component: 'Analysis Engine', status: 'Active', uptime: '98.7%', color: 'purple' },
                          { component: 'Security Shield', status: 'Protected', uptime: '100%', color: 'pink' }
                        ].map((system, index) => (
                          <div key={system.component} className="flex items-center justify-between p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                system.color === 'emerald' ? 'bg-emerald-400' :
                                system.color === 'cyan' ? 'bg-cyan-400' :
                                system.color === 'purple' ? 'bg-purple-400' :
                                'bg-pink-400'
                              } animate-pulse`}></div>
                              <div>
                                <p className="text-white font-medium">{system.component}</p>
                                <p className="text-purple-300/80 text-sm">{system.status}</p>
                              </div>
                            </div>
                            <span className="text-purple-300 font-mono text-sm">{system.uptime}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Advanced Analytics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/80 to-purple-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                        <LineChart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Quantum Analytics</h3>
                        <p className="text-indigo-300/80 text-sm">Deep data analysis and predictions</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">127%</div>
                        <div className="text-purple-300/80 text-sm mb-1">Growth Rate</div>
                        <div className="text-emerald-400 text-xs">↗ +23% vs last month</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">4.8s</div>
                        <div className="text-purple-300/80 text-sm mb-1">Avg Response</div>
                        <div className="text-cyan-400 text-xs">↗ -1.2s improvement</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">96.2%</div>
                        <div className="text-purple-300/80 text-sm mb-1">Success Rate</div>
                        <div className="text-pink-400 text-xs">↗ +2.1% this week</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}