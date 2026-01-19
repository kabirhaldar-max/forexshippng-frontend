import CustomFooter from "@/components/CustomFooter";
import CustomHeader from "@/components/CustomHeader";
import { motion } from "framer-motion";
import { Truck, Globe, Clock, ShieldCheck, Package, ArrowRight } from "lucide-react";
import heroPic from "../assets/Delivery.png";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Global Express Shipping",
      desc: "Fast, reliable international shipping across 220+ countries with priority customs clearance.",
    },
    {
      icon: Clock,
      title: "Time-Critical Deliveries",
      desc: "Guaranteed timelines for urgent documents and parcels with real-time tracking.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliant",
      desc: "End-to-end shipment security, insurance coverage, and full regulatory compliance.",
    },
    {
      icon: Package,
      title: "Customized Logistics",
      desc: "Tailored shipping solutions for businesses, eCommerce sellers, and individuals.",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
        <CustomHeader />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Borderless Forex & Shipping Solutions
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Seamlessly move documents, parcels, and high‑value shipments worldwide with speed, security, and full transparency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-blue-700 font-semibold shadow-lg hover:bg-blue-50 transition">
                Get Instant Quote <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
            <img
              src={heroPic}
              alt="Global shipping"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[300px] sm:h-[360px] md:h-[420px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Forex Shipping Services</h2>
          <p className="mt-4 text-gray-600">
            Purpose‑built solutions to simplify cross‑border forex and logistics operations.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-2xl transition">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <s.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FE5F18] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Ship Smarter. Go Global Faster.</h3>
            <p className="mt-4 text-gray-300">
              Experience reliable international forex shipping backed by compliance, technology, and expert support.
            </p>
          </div>
          <div className="flex md:justify-end gap-4 flex-wrap">
            <button className="rounded-xl bg-gray-600 px-8 py-4 font-semibold hover:bg-gray-700 transition">
              Start Shipping
            </button>
            <button className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white/10 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <CustomFooter />
    </div>
  );
}
