import { useEffect, useRef, useState } from "react";

// SkillBar component
const SkillBar = ({ skill, categoryIndex, skillIndex }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(barRef.current);

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground font-semibold">
          {skill.level}%
        </span>
      </div>

      <div
        ref={barRef}
        className="skill-bar w-full h-4 sm:h-4 md:h-4 rounded-full overflow-hidden relative mb-3"
      >
        <div
          className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${Math.min(
              1,
              categoryIndex * 0.2 + skillIndex * 0.1
            )}s`,
          }}
        ></div>
      </div>
    </div>
  );
};

// Main SkillsSection
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux/Redux Toolkit", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication & Security", level: 85 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 82 },
        { name: "MySQL", level: 80 },
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud Services", level: 70 },
      ],
    },
    {
      title: "Leadership & Soft Skills",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Code Review & Mentoring", level: 88 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Problem Solving", level: 95 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-background dark:bg-muted/10"
    >
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set built through years of hands-on
              experience and continuous learning in modern web development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary/20">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      categoryIndex={categoryIndex}
                      skillIndex={skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Languages", value: "English, Urdu" },
              { label: "Experience", value: "4+ Years" },
              { label: "Team Size Led", value: "5-8 Developers" },
              { label: "Preferred Stack", value: "MERN" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="text-center portfolio-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-bold text-primary text-lg mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="portfolio-card inline-block animate-fade-in">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Ready to Build Something Amazing?
              </h4>
              <p className="text-muted-foreground mb-4">
                Let's discuss how my skills can help bring your project to life.
              </p>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="interactive-link text-primary font-semibold"
              >
                Get in touch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
