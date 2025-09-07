import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/muzamil-hero.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full float-animation shadow-lg"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/50 rounded-full float-animation shadow-md"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-white/30 rounded-full float-animation shadow-lg"></div>
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-white/60 rounded-full float-animation"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white/20 rounded-full float-animation shadow-xl"></div>
        </div>
      </div>

      <div className="container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-white animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="block text-white/90">Muzamil Ali</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 font-medium mb-2">
                Front-End Team Lead & Full-Stack MERN Developer
              </p>
              <p className="text-lg text-white/70 max-w-lg">
                Driving innovation and creating impactful web experiences with
                over 4 years of expertise in React, Next.js, and the full MERN
                stack. Passionate about leading teams, mentoring developers, and
                delivering high-performance applications. Open to exciting
                remote opportunities worldwide.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex items-center gap-4 mb-8 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm">Available for remote work</span>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold px-10 py-4 rounded-2xl shadow-xl btn-glow border-0"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-5 h-5 mr-3" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/15 hover:border-white hover:scale-105 font-semibold px-10 py-4 rounded-2xl backdrop-blur-sm shadow-lg transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/muzamil11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 p-3 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muzamil-ali-a243a7151/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 p-3 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-xl opacity-30 animate-glow-pulse"></div>

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Muzamil Ali - Front-End Team Lead & Full-Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Enhanced Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card text-primary px-8 py-4 rounded-2xl shadow-xl font-bold text-lg animate-float">
                <div className="text-gradient">4+ Years Experience</div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <button
            onClick={scrollToAbout}
            className="text-white/80 hover:text-white transition-all duration-300 p-4 backdrop-blur-sm bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110"
          >
            <ArrowDown className="w-6 h-6 animate-bounce-gentle" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
