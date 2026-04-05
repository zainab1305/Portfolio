import ScrollReveal from "../components/ScrollReveal";

const experiences = [
  {
    period: "2025 — 2026",
    role: "Vice Chairperson",
    company: "IEEE Computer Society GCET Student Branch",
    description:
      "Co-led technical programming and operations, helping organize workshops, coding activities, and speaker sessions for a growing student community.",
    technologies: ["Program Coordination", "Team Collaboration", "Leadership", "Public Speaking"],
    current: false,
  },
  {
    period: "May 2025 — June 2025",
    role: "Web Development Intern",
    company: "Zidio Development",
    description:
      "Built responsive web interfaces, integrated frontend modules with APIs, and improved UI performance to deliver faster and more consistent user experiences.",
    technologies: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    current: false,
  },
  {
    period: "2026 — 2027",
    role: "Chairperson",
    company: "IEEE Computer Society GCET Student Branch",
    description:
      "Leading chapter strategy, mentoring core teams, and driving high-impact technical initiatives including workshops, hackathons, and expert-led sessions.",
    technologies: ["Strategic Planning", "Team Leadership", "Operations", "Community Building"],
    current: true,
  },
  {
    period: "2026 — 2027",
    role: "Secretary",
    company: "IEEE GCET Student Branch",
    description:
      "Managing branch documentation, official communications, and execution workflows while coordinating teams and stakeholders for smooth event delivery.",
    technologies: ["Documentation", "Communication", "Process Management", "Coordination"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-32" />

      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="page-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span
              className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase"
            >
              Career Journey
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold
           mt-4 mb-6 text-secondary-foreground"
            >
              Experience that{" "}
              <span className="font-serif italic font-normal text-white">
                drives outcomes.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted-foreground">
              A focused journey across hands-on development and technical leadership,
              from internship execution to leading IEEE communities and initiatives.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 150}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8">
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
                      className="glass p-5 sm:p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 magnetic-card"
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold mt-2">{exp.role}</h3>
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
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 border border-transparent transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;