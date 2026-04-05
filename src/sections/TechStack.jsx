import { useState, useEffect, useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";

/* ─── Icon SVGs ─── */
const icons = {
  React: (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 16 16)" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 2L28 9v14l-12 7L4 23V9l12-7z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.2" />
      <text x="16" y="19" textAnchor="middle" fill="#339933" fontSize="9" fontWeight="bold">N</text>
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="4" y="8" width="24" height="16" rx="3" stroke="#ffffff" strokeWidth="1.2" fillOpacity="0" />
      <text x="16" y="20" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Ex</text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 3c0 0-5 4-5 13s5 13 5 13 5-4 5-13S16 3 16 3z" stroke="#47A248" strokeWidth="1.2" fill="#47A248" fillOpacity="0.15" />
      <line x1="16" y1="6" x2="16" y2="26" stroke="#47A248" strokeWidth="1" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#ffffff" strokeWidth="1.2" />
      <path d="M12 11v10l10-10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="3" fill="#F7DF1E" fillOpacity="0.15" stroke="#F7DF1E" strokeWidth="1.2" />
      <text x="16" y="22" textAnchor="middle" fill="#F7DF1E" fontSize="12" fontWeight="bold">JS</text>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="3" fill="#3178C6" fillOpacity="0.15" stroke="#3178C6" strokeWidth="1.2" />
      <text x="16" y="22" textAnchor="middle" fill="#3178C6" fontSize="12" fontWeight="bold">TS</text>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M8 17c2-6 6-8 10-6 2.5 1.3 3.5 4 6 4.7 2 .5 4-.3 5.5-2.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2.5 22.8c2-6 6-8 10-6 2.5 1.3 3.5 4 6 4.7 2 .5 4-.3 5.5-2.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Three.js": (
    <svg viewBox="0 0 32 32" fill="none">
      <polygon points="16,4 28,28 4,28" stroke="#ffffff" strokeWidth="1.2" fill="none" />
      <polygon points="16,10 24,26 8,26" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  ),
  "Chart.js": (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="6" y="16" width="4" height="12" rx="1" fill="#FF6384" fillOpacity="0.7" />
      <rect x="14" y="10" width="4" height="18" rx="1" fill="#36A2EB" fillOpacity="0.7" />
      <rect x="22" y="6" width="4" height="22" rx="1" fill="#FFCE56" fillOpacity="0.7" />
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M6 12h20M6 20h20" stroke="#20B2A6" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="12" r="2" fill="#20B2A6" />
      <circle cx="22" cy="20" r="2" fill="#20B2A6" />
      <path d="M10 14v4l12 2" stroke="#20B2A6" strokeWidth="0.8" opacity="0.5" />
    </svg>
  ),
  JWT: (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#D63AFF" strokeWidth="1.2" fill="#D63AFF" fillOpacity="0.1" />
      <path d="M16 5v22M7 10l18 12M7 22l18-12" stroke="#D63AFF" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="10" rx="10" ry="4" stroke="#4479A1" strokeWidth="1.2" fill="#4479A1" fillOpacity="0.1" />
      <path d="M6 10v12c0 2.2 4.5 4 10 4s10-1.8 10-4V10" stroke="#4479A1" strokeWidth="1.2" />
      <path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="#4479A1" strokeWidth="0.8" opacity="0.5" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="10" rx="10" ry="4" stroke="#336791" strokeWidth="1.2" fill="#336791" fillOpacity="0.15" />
      <path d="M6 10v12c0 2.2 4.5 4 10 4s10-1.8 10-4V10" stroke="#336791" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="3" stroke="#336791" strokeWidth="0.8" fill="none" />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="5" y="4" width="22" height="24" rx="3" stroke="#092E20" strokeWidth="1.2" fill="#092E20" fillOpacity="0.15" />
      <text x="16" y="21" textAnchor="middle" fill="#44B78B" fontSize="10" fontWeight="bold">Dj</text>
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M12 6h8l2 8-6 14-6-14 2-8z" stroke="#ffffff" strokeWidth="1.2" fill="none" />
      <path d="M10 14h12" stroke="#ffffff" strokeWidth="0.8" />
      <circle cx="16" cy="20" r="2" fill="#ffffff" fillOpacity="0.3" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 4c-6 0-6 3-6 3v3h6v1H8s-4 0-4 6 3.5 6 3.5 6H10v-3s0-3.5 3.5-3.5h6S23 16.5 23 14V7s0-3-7-3z" fill="#306998" fillOpacity="0.3" stroke="#306998" strokeWidth="0.8" />
      <path d="M16 28c6 0 6-3 6-3v-3h-6v-1h8s4 0 4-6-3.5-6-3.5-6H22v3s0 3.5-3.5 3.5h-6S9 15.5 9 18v7s0 3 7 3z" fill="#FFD43B" fillOpacity="0.3" stroke="#FFD43B" strokeWidth="0.8" />
      <circle cx="12" cy="8" r="1.2" fill="#306998" />
      <circle cx="20" cy="24" r="1.2" fill="#FFD43B" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M29 15.3L16.7 3a1.5 1.5 0 00-2.1 0l-2.6 2.6 3.3 3.3a1.8 1.8 0 012.3 2.3l3.2 3.2a1.8 1.8 0 11-1 1l-3-3v7.8a1.8 1.8 0 11-1.5 0V12.2a1.8 1.8 0 01-1-2.4l-3.2-3.2-8.5 8.5a1.5 1.5 0 000 2.1L15.3 29a1.5 1.5 0 002.1 0L29 17.4a1.5 1.5 0 000-2.1z" fill="#F05032" fillOpacity="0.2" stroke="#F05032" strokeWidth="0.8" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="4" y="14" width="5" height="4" rx="0.5" stroke="#2496ED" strokeWidth="0.8" />
      <rect x="10" y="14" width="5" height="4" rx="0.5" stroke="#2496ED" strokeWidth="0.8" />
      <rect x="16" y="14" width="5" height="4" rx="0.5" stroke="#2496ED" strokeWidth="0.8" />
      <rect x="10" y="9" width="5" height="4" rx="0.5" stroke="#2496ED" strokeWidth="0.8" />
      <rect x="16" y="9" width="5" height="4" rx="0.5" stroke="#2496ED" strokeWidth="0.8" />
      <rect x="22" y="14" width="5" height="4" rx="0.5" stroke="#2496ED" strokeWidth="0.8" />
      <path d="M2 18c0 0 2 8 14 8s14-5 14-8" stroke="#2496ED" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="8" r="4" stroke="#F24E1E" strokeWidth="1.2" fill="none" />
      <circle cx="20" cy="8" r="4" stroke="#FF7262" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="16" r="4" stroke="#A259FF" strokeWidth="1.2" fill="none" />
      <circle cx="20" cy="16" r="4" stroke="#1ABCFE" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="24" r="4" stroke="#0ACF83" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M24 4L10 16l-6-5v10l6-5 14 12V4z" stroke="#007ACC" strokeWidth="1.2" fill="#007ACC" fillOpacity="0.15" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 32 32" fill="none">
      <polygon points="16,4 28,16 16,28 4,16" stroke="#DC382D" strokeWidth="1.2" fill="#DC382D" fillOpacity="0.15" />
      <polygon points="16,8 24,16 16,24 8,16" stroke="#DC382D" strokeWidth="0.8" fill="none" />
      <circle cx="16" cy="16" r="2" fill="#DC382D" />
    </svg>
  ),
  "Framer Motion": (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M8 4h16v8H16L8 4z" fill="#BB4BCF" fillOpacity="0.3" stroke="#BB4BCF" strokeWidth="1" />
      <path d="M8 12h8l8 8H8V12z" fill="#BB4BCF" fillOpacity="0.2" stroke="#BB4BCF" strokeWidth="1" />
      <path d="M8 20h8l-8 8V20z" fill="#BB4BCF" fillOpacity="0.1" stroke="#BB4BCF" strokeWidth="1" />
    </svg>
  ),
  "Prisma ORM": (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 2L28 26H8L16 2z" stroke="#5A67D8" strokeWidth="1.2" fill="#5A67D8" fillOpacity="0.15" />
      <path d="M16 8v12" stroke="#5A67D8" strokeWidth="1" />
      <path d="M12 20h8" stroke="#5A67D8" strokeWidth="1" />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#FF6C37" strokeWidth="1.2" fill="#FF6C37" fillOpacity="0.1" />
      <path d="M11 16l4 4 6-8" stroke="#FF6C37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "GitHub Actions": (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#2088FF" strokeWidth="1.2" fill="none" />
      <circle cx="16" cy="10" r="2" fill="#2088FF" />
      <circle cx="11" cy="22" r="2" fill="#2088FF" />
      <circle cx="21" cy="22" r="2" fill="#2088FF" />
      <path d="M16 12v4l-4 5M16 16l4 5" stroke="#2088FF" strokeWidth="1" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 32 32" fill="none">
      <polygon points="16,4 28,28 4,28" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  ),
  SQLite: (
    <svg viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="10" rx="9" ry="3.5" stroke="#003B57" strokeWidth="1.2" fill="#003B57" fillOpacity="0.15" />
      <path d="M7 10v10c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V10" stroke="#003B57" strokeWidth="1.2" />
      <text x="16" y="19" textAnchor="middle" fill="#41A4C4" fontSize="6" fontWeight="bold">lite</text>
    </svg>
  ),
  "Responsive Design": (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="3" y="6" width="18" height="14" rx="2" stroke="#20B2A6" strokeWidth="1.2" fill="none" />
      <rect x="23" y="10" width="7" height="12" rx="1.5" stroke="#20B2A6" strokeWidth="1.2" fill="none" />
      <line x1="3" y1="24" x2="21" y2="24" stroke="#20B2A6" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

/* ─── Tech Data ─── */
const techCategories = [
  {
    name: "Frontend",
    color: "#61DAFB",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400/60",
    glowColor: "rgba(97, 218, 251, 0.15)",
    techs: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Three.js", level: 65 },
      { name: "Chart.js", level: 75 },
      { name: "Framer Motion", level: 70 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    name: "Backend",
    color: "#339933",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    hoverBorder: "hover:border-green-400/60",
    glowColor: "rgba(51, 153, 51, 0.15)",
    techs: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Django", level: 72 },
      { name: "Flask", level: 68 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 82 },
      { name: "Prisma ORM", level: 65 },
    ],
  },
  {
    name: "Database",
    color: "#4479A1",
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-400/60",
    glowColor: "rgba(68, 121, 161, 0.15)",
    techs: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 72 },
      { name: "SQLite", level: 70 },
      { name: "Redis", level: 60 },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#F05032",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    hoverBorder: "hover:border-orange-400/60",
    glowColor: "rgba(240, 80, 50, 0.15)",
    techs: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 65 },
      { name: "GitHub Actions", level: 62 },
      { name: "Vercel", level: 80 },
      { name: "Figma", level: 78 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 85 },
    ],
  },
];

/* ─── Animated progress ring ─── */
const ProgressRing = ({ level, color, size = 44, strokeWidth = 3 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setOffset(circumference - (level / 100) * circumference);
          }, 300);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [circumference, level]);

  return (
    <svg ref={ref} width={size} height={size} className="progress-ring -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
      />
    </svg>
  );
};

/* ─── Single Tech Chip ─── */
const TechChip = ({ tech, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="relative flex items-center gap-3 px-3 sm:px-4 py-3 rounded-2xl max-w-full
          border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm
          hover:bg-white/[0.08] hover:border-white/[0.15]
          transition-all duration-500 cursor-default"
        style={{
          boxShadow: isHovered ? `0 0 20px ${color}20, 0 8px 32px rgba(0,0,0,0.3)` : "none",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Icon */}
        <div className="relative w-9 h-9 flex-shrink-0">
          <ProgressRing level={tech.level} color={color} size={36} strokeWidth={2.5} />
          <div className="absolute inset-0 flex items-center justify-center w-[22px] h-[22px] m-auto">
            {icons[tech.name] || (
              <span className="text-xs font-bold" style={{ color }}>
                {tech.name.slice(0, 2)}
              </span>
            )}
          </div>
        </div>

        {/* Name */}
        <span className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors whitespace-normal sm:whitespace-nowrap leading-tight">
          {tech.name}
        </span>

        {/* Level tooltip on hover */}
        <div
          className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1
            rounded-lg text-xs font-semibold pointer-events-none
            transition-all duration-300"
          style={{
            backgroundColor: `${color}20`,
            border: `1px solid ${color}40`,
            color: color,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(6px)",
          }}
        >
          {tech.level}%
          <div
            className="absolute left-1/2 -bottom-1 w-2 h-2 rotate-45 -translate-x-1/2"
            style={{ backgroundColor: `${color}20`, borderRight: `1px solid ${color}40`, borderBottom: `1px solid ${color}40` }}
          />
        </div>
      </div>
    </div>
  );
};

/* ─── Category Card ─── */
const CategoryCard = ({ category, index }) => {
  return (
    <ScrollReveal delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
      <div
        className={`relative p-6 rounded-3xl border ${category.borderColor} ${category.hoverBorder}
          bg-gradient-to-br ${category.gradient} backdrop-blur-sm
          transition-all duration-500 group/card overflow-hidden`}
      >
        {/* Background glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl
            opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
          style={{ backgroundColor: category.glowColor }}
        />

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl">
          <div
            className="absolute top-0 right-0 w-16 h-16 opacity-[0.04]"
            style={{
              background: `radial-gradient(circle at top right, ${category.color}, transparent)`,
            }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{
              backgroundColor: `${category.color}15`,
              color: category.color,
              border: `1px solid ${category.color}30`,
            }}
          >
            {category.name === "Frontend" && "⚡"}
            {category.name === "Backend" && "⚙️"}
            {category.name === "Database" && "🗄️"}
            {category.name === "DevOps & Tools" && "🛠️"}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{category.name}</h3>
            <p className="text-xs text-white/40">{category.techs.length} technologies</p>
          </div>
          {/* Category progress */}
          <div className="ml-auto">
            <div className="text-right">
              <span className="text-xs text-white/40">proficiency</span>
              <div
                className="text-sm font-bold"
                style={{ color: category.color }}
              >
                {Math.round(category.techs.reduce((a, t) => a + t.level, 0) / category.techs.length)}
                <span className="text-xs text-white/30">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech chips grid */}
        <div className="flex flex-wrap gap-2.5 relative z-10">
          {category.techs.map((tech, idx) => (
            <TechChip
              key={tech.name}
              tech={tech}
              color={category.color}
              delay={idx * 50}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

/* ─── Floating particles background ─── */
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ["#61DAFB", "#339933", "#4479A1", "#F05032", "#20B2A6"][Math.floor(Math.random() * 5)],
            opacity: 0.2 + Math.random() * 0.3,
            animation: `tech-float ${10 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

/* ─── Marquee of all tech names ─── */
const MarqueeChip = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 px-4 sm:px-5 py-2.5 mx-1.5 sm:mx-2 rounded-full flex items-center gap-2.5
        transition-all duration-300 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: isHovered ? `1px solid ${tech.color}60` : "1px solid rgba(255,255,255,0.05)",
        backgroundColor: isHovered ? `${tech.color}12` : "rgba(255,255,255,0.02)",
        boxShadow: isHovered
          ? `0 0 20px ${tech.color}25, 0 0 40px ${tech.color}10`
          : "none",
        transform: isHovered ? "scale(1.08)" : "scale(1)",
      }}
    >
      <div
        className="w-5 h-5 transition-transform duration-300 shrink-0"
        style={{ transform: isHovered ? "scale(1.2)" : "scale(1)" }}
      >
        {icons[tech.name]}
      </div>
      <span
        className="text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300"
        style={{ color: isHovered ? tech.color : "rgba(255,255,255,0.4)" }}
      >
        {tech.name}
      </span>
    </div>
  );
};

const TechMarquee = () => {
  const allTechs = techCategories.flatMap((c) => c.techs.map((t) => ({ ...t, color: c.color })));
  const doubled = [...allTechs, ...allTechs];

  return (
    <div
      className="group/marquee relative mt-12 sm:mt-16 overflow-hidden"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="flex animate-tech-marquee group-hover/marquee:[animation-play-state:paused]"
      >
        {doubled.map((tech, idx) => (
          <MarqueeChip key={`${tech.name}-${idx}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const TechStack = () => {
  return (
    <section id="techstack" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <FloatingParticles />

      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <ScrollReveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Tools & Technologies
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              My technology{" "}
              <span className="font-serif italic font-normal text-white">
                arsenal.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted-foreground">
              A curated set of technologies I use daily to build scalable, production-ready
              full-stack applications — from pixel-perfect frontends to robust backend architectures.
            </p>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap justify-center mt-8">
              {[
                { value: "29+", label: "Technologies" },
                { value: "4", label: "Domains" },
                { value: "3+", label: "Years Learning" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, idx) => (
            <CategoryCard key={category.name} category={category} index={idx} />
          ))}
        </div>

        {/* Marquee */}
        <ScrollReveal delay={400}>
          <TechMarquee />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechStack;
