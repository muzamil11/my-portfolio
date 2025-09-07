import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/90 dark:bg-background/90 backdrop-blur-md shadow-xl border-b border-border/20' 
        : 'bg-transparent'
    }`}>
      <div className="container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-gradient hover:scale-105' : 'text-white dark:text-white hover:text-white/80 hover:scale-105'
              }`}
            >
              Muzamil Ali
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-semibold transition-all duration-300 relative group px-4 py-2 rounded-xl ${
                  isScrolled 
                    ? 'text-foreground/80 hover:text-primary hover:bg-primary/5 dark:text-foreground/80 dark:hover:text-primary' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-foreground/80 hover:bg-accent/50 dark:text-foreground/80 dark:hover:bg-accent/50' 
                : 'text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-xl border-b border-border/20 animate-fade-in">
            <div className="py-6 space-y-2 px-4">
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-4 text-foreground/80 hover:text-primary hover:bg-primary/5 dark:text-foreground/80 dark:hover:text-primary font-semibold transition-all duration-300 rounded-xl"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
            
        {/* Desktop Theme Toggle */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;