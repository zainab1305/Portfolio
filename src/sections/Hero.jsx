import React from "react";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import Button from "../components/Button";


export const Hero = () => {
    const handleContactClick = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
        <section className="relative min-h-[100svh] flex items-start md:items-center overflow-hidden">
           <div className="absolute inset-0">
            <img src="hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"/>
           <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
           </div>
            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
            {[...Array(30)].map((_, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
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
      <div className="page-container pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-7 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-primary max-w-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                MERN Full-Stack Developer | IEEE Student Leader
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">scalable</span>
                <br />
                digital products with
                <br />
                <span className="font-serif italic font-normal text-white">
                  engineering clarity.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                I'm Zainab Jambughodawala, a 7th semester Computer Science and Design student building scalable MERN applications. I combine clean architecture, efficient APIs, and leadership experience to deliver measurable technical outcomes.
              </p>
            </div>
             {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="xl" type="button" onClick={handleContactClick}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="/Zainab_Resume.pdf" download="Zainab_Resume.pdf" aria-label="Download Zainab Resume">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-400">
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
          <div className="relative animate-fade-in animation-delay-300 mt-4 lg:mt-0">
            {/* Profile Image */}
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:ml-auto">
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
                <div className="absolute -bottom-5 -right-2 sm:-right-4 glass rounded-xl px-3 sm:px-4 py-3 animate-float max-w-[220px]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium leading-snug">
                      Open to internships and collaborations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        </div>
        
        </section>
    )
}
export default Hero