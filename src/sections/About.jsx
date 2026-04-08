import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Execution",
    description:
      "Building end-to-end MERN applications with clean frontend architecture and reliable backend services.",
  },
  {
    icon: Rocket,
    title: "Scalable Systems",
    description:
      "Designing maintainable systems focused on performance, API efficiency, and long-term extensibility.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "Leading IEEE initiatives, coordinating teams, and executing technical events that create measurable student impact.",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Building",
    description:
      "Developing analytics and visualization workflows that turn complex data into clear, actionable insights.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-32" />

      <div className="page-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <ScrollReveal>
              <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase">
                About Me
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
                Engineering scalable solutions,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  with precision and purpose.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm sm:text-base">
                  I am a 6th semester B.Tech Computer Science and Design student focused on full-stack web development with the MERN stack. My work centers on scalable, performance-oriented applications built with strong structure and maintainable code.
                </p>
                <p className="text-sm sm:text-base">
                  I started with frontend development and expanded into backend engineering to deliver complete products. I have built full-stack applications, analytics dashboards, and interactive visualization tools using React, Node.js, Express.js, MongoDB, Chart.js, Three.js, Tailwind CSS, HTML, and CSS.
                </p>
                <p className="text-sm sm:text-base">
                  Alongside development, I lead technical communities through IEEE, currently serving as Secretary of IEEE GCET Student Branch and Chairperson of IEEE Computer Society GCET Student Branch. Across these roles, I have organized 10+ technical events including coding workshops, expert talks, and hackathons.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass rounded-2xl p-6 glow-border magnetic-card">
                <p className="text-lg font-medium italic text-foreground">
                  "I build technology solutions that combine clean system design, scalable engineering, and practical real-world impact."
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {highlights.map((item, idx) => (
              <ScrollReveal key={idx} delay={(idx + 1) * 120} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className="glass p-6 rounded-2xl magnetic-card h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group">
                    <item.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;