import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
const experiences = [
  {
    company: "eSpark Consulting Group",
    position: "Front-End Team Lead & MERN Developer",
    location: "Karachi, Pakistan",
    duration: "2022 – 2025",
    type: "Full-time",
    responsibilities: [
      "Led a team of front-end developers, mentoring juniors and conducting code reviews.",
      "Managed full-stack projects using the MERN stack with PostgreSQL and MongoDB.",
      "Balanced leadership and hands-on development to deliver scalable web applications.",
      "Facilitated agile practices including sprint planning and standups.",
      "Collaborated with stakeholders to ensure timely project delivery."
    ],
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS", "Redux"],
    achievements: [
      "Successfully led multiple high-impact projects from planning to deployment.",
      "Improved development efficiency through modern workflows and best practices."
    ]
  },
  {
    company: "Ezlo Innovation",
    position: "Front-End Developer (Remote)",
    location: "New Jersey, USA (Remote)",
    duration: "2022 – 2025",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained user-facing features using React.js, Next.js, and TypeScript.",
      "Optimized site performance, improving load times and user experience for thousands of global users.",
      "Collaborated with back-end teams using Node.js and SQL-based databases for seamless integration.",
      "Contributed to design discussions and implemented responsive, accessible interfaces."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "SQL", "Tailwind CSS"],
    achievements: [
      "Enhanced website performance and scalability for a global user base.",
      "Delivered key product updates on schedule in a fully remote, agile environment."
    ]
  },
  {
    company: "Paz Technologies",
    position: "Front-End Developer",
    location: "Karachi, Pakistan",
    duration: "2021 – 2022",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained front-end features using HTML, CSS, JavaScript, and React.js.",
      "Improved website interfaces to enhance user experience and responsiveness.",
      "Worked closely with senior developers to integrate APIs and ensure smooth frontend-backend communication."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"],
    achievements: [
      "Contributed to multiple successful product updates and launches.",
      "Helped improve site performance and user satisfaction."
    ]
  }
];


  return (
    <section id="experience" className="section-padding bg-muted/30 dark:bg-background">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of growth, leadership, and technical excellence across 
              diverse projects and team environments.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md hidden md:block"></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-20 portfolio-card group">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                            <span className="font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "3", label: "Companies" },
              { number: "15+", label: "Projects Delivered" },
              { number: "7-8", label: "Team Members Led" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center portfolio-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;