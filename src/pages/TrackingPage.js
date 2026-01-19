import { useState } from 'react';
import axios from 'axios';
import { Package, Search, Loader2 } from 'lucide-react';
import OrderTimeline from '../components/OrderTimeline';
import CustomHeader from '@/components/CustomHeader';
import CustomHero from '@/components/CustomHero';
import StatsSection from '@/components/StatsSection';
import CustomFooter from '@/components/CustomFooter';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setError('');
    setOrder(null);

    try {
      const response = await axios.get(`${API}/orders/${trackingId.trim()}`);
      setOrder(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Order not found. Please check your tracking ID.');
    } finally {
      setLoading(false);
      console.log(order)
    }
  };

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

const getStatus = (status) => {
  return statusOptions2.find(item => item.value === status)?.label || 'Unknown';
}

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <CustomHeader />

      {/* Hero Section */}
      <CustomHero />

      {/* Tracking Form */}
      <div className="max-w-3xl mx-auto px-6 -mt-12 pt-10 pb-20">
        <form onSubmit={handleTrack} className="bg-white shadow-lg border-l-4 border-accent p-8">
          <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Tracking ID
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              data-testid="tracking-input"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="ENTER TRACKING ID (e.g., FXS-XXXXXX)"
              className="flex-1 bg-transparent border-b-2 border-input px-0 py-3 font-mono text-lg focus:border-primary focus:outline-none placeholder:text-muted-foreground placeholder:text-sm"
            />
            <button
              type="submit"
              data-testid="track-button"
              disabled={loading}
              className="bg-accent text-accent-foreground px-8 py-3 font-heading uppercase font-medium hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 rounded-sm"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Track
                </div>
              )}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-6 bg-error/10 border-l-4 border-error p-4" data-testid="error-message">
            <p className="text-error font-medium">{error}</p>
          </div>
        )}

        {/* Order Details */}
        {order && (
          <div className="mt-8 space-y-6 mb-20">
            {/* Order Info */}
            <div className="bg-white shadow-sm border border-border p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight mb-2">
                    Order Details
                  </h3>
                  <p className="font-mono text-lg text-primary" data-testid="order-tracking-id">
                    {order.tracking_id}
                  </p>
                </div>
                <span
                  data-testid="order-status-badge"
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                    order.current_status === 'confirmed'
                      ? 'bg-gray-100 text-gray-800'
                      : order.current_status === 'shipped'
                      ? 'bg-yellow-100 text-yellow-800'
                      : order.current_status === 'transit'
                      ? 'bg-purple-100 text-purple-800'
                      : order.current_status === 'hub'
                      ? 'bg-orange-100 text-orange-800'
                      : order.current_status === 'out'
                      ? 'bg-cyan-100 text-cyan-800'
                      : order.current_status === 'delivered'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {getStatus(order.current_status)}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Customer
                  </p>
                  <p className="font-medium">{order.customer_name}</p>
                  <p className="text-sm text-muted-foreground">{order.customer_email}</p>
                  <p className="text-sm text-muted-foreground">{order.customer_phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Product
                  </p>
                  <p className="font-medium">{order.product_name}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {order.quantity}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Delivery Address
                  </p>
                  <p className="text-sm">{order.customer_address}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Shipped From
                  </p>
                  <p className="font-medium">{order.company_name}</p>
                  <p className="text-sm text-muted-foreground">{order.company_address}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white shadow-sm border border-border p-6">
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight mb-6">
                Shipment Timeline
              </h3>
              <OrderTimeline history={order.status_history} state={order.customer_state} />
            </div>
          </div>
        )}
      </div>

      <StatsSection />

      <CustomFooter />
    </div>
  );
}