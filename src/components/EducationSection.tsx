import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree:
        "Master of Science in Computer Science & Information Technology (MS CSIT)",
      institution: "NED University of Engineering & Technology",
      location: "Karachi, Pakistan",
      duration: "2025 – 2026",
      status: "In Progress",
      description:
        "Pursuing advanced studies in computer science with a focus on software engineering, data structures, algorithms, and modern web technologies.",
      courses: [
        "Advanced Software Engineering",
        "Data Structures & Algorithms",
        "Database Systems",
        "Natural Language Processing",
        "Advanced Machine Learning",
        "Software Project Management",
      ],
      achievements: [
        "Expected graduation: 2026",
        "Consistently maintaining strong academic performance",
      ],
    },
    {
      degree: "Bachelor of Engineering in Computer Systems",
      institution: "Mehran University of Engineering & Technology",
      location: "Jamshoro, Pakistan",
      duration: "2017 – 2021",
      status: "Graduated",
      description:
        "Completed a comprehensive undergraduate program in computer systems engineering, covering programming, databases, and system design.",
      courses: [
        "Object-Oriented Programming",
        "Web Development",
        "Computer Networks",
        "Database Management Systems",
        "Human-Computer Interaction",
        "Artificial Intelligence",
        "Data Science",
        "Operating Systems",
      ],
      achievements: [
        "Graduated with First Class Honors, CGPA 3.5",
        "Microsoft Learn Student Ambassador",
        "Active member of Software Engineering Society",
      ],
    },
  ];

 const certifications = [
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    date: "2020 – 2021",
    status: "Completed"
  },
  {
    title: "Front-End Web Development",
    issuer: "Aptech Computer Education",
    date: "2021",
    status: "Completed"
  },
  {
    title: "MERN Stack Development (Online Course)",
    issuer: "Online Program",
    date: "2022",
    status: "Completed"
  },
  {
    title: "Microsoft Office Specialist – Word, Excel & PowerPoint",
    issuer: "Microsoft",
    date: "2019",
    status: "Completed"
  }
];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Education & Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and academic excellence form the foundation of
              my technical expertise and professional growth.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md hidden md:block"></div>

                  {/* Education Card */}
                  <div className="md:ml-20 portfolio-card group">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                          <GraduationCap className="w-5 h-5" />
                          {edu.institution}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {edu.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-gray-600 lg:text-right lg:ml-6">
                        <div className="flex items-center gap-1 lg:justify-end">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1 lg:justify-end">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium self-start lg:self-end ${
                            edu.status === "In Progress"
                              ? "bg-warning/10 text-warning"
                              : "bg-success/10 text-success"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Key Courses */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Key Courses:
                        </h4>
                        <ul className="space-y-2">
                          {edu.courses.map((course, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                              <span className="font-medium">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="portfolio-card text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>

                  <div className="flex items-center justify-center gap-2 text-xs">
                    <span className="text-gray-500">{cert.date}</span>
                    <span
                      className={`px-2 py-1 rounded-full font-medium ${
                        cert.status === "Valid"
                          ? "bg-success/10 text-success"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto portfolio-card animate-fade-in">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Lifelong Learning
              </h4>
              <p className="text-gray-600 leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest technologies. Whether through formal education, online
                courses, or hands-on projects, I'm always looking for
                opportunities to grow and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
