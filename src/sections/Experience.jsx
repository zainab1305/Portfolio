const experiences = [
  {
    period: "2025 — 2026",
    role: "Vice Chair Person",
    company: "IEEE Computer Society GCET Student Branch",
    description:
      "Organized weekly coding workshops and technical sessions on web development, DSA, and emerging technologies. Led team in conducting inter-college hackathons and coordinated speaker sessions with industry experts to bridge academic learning with industry practices.",
    technologies: ["Workshop Planning", "Peer Mentoring", "Event Coordination", "Technical Presentations"],
    current: false,
  },
  {
    period: "5/2025 — 6/2025",
    role: "Web Development Intern",
    company: "Zidio Development",
    description:
      "Developed responsive web applications and landing pages for clients. Collaborated with design team to implement user interfaces, integrated APIs, and optimized website performance for better user experience.",
    technologies: ["MERN Stack", "Chart.js", "Three.js", "Tailwind Css"],
    current: false,
  },
  {
    period: "2026 — 2027",
    role: "Chair Person",
    company: "IEEE Computer Society GCET Student Branch",
    description:
      "Leading a team of 15+ student volunteers to organize technical events, coding bootcamps, and project showcases. Initiated peer-to-peer learning programs and collaborative coding projects, while managing chapter activities and fostering a vibrant tech community on campus.",
    technologies: ["Student Leadership", "Team Management", "Event Planning", "Community Engagement"],
    current: true,
  },
  {
    period: "2026 — 2027",
    role: "Secretary",
    company: "IEEE GCET Student Branch",
    description:
      "Maintaining student membership records and coordinating communication between 100+ active members. Managing event registrations, documenting meeting minutes, and creating monthly newsletters to keep students updated on upcoming workshops, competitions, and opportunities.",
    technologies: ["Documentation", "Member Coordination", "Content Writing", "Organization"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious college student to
            web devlopment intern and that later leading and college club.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;