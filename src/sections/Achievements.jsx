import { Award, GraduationCap, Users, Megaphone, Trophy } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const achievements = [
  {
    icon: Award,
    title: "Top 5% - NPTEL Cloud Computing Certification",
    description:
      "Ranked in the top 5% among approximately 30,000 learners with a score of 76%, demonstrating strong understanding of cloud infrastructure, distributed systems, and modern computing platforms.",
    impact: "Top 5% among 30,000 learners",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence - 10 SGPA",
    description:
      "Achieved a perfect 10 SGPA in the first semester of B.Tech Computer Science and Design, reflecting consistent academic rigor and strong computer science fundamentals.",
    impact: "Perfect 10 SGPA",
  },
  {
    icon: Users,
    title: "IEEE Technical Leadership",
    description:
      "Appointed to key IEEE leadership roles, currently serving as Secretary of IEEE GCET Student Branch and Chairperson of IEEE Computer Society GCET Student Branch after serving as Vice Chairperson.",
    impact: "3 strategic leadership roles",
  },
  {
    icon: Megaphone,
    title: "Technical Event Leadership & Community Engagement",
    description:
      "Led and contributed to 10+ technical events including workshops, expert sessions, and student initiatives, collaborating with teams and industry speakers to improve technical engagement on campus.",
    impact: "10+ events executed",
  },
  {
    icon: Trophy,
    title: "Hackathon Participation & Rapid Prototyping",
    description:
      "Participated in multiple hackathons, collaborating in fast-paced teams to design and prototype technology solutions under tight timelines, strengthening problem-solving and execution skills.",
    impact: "Multiple team-based prototypes",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-32" />

      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="page-container relative z-10">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Achievements
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Results that reflect{" "}
              <span className="font-serif italic font-normal text-white">
                focused execution.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted-foreground">
              A snapshot of academic performance, technical leadership, and outcome-driven contributions across development and community initiatives.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {achievements.map((item, idx) => (
            <ScrollReveal key={idx} delay={(idx + 1) * 100} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="glass rounded-2xl p-5 sm:p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 magnetic-card h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group">
                    <item.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 animate-pulse-glow">
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
