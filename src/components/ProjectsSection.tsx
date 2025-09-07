import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import ezlogicproject from "@/assets/ezlogicproject.png";
import esparktalent from "@/assets/esparktalent.png";
import realestateProject from "@/assets/RB.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ezlogic MIOS Smart Home Platform",
      description:
        "A next-generation smart home automation platform enabling users to build, customize, and control their smart homes effortlessly. The platform focuses on seamless device integration, intuitive user experience, and scalable architecture.",
      image: ezlogicproject,
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
      ],
      features: [
        "Developed and enhanced core front-end modules for smart home automation",
        "Integrated complex device management and policy-based automation",
        "Improved performance and user experience across multiple devices",
        "Contributed to scalable architecture supporting thousands of users",
        "Led feature implementations and collaborated with cross-functional teams",
      ],
      liveUrl: "https://ezlogic.mios.com",
      githubUrl: null, 
      duration: "3+ years (Ongoing Product)",
      teamSize: "7–8 developers",
      role: "Senior Front-End Developer",
    },

    {
      title: "Technical Recruiting & HR Outsourcing Website",
      description:
        "A professional company site designed to help employers overcome talent shortages by connecting them with top-tier technical talent. The platform also streamlines HR outsourcing processes for efficient recruitment and talent acquisition.",
      image: esparktalent, // replace with actual logo variable
      technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      features: [
        "Showcased company services and talent acquisition solutions",
        "Dynamic content management for HR outsourcing and recruiting services",
        "Responsive design optimized for desktop and mobile",
        "Clear call-to-action to attract employers and candidates",
        "Optimized for SEO and lead generation",
      ],
      liveUrl: "https://www.esparktalent.com/", // replace with real link
      // githubUrl: "https://github.com/muzamil-ali/company-site",
      duration: "2 month",
      teamSize: "2 developers",
      role: "Front-End Developer & Lead Implementer",
    },
    {
      title: "Realbuyers",
      description:
        "A modern real estate platform connecting buyers, sellers, and agents. Features advanced property search, virtual tours, and lead management system for real estate professionals.",
      image: realestateProject,
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "AWS S3",
        "Google Maps API",
        "Material-UI",
      ],
      features: [
        "Advanced property search with filters",
        "Interactive maps integration",
        "Virtual property tours",
        "Lead management for agents",
        "Property comparison tools",
      ],
      liveUrl: "https://dev-realbuyerz.esparkconsultants.com/",
      // githubUrl: "https://github.com/muzamil-ali/real-estate-portal",
      duration: "4 months",
      teamSize: "5 developers",
      role: "Frontend Team Lead",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in
              full-stack development and team leadership across diverse
              industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg border border-border">
                    <img
                      src={project.image}
                      alt={`${project.title} - Screenshot`}
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {/* <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="bg-background/95 hover:bg-background text-foreground border border-border"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button> */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                          className="bg-background/95 hover:bg-background text-foreground border-border"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {project.teamSize}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Code className="w-4 h-4" />
                        {project.role}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm lg:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs lg:text-sm font-medium border border-primary/20 transition-colors hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full">
                    <Button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="w-full sm:w-auto px-4 py-3" // <-- full width on mobile, auto on larger screens
                      size="lg"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />{" "}
                      {/* slightly bigger icon */}
                      View Project
                    </Button>

                    {/* Uncomment if you need second button */}
                    {/* <Button
                     variant="outline"
                     onClick={() => window.open(project.githubUrl, "_blank")}
                     className="w-full sm:w-auto px-4 py-3"
                     size="lg"
                       >
                         <Github className="w-5 h-5 mr-2" />
                         Source Code
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="mt-16 text-center">
            <div className="portfolio-card inline-block animate-scale-in max-w-md mx-auto">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Want to See More?
              </h4>
              <p className="text-muted-foreground mb-4">
                These are just a few highlights. Check out my GitHub for more
                projects and contributions.
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/muzamil11411", "_blank")
                }
                className="w-full sm:w-auto"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
