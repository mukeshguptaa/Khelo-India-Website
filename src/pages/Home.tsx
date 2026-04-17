import { SlantedSection, PowerButton } from "../components/DesignSystem";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Trophy,
  Users, 
  Target,
  Zap, 
  Dumbbell, 
  Microscope, 
  HandHelping, 
  School, 
  GraduationCap, 
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { cn } from "../lib/utils";

const EventCountdown = ({ targetDate, type = "secondary", label, venue, eyebrow }: { targetDate: Date, type?: "primary" | "secondary", label: string, venue?: string, eyebrow?: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now < targetDate) {
        setTimeLeft({
          days: differenceInDays(targetDate, now),
          hours: differenceInHours(targetDate, now) % 24,
          minutes: differenceInMinutes(targetDate, now) % 60,
          seconds: differenceInSeconds(targetDate, now) % 60,
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (type === "primary") {
    return (
      <div className="bg-white border border-[#D8DDE6] rounded-[10px] p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="text-[#D85A30] text-[11px] font-medium uppercase tracking-[0.1em] mb-2">{eyebrow}</div>
            <h3 className="text-[20px] font-semibold text-[#0D2040] uppercase tracking-[0.02em] leading-tight">
              {label}
            </h3>
          </div>
          <div className="text-[12px] text-[#7A8A9A] tracking-[0.05em] font-medium">
            {venue}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3 md:gap-4 border-t border-gray-50">
          {[
            { label: "DAYS", value: timeLeft.days.toLocaleString() },
            { label: "HRS", value: timeLeft.hours.toString().padStart(2, '0') },
            { label: "MIN", value: timeLeft.minutes.toString().padStart(2, '0') },
            { label: "SEC", value: timeLeft.seconds.toString().padStart(2, '0') },
          ].map((unit) => (
            <div key={unit.label} className="flex flex-col">
              <div className="text-[30px] md:text-[36px] font-semibold text-[#0D2040] tabular-nums leading-none">
                {unit.value}
              </div>
              <div className="text-[11px] text-[#5A6A80] font-medium uppercase tracking-[0.15em] mt-2.5">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#D8DDE6] rounded-[10px] p-[20px] sm:p-[22px] shadow-sm flex flex-col h-full">
      <h4 className="text-[12px] font-semibold text-[#0D2040] uppercase tracking-[0.03em] mb-1 truncate">
        {label}
      </h4>
      <div className="text-[10px] text-[#7A8A9A] tracking-[0.05em] font-medium mb-[14px]">
        {venue}
      </div>
      <div className="mt-auto flex items-baseline gap-1.5">
        <span className="text-[22px] font-semibold text-[#0D2040] tabular-nums leading-none">
          {timeLeft.days.toLocaleString()}
        </span>
        <span className="text-[10px] text-[#5A6A80] font-medium uppercase tracking-[0.1em]">
          DAYS TO GO
        </span>
      </div>
    </div>
  );
};

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://www.prokabaddi.com/static-assets/waf-images/e3/1f/d5/16-9/6jJWclHxte.png",
      title: "INDIA'S SPORTING REVOLUTION STARTS HERE.",
      subtitle: "Empowering athletes. Transforming communities. Building champions for the next generation."
    },
    {
      image: "https://thebridge.in/h-upload/2022/02/07/23064-khelo-india-1.webp",
      title: "CELEBRATING EXCELLENCE IN EVERY FIELD.",
      subtitle: "From local grounds to global podiums, our athletes are making India proud every day."
    },
    {
      image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/bsmaienccdsshg3ckgcv",
      title: "BUILDING A FITTER, STRONGER NATION.",
      subtitle: "Join the movement that's inspiring millions to embrace sports as a way of life."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[82.5vh] flex items-center bg-navy overflow-hidden">
        {/* Carousel Backgrounds */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 0.4 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
          </motion.div>
        ))}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative h-[400px] flex items-center">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  pointerEvents: currentSlide === index ? "auto" : "none"
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center max-w-4xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] tracking-tighter uppercase font-display font-black">
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className={word === "REVOLUTION" || word === "GRASSROOTS." || word === "EXCELLENCE" || word === "STRONGER" ? "text-primary" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 font-medium max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>
                
                <div className="flex items-center gap-6">
                  <PowerButton className="bg-primary text-white border-none px-10 py-5 text-lg">
                    REGISTER NOW
                  </PowerButton>
                  <button className="flex items-center gap-3 text-white font-display font-black uppercase tracking-widest hover:text-primary transition-colors group">
                    Explore More <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.1. REAL-TIME STATISTICS RIBBON (BELOW HERO) */}
      <div className="bg-[#0a1628] py-4 overflow-hidden relative z-30 border-t border-white/10">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[
            "🥇 572+ Medals at National Level", "🏟️ 900+ SAI Centres", 
            "👟 2.5 Lakh+ Athletes Registered", "🌍 36 States & UTs Covered"
          ].map((stat, i) => {
            const [emoji, ...textParts] = stat.split(' ');
            const text = textParts.join(' ');
            return (
              <div key={i} className="flex items-center group cursor-default">
                <span className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">{emoji}</span>
                <span className="ml-3 text-white font-display font-bold uppercase text-[10px] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                  {text}
                </span>
                <span className="mx-12 h-4 w-[1px] bg-white/20" />
              </div>
            );
          })}
          {/* Duplicated for loop */}
          {[
            "🥇 572+ Medals at National Level", "🏟️ 900+ SAI Centres", 
            "👟 2.5 Lakh+ Athletes Registered", "🌍 36 States & UTs Covered"
          ].map((stat, i) => {
            const [emoji, ...textParts] = stat.split(' ');
            const text = textParts.join(' ');
            return (
              <div key={i} className="flex items-center group cursor-default">
                <span className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">{emoji}</span>
                <span className="ml-3 text-white font-display font-bold uppercase text-[10px] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                  {text}
                </span>
                <span className="mx-12 h-4 w-[1px] bg-white/20" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. LATEST NEWS & CIRCULARS */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-[44px] font-black leading-tight uppercase text-text-primary">
                  LATEST <span className="text-[#E8621A]">NEWS & UPDATES</span>
                </h2>
                <button className="text-[10px] font-black uppercase tracking-[1.3px] text-text-tertiary hover:text-primary transition-colors">View All →</button>
              </div>
              <div className="grid grid-cols-1 auto-rows-fr gap-3">
                {[
                  { 
                    title: "Khelo India Games 2026 announced", 
                    date: "Oct 12, 2025", 
                    type: "NEWS",
                    desc: "The upcoming games will feature 25 sports disciplines across five major cities with record participation expected."
                  },
                  { 
                    title: "New training academies launched across states", 
                    date: "Oct 10, 2025", 
                    type: "CIRCULAR",
                    desc: "State-of-the-art facilities are being established to provide world-class training to grassroots athletes."
                  },
                  { 
                    title: "Athlete scholarship program expanded", 
                    date: "Oct 08, 2025", 
                    type: "ANNOUNCEMENT",
                    desc: "Financial support for top-performing athletes has been increased to cover international training and equipment."
                  },
                  { 
                    title: "National coaching certification drive starts", 
                    date: "Oct 05, 2025", 
                    type: "NEWS",
                    desc: "A nationwide initiative to standardize coaching excellence and certify 5,000 new mentors."
                  },
                  { 
                    title: "Grassroots talent identification camp in Ranchi", 
                    date: "Oct 02, 2025", 
                    type: "ANNOUNCEMENT",
                    desc: "Over 2,000 young athletes participated in the regional trials for the upcoming national academy intake."
                  },
                ].map((news, i) => (
                  <Link 
                    to="#" 
                    key={i} 
                    className="flex items-center gap-[20px] py-[22px] px-[28px] bg-white rounded-[8px] shadow-sm border border-gray-100/50 hover:shadow-md transition-all group cursor-pointer no-underline h-full"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.1em] text-primary">{news.type}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-[9px] font-medium text-text-tertiary">{news.date}</span>
                      </div>
                      <h4 className="text-[19px] font-sans font-medium normal-case tracking-normal leading-[1.25] text-text-primary mb-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h4>
                      <p className="text-[14px] text-gray-500 leading-relaxed">
                        {news.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <ArrowRight className="text-text-primary group-hover:text-primary group-hover:translate-x-2 transition-all" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-[8px] text-[#0D1B2A] h-full border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-[22px] font-sans font-medium tracking-tight text-text-primary">Upcoming events</h3>
                  <button className="p-1.5 bg-[#EEEEEE] rounded-lg hover:bg-gray-200 transition-colors text-[#0D1B2A]">
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="flex-1 space-y-10 overflow-hidden">
                  <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.1em] text-text-tertiary">THIS WEEK</div>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start pb-5 border-b border-gray-100">
                        <div className="w-[54px] h-[54px] bg-[#F9F1EF] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-[#E8621A] uppercase">APR</span>
                          <span className="text-[18px] font-black text-[#E8621A] leading-none">17</span>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-text-primary mb-1">KIUG 2025 registration opens</h4>
                          <p className="text-[12px] text-text-tertiary">Online · 10:00 AM IST</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start pb-5 border-b border-gray-100">
                        <div className="w-[54px] h-[54px] bg-[#F9F1EF] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-[#E8621A] uppercase">APR</span>
                          <span className="text-[18px] font-black text-[#E8621A] leading-none">22</span>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-text-primary mb-1">KI Talent Hunt Camp</h4>
                          <p className="text-[12px] text-text-tertiary">Ranchi, Jharkhand · 3 days</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-[54px] h-[54px] bg-[#F9F1EF] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-[#E8621A] uppercase">APR</span>
                          <span className="text-[18px] font-black text-[#E8621A] leading-none">28</span>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-text-primary mb-1">State swimming trials</h4>
                          <p className="text-[12px] text-text-tertiary">Bhopal, MP · Final state selection</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.1em] text-text-tertiary">NEXT MONTH</div>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start pb-5 border-b border-gray-100">
                        <div className="w-[54px] h-[54px] bg-[#F5F6F3] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-text-primary uppercase opacity-40">MAY</span>
                          <span className="text-[18px] font-black text-text-primary leading-none">01</span>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-text-primary mb-1">Infrastructure scheme deadline</h4>
                          <p className="text-[12px] text-text-tertiary">Final day to submit proposals</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start pb-5 border-b border-gray-100">
                        <div className="w-[54px] h-[54px] bg-[#F5F6F3] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-text-primary uppercase opacity-40">MAY</span>
                          <span className="text-[18px] font-black text-text-primary leading-none">15</span>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-text-primary mb-1">National Selection Camp</h4>
                          <p className="text-[12px] text-text-tertiary">Bengaluru, Karnataka · 5 days</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-[54px] h-[54px] bg-[#F5F6F3] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-text-primary uppercase opacity-40">MAY</span>
                          <span className="text-[18px] font-black text-text-primary leading-none">20</span>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-text-primary mb-1">National coach workshop</h4>
                          <p className="text-[12px] text-text-tertiary">High-performance training</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-auto py-3.5 border border-gray-100 rounded-[10px] font-black uppercase text-[12px] tracking-[0.05em] text-[#E8621A] bg-white hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group shadow-sm">
                  VIEW FULL CALENDAR <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KHELO INDIA AT A GLANCE */}
      <section className="py-24 bg-white border-t border-[#D8DDE6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-black text-[#0D2040] mb-6 uppercase">
              KHELO INDIA AT a <span className="text-[#E8621A]">GLANCE</span>
            </h2>
            <p className="text-[20px] text-[#5A6A80] max-w-[750px] mx-auto leading-[1.65]">
              Khelo India is transforming India into a global sporting powerhouse by identifying talent at the grassroots level and nurturing them through structured training.
            </p>
            <div className="mt-10">
              <button className="inline-flex items-center gap-2 bg-[#E8621A] text-white px-8 py-4 rounded-[8px] text-[12px] font-black uppercase tracking-[1px] hover:bg-[#D85A30] transition-all shadow-md active:scale-95 group">
                Know more about Khelo India <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Journey Timeline Wrapper */}
          <div className="py-[32px] px-[20px]">
            <div 
              className="bg-[#f4f9ff] rounded-[12px] pt-[80px] pb-[44px] px-[36px] relative max-w-6xl mx-auto overflow-hidden"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              
              {/* Connecting Rail - Horizontal (Desktop/Tablet) */}
              <div 
                className="absolute top-[93px] left-[10%] right-[10%] h-[2px] rounded-[1px] hidden sm:block z-0" 
                style={{ 
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 78%, #D85A30 100%)' 
                }}
              />

              {/* Connecting Rail - Vertical (Mobile) */}
              <div 
                className="absolute left-[45px] top-[93px] bottom-[60px] w-[2px] rounded-[1px] block sm:hidden z-0"
                style={{ 
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 78%, #D85A30 100%)' 
                }}
              />
              
              <div className="flex flex-col sm:grid sm:grid-cols-5 gap-12 sm:gap-[8px] relative z-10">
                {[
                  { year: "2017", title: "The foundation", desc: "Policy framework laid" },
                  { year: "2018", title: "The inception", desc: "Program launched" },
                  { year: "2019", title: "Scaling up", desc: "University games begin" },
                  { year: "2021–24", title: "Khelo India 2.0", desc: "Scheme restructured" },
                  { year: "2025 · NOW", title: "Khelo Bharat Niti", desc: "New national sports policy", active: true },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-row sm:flex-col items-center sm:items-center gap-6 sm:gap-0 sm:text-center group cursor-default"
                  >
                    {/* Dot container */}
                    <div className={cn(
                      "relative flex items-center justify-center flex-shrink-0",
                      item.active ? "w-[36px] h-[36px]" : "w-[26px] h-[26px]"
                    )}>
                      {item.active ? (
                        <div 
                          className="w-[36px] h-[36px] bg-[#D85A30] rounded-full flex items-center justify-center z-10 sm:mt-[-5px]"
                          style={{ 
                            boxShadow: '0 0 0 6px rgba(216,90,48,0.15), 0 4px 14px rgba(216,90,48,0.3)' 
                          }}
                        >
                          <div className="w-[12px] h-[12px] bg-white rounded-full" />
                        </div>
                      ) : (
                        <div className="w-[26px] h-[26px] bg-[#f4f9ff] border-2 border-black/25 rounded-full flex items-center justify-center z-10">
                          <div className="w-[10px] h-[10px] bg-black/35 rounded-full" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content container */}
                    <div className="flex flex-col items-start sm:items-center">
                      {/* Year Label */}
                      <div className={cn(
                        "text-[13px] font-medium sm:mt-[14px]",
                        item.active ? "text-[#D85A30] tracking-[0.03em]" : "text-[#5A6A80]"
                      )}>
                        {item.active ? (
                           <span className="uppercase">2025 · NOW</span>
                        ) : item.year}
                      </div>

                      {/* Title */}
                      <h3 className={cn(
                        "font-bold mt-1 sm:mt-[6px] leading-tight text-[#0D2040] tracking-[-0.01em]",
                        item.active ? "text-[17px]" : "text-[16px]",
                        "sm:whitespace-nowrap"
                      )}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[12px] leading-[1.4] mt-1 sm:mt-[6px] sm:max-w-[140px] text-[#5A6A80]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center max-w-7xl mx-auto gap-y-12 gap-x-8 pt-16">
            {[
              { label: "ATHLETES SUPPORTED", value: "10,000+" },
              { label: "ACCREDITED ACADEMIES", value: "1,000+" },
              { label: "SPORTS DISCIPLINES", value: "25+" },
              { label: "COMPETITIONS CONDUCTED", value: "500+" },
              { label: "STATES & UTS COVERED", value: "36" },
              { label: "INVESTMENT IN SPORTS", value: "₹1000+ Cr" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-[#00203F] font-display font-black leading-tight mb-2 whitespace-nowrap" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>{stat.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A8A9A] max-w-[140px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="inline-flex items-center gap-2 bg-[#E8621A] text-white px-8 py-4 rounded-[8px] text-[12px] font-black uppercase tracking-[1px] hover:bg-[#D85A30] transition-all shadow-md active:scale-95 group">
              View Full Dashboard <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. JOIN KHELO INDIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-black text-[#0D2040] mb-6 uppercase">
              JOIN <span className="text-[#E8621A]">KHELO INDIA</span>
            </h2>
            <p className="text-[20px] text-[#5A6A80] max-w-[750px] mx-auto leading-[1.65]">
              Be a part of the movement that is redefining sports in India. Whether you play, coach, support, or innovate—there’s a place for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {[
              { title: "Athletes", desc: "Begin your journey and unlock opportunities to train, compete, and excel.", icon: Dumbbell },
              { title: "Coaches", desc: "Mentor the next generation of champions with structured programs.", icon: Users },
              { title: "Sports Scientists", desc: "Drive performance excellence through research, analytics, and innovation.", icon: Microscope },
              { title: "Volunteers", desc: "Contribute to impactful initiatives and gain hands-on experience.", icon: HandHelping },
              { title: "Schools", desc: "Build strong grassroots programs and nurture young talent.", icon: School },
              { title: "Academics", desc: "Collaborate in advancing sports education and research.", icon: GraduationCap },
              { title: "Sponsors", desc: "Partner with us to support and elevate India’s sporting future.", icon: Briefcase },
              { title: "Not Sure Yet", desc: "Answer 3 questions we'll point you to the right role.", icon: Zap, highlight: true, cta: "Find My Fit" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "p-[26px] rounded-[8px] border border-[#D8DDE6] transition-all cursor-pointer flex flex-col h-full",
                  item.highlight ? "bg-[#E8621A] border-[#E8621A] text-white" : "bg-white"
                )}
              >
                <item.icon className={cn("mb-6", item.highlight ? "text-white" : "text-[#E8621A]")} size={22} />
                <h3 className={cn("text-[16px] font-black uppercase tracking-[1px] mb-4", item.highlight ? "text-white" : "text-[#0D2040]")}>{item.title}</h3>
                <p className={cn("text-[13px] leading-[1.55] mb-8", item.highlight ? "text-[#FCDCBE]" : "text-[#5A6A80]")}>
                  {item.desc}
                </p>
                <div className={cn(
                  "mt-auto flex items-center gap-2 font-black uppercase text-[10px] tracking-[1.3px]",
                  item.highlight ? "text-white" : "text-[#0D2040]"
                )}>
                  {item.cta || "Get Started"} <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASMITA INITIATIVE SPOTLIGHT */}
      <section className="relative bg-[#0a1628] overflow-hidden min-h-[420px] sm:min-h-[480px]">
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://cdn.prod.website-files.com/66d9a59c1af0e287b1d13090/680a849da488ae83ee8dabe2_Breaking%20Barriers_%20How%20Sports%20Empower%20Women%20and%20Girls%20in%20India-min.png" 
            alt="Indian woman athlete in high-performance action" 
            className="w-full h-full object-cover object-[75%_center] grayscale sm:grayscale-0 brightness-[0.4] sm:brightness-75 lg:brightness-100"
            referrerPolicy="no-referrer"
          />
          {/* Responsive Gradient Overlays */}
          <div className="absolute inset-0 hidden sm:block" 
               style={{ background: 'linear-gradient(90deg, rgba(10,22,40,0.95) 40%, rgba(10,22,40,0) 100%)' }} />
          <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-[#0a1628]/60 to-[#0a1628]" />
        </div>

        <div className="container mx-auto px-[32px] sm:px-[42px] relative z-20 flex flex-col justify-center py-24 min-h-[420px] sm:min-h-[480px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-full sm:max-w-[58%]"
          >
            {/* TIER 5 (quietest) — EYEBROW LABEL */}
            <div className="text-[#D85A30] text-[11px] font-medium uppercase tracking-[0.15em] mb-[16px]">
              WOMEN IN SPORTS
            </div>

            {/* TIER 1 (LOUDEST) — WORDMARK */}
            <h2 className="text-[36px] sm:text-[52px] font-medium text-white leading-none tracking-[-0.02em] mb-[24px]">
              ASMITA<span className="text-[#D85A30]">.</span>
            </h2>

            {/* TIER 2 (second-loudest) — PULL-QUOTE */}
            <div className="text-white text-[17px] sm:text-[20px] font-medium leading-[1.3] tracking-[-0.005em] max-w-[440px] mb-[14px]">
              This is where India's next champions rise.
            </div>

            {/* TIER 4 (quiet) — SUPPORT TEXT */}
            <p className="text-white/60 text-[12px] font-normal leading-[1.6] max-w-[440px] mb-[28px]">
              Khelo India Women's League is a nationwide movement for women in sports — from first-time players in villages to hidden champions in small towns.
            </p>

            {/* TIER 3 (third-loudest) — METRICS ROW */}
            <div className="flex items-center gap-[36px] mb-[26px]">
              <div className="flex flex-col">
                <div className="text-[32px] font-medium text-white leading-none tabular-nums">34</div>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.12em] mt-[6px]">SPORTS</div>
              </div>
              
              {/* Vertical Divider */}
              <div className="w-[0.5px] h-[42px] bg-white/15" />

              <div className="flex flex-col">
                <div className="text-[32px] font-medium text-white leading-none flex items-baseline tabular-nums">
                  10,000<span className="text-[22px] text-[#D85A30] ml-[2px] font-normal">+</span>
                </div>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.12em] mt-[6px]">WOMEN ON THE PITCH</div>
              </div>
            </div>

            {/* CTA ROW */}
            <div className="flex items-center gap-[10px]">
              <button className="bg-[#D85A30] text-white px-[20px] py-[11px] rounded-[8px] text-[11px] font-medium tracking-[0.05em] hover:bg-[#c24e28] transition-colors flex items-center">
                Meet the athletes →
              </button>
              <button className="bg-transparent text-white/70 border-[0.5px] border-white/25 px-[16px] py-[11px] rounded-[8px] text-[11px] font-medium hover:bg-white/5 transition-colors">
                Explore the league
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. #IMPACT STORIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-[44px] font-black leading-tight max-w-4xl mx-auto uppercase text-[#0D2040] mb-6">
              CHAMPIONS BORN FROM <br /> <span className="text-[#E8621A]">EVERY CORNER</span> OF INDIA
            </h2>
            <p className="text-[20px] text-[#5A6A80] max-w-[750px] mx-auto leading-[1.65]">
              Behind every medal is a story of sacrifice, resilience, and an unshakeable dream. These are the faces of the Khelo India revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Feature Story */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 relative rounded-[8px] overflow-hidden group min-h-[600px] flex flex-col justify-end p-10"
            >
              <img 
                src="https://pbs.twimg.com/media/HFtPuL5b0AIl3Fv?format=jpg&name=medium" 
                alt="Sunita Munda" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,22,40,0)_0%,rgba(10,22,40,0.4)_55%,rgba(10,22,40,0.88)_100%)]" />
              
              {/* Top Tags */}
              <div className="absolute top-6 left-8 z-10">
                <span className="bg-[#D85A30] text-white px-3 py-1.5 rounded-[4px] text-[10px] font-medium tracking-[0.1em] uppercase flex items-center gap-1.5">
                  ★ STORY OF THE MONTH
                </span>
              </div>
              <div className="absolute top-6 right-8 z-10">
                <span className="bg-white text-[#14253d] px-3 py-1.5 rounded-[4px] text-[10px] font-medium tracking-[0.1em] uppercase flex items-center gap-1.5">
                  ARCHERY · JHARKHAND
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.15] tracking-[-0.01em] text-white mb-4 max-w-[620px]">
                  From the forests of Jharkhand to the national podium
                </h3>
                
                <p className="text-[12px] md:text-[13px] text-white/85 mb-4 max-w-[480px] leading-[1.5]">
                  Growing up in a small village with no sports infrastructure, 16-year-old Sunita Munda had never held a bow until a Khelo India talent scout visited her school.
                </p>
                
                <div className="text-[#F5C4B3] font-medium text-[13px] mb-8 italic">
                  "Khelo India ne mujhe pankh diye."
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-[#14253d] px-[18px] py-[10px] rounded-[8px] font-medium text-[11px] hover:bg-white/90 transition-all flex items-center gap-2">
                    Read Sunita's story →
                  </button>
                  <button className="bg-white/10 text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[11px] border border-white/40 hover:bg-white/20 transition-all flex items-center gap-2">
                    ▶ Watch her journey
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Side Stories Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "Anjali",
                  name: "Anjali Rana, 19",
                  sport: "ICE HOCKEY · PUNJAB",
                  desc: "From a roadside boxing club to the Khelo India Games gold — Anjali's story of discipline and grit.",
                  img: "https://pbs.twimg.com/media/HCJS4ScbYAATgt8?format=jpg&name=large",
                  icon: Target,
                  gender: "HIS"
                },
                {
                  id: "Anjun",
                  name: "Arjun Patil, 22",
                  sport: "SWIMMING · MAHARASHTRA",
                  desc: "A workplace accident at 18 couldn't stop Arjun from reaching the national podium.",
                  img: "https://pbs.twimg.com/media/HEapXDWboAAjkXy?format=jpg&name=large",
                  icon: ShieldCheck,
                  gender: "HER"
                },
                {
                  id: "rohan",
                  name: "Rohan Nair, 15",
                  sport: "BADMINTON · KERALA",
                  desc: "The youngest swimmer to break the state record, now training for the 2028 Olympics.",
                  img: "https://pbs.twimg.com/media/HC5RkpcbYAArqih?format=jpg&name=large",
                  icon: Trophy,
                  gender: "HIS"
                },
                {
                  id: "thangjam",
                  name: "Thangjam Devi, 20",
                  sport: "WEIGHTLIFTING · MANIPUR",
                  desc: "Carrying the legacy of Manipur's weightlifting excellence to the international stage.",
                  img: "https://pbs.twimg.com/media/HC5k87caIAAud7M?format=jpg&name=large",
                  icon: Trophy,
                  gender: "HER"
                }
              ].map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[8px] overflow-hidden group border border-gray-100 hover:border-[#E8621A]/30 transition-all flex flex-col shadow-sm"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={story.img} 
                      alt={story.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-[#5A6A80] text-[10px] font-black uppercase tracking-[0.1em] mb-3">
                      {story.sport}
                    </div>
                    <h4 className="text-[18px] font-display font-black mb-3 tracking-tight transition-colors text-[#0D2040]">
                      {story.name}
                    </h4>
                    <p className="text-[14px] text-[#5A6A80] leading-relaxed mb-6">
                      {story.desc}
                    </p>
                    <button className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#E8621A] hover:opacity-80 transition-colors group/btn">
                      READ {story.gender} STORY <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8.5. SOCIAL FEEDS & LIVE HAPPENINGS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-[44px] font-black leading-tight max-w-4xl mx-auto uppercase text-[#0D2040] mb-6">
              LIVE FROM <span className="text-[#E8621A]">THE FIELD</span>
            </h2>
            <p className="text-[20px] text-[#5A6A80] max-w-[750px] mx-auto leading-[1.65]">
              Follow the movement in real time. Stories from the ground, victories on the mat, breakthroughs on the track — happening every day across India.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              {
                platform: "Instagram",
                image: "https://pbs.twimg.com/media/HBqq-oraMAAMArf?format=jpg&name=large",
                caption: "🏅 Congratulations to Priya Singh on winning Gold at the Khelo India School Games 2025! #KheloIndia #Athletics",
                tall: true
              },
              {
                platform: "Facebook",
                image: "https://pbs.twimg.com/media/HBbYeSkbYAAoM1e?format=jpg&name=large",
                caption: "💪 Day 3 of #KISG2025 — Wrestling has begun at Siri Fort Sports Complex! Who's your favourite? 🤼",
                tall: false
              },
              {
                platform: "X (Twitter)",
                image: "https://pbs.twimg.com/media/HBqq-n6bgAczVL7?format=jpg&name=large",
                caption: "🎯 Shooting stars at Karni Singh Ranges — watch these young champions in action! #ShootingIndia",
                tall: false
              },
              {
                platform: "YouTube",
                image: "https://pbs.twimg.com/media/HBQXvNbbQAAtgVj?format=jpg&name=large",
                caption: "📺 Highlights: The opening ceremony of Khelo India University Games was a spectacle of culture and sport!",
                tall: true
              },
              {
                platform: "Instagram",
                image: "https://pbs.twimg.com/media/G_5pVLtbgAArXq3?format=jpg&name=medium",
                caption: "🏃‍♂️ The spirit of competition is alive! Grassroots athletes showing incredible determination today.",
                tall: false
              },
              {
                platform: "X (Twitter)",
                image: "https://pbs.twimg.com/media/G_js7LHbUAApSEI?format=jpg&name=medium",
                caption: "⚡ Record alert! New national junior record in 100m sprint set today at the athletics meet. #Speed",
                tall: true
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative"
              >
                <div className={cn(
                  "relative overflow-hidden",
                  post.tall ? "aspect-[3/4]" : "aspect-video"
                )}>
                  <img 
                    src={post.image} 
                    alt="Social Feed" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg text-[#0D1B2A]">
                    {post.platform === "Instagram" && <Instagram size={16} />}
                    {post.platform === "Facebook" && <Facebook size={16} />}
                    {post.platform === "X (Twitter)" && <Twitter size={16} />}
                    {post.platform === "YouTube" && <Youtube size={16} />}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#333333] leading-relaxed mb-4 line-clamp-2 font-medium">
                    {post.caption}
                  </p>
                  <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#E2631A] hover:opacity-80 transition-colors">
                    View Post <ExternalLink size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. THE ROAD AHEAD - COUNTDOWN SECTION */}
      <section className="py-24 bg-[#F9FAFB] border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-[40px]">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-black leading-tight uppercase mb-6">
              <span className="text-[#0D2040]">THE ROAD</span> <span className="text-[#D85A30]">AHEAD</span>
            </h2>
            <p className="text-[20px] text-[#5A6A80] max-w-[750px] mx-auto leading-[1.65]">
              India's next chapter starts here, and continues through the world's biggest stages.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Primary Card */}
            <div className="mb-4">
              <EventCountdown 
                type="primary"
                eyebrow="UP NEXT · KHELO INDIA"
                label="KHELO INDIA YOUTH GAMES 2026"
                venue="Ranchi · 3 Jun 2026"
                targetDate={new Date("2026-06-03T00:00:00")}
              />
            </div>

            {/* Secondary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventCountdown 
                label="ASIAN GAMES"
                venue="Nagoya · 2026"
                targetDate={new Date("2026-09-19T00:00:00")}
              />
              <EventCountdown 
                label="SUMMER OLYMPICS"
                venue="Los Angeles · 2028"
                targetDate={new Date("2028-07-14T00:00:00")}
              />
              <EventCountdown 
                label="COMMONWEALTH GAMES"
                venue="Glasgow · 2030"
                targetDate={new Date("2030-07-23T00:00:00")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER TICKERS (MOVED FROM HERO) */}
      <div className="bg-[#0a1628] border-t border-white/5 py-4 overflow-hidden relative z-20">
        <motion.div 
          animate={{ x: [0, -1400] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[
            "🏃 Athletics", "🥊 Boxing", "🏸 Badminton", "🤼 Wrestling",
            "🎯 Shooting", "🏊 Swimming", "🏋️ Weightlifting", "🏹 Archery",
            "⚽ Football", "🏏 Cricket", "🤸 Gymnastics", "🚴 Cycling"
          ].map((sport, i) => {
            const [emoji, ...nameParts] = sport.split(' ');
            const name = nameParts.join(' ');
            return (
              <div key={i} className="flex items-center group cursor-default">
                <span className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">{emoji}</span>
                <span className="ml-3 text-white font-display font-bold uppercase text-[10px] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                  {name}
                </span>
                <span className="mx-12 h-4 w-[1px] bg-white/20" />
              </div>
            );
          })}
          {/* Duplicated for seamless loop */}
          {[
            "🏃 Athletics", "🥊 Boxing", "🏸 Badminton", "🤼 Wrestling",
            "🎯 Shooting", "🏊 Swimming", "🏋️ Weightlifting", "🏹 Archery",
            "⚽ Football", "🏏 Cricket", "🤸 Gymnastics", "🚴 Cycling"
          ].map((sport, i) => {
            const [emoji, ...nameParts] = sport.split(' ');
            const name = nameParts.join(' ');
            return (
              <div key={i} className="flex items-center group cursor-default">
                <span className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">{emoji}</span>
                <span className="ml-3 text-white font-display font-bold uppercase text-[10px] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                  {name}
                </span>
                <span className="mx-12 h-4 w-[1px] bg-white/20" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
