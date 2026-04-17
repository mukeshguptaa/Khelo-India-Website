import { SlantedSection, PowerButton } from "../components/DesignSystem";
import { motion } from "motion/react";
import { Target, Zap, Shield, Globe } from "lucide-react";

export const Mission = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 power-slant bg-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-primary text-white px-4 py-1 font-display font-bold uppercase text-xs tracking-widest mb-6 slant-edge">
              <span className="inline-block transform skew-x-[10deg]">Visionary Focus</span>
            </div>
            <h1 className="text-6xl text-white mb-6">KHELO INDIA MISSION 3.0</h1>
            <p className="text-xl text-gray-400">
              Transforming India into a global sporting powerhouse through technology, inclusivity, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center slant-edge">
                  <Target className="text-primary transform skew-x-[10deg]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-4">Talent Identification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use advanced data analytics and grassroots scouting to find the next generation of champions in every corner of the country.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center slant-edge">
                  <Zap className="text-primary transform skew-x-[10deg]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-4">Infrastructure Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building state-of-the-art sports complexes and excellence centers that meet international standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center slant-edge">
                  <Shield className="text-primary transform skew-x-[10deg]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-4">Athlete Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providing comprehensive support including coaching, nutrition, sports science, and financial assistance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center slant-edge">
                  <Globe className="text-primary transform skew-x-[10deg]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-4">Global Competitiveness</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring Indian athletes are prepared to compete and win at the highest levels of international sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <SlantedSection bgClassName="bg-primary" className="text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl mb-6 text-white">BE PART OF THE REVOLUTION</h2>
          <p className="text-white/80 mb-10 text-lg">
            Join the thousands of athletes and coaches who are transforming the face of Indian sports.
          </p>
          <button className="bg-white text-primary font-display font-black uppercase px-10 py-4 rounded-sm slant-edge hover:bg-navy hover:text-white transition-all">
            <span className="inline-block transform skew-x-[10deg]">Register Now</span>
          </button>
        </div>
      </SlantedSection>
    </div>
  );
};
