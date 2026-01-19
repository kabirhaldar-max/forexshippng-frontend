import { useState } from 'react';
import axios from 'axios';
import { X, Loader2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const statusOptions = [
  { value: 'confirmed', label: 'Order Confirmed' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'transit', label: 'In Transit' },
  { value: 'hub', label: 'Reached Hub' },
  { value: 'out', label: 'Out for Delivery' },
  { value: 'delivered', label: 'Delivered Successfully' },
  { value: 'failed', label: 'Delivery Attempted Failed' },
];

  const statusOptions2 = [
  { value: "order_confirmed", label: "Order Confirmed" },               // +7 days
  { value: "order_dispatched_origin", label: "Order Dispatched" },      // +7 days
  { value: "under_custom_origin", label: "Under Custom" },              // +7 days
  { value: "custom_clearance_origin", label: "Custom Clearance" },      // +7 days
  { value: "shipped_to_india", label: "Order Shipped to India" },        // +15 days
  { value: "under_transit_india", label: "Under Transit" },              // +7 days
  { value: "reached_india", label: "Reached at India" },                 // +7 days
  { value: "under_custom_india", label: "Under Custom" },                // +7 days
  { value: "custom_clearance_india", label: "Custom Clearance" },        // +7 days
  { value: "order_dispatched_india", label: "Order Dispatched" },        // +7 days
  { value: "reached_your_state", label: "Reached at Your State" },       // +7 days
  { value: "in_transit_final", label: "In Transit" },                    // static
];

export default function UpdateStatusModal({ order, onClose, onSuccess }) {
  const [status, setStatus] = useState(order.current_status);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('admin_token');
      await axios.patch(
        `${API}/orders/${order.tracking_id}`,
        { status, note: note || undefined },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to update status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-2xl border-l-4 border-accent max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight">Update Status</h2>
            <p className="text-sm text-muted-foreground font-mono mt-1">{order.tracking_id}</p>
          </div>
          <button
            onClick={onClose}
            data-testid="close-modal-button"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Status *
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              data-testid="status-select"
              required
              className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {statusOptions2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Note (Optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              data-testid="note-input"
              rows={3}
              className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Add a note about this status update..."
            />
          </div>

          {error && (
            <div className="bg-error/10 border-l-4 border-error p-3" data-testid="error-message">
              <p className="text-error text-sm">{error}</p>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              data-testid="update-status-button"
              disabled={loading}
              className="flex-1 bg-primary text-primary-foreground py-2 font-heading uppercase font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 rounded-sm"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Update'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-border py-2 font-heading uppercase font-medium hover:bg-secondary transition-all duration-200 rounded-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}