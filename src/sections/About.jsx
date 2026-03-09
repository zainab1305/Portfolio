import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

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
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering scalable solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}
                with precision and purpose.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I am a 6th semester B.Tech Computer Science and Design student focused on full-stack web development with the MERN stack. My work centers on scalable, performance-oriented applications built with strong structure and maintainable code.
                </p>
                <p>
                  I started with frontend development and expanded into backend engineering to deliver complete products. I have built full-stack applications, analytics dashboards, and interactive visualization tools using React, Node.js, Express.js, MongoDB, Chart.js, Three.js, Tailwind CSS, HTML, and CSS.
                </p>
                <p>
                  Alongside development, I lead technical communities through IEEE, currently serving as Secretary of IEEE GCET Student Branch and Chairperson of IEEE Computer Society GCET Student Branch. Across these roles, I have organized 10+ technical events including coding workshops, expert talks, and hackathons.
                </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build technology solutions that combine clean system design, scalable engineering, and practical real-world impact."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;