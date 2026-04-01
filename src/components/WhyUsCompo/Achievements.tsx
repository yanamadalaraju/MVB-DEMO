import React from "react";
import { Server, ShieldCheck, TrendingUp, Handshake } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const achievements = [
  { year: '2023', title: 'Best IT Infrastructure Provider', org: 'Tech Excellence Awards', icon: Server },
  { year: '2022', title: 'Innovation in Security', org: 'Cybersecurity Leaders', icon: ShieldCheck },
  { year: '2021', title: 'Fastest Growing Tech Firm', org: 'Business Times', icon: TrendingUp },
  { year: '2020', title: 'Client Choice Award', org: 'IT Services Association', icon: Handshake },
];

const AchievementsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
        bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
        opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">

        <SectionWrapper>
          <div className="text-center mb-16">

            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block 
            bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
            bg-clip-text text-transparent">
              Recognition
            </span>

            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
              bg-clip-text text-transparent">
                Awards & Achievements
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders.
            </p>

          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;

            return (
              <SectionWrapper key={achievement.title} delay={i * 120}>
                <div className="group relative p-6 rounded-2xl 
                bg-white/60 backdrop-blur-xl border border-white/20 
                shadow-lg hover:shadow-2xl hover:scale-105 
                transition-all duration-500 text-center">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl 
                  bg-gradient-to-r from-pink-600/20 via-yellow-400/20 to-blue-600/20 
                  blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Year Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full 
                  bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                  text-white text-xs font-bold shadow-md">
                    {achievement.year}
                  </div>

                  {/* Center Icon */}
                  <div className="flex justify-center mt-6 mb-4">
                    <div className="p-4 rounded-full 
                    bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                    shadow-lg">
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-2">
                    <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 
                    bg-clip-text text-transparent">
                      {achievement.title}
                    </span>
                  </h3>

                  {/* Org */}
                  <p className="text-xs text-gray-500">
                    {achievement.org}
                  </p>

                </div>
              </SectionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;