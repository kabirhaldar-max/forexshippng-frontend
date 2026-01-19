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
  {
    value: "pickup_scheduled",
    label: "Pickup Scheduled / Pending Pickup",
  },
  {
    value: "origin_scan",
    label: "Origin Scan / Arrived at Facility",
  },
  {
    value: "processed_at_hub",
    label: "Processed at Hub",
  },
  {
    value: "transshipment",
    label: "Transshipment",
  },
  {
    value: "discharged_at_port",
    label: "Discharged at Port",
  },
  {
    value: "gate_in_out",
    label: "Gate-In / Gate-Out",
  },
  {
    value: "blank_sailing",
    label: "Blank Sailing",
  },
  {
    value: "held_in_customs",
    label: "Held in Customs / Pending Customs",
  },
  {
    value: "under_assessment",
    label: "Under Assessment",
  },
  {
    value: "boe_filed",
    label: "Bill of Entry (BOE) Filed",
  },
  {
    value: "customs_cleared",
    label: "Customs Cleared / International Shipment Release",
  },
  {
    value: "awaiting_duties_payment",
    label: "Awaiting Payment of Duties",
  },
  {
    value: "in_transit",
    label: "In Transit",
  },
  {
    value: "arrived_destination_hub",
    label: "Arrived at Destination Hub",
  },
  {
    value: "out_for_delivery",
    label: "Out for Delivery",
  },
  {
    value: "delivery_attempted",
    label: "Delivery Attempted",
  },
];

const statusClassMap = {
  pickup_scheduled: "bg-gray-100 text-gray-800",
  origin_scan: "bg-blue-100 text-blue-800",
  processed_at_hub: "bg-indigo-100 text-indigo-800",
  transshipment: "bg-purple-100 text-purple-800",
  discharged_at_port: "bg-orange-100 text-orange-800",
  gate_in_out: "bg-amber-100 text-amber-800",
  blank_sailing: "bg-red-100 text-red-800",
  held_in_customs: "bg-rose-100 text-rose-800",
  under_assessment: "bg-fuchsia-100 text-fuchsia-800",
  boe_filed: "bg-sky-100 text-sky-800",
  customs_cleared: "bg-green-100 text-green-800",
  awaiting_duties_payment: "bg-yellow-100 text-yellow-800",
  in_transit: "bg-purple-100 text-purple-800",
  arrived_destination_hub: "bg-orange-100 text-orange-800",
  out_for_delivery: "bg-cyan-100 text-cyan-800",
  delivery_attempted: "bg-red-100 text-red-800",
};


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
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusClassMap[order.current_status] || "bg-gray-100 text-gray-800"}`}
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