import CustomFooter from "@/components/CustomFooter";
import CustomHeader from "@/components/CustomHeader";
import React from "react";

export default function Contact() {
  return (
    <div className="w-full overflow-hidden bg-white text-slate-800">
    <CustomHeader />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let’s Move Your Cargo
              <span className="block text-indigo-400">Across Borders, Effortlessly</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Whether you’re shipping globally, scaling operations, or need expert
              logistics advice — our team is ready to support you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Sales Enquiries",
                desc: "Discuss pricing, solutions, and partnerships.",
              },
              {
                title: "Shipment Support",
                desc: "Get real-time help for active shipments.",
              },
              {
                title: "Enterprise Solutions",
                desc: "Custom logistics built for scale.",
              },
              {
                title: "General Queries",
                desc: "Questions? We’re here to help.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Talk to Our Logistics Experts
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Share your requirements and our specialists will get back to you
                with the most efficient shipping solution tailored to your needs.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Global Offices
                  </div>
                  <p className="mt-1 text-slate-700">
                    Asia • Middle East • Europe • North America
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Availability
                  </div>
                  <p className="mt-1 text-slate-700">
                    24/7 Shipment Monitoring & Support
                  </p>
                </div>
              </div>
            </div>

            <form className="rounded-3xl bg-slate-50 p-10 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
              <textarea
                rows={5}
                placeholder="Tell us about your shipping needs"
                className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-indigo-400">120+</div>
              <div className="mt-2 text-sm text-slate-300">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">10M+</div>
              <div className="mt-2 text-sm text-slate-300">Shipments Annually</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">99%</div>
              <div className="mt-2 text-sm text-slate-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Ship Smarter?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Partner with Forex Shipping and experience seamless global logistics.
          </p>
          <button className="mt-8 rounded-xl bg-white px-10 py-4 text-sm font-semibold text-slate-900 transition hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      <CustomFooter />
    </div>
  );
}
