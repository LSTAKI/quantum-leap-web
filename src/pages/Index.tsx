import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Instagram, Linkedin, Twitter, Github, Mail, Calendar, MapPin, ChevronDown, MessageCircle, MessageSquare, Code, GraduationCap, Lightbulb, FileText, BookOpen, Award, Mic } from "lucide-react";
import { useState } from "react";
import quantumHero from "@/assets/quantum-hero.png";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import { QuantumBackground } from "@/components/QuantumBackground";
import { TopNav } from "@/components/TopNav";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string; description: string; image: string } | null>(null);

  const universityLeadership = {
    tier1: [
      { 
        name: "Dr. [Vice Chancellor Name]", 
        title: "Vice Chancellor, VTU", 
        image: "/logo.png",
        message: "Welcome to Quantum Club VTU. We are committed to fostering innovation and excellence in quantum computing research and education."
      }
    ],
    tier2: [
      { 
        name: "Prof. [Registrar Name]", 
        title: "Registrar, VTU", 
        image: "/Registrar.png",
        message: "Supporting student initiatives like Quantum Club is essential for preparing our students for the technological challenges of tomorrow."
      },
      { 
        name: "Prof. [Registrar Evaluation Name]", 
        title: "Registrar (Evaluation), VTU", 
        image: "/logo.png",
        message: "The Quantum Club represents the cutting-edge of student-led research and innovation at VTU."
      }
    ],
    tier3: [
      { 
        name: "Dr. [Finance Officer Name]", 
        title: "Finance Officer, VTU", 
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        message: "We are proud to support student clubs that contribute to academic excellence and practical skill development."
      },
      { 
        name: "Prof. [Student Welfare Dean Name]", 
        title: "Dean of Student Welfare, VTU", 
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        message: "Student clubs like Quantum Club are vital in creating a vibrant campus culture focused on learning and collaboration."
      }
    ]
  };

  const events: any[] = [];

  const chairperson = {
    name: "[Chairperson Name]",
    role: "Chairperson",
    description: "Leading the Quantum Club VTU with a vision to make quantum computing accessible to all students. Passionate about quantum algorithms and their real-world applications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  };

  const committees = [
    { 
      name: "Technical Committee", 
      lead: { 
        name: "[Lead Name]", 
        description: "Coordinates technical workshops and hands-on quantum computing sessions. Expert in Qiskit and quantum circuit design.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      }
    },
    { 
      name: "Social Media Committee", 
      lead: { 
        name: "[Lead Name]", 
        description: "Manages all social media platforms and digital presence. Creates engaging content to showcase club activities and quantum concepts.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      }
    },
    { 
      name: "Members Development Committee", 
      lead: { 
        name: "[Lead Name]", 
        description: "Focuses on member growth and skill development. Organizes mentorship programs and learning paths for quantum computing.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop"
      }
    },
    { 
      name: "Web Designing Committee", 
      lead: { 
        name: "[Lead Name]", 
        description: "Develops and maintains the club website and digital platforms. Ensures a seamless online experience for all members.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      }
    },
    { 
      name: "Event Coordination Committee", 
      lead: { 
        name: "[Lead Name]", 
        description: "Plans and executes all club events, workshops, and competitions. Ensures smooth logistics and memorable experiences.",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
      }
    },
    { 
      name: "Treasurer Committee", 
      lead: { 
        name: "[Lead Name]", 
        description: "Manages club finances, budgets, and sponsorships. Ensures transparent financial operations and resource allocation.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
      }
    },
  ];

  const facultyAdvisors = [
    { name: "Dr. [Faculty Name]", title: "Professor, Department of Physics", bio: "Leading researcher in quantum computing.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Prof. [Faculty Name]", title: "Associate Professor, Department of Computer Science", bio: "Specializes in quantum algorithms.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  ];

  const socialCommunity = [
    { platform: "Instagram", handle: "@quantumclubvtu", link: "https://instagram.com/quantumclubvtu", icon: Instagram, description: "Follow us for daily updates", color: "from-pink-500 to-purple-500" },
    { platform: "WhatsApp", handle: "Quantum Club VTU Channel", link: "https://whatsapp.com/channel/quantum-club-vtu", icon: MessageCircle, description: "Join our broadcast channel", color: "from-green-500 to-teal-500" },
    { platform: "Discord", handle: "Quantum Club VTU Server", link: "https://discord.gg/quantum-club-vtu", icon: MessageSquare, description: "Join our community", color: "from-indigo-500 to-blue-500" },
  ];

  const resources = [
    { title: "Quantum Computing Basics", description: "Introductory materials", icon: BookOpen, link: "https://example.com/resources" },
    { title: "Qiskit Tutorials", description: "Hands-on coding tutorials", icon: Code, link: "https://example.com/tutorials" },
    { title: "Research Papers", description: "Latest research", icon: GraduationCap, link: "https://example.com/papers" },
    { title: "Project Ideas", description: "Project suggestions", icon: Lightbulb, link: "https://example.com/projects" },
  ];

  const googleFormLink = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"; // Replace with your actual Google Form link
  const blogLink = "https://example.com/blog"; // Replace with your blog link
  const podcastLink = "https://example.com/podcast"; // Replace with your podcast link
  const nobelPrizeLink = "https://example.com/nobel"; // Replace with your Nobel Prize page link

  const recentBlogPosts = [
    { title: "Getting Started with Quantum Computing", excerpt: "A beginner's guide...", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop", date: "March 1, 2025", author: "Team" },
    { title: "Quantum Algorithms Explained", excerpt: "Deep dive into algorithms...", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", date: "Feb 28, 2025", author: "Team" },
  ];

  const socialMedia = [
    { icon: Instagram, label: "@quantumclubvtu", link: "https://instagram.com/quantumclubvtu" },
    { icon: Linkedin, label: "Quantum Club VTU", link: "https://linkedin.com/company/quantumclubvtu" },
    { icon: Twitter, label: "@quantumclubvtu", link: "https://twitter.com/quantumclubvtu" },
    { icon: Github, label: "quantumclubvtu", link: "https://github.com/quantumclubvtu" },
    { icon: Mail, label: "contact@quantumclubvtu.edu", link: "mailto:contact@quantumclubvtu.edu" },
  ];

  const categories = ["All", "Talks", "Workshops", "Competitions", "Socials"];
  const filteredEvents = selectedCategory === "All" ? events : events.filter((e: any) => e.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <QuantumBackground />
      <TopNav />
      
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617]/90 via-[#0F172A]/90 to-[#020617]/90">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-primary animate-fade-in hover:scale-105 transition-transform duration-500">Quantum Club VTU</h1>
              <p className="text-2xl text-foreground animate-fade-in hover:translate-x-2 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>Exploring the future of computation</p>
            </div>
            <div className="animate-fade-in animate-pulse hover:animate-none" style={{ animationDelay: '0.4s' }}>
              <img src={quantumHero} alt="Quantum Computing Visualization" className="w-full hover:scale-110 hover:rotate-2 transition-all duration-700 animate-fade-in" />
            </div>
        </div>
      </section>


      <section id="about" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in hover:scale-110 transition-transform duration-500">About Quantum Club VTU</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-in hover:translate-x-4 transition-transform duration-700" style={{ animationDelay: '0.2s' }}>
            <p className="leading-relaxed hover:text-foreground transition-colors duration-500">
              Quantum Club VTU is a pioneering student-driven initiative at Visvesvaraya Technological University, dedicated to exploring and advancing the frontiers of quantum computing. We are a vibrant community of curious minds, passionate researchers, and aspiring quantum engineers united by a common vision: to democratize quantum knowledge and inspire the next generation of quantum innovators.
            </p>
            <p className="leading-relaxed hover:text-foreground transition-colors duration-500">
              Founded on the principles of collaborative learning and hands-on experimentation, our club serves as a bridge between theoretical quantum mechanics and practical quantum computing applications. We organize workshops, seminars, hackathons, and research collaborations that empower students to dive deep into quantum algorithms, quantum circuits, and cutting-edge quantum technologies.
            </p>
            <p className="leading-relaxed hover:text-foreground transition-colors duration-500">
              Whether you're a beginner curious about qubits and superposition, or an advanced learner working on quantum error correction and quantum machine learning, Quantum Club VTU provides a nurturing environment to explore, experiment, and excel. Join us as we unlock the mysteries of quantum computation and shape the future of technology together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-110 transition-transform duration-500">University Leadership</h2>
          
          {/* Tier 1 - Vice Chancellor */}
          <div className="flex justify-center mb-6">
            {universityLeadership.tier1.map((l, i) => (
              <Card key={i} className="p-6 max-w-md hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: '0s' }}>
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{l.name}</h3>
                <p className="text-sm text-primary text-center mb-4">{l.title}</p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                  <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{l.message}"</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tier 2 - Registrars */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {universityLeadership.tier2.map((l, i) => (
              <Card key={i} className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{l.name}</h3>
                <p className="text-sm text-primary text-center mb-4">{l.title}</p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                  <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{l.message}"</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tier 3 - Finance Officer and Dean */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {universityLeadership.tier3.map((l, i) => (
              <Card key={i} className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: `${(i + 2) * 0.1}s` }}>
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{l.name}</h3>
                <p className="text-sm text-primary text-center mb-4">{l.title}</p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                  <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{l.message}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Events</h2>
          <div className="flex justify-center gap-3 mb-12">{categories.map(c => <Button key={c} variant={selectedCategory === c ? "default" : "outline"} onClick={() => setSelectedCategory(c)}>{c}</Button>)}</div>
          {filteredEvents.length === 0 && <Card className="p-12"><p className="text-center text-muted-foreground">No events scheduled. Check back soon!</p></Card>}
        </div>
      </section>

      <section className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Quantum Club VTU in Action</h2>
          <div className="grid md:grid-cols-3 gap-6">{[event1, event2, event3].map((img, i) => <div key={i} className="aspect-video rounded-lg overflow-hidden"><img src={img} alt={`Event ${i+1}`} className="w-full h-full object-cover" /></div>)}</div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-110 transition-transform duration-500">Faculty Advisors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyAdvisors.map((a, i) => (
              <Card key={i} className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <img src={a.image} alt={a.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center hover:text-primary transition-colors duration-300">{a.name}</h3>
                <p className="text-sm text-primary text-center mb-2">{a.title}</p>
                <p className="text-sm text-muted-foreground text-center hover:text-foreground transition-colors duration-300">{a.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="committees" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          
          {/* Chairperson */}
          <div className="max-w-md mx-auto mb-16">
            <Card 
              className="p-8 cursor-pointer hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:border-primary animate-fade-in"
              onClick={() => setSelectedMember(chairperson)}
            >
              <img 
                src={chairperson.image} 
                alt={chairperson.name} 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" 
              />
              <h3 className="text-2xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{chairperson.name}</h3>
              <p className="text-md text-primary text-center font-semibold">{chairperson.role}</p>
            </Card>
          </div>

          {/* Committees */}
          <h3 className="text-3xl font-bold text-center mb-12">Committees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((c, i) => (
              <Card 
                key={i} 
                className="p-6 cursor-pointer hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:border-primary animate-fade-in"
                onClick={() => setSelectedMember({ ...c.lead, role: `${c.name} Lead` })}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary text-center mb-6 hover:scale-110 transition-transform duration-300">{c.name}</h3>
                <img 
                  src={c.lead.image} 
                  alt={c.lead.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" 
                />
                <p className="text-lg font-medium text-center hover:text-primary transition-colors duration-300">{c.lead.name}</p>
                <p className="text-sm text-muted-foreground text-center mt-2">Lead</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Details Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4" 
                  />
                  <DialogTitle className="text-2xl text-center">{selectedMember.name}</DialogTitle>
                  <p className="text-primary font-semibold text-center mt-2">{selectedMember.role}</p>
                </div>
              </DialogHeader>
              <DialogDescription className="text-center text-base leading-relaxed">
                {selectedMember.description}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Join Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">{socialCommunity.map((s, i) => <a key={i} href={s.link} target="_blank" rel="noopener"><Card className="p-8 text-center"><div className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4`}><s.icon className="h-8 w-8 text-white" /></div><h3 className="text-xl font-bold mb-2">{s.platform}</h3><p className="text-primary font-medium mb-3">{s.handle}</p><p className="text-sm text-muted-foreground mb-4">{s.description}</p><Button variant="outline" className="w-full">Join Now</Button></Card></a>)}</div>
        </div>
      </section>

      <section id="resources" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Learning Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {resources.map((r, i) => (
              <a key={i} href={r.link} target="_blank" rel="noopener noreferrer">
                <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <r.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4 bg-[#020617]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {recentBlogPosts.map((p, i) => (
              <a key={i} href={blogLink} target="_blank" rel="noopener noreferrer">
                <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <a href={blogLink} target="_blank" rel="noopener noreferrer">View All Posts</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="nobel" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8">Nobel Prize in Quantum Computing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Celebrating groundbreaking achievements in quantum computing and recognizing the pioneers who are shaping the future of technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop" 
                  alt="Nobel Prize" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Recent Nobel Laureates</h3>
              <p className="text-muted-foreground mb-4">
                The Nobel Prize in Physics 2022 was awarded to Alain Aspect, John F. Clauser, and Anton Zeilinger for their groundbreaking experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                  alt="Quantum Computing Research" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Impact on Quantum Computing</h3>
              <p className="text-muted-foreground mb-4">
                Their pioneering work on quantum entanglement has laid the foundation for quantum cryptography, quantum teleportation, and quantum computing, revolutionizing our understanding of quantum mechanics and its practical applications.
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild>
              <a href={nobelPrizeLink} target="_blank" rel="noopener noreferrer">Learn More About Nobel Prize Winners</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="podcast" className="py-24 px-4 bg-[#020617]/90">
        <div className="max-w-7xl mx-auto text-center">
          <Mic className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8">Quantum Club Podcast</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Tune in to our podcast series featuring discussions on quantum computing, interviews with researchers, and insights into the latest developments in the field.
          </p>
          <Card className="p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">Podcast episodes coming soon! Subscribe to stay updated on our latest quantum computing discussions and expert interviews.</p>
            <Button asChild>
              <a href={podcastLink} target="_blank" rel="noopener noreferrer">Listen to Our Podcast</a>
            </Button>
          </Card>
        </div>
      </section>


      <section id="contact" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <Button size="lg" asChild>
            <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-5 w-5" />Send us a Message
            </a>
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#020617] border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground"><p>© 2024 Quantum Club VTU. All rights reserved.</p></div>
      </footer>
    </div>
  );
};

export default Index;
