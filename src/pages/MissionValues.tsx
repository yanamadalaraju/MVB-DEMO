import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">

      {/* 🌈 Soft Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 opacity-40" />

      {/* 🔹 Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* 🔹 Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
            Who We Are
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision & Approach
          </h1>

          {/* 🌈 Gradient Line */}
          <div className="w-24 h-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 🔹 Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🌈 Vision Card */}
          <div className="group p-10 rounded-2xl bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md mb-6 text-2xl">
              👁️
            </div>

            <h2 className="text-xl font-semibold mb-4 text-white/90">
              Future Vision
            </h2>

            <p className="text-2xl md:text-3xl font-bold leading-snug">
              Customer Centricity with Peace of Mind
            </p>

            <div className="mt-6 w-12 h-[2px] bg-white/60 group-hover:w-20 transition-all duration-300"></div>
          </div>

          {/* 🌈 Mission Card */}
          <div className="group p-10 rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-transparent"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-green-400 to-pink-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>

            <div className="relative">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-white mb-6 text-2xl">
                🚀
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Our Approach
              </h2>

              <p className="text-gray-700 leading-relaxed">
                We build{" "}
                <span className="font-semibold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Data Cabling & Data Security
                </span>{" "}
                as the strategic core, enabling end-to-end IT infrastructure
                that simplifies operations and enhances business efficiency.
              </p>

              <p className="text-gray-600 mt-4 italic border-l-2 border-pink-400 pl-4">
                We transform complex challenges into streamlined solutions,
                delivering reliability and long-term value.
              </p>

              <div className="mt-6 w-12 h-[2px] bg-gray-400 group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Grid Style */}
      <style>{`
        .bg-grid {
          background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default MissionVision;