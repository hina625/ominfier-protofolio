'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  RefreshCw,
  Trash2,
  Mail,
  User,
  Calendar
} from 'lucide-react';

interface Reply {
  _id: string;
  subject: string;
  message: string;
  status: 'sent' | 'failed' | 'pending';
  sentAt: string | null;
  errorMessage: string | null;
  createdAt: string;
  adminId: {
    username: string;
    email: string;
  };
}

interface ReplyHistoryProps {
  contactId: string;
  onReplyUpdate?: () => void;
}

export default function ReplyHistory({ contactId, onReplyUpdate }: ReplyHistoryProps) {
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

  const fetchReplies = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${API_BASE_URL}/contacts/${contactId}/replies`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setReplies(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch replies');
      }
    } catch (error) {
      console.error('Error fetching replies:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resendReply = async (replyId: string) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${API_BASE_URL}/contacts/replies/${replyId}/resend`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Refresh replies
        fetchReplies();
        if (onReplyUpdate) onReplyUpdate();
      } else {
        throw new Error(result.error || 'Failed to resend reply');
      }
    } catch (error) {
      console.error('Error resending reply:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Failed to resend reply: ${errorMessage}`);
    }
  };

  const deleteReply = async (replyId: string) => {
    if (!confirm('Are you sure you want to delete this reply?')) return;

    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${API_BASE_URL}/contacts/replies/${replyId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Refresh replies
        fetchReplies();
        if (onReplyUpdate) onReplyUpdate();
      } else {
        throw new Error(result.error || 'Failed to delete reply');
      }
    } catch (error) {
      console.error('Error deleting reply:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Failed to delete reply: ${errorMessage}`);
    }
  };

  useEffect(() => {
    if (contactId) {
      fetchReplies();
    }
  }, [contactId]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-amber-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent':
        return 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30';
      case 'failed':
        return 'from-red-500/20 to-pink-500/20 border-red-500/30';
      case 'pending':
        return 'from-amber-500/20 to-orange-500/20 border-amber-500/30';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
          <span className="ml-3 text-purple-300">Loading reply history...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30">
        <div className="flex items-center gap-3 text-red-300">
          <AlertCircle className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">Error loading replies</h3>
            <p className="text-sm text-red-300/80">{error}</p>
          </div>
        </div>
        <button
          onClick={fetchReplies}
          className="mt-4 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (replies.length === 0) {
    return (
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="text-center py-8">
          <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Replies Yet</h3>
          <p className="text-purple-300/80">No replies have been sent for this contact.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Reply History</h3>
            <p className="text-purple-300/80 text-sm">{replies.length} replies sent</p>
          </div>
        </div>
        <button
          onClick={fetchReplies}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <RefreshCw className="w-5 h-5 text-purple-300" />
        </button>
      </div>

      <div className="space-y-4">
        {replies.map((reply, index) => (
          <motion.div
            key={reply._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-r ${getStatusColor(reply.status)} backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {getStatusIcon(reply.status)}
                <div>
                  <h4 className="font-semibold text-white">{reply.subject}</h4>
                  <div className="flex items-center gap-4 text-sm text-purple-300/80 mt-1">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{reply.adminId.username}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {reply.sentAt 
                          ? new Date(reply.sentAt).toLocaleString()
                          : new Date(reply.createdAt).toLocaleString()
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {reply.status === 'failed' && (
                  <button
                    onClick={() => resendReply(reply._id)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Resend reply"
                  >
                    <RefreshCw className="w-4 h-4 text-amber-400" />
                  </button>
                )}
                <button
                  onClick={() => deleteReply(reply._id)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Delete reply"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-3 mb-3 border border-white/10">
              <p className="text-purple-200/90 leading-relaxed">{reply.message}</p>
            </div>

            {reply.status === 'failed' && reply.errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-red-300 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-medium">Error:</span>
                  <span>{reply.errorMessage}</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-purple-400/80 pt-2 border-t border-white/10">
              <span className="font-mono">ID: {reply._id}</span>
              <span className="capitalize">{reply.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
