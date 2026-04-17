import { motion } from "motion/react";
import { Map, MapPin, Trophy, Building } from "lucide-react";

const states = [
  { name: "Haryana", centers: 124, athletes: 1200, icon: Trophy },
  { name: "Manipur", centers: 45, athletes: 600, icon: Star },
  { name: "Odisha", centers: 88, athletes: 950, icon: Building },
  { name: "Maharashtra", centers: 156, athletes: 1800, icon: Users },
  { name: "Punjab", centers: 92, athletes: 1100, icon: Zap },
  { name: "Karnataka", centers: 74, athletes: 850, icon: Target },
];

import { Star, Users, Zap, Target } from "lucide-react";

export const State = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-navy py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-6xl mb-6">KHELO INDIA <span className="text-primary">STATE</span></h1>
              <p className="text-xl text-gray-400">
                Tracking the impact of the mission across every state and union territory of India.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Map className="text-primary" size={40} />
                <div>
                  <div className="text-3xl font-display font-black">28+8</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">States & UTs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.map((state, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-navy text-white flex items-center justify-center rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-2xl">{state.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-2xl font-display font-black text-primary">{state.centers}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Centers</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-2xl font-display font-black text-navy">{state.athletes}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Athletes</div>
                  </div>
                </div>

                <button className="w-full mt-8 py-2 border-2 border-navy/10 font-display font-bold uppercase text-xs tracking-widest rounded-lg group-hover:bg-navy group-hover:text-white transition-all">
                  View State Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl mb-8">FIND A CENTER <span className="text-primary">NEAR YOU</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                Our interactive map helps you locate the nearest Khelo India State Center of Excellence (KISCE) or Khelo India Center (KIC).
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter Pincode or City"
                  className="flex-grow bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary text-white font-display font-bold uppercase px-5 py-2.5 text-sm rounded-lg hover:bg-white hover:text-primary transition-all">
                  Search
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                <Map className="text-white/20 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="text-sm font-bold uppercase tracking-widest mb-1">Interactive Map</div>
                    <div className="text-xs text-gray-400">Click to explore centers across India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
