import { Users, Code, Target, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Leadership",
      description:
        "Leading front-end teams and architecting scalable MERN stack applications",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description:
        "4+ years of experience in collaborative development and mentoring",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "User-Centric Focus",
      description:
        "Building applications that prioritize user experience and accessibility",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Ready",
      description:
        "Experienced in remote work and distributed team collaboration",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-muted/30 dark:bg-background"
    >
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate developer and team lead with a proven track record of
              delivering scalable, user-centric web solutions. I blend technical
              expertise with leadership to build products that not only work
              seamlessly but also delight users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Description */}
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Building the Future, One Line at a Time
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With 4+ years of hands-on experience in web development,
                    I’ve grown from a frontend enthusiast into a leader who
                    thrives on solving complex problems and guiding
                    high-performing teams.
                  </p>
                  <p>
                    My career began with crafting elegant, responsive
                    interfaces. Today, I lead frontend teams, architect modern
                    React and Next.js applications, and actively contribute to
                    full-stack development using the MERN stack.
                  </p>
                  <p>
                    I value clean code, agile collaboration, and continuous
                    learning. Whether working remotely or onsite, I aim to build
                    products that improve people’s lives.
                  </p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card dark:bg-card rounded-lg shadow-sm border border-border/20">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-card dark:bg-card rounded-lg shadow-sm border border-border/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="portfolio-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto portfolio-card animate-scale-in">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Beyond Code
              </h4>
           <p className="text-muted-foreground leading-relaxed">
  Outside of work, I enjoy learning new technologies, building personal side projects, and spending time with my family. I speak English and Urdu and like connecting with developers around the world.
</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
