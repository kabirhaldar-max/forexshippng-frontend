import { Bike, CheckCircle, Clock, Cross, Factory, Package, Truck } from 'lucide-react';

const statusIcons = {
  confirmed: Clock,
  shipped: Package,
  transit: Truck,
  hub: Factory,
  out: Bike,
  delivered: CheckCircle,
  failed: Cross
};

const statusColors = {
  confirmed: 'text-gray-500',
  shipped: 'text-yellow-500',
  transit: 'text-purple-500',
  hub: 'text-orange-500',
  out: 'text-cyan-500',
  delivered: 'text-green-500',
  failed: 'text-red-500',
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

const getStatus = (status) => {
  return statusOptions.find(item => item.value === status)?.label || 'Unknown';
}

export default function OrderTimeline({ history }) {
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
                statusColors[item.status]
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
                  {item.note && <p className="text-sm text-muted-foreground mt-1">{item.note}</p>}
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