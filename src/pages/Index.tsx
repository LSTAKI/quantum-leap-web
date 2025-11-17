import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Trophy,
  Users,
  Zap,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import quantumHero from "@/assets/quantum-hero.png";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: "IBM Quantum Challenge Winner",
      description: "First place in the 2024 University Quantum Computing Competition",
      icon: Trophy,
    },
    {
      title: "50+ Active Members",
      description: "Growing community of quantum enthusiasts and researchers",
      icon: Users,
    },
    {
      title: "10+ Guest Lectures",
      description: "Expert talks from industry professionals and academics",
      icon: Zap,
    },
  ];

  const events = [
    {
      name: "Quantum Algorithms Workshop",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      description: "Learn about Grover's and Shor's algorithms with hands-on Qiskit coding",
      location: "Engineering Building, Room 301",
      category: "Workshops",
    },
    {
      name: "Guest Lecture: Quantum Error Correction",
      date: "March 22, 2025",
      time: "5:00 PM - 6:30 PM",
      description: "Dr. Sarah Chen from IBM Research discusses cutting-edge error correction",
      location: "Online (Zoom)",
      category: "Talks",
    },
    {
      name: "Quantum Hackathon 2025",
      date: "April 5-6, 2025",
      time: "All Day",
      description: "24-hour hackathon building quantum applications for real-world problems",
      location: "Computer Science Building",
      category: "Competitions",
    },
    {
      name: "Quantum Game Night",
      date: "March 29, 2025",
      time: "7:00 PM - 9:00 PM",
      description: "Casual meetup with quantum-themed games and networking",
      location: "Student Center, Lounge B",
      category: "Socials",
    },
  ];

  const committees = [
    {
      name: "Core Committee",
      members: [
        { role: "President", name: "Alice Quantum", email: "alice@quantumclub.edu" },
        { role: "Vice President", name: "Bob Qubit", email: "bob@quantumclub.edu" },
        { role: "Treasurer", name: "Charlie Entangle", email: "charlie@quantumclub.edu" },
      ],
    },
    {
      name: "Events Team",
      members: [
        { role: "Events Lead", name: "Diana Superposition", email: "diana@quantumclub.edu" },
        { role: "Workshop Coordinator", name: "Eve Hadamard", email: "eve@quantumclub.edu" },
      ],
    },
    {
      name: "Tech Team",
      members: [
        { role: "Tech Lead", name: "Frank Circuit", email: "frank@quantumclub.edu" },
        { role: "Projects Coordinator", name: "Grace Tensor", email: "grace@quantumclub.edu" },
      ],
    },
    {
      name: "PR & Design",
      members: [
        { role: "PR Lead", name: "Henry Photon", email: "henry@quantumclub.edu" },
        { role: "Design Lead", name: "Iris Wave", email: "iris@quantumclub.edu" },
      ],
    },
  ];

  const advisors = [
    {
      name: "Dr. Maria Rodriguez",
      title: "Professor of Physics",
      bio: "Specialist in quantum information theory and quantum computing architectures with 15+ years of research experience.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    {
      name: "Dr. James Chen",
      title: "Associate Professor of Computer Science",
      bio: "Focus on quantum algorithms, quantum machine learning, and quantum cryptography applications.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
  ];

  const galleryImages = [
    { src: event1, caption: "Quantum Workshop - Fall 2024", date: "Nov 2024" },
    { src: event2, caption: "Guest Lecture Series", date: "Oct 2024" },
    { src: event3, caption: "Quantum Hackathon", date: "Sep 2024" },
  ];

  const joinSteps = [
    {
      step: 1,
      title: "Fill Out Membership Form",
      description: "Complete our online form with your interests and experience level",
    },
    {
      step: 2,
      title: "Join Our Community",
      description: "Get access to our Discord server and WhatsApp group",
    },
    {
      step: 3,
      title: "Attend Intro Meetup",
      description: "Come to our next meetup to meet the team and other members",
    },
    {
      step: 4,
      title: "Choose Your Path",
      description: "Pick a committee or project that matches your interests",
    },
  ];

  const filteredEvents =
    activeFilter === "All" ? events : events.filter((e) => e.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        id="hero"
        className="quantum-bg relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${visibleSections.has("hero") ? "animate-fade-in" : "opacity-0"}`}>
              <h1 className="text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Quantum Club
              </h1>
              
              <p className="text-2xl lg:text-3xl text-text-secondary font-medium">
                Exploring the future of computation, one qubit at a time.
              </p>
              
              <p className="text-lg text-text-muted leading-relaxed max-w-xl">
                A student-run community for learning, discussing, and building projects in quantum
                computing, quantum information, and related technologies.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                  Join the Club
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="hero-ghost" size="lg" className="text-lg px-8 py-6 h-auto">
                  View Events
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={quantumHero}
                alt="Quantum Computing Visualization"
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* Social Media Bar */}
      <section className="bg-background-secondary border-t border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://instagram.com/quantumclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">@quantumclub_university</span>
            </a>
            
            <a
              href="https://linkedin.com/company/quantumclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Quantum Club</span>
            </a>
            
            <a
              href="https://twitter.com/quantumclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
            >
              <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">@quantumclub</span>
            </a>
            
            <a
              href="https://github.com/quantumclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">quantumclub</span>
            </a>
            
            <a
              href="mailto:contact@quantumclub.edu"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">contact@quantumclub.edu</span>
            </a>
          </div>
        </div>
      </section>

      {/* About & Achievements Section */}
      <section id="about" className="quantum-bg py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* About */}
            <div className={`space-y-6 ${visibleSections.has("about") ? "animate-slide-in" : "opacity-0"}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
                About the Quantum Club
              </h2>
              
              <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                <p>
                  We are a passionate community of students dedicated to exploring the fascinating
                  world of quantum computing and quantum information science.
                </p>
                
                <p>
                  Our mission is to provide a collaborative environment where members can learn
                  about quantum algorithms, attend expert talks, work on hands-on projects, and
                  participate in study groups focused on quantum technologies.
                </p>
                
                <p>
                  Whether you're a beginner curious about qubits or an advanced researcher, there's
                  a place for you in our community. Together, we're building the future of
                  computation.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className={`space-y-6 ${visibleSections.has("about") ? "animate-slide-in" : "opacity-0"} delay-100`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
                Our Achievements
              </h2>
              
              <div className="space-y-4">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <Card
                      key={idx}
                      className="glow-border hover-lift bg-card/50 backdrop-blur-sm"
                    >
                      <CardContent className="p-6 flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-text-secondary mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-text-dimmed">{achievement.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="bg-background-tertiary py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-text-muted">
              Join us for workshops, talks, and community gatherings
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Talks", "Workshops", "Competitions", "Socials"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "hero-ghost"}
                onClick={() => setActiveFilter(filter)}
                className="transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event, idx) => (
              <Card
                key={idx}
                className="glow-border hover-lift bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-text-secondary">{event.name}</h3>
                    <Badge variant="outline" className="border-primary text-primary">
                      {event.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-text-dimmed leading-relaxed">{event.description}</p>
                  
                  <Button variant="hero-ghost" size="sm" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="quantum-bg py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Our Committees
            </h2>
            <p className="text-lg text-text-muted">Meet the team making it all happen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, idx) => (
              <Card key={idx} className="glow-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-text-secondary mb-6 pb-4 border-b border-border">
                    {committee.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {committee.members.map((member, mIdx) => (
                      <div key={mIdx} className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-text-secondary">{member.name}</p>
                          <p className="text-sm text-text-dimmed">{member.role}</p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => (window.location.href = `mailto:${member.email}`)}
                          className="hover:text-primary"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-background-tertiary py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Moments from Our Events
            </h2>
            <p className="text-lg text-text-muted">
              A glimpse into our quantum computing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl glow-border hover-lift cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-text-primary font-semibold">{image.caption}</p>
                    <p className="text-sm text-text-muted">{image.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisors Section */}
      <section id="advisors" className="quantum-bg py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Faculty Advisors
            </h2>
            <p className="text-lg text-text-muted">
              Guided by experts in quantum research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, idx) => (
              <Card key={idx} className="glow-border bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="p-8 space-y-4">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20"
                  />
                  
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{advisor.name}</h3>
                    <p className="text-text-dimmed">{advisor.title}</p>
                  </div>
                  
                  <p className="text-text-muted leading-relaxed">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="bg-background-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              How to Join
            </h2>
            <p className="text-lg text-text-muted">
              Start your quantum computing journey with us in 4 easy steps
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            {joinSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Quantum Club</h3>
              <p className="text-text-muted">
                Exploring the future of computation, one qubit at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-secondary mb-3">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Events", "Committees", "Gallery", "Join"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-text-muted hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-secondary mb-3">Connect</h4>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Twitter, Github, Mail].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-text-dimmed pt-8 border-t border-border">
            © {new Date().getFullYear()} Quantum Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
