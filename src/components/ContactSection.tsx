import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "muzammilchandio1112@gmail.com",
      href: "mailto:muzammilchandio1112@gmail.com",
      description: "Feel free to drop me a line anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 333 700 1837",
      href: "tel:+923337001837",
      description: "Available for calls (PKT timezone)"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
      description: "Open to remote opportunities globally"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/muzamil11",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/muzamil-ali-a243a7151/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background dark:bg-muted/10">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your project to life? I'm always excited to discuss new opportunities 
              and collaborate on innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Get In Touch
                </h3>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </h4>
                        <a 
                          href={info.href}
                          className="text-primary font-medium interactive-link block mb-1"
                        >
                          {info.value}
                        </a>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="portfolio-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <h4 className="font-semibold text-gray-900">
                      Currently Available
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Open to new opportunities and exciting projects
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-4 h-4" />
                    Response time: Usually within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="animate-slide-in-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Form Note */}
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> I typically respond to all inquiries within 24 hours. 
                    For urgent matters, feel free to reach out directly via phone or LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mt-16 text-center">
            <div className="portfolio-card inline-block animate-scale-in">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Languages
              </h4>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">English</span>
                  <p className="text-xs text-gray-500">Fluent</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🇵🇰</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Urdu</span>
                  <p className="text-xs text-gray-500">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;