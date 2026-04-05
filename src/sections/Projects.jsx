import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  {
    title: "Datalytics",
    description:
      "Developed a full-stack data visualization web app during an internship, focused on parsing Excel files and generating insightful 2D and 3D graphs. Implemented user authentication, admin dashboard, file history, and AI-generated data summaries. Used Chart.js and Three.js for interactive visualizations and ensured a responsive UI with Tailwind CSS.",
    image: "/1.png",
    tags: ["MERN Stack", "Chart.js", "Three.js", "Tailwind Css"],
    link: "https://github.com/zainab1305/Datalytics",
    github: "https://github.com/zainab1305/Datalytics",
  },
  {
    title: "Smart Infrastructure and Decision Planning System",
    description:
      "A full-stack urban infrastructure management platform(still building) enabling issue reporting, image-based priority scoring, role-based dashboards, and task scheduling with real-time status tracking.",
    image: "/3.png",
    tags: ["React.js", "Node.js", "MongoDB Atlas", "FastAPI", "OpenCV", "JWT"],
    link: "#",
    github: "#",
  },
  {
    title: "Stock Search and Analysis",
    description:
      "Developed an MVP stock search and analysis platform using BM25-based relevance ranking to enable intent-aware stock discovery beyond static filters. Integrated real-time market data via yfinance and delivered key price and volume insights through interactive visualizations. Built with a scalable architecture and developed collaboratively as a paired project.",
    image: "/2.png",
    tags: ["Flask", "Python", "React", "BM25"],
    link: "https://stock-engine.vercel.app/home",
    github: "https://github.com/IhitJoshi/Search_Engine",
  },
  {
    title: "Meal Planner & Pantry Management System",
    description:
      "Built a pantry-based meal planning system that tracks household inventory, suggests recipes based on available ingredients, identifies missing items, and maintains a shopping list using Django ORM and responsive UI components.",
    image: "/4.png",
    tags: ["Django", "Python", "Bootstrap", "JavaScript"],
    link: "https://github.com/zainab1305/Meal-Planner",
    github: "https://github.com/zainab1305/Meal-Planner",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-32" />

      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}make an impact.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted-foreground">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 120}
              direction={idx % 2 === 0 ? "up" : "scale"}
            >
              <div className="group glass rounded-2xl overflow-hidden magnetic-card h-full">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                   to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default Projects;