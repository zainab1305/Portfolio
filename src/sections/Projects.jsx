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
    link: "https://github.com/zainab1305/Smart-Infra",
    github: "https://github.com/zainab1305/Smart-Infra",
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
  {
    title: "Student Mental Health Risk Predictor",
    description:
      "Built an end-to-end AI/ML screening tool that predicts student mental health risk levels (Low, Mild, Moderate) from demographic, academic, and symptom inputs. Trained and compared five classifiers using stratified cross-validation with stability-aware model selection, and deployed an interactive Streamlit interface for real-time predictions with class probability breakdowns.",
    image: "/5.png",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas", "ML"],
    link: "https://github.com/zainab1305/Student-Mental-Health-Prediction-",
    github: "https://github.com/zainab1305/Student-Mental-Health-Prediction-",
  },
];

const getProjectUrl = (project) => {
  if (project.link && project.link !== "#") {
    return project.link;
  }

  if (project.github && project.github !== "#") {
    return project.github;
  }

  return null;
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="page-container relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-14 sm:mb-16">
          <ScrollReveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
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

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            const projectUrl = getProjectUrl(project);

            return (
              <ScrollReveal
                key={idx}
                delay={idx * 120}
                direction={idx % 2 === 0 ? "up" : "scale"}
              >
                <div
                  role={projectUrl ? "link" : undefined}
                  tabIndex={projectUrl ? 0 : -1}
                  onClick={() => {
                    if (projectUrl) {
                      window.open(projectUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  onKeyDown={(event) => {
                    if (!projectUrl) {
                      return;
                    }

                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      window.open(projectUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className={`group glass rounded-2xl overflow-hidden magnetic-card h-full block ${
                    projectUrl ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>

                      {project.github && project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
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
            );
          })}
        </div>

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