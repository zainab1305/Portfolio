import React from "react";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import Button from "../components/Button";
import resumePdf from "../assets/Resume_Zainab.pdf";
const skills = {
  core: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  frontend: [
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Three.js",
    "Chart.js",
    "Responsive Design",
  ],
  backend: [
    "REST APIs",
    "JWT Authentication",
    "MySQL",
    "SQLite",
    "Django",
    "Flask",
    "Python",
  ],
  tools: [
    "Git",
    "Figma",
    "VS Code",
  ],
};
export const Hero = () => {
    const handleContactClick = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
           <div className="absolute inset-0">
            <img src="hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"/>
           <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
           </div>
            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${
                        15 + Math.random() * 20
                        }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
            }}
            />
            ))}
            </div>
             {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                MERN Full-Stack Developer | IEEE Student Leader
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">scalable</span>
                <br />
                digital products with
                <br />
                <span className="font-serif italic font-normal text-white">
                  engineering clarity.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm Zainab Jambughodawala, a 6th semester Computer Science and Design student building scalable MERN applications. I combine clean architecture, efficient APIs, and leadership experience to deliver measurable technical outcomes.
              </p>
            </div>
             {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="xl" type="button" onClick={handleContactClick}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href={resumePdf} download="Resume_Zainab.pdf" aria-label="Download Zainab Resume">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Let's connect: </span>
              {[
                { icon: Github, href: "https://github.com/zainab1305" },
                { icon: Linkedin, href: "https://linkedin.com/in/zainab-jambughoda-276460280" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="profile.jpg"
                  alt="Zainab Jambughodawala"
                  className="w-full aspect-[4/5] object-cover rounded-2xl brightness-80 contrast-105"
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/35 via-black/15 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to internships and collaborations
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-base text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-primary/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* Skills Section */}
<div className="mt-24 animate-fade-in animation-delay-600">
  <p className="text-base text-muted-foreground mb-12 text-center">
    Technologies I use to build scalable systems
  </p>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {Object.entries(skills).map(([category, items]) => (
      <div
        key={category}
        className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
      >
        <h3 className="text-lg font-semibold mb-6 text-primary capitalize">
          {category}
        </h3>

        <div className="flex flex-wrap gap-3">
          {items.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 text-sm rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
        
        </section>
    )
}
export default Hero