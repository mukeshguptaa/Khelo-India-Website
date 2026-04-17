import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Trophy, Target, Map, ShieldCheck, History, Search, ChevronRight, Building2, Users, School, HeartPulse, Zap, Calendar, FileText, Bell, Briefcase, Newspaper, BookOpen, Instagram } from "lucide-react";
import { useState } from "react";

const aboutLinks = [
  {
    id: "mission",
    title: "Khelo India Mission 3.0",
    href: "/mission",
    description: "Our visionary focus on transforming India into a global sporting powerhouse.",
    icon: Target,
  },
  {
    id: "journey",
    title: "Khelo India Journey",
    href: "/journey",
    description: "Chronological evolution of the mission since its inception.",
    icon: History,
  },
  {
    id: "state",
    title: "Khelo India In state",
    href: "/state",
    description: "Geographical impact and state-wise sports excellence centers.",
    icon: Map,
  },
];

const dashboardLinks = [
  {
    id: "infrastructure",
    title: "Infrastructure",
    href: "/dashboard/infrastructure",
    description: "Real-time tracking of sports facilities and project progress across India.",
    icon: Building2,
  },
  {
    id: "competitions",
    title: "Competitions",
    href: "/dashboard/competitions",
    description: "Live updates and historical data from Khelo India Games and leagues.",
    icon: Trophy,
  },
  {
    id: "athletes",
    title: "Khelo India Athletes",
    href: "/dashboard/athletes",
    description: "Comprehensive database and performance tracking of identified talent.",
    icon: Zap,
  },
  {
    id: "academies",
    title: "Academies",
    href: "/dashboard/academies",
    description: "Monitoring of excellence centers and accredited academies.",
    icon: School,
  },
  {
    id: "fit-india",
    title: "Fit India",
    href: "/dashboard/fit-india",
    description: "Metrics and participation data from the nationwide fitness movement.",
    icon: HeartPulse,
  },
  {
    id: "inclusiveness",
    title: "Inclusiveness",
    href: "/dashboard/inclusiveness",
    description: "Data on para-sports, women in sports, and rural outreach programs.",
    icon: Users,
  },
];

const discoverLinks = [
  {
    title: "KHELO INDIA SPORTS (ICP-ATHLETES/PARENTS)",
    href: "/discover/sports",
    description: "Portal for athletes and parents to access sports resources.",
    icon: Users,
  },
  {
    title: "KHELO INDIA SPORTS FACILITIES",
    href: "/discover/facilities",
    description: "Find and access world-class sports infrastructure.",
    icon: Building2,
  },
  {
    title: "KHELO INDIA ATHLETE JOURNEY",
    href: "/discover/journey",
    description: "Track the developmental path of identified sporting talent.",
    icon: Map,
  },
  {
    title: "KHELO INDIA GAMES CALENDAR",
    href: "/discover/calendar",
    description: "Stay updated with upcoming national and regional games.",
    icon: Calendar,
  },
  {
    title: "KHELO INDIA RESULTS",
    href: "/discover/results",
    description: "Official results and standings from all Khelo India competitions.",
    icon: Trophy,
  },
  {
    title: "COMPLIANCES FOR ATHLETES",
    href: "/discover/compliances",
    description: "Essential guidelines and regulatory requirements for athletes.",
    icon: ShieldCheck,
  },
];

const documentLinks = [
  {
    title: "REPORTS",
    href: "/documents/reports",
    description: "Annual performance reports and initiative impact studies.",
    icon: FileText,
  },
  {
    title: "CIRCULARS",
    href: "/documents/circulars",
    description: "Official notifications and administrative updates.",
    icon: Bell,
  },
  {
    title: "TENDERS",
    href: "/documents/tenders",
    description: "Procurement opportunities and project bidding information.",
    icon: Briefcase,
  },
  {
    title: "PRESS RELEASES",
    href: "/documents/press-releases",
    description: "Latest official news and media announcements.",
    icon: Newspaper,
  },
  {
    title: "STANDARD OPERATING PROCEDURES",
    href: "/documents/sop",
    description: "Operational guidelines for centers and event management.",
    icon: BookOpen,
  },
];

const mediaLinks = [
  {
    title: "NEWS",
    href: "/media/news",
    description: "Daily updates from the world of Indian sports.",
    icon: Newspaper,
  },
  {
    title: "GALLERY",
    href: "/media/gallery",
    description: "Visual highlights and moments from the field.",
    icon: Instagram,
  },
  {
    title: "ARTICLES",
    href: "/media/articles",
    description: "In-depth features and expert opinions on sports.",
    icon: FileText,
  },
  {
    title: "IMPACT STORIES",
    href: "/media/impact-stories",
    description: "Inspiring tales of transformation through sports.",
    icon: HeartPulse,
  },
];

const missionSubLinks = [
  "Sports Infrastructure for Medal Strategy",
  "Strengthening Strategic Sports Assets",
  "State Action Plan for Sports Infrastructure Development",
  "Sports Competitions & Leagues",
  "Talent Identification and Development",
  "Coach & Support Staff Development",
  "Khelo India Training Facilities",
  "Fit India Movement",
  "Sports Technology",
];

export const Navbar = () => {
  const location = useLocation();
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>("mission");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-navy text-white py-2 border-b border-white/10 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <button className="hover:text-primary transition-colors cursor-pointer">
              Screen Reader Access
            </button>
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <span>Font Size:</span>
              <div className="flex gap-3">
                <button className="hover:text-primary transition-colors">A-</button>
                <button className="text-primary">A</button>
                <button className="hover:text-primary transition-colors">A+</button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="text-primary">EN</button>
              <span className="text-white/20">|</span>
              <button className="hover:text-primary transition-colors">हिंदी</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://www.uxdt.nic.in/wp-content/uploads/2021/12/khelo-india-gif-sai-01.jpg" 
              alt="Khelo India Logo" 
              className="h-[60px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          <NavigationMenu className="hidden lg:block ml-auto">
          <NavigationMenuList className="gap-1 justify-end">
            <NavigationMenuItem>
              <Link to="/" className="px-3 py-2 font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors">
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors bg-transparent border-none">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[800px] bg-white overflow-hidden">
                  {/* Left Column: Primary Nav */}
                  <div className="w-1/2 p-4 border-r border-gray-100">
                    <ul className="space-y-2">
                      {aboutLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                          <li key={link.title} onMouseEnter={() => setActiveSubMenu(link.id)}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 group relative overflow-hidden",
                                  (isActive || activeSubMenu === link.id) && "bg-gray-50"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <link.icon className={cn("w-5 h-5", (isActive || activeSubMenu === link.id) ? "text-primary" : "text-navy")} />
                                    <div className="text-sm font-display font-bold uppercase leading-none">
                                      {link.title}
                                    </div>
                                  </div>
                                  {link.id === "mission" && <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-colors" />}
                                </div>
                                <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground mt-2">
                                  {link.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right Column: Dynamic Sub-Nav */}
                  <div className="w-1/2 bg-gray-50/50 p-6">
                    {activeSubMenu === "mission" && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">Verticals</h4>
                        <ul className="space-y-3">
                          {missionSubLinks.map((subLink, idx) => (
                            <li key={idx}>
                              <button className="text-[11px] font-bold text-navy hover:text-primary transition-colors flex items-center gap-2 group text-left w-full">
                                <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                {subLink}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors bg-transparent border-none">
                Discover
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white">
                  {discoverLinks.map((link) => (
                    <li key={link.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 group relative overflow-hidden"
                        >
                          <div className="flex items-center gap-3">
                            <link.icon className="w-5 h-5 text-navy group-hover:text-primary transition-colors" />
                            <div className="text-sm font-display font-bold uppercase leading-none">
                              {link.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground mt-2">
                            {link.description}
                          </p>
                          <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors bg-transparent border-none">
                Documents
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white">
                  {documentLinks.map((link) => (
                    <li key={link.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 group relative overflow-hidden"
                        >
                          <div className="flex items-center gap-3">
                            <link.icon className="w-5 h-5 text-navy group-hover:text-primary transition-colors" />
                            <div className="text-sm font-display font-bold uppercase leading-none">
                              {link.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground mt-2">
                            {link.description}
                          </p>
                          <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors bg-transparent border-none">
                Media
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white">
                  {mediaLinks.map((link) => (
                    <li key={link.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 group relative overflow-hidden"
                        >
                          <div className="flex items-center gap-3">
                            <link.icon className="w-5 h-5 text-navy group-hover:text-primary transition-colors" />
                            <div className="text-sm font-display font-bold uppercase leading-none">
                              {link.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground mt-2">
                            {link.description}
                          </p>
                          <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors bg-transparent border-none">
                Dashboard
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white">
                  {dashboardLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 group relative overflow-hidden",
                              isActive && "bg-gray-50"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <link.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-navy")} />
                              <div className="text-sm font-display font-bold uppercase leading-none">
                                {link.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground mt-2">
                              {link.description}
                            </p>
                            <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {[
              { name: "FIT India", href: "/fit-india" },
              { name: "Khel Setu", href: "/khel-setu" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link to={item.href} className="px-3 py-2 font-display font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors whitespace-nowrap">
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <button className="p-2 text-navy hover:text-primary transition-colors">
                <Search size={18} />
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="h-1 bg-primary origin-left"
        style={{ scaleX: 0 }} // This will be updated by scroll
        id="scroll-progress"
      />
    </header>
  );
};
