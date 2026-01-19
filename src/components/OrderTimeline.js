import {
  Clock,
  Package,
  Truck,
  Factory,
  Ship,
  Anchor,
  ArrowLeftRight,
  AlertTriangle,
  FileText,
  CheckCircle,
  IndianRupee,
  Bike,
  XCircle,
} from "lucide-react";

const statusIcons = {
  pickup_scheduled: Clock,
  origin_scan: Package,
  processed_at_hub: Factory,
  transshipment: ArrowLeftRight,
  discharged_at_port: Anchor,
  gate_in_out: ArrowLeftRight,
  blank_sailing: AlertTriangle,
  held_in_customs: AlertTriangle,
  under_assessment: FileText,
  boe_filed: FileText,
  customs_cleared: CheckCircle,
  awaiting_duties_payment: IndianRupee,
  in_transit: Truck,
  arrived_destination_hub: Factory,
  out_for_delivery: Bike,
  delivery_attempted: XCircle,
};

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



const getStatus = (status) => {
  return statusOptions2.find(item => item.value === status)?.label || 'Unknown';
}

export default function OrderTimeline({ history, state }) {

  console.log(history)
  return (
    <div className="relative">
      {history.map((item, index) => {
        const Icon = statusIcons[item.status] || Clock;
        const isLast = index === history.length - 1;

        return (
          <div key={index} className="flex gap-4 pb-8 last:pb-0 relative">
            {/* Timeline Line */}
            {!isLast && (
              <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-border"></div>
            )}

            {/* Icon */}
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-white flex items-center justify-center z-10 ${
                statusClassMap[item.status]
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-heading font-bold uppercase tracking-tight text-sm">
                    {getStatus(item.status)}
                  </h4>
                  {item.note && item.status == 'reached_your_state' ? <p className="text-sm text-muted-foreground mt-1 uppercase">Reached Your State {state}</p> : <p className="text-sm text-muted-foreground mt-1 uppercase">{item.note}</p>}
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                  {new Date(item.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}