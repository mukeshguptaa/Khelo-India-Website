import { motion } from "motion/react";
import { 
  Flag, 
  Rocket, 
  TrendingUp, 
  Microscope, 
  FileText, 
  Zap, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Trophy 
} from "lucide-react";

const timeline = [
  {
    year: "2017",
    title: "The Foundation",
    description: "Launch of the Khelo India programme by the Ministry of Youth Affairs and Sports, aimed at reviving sports culture at the grassroots level across India.",
    icon: Flag,
  },
  {
    year: "2018",
    title: "The Inception",
    description: "Launch of the first Khelo India School Games in New Delhi, marking the beginning of a new era in structured youth sports competition.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Scaling Up",
    description: "School Games evolved into the Khelo India Youth Games (KIYG) with Indian Olympic Association support, expanding participation across age groups and disciplines.",
    icon: TrendingUp,
  },
  {
    year: "2021–26",
    title: "Khelo India 2.0 — Inclusion & Science",
    description: "Focus shifted to inclusivity — bringing women and Para athletes into the fold. Basic sports science was introduced, infrastructure development began, and the FIT India campaign was rolled out alongside new Khelo India Games categories.",
    icon: Microscope,
  },
  {
    year: "2025",
    title: "Khelo Bharat Niti",
    description: "India's first comprehensive national sports policy in 25 years was released, built around five pillars: global sporting excellence, mass participation, sports infrastructure, sports economy, and governance. Target set — Top 10 at 2036 Olympics, Top 5 by 2047.",
    icon: FileText,
  },
  {
    year: "2026",
    title: "Khelo India Mission — Announced",
    description: "Union Budget 2026–27 formally launched the Khelo India Mission as a 10-year strategy. Highest-ever sports budget of ₹4,479.88 crore allocated. Mission focuses on integrated talent development, coach professionalisation, sports science, and manufacturing hubs.",
    icon: Zap,
  },
  {
    year: "2026–31",
    title: "Khelo India 3.0 — Building the Pyramid",
    description: "A three-layered talent development pyramid: 16,500+ school-level athletes → 6,500+ intermediate level → 1,300+ elite potential medal winners. Coaching ecosystem expansion, institutionalisation of sports science, and hosting of international events.",
    icon: Layers,
  },
  {
    year: "2030",
    title: "Commonwealth Games — India Hosts",
    description: "India hosts the 2030 Commonwealth Games, serving as a major milestone and infrastructure test-bed on the road to the Olympic bid.",
    icon: Globe,
  },
  {
    year: "2031–36",
    title: "Khelo India 4.0 — Olympic Ready",
    description: "Consolidation phase. Universal access to sports, sustainable infrastructure and legacy planning, strengthened anti-doping network, ₹500 crore fund for domestic sports goods manufacturing, and full preparation for the 2036 Olympic Games.",
    icon: ShieldCheck,
  },
  {
    year: "2036",
    title: "The Olympic Dream",
    description: "India's bid to host the 2036 Summer Olympics, with Ahmedabad as the proposed host city. Goal: finish among the Top 10 nations in both the Olympics and Paralympics.",
    icon: Trophy,
  },
];

export const Journey = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl mb-6">THE KHELO INDIA <span className="text-primary">JOURNEY</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A chronological look at how we've transformed the sporting landscape of India over the last decade.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block" />
        
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                    <div className="text-6xl font-display font-black text-primary/20 mb-2">{item.year}</div>
                    <h3 className="text-3xl mb-4">{item.title}</h3>
                    <p className="text-gray-600 max-w-md leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 w-16 h-16 bg-primary flex items-center justify-center rounded-xl shadow-lg">
                  <item.icon className="text-white" size={24} />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
