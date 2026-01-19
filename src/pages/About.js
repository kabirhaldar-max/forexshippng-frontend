import CustomFooter from "@/components/CustomFooter";
import CustomHeader from "@/components/CustomHeader";
import React from "react";
import AboutPic from "../assets/aboutPage.png"

export default function About() {
  return (
    <div className="w-full overflow-hidden bg-white text-slate-800">
      <CustomHeader />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Powering Global Trade
              <span className="block text-indigo-400">
                Through Intelligent Shipping
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Forex Shipping is built to move businesses forward — combining
              technology, operational excellence, and global reach to deliver
              shipments faster, safer, and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Countries Served", v: "120+" },
              { k: "Annual Shipments", v: "10M+" },
              { k: "Logistics Partners", v: "450+" },
              { k: "Customer Satisfaction", v: "99.2%" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="text-4xl font-bold text-indigo-600">
                  {item.v}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                  {item.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Who We Are</h2>
              <p className="mt-6 text-lg text-slate-600">
                Forex Shipping is a technology‑driven global logistics company
                designed for modern commerce. We help enterprises and growing
                businesses move goods across borders with precision,
                transparency, and speed.
              </p>
              <p className="mt-4 text-slate-600">
                Our platform integrates smart routing, real‑time tracking,
                customs intelligence, and a worldwide partner network to
                eliminate friction from international shipping.
              </p>
            </div>
            <div className="relative">
              <img src={AboutPic} className="aspect-[4/3] w-full rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What Drives Us
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Reliability", "Speed", "Transparency", "Innovation"].map(
              (value, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 p-8 backdrop-blur"
                >
                  <h3 className="text-xl font-semibold">{value}</h3>
                  <p className="mt-4 text-sm text-slate-300">
                    We design every process to consistently deliver dependable,
                    measurable outcomes for our customers.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Journey</h2>
          <div className="mt-12 space-y-10 border-l border-slate-200 pl-8">
            {[
              {
                y: "2018",
                t: "Company founded with a global‑first logistics vision",
              },
              {
                y: "2020",
                t: "Expanded cross‑border shipping across major trade lanes",
              },
              {
                y: "2022",
                t: "Launched intelligent tracking & analytics platform",
              },
              { y: "2024", t: "Serving enterprises across 120+ countries" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-indigo-600" />
                <div className="text-sm font-semibold text-indigo-600">
                  {item.y}
                </div>
                <div className="mt-1 text-slate-600">{item.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Ship Without Limits?
            </h2>
            <button className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:scale-105">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>

      <CustomFooter />
    </div>
  );
}
