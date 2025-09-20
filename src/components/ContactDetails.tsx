'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Mail, 
  Calendar, 
  User, 
  MessageCircle, 
  Send,
  Eye,
  Trash2,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import ReplyModal from './ReplyModal';
import ReplyHistory from './ReplyHistory';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface ContactDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact | null;
  onContactUpdate: () => void;
  onDelete: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

export default function ContactDetails({ 
  isOpen, 
  onClose, 
  contact, 
  onContactUpdate, 
  onDelete, 
  onMarkAsRead 
}: ContactDetailsProps) {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'replies'>('details');

  if (!isOpen || !contact) return null;

  const handleReplySent = () => {
    onContactUpdate();
    setActiveTab('replies');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this contact?')) {
      onDelete(contact.id);
      onClose();
    }
  };

  const handleMarkAsRead = () => {
    if (!contact.isRead) {
      onMarkAsRead(contact.id);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-purple-900/20 w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white font-bold text-lg">
                    {contact.name.charAt(0).toUpperCase()}
                  </span>
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{contact.name}</h2>
                  <p className="text-purple-300/80">{contact.email}</p>
                </div>
                {!contact.isRead && (
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white text-sm font-bold rounded-full backdrop-blur-sm border border-white/20 shadow-lg shadow-cyan-500/25 animate-pulse">
                    NEW
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-purple-300" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex gap-1 bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10">
              {[
                { id: 'details', label: 'Contact Details', icon: User },
                { id: 'replies', label: 'Reply History', icon: MessageCircle }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white shadow-lg border border-white/20'
                      : 'text-purple-300/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <AnimatePresence mode="wait">
              {activeTab === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Contact Information */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-purple-400" />
                          <div>
                            <span className="text-purple-300/80 text-sm">Name</span>
                            <p className="text-white font-medium">{contact.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-purple-400" />
                          <div>
                            <span className="text-purple-300/80 text-sm">Email</span>
                            <p className="text-white font-medium">{contact.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-purple-400" />
                          <div>
                            <span className="text-purple-300/80 text-sm">Date</span>
                            <p className="text-white font-medium">
                              {new Date(contact.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 text-purple-400" />
                          <div>
                            <span className="text-purple-300/80 text-sm">Status</span>
                            <p className={`font-medium ${contact.isRead ? 'text-emerald-400' : 'text-cyan-400'}`}>
                              {contact.isRead ? 'Read' : 'Unread'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-purple-400" />
                      Message Content
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-purple-300/80 text-sm">Subject</span>
                        <h4 className="text-white font-semibold text-lg mt-1">{contact.subject}</h4>
                      </div>
                      <div>
                        <span className="text-purple-300/80 text-sm">Message</span>
                        <div className="bg-white/5 rounded-xl p-4 mt-2 border border-white/10">
                          <p className="text-purple-200/90 leading-relaxed whitespace-pre-wrap">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      onClick={() => setShowReplyModal(true)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white rounded-xl border border-white/20 shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Reply
                    </motion.button>

                    {!contact.isRead && (
                      <motion.button
                        onClick={handleMarkAsRead}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-sm text-white rounded-xl border border-white/20 shadow-lg transition-all duration-300 flex items-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        Mark as Read
                      </motion.button>
                    )}

                    <motion.button
                      onClick={handleDelete}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-pink-500/80 to-red-500/80 backdrop-blur-sm text-white rounded-xl border border-white/20 shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      Delete Contact
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'replies' && (
                <motion.div
                  key="replies"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReplyHistory 
                    contactId={contact.id} 
                    onReplyUpdate={onContactUpdate}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Reply Modal */}
      <ReplyModal
        isOpen={showReplyModal}
        onClose={() => setShowReplyModal(false)}
        contact={contact}
        onReplySent={handleReplySent}
      />
    </AnimatePresence>
  );
}
