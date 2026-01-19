import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Package, Plus, LogOut, Loader2, Edit } from "lucide-react";
import UpdateStatusModal from "../components/UpdateStatusModal";
import logo from "../assets/Forexshipping_logo.png";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const adminName = localStorage.getItem("admin_name");

  const fetchOrders = useCallback(async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(`${API}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_name");
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_name");
    navigate("/admin/login");
  };

  const handleUpdateStatus = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleStatusUpdated = () => {
    setShowModal(false);
    setSelectedOrder(null);
    fetchOrders();
  };

  const statusOptions = [
    { value: "confirmed", label: "Order Confirmed" },
    { value: "shipped", label: "Shipped" },
    { value: "transit", label: "In Transit" },
    { value: "hub", label: "Reached Hub" },
    { value: "out", label: "Out for Delivery" },
    { value: "delivered", label: "Delivered Successfully" },
    { value: "failed", label: "Delivery Attempted Failed" },
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
    return (
      statusOptions2.find((item) => item.value === status)?.label || "Unknown"
    );
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-white border-b-4 border-primary shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="">
              <img src={logo} className="h-14" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                FOREX<span className="text-blue-600">SHIPPING</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                Global Freight Solutions
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Welcome, {adminName}</span>
            <button
              onClick={handleLogout}
              data-testid="logout-button"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-l-4 border-primary p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Total Orders
            </p>
            <p
              className="font-heading text-3xl font-bold"
              data-testid="total-orders"
            >
              {orders.length}
            </p>
          </div>
          {/* <div className="bg-white border-l-4 border-gray-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Order Confirmed
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "order_confirmed").length}
            </p>
          </div>
          <div className="bg-white border-l-4 border-yellow-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Dispatched
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "order_dispatched_origin").length}
            </p>
          </div>
          <div className="bg-white border-l-4 border-purple-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              In Transit
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "transit").length}
            </p>
          </div>
          <div className="bg-white border-l-4 border-orange-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Reached Hub
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "hub").length}
            </p>
          </div>
          <div className="bg-white border-l-4 border-cyan-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Out for Delivery
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "out").length}
            </p>
          </div>
          <div className="bg-white border-l-4 border-green-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Delivered Successfully
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "delivered").length}
            </p>
          </div>
          <div className="bg-white border-l-4 border-red-400 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Delivery Attempted Failed
            </p>
            <p className="font-heading text-3xl font-bold">
              {orders.filter((o) => o.current_status === "failed").length}
            </p>
          </div> */}
        </div>

        {/* Actions */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/admin/orders/new")}
            data-testid="create-order-button"
            className="bg-accent text-accent-foreground px-6 py-3 font-heading uppercase font-medium hover:bg-accent/90 transition-all duration-200 rounded-sm flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create New Order
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white shadow-sm border border-border">
          <div className="p-4 border-b border-border">
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight">
              All Orders
            </h2>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
            </div>
          ) : orders.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <p>No orders yet. Create your first order to get started.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary border-b border-border">
                  <tr>
                    <th className="text-left p-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Tracking ID
                    </th>
                    <th className="text-left p-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Customer
                    </th>
                    <th className="text-left p-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Product
                    </th>
                    <th className="text-left p-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Status
                    </th>
                    <th className="text-left p-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Created
                    </th>
                    <th className="text-left p-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.tracking_id}
                      className="border-b border-border hover:bg-secondary/50"
                    >
                      <td
                        className="p-3 font-mono text-sm"
                        data-testid={`order-${order.tracking_id}`}
                      >
                        {order.tracking_id}
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          {order.customer_name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {order.customer_email}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">{order.product_name}</div>
                        <div className="text-xs text-muted-foreground">
                          Qty: {order.quantity}
                        </div>
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusClassMap[order.current_status] || "bg-gray-100 text-gray-800"}`}
                        >
                          {getStatus(order.current_status)}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleUpdateStatus(order)}
                          data-testid={`update-status-${order.tracking_id}`}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Update Status Modal */}
      {showModal && selectedOrder && (
        <UpdateStatusModal
          order={selectedOrder}
          onClose={() => setShowModal(false)}
          onSuccess={handleStatusUpdated}
        />
      )}
    </div>
  );
}
