import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Structured Engineering",
    description:
      "Building modular, scalable architectures with clean component and API design.",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description:
      "Optimizing search flows, API calls, and rendering for faster, smoother applications.",
  },
  {
    icon: Users,
    title: "Execution & Ownership",
    description:
      "Taking features from idea to deployment with clear logic and maintainable code.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Growth",
    description:
      "Constantly strengthening full-stack fundamentals and system-level thinking.",
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
              Shipping scalable products, 
              <span className="font-serif italic font-normal text-white">
                {" "}
                one intentional build at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                    I'm a 6th semester B.Tech Computer Science and Design student focused on building efficient, scalable web applications. I started with frontend development and gradually moved into full-stack engineering, ensuring I understand both the user interface and the system behind it.
                </p>
                <p>
                    I primarily work with React, JavaScript, and the MERN stack, building structured applications with optimized APIs, clean component architecture, and data-driven features. I focus on performance, clarity, and maintainable code.
                </p>
                <p>
                    Beyond development, I serve as Chair of the IEEE Computer Society GCET SB and Secretary of IEEE GCET SB, leading technical initiatives and collaborating with teams to execute impactful projects.
                </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to build structured, performance-driven systems that not only deliver a smooth user experience but are also architected for clarity, scalability, and long-term maintainability."
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