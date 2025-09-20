'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Mail, 
  MessageCircle, 
  AlertCircle,
  CheckCircle,
  Loader2,
  Sparkles
} from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface ReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact | null;
  onReplySent: () => void;
}

interface ReplyData {
  subject: string;
  message: string;
}

export default function ReplyModal({ isOpen, onClose, contact, onReplySent }: ReplyModalProps) {
  const [replyData, setReplyData] = useState<ReplyData>({
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contact) {
      setError('No contact selected');
      return;
    }
    
    if (!replyData.subject.trim() || !replyData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const requestBody = {
        contactId: contact.id,
        subject: replyData.subject.trim(),
        message: replyData.message.trim()
      };

      console.log('Request body:', requestBody);
      console.log('API URL:', `${API_BASE_URL}/contacts/${contact.id}/reply`);

      const response = await fetch(`${API_BASE_URL}/contacts/${contact.id}/reply`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();
      console.log('Reply response:', result);

      if (response.ok && result.success) {
        setSuccess(true);
        onReplySent();
        
        // Reset form
        setReplyData({ subject: '', message: '' });
        
        // Show warning if email failed
        if (result.warning) {
          console.warn('Email warning:', result.warning);
          // You can show a toast notification here
        }
        
        // Close modal after success animation
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to send reply');
      }
    } catch (error) {
      console.error('Error sending reply:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setReplyData({ subject: '', message: '' });
      setError(null);
      setSuccess(false);
      onClose();
    }
  };

  const handleInputChange = (field: keyof ReplyData, value: string) => {
    setReplyData(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  if (!isOpen || !contact) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-purple-900/20 w-full max-w-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send Reply</h2>
                  <p className="text-purple-300/80">Reply to {contact.name}</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                disabled={isLoading}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors disabled:opacity-50"
              >
                <X className="w-6 h-6 text-purple-300" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500/80 to-teal-500/80 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">Reply Sent Successfully!</h3>
                <p className="text-emerald-300/80 text-lg">
                  Your reply has been sent to {contact.email}
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Original Message */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    Original Message
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-purple-300/80 text-sm">From:</span>
                      <span className="text-white ml-2">{contact.name} ({contact.email})</span>
                    </div>
                    <div>
                      <span className="text-purple-300/80 text-sm">Subject:</span>
                      <span className="text-white ml-2">{contact.subject}</span>
                    </div>
                    <div className="mt-3">
                      <span className="text-purple-300/80 text-sm">Message:</span>
                      <div className="bg-white/5 rounded-xl p-3 mt-2 border border-white/10">
                        <p className="text-purple-200/90 leading-relaxed">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reply Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-200/90 mb-2">
                      Reply Subject
                    </label>
                    <input
                      type="text"
                      value={replyData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Enter reply subject..."
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-200/90 mb-2">
                      Reply Message
                    </label>
                    <textarea
                      value={replyData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Type your reply message here..."
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">{error}</span>
                    </motion.div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="button"
                      onClick={handleClose}
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isLoading || !replyData.subject.trim() || !replyData.message.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white rounded-xl border border-white/20 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Reply
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
