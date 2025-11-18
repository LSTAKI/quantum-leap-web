import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin, Twitter, Github, Mail, Calendar, MapPin, ChevronDown, MessageCircle, MessageSquare, Code, GraduationCap, Lightbulb, FileText, BookOpen } from "lucide-react";
import { useState } from "react";
import quantumHero from "@/assets/quantum-hero.png";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const universityLeadership = [
    { name: "Dr. [Vice Chancellor Name]", title: "Vice Chancellor, VTU", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Prof. [Registrar Name]", title: "Registrar, VTU", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Prof. [Registrar Evaluation Name]", title: "Registrar (Evaluation), VTU", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop" },
  ];

  const events: any[] = [];

  const committees = [
    { name: "Technical Committee", members: [{ role: "Lead", name: "[Name]", email: "tech@quantumclubvtu.edu" }] },
    { name: "Social Media Committee", members: [{ role: "Lead", name: "[Name]", email: "social@quantumclubvtu.edu" }] },
    { name: "Members Development Committee", members: [{ role: "Lead", name: "[Name]", email: "development@quantumclubvtu.edu" }] },
    { name: "MOC (Anchoring)", members: [{ role: "Lead", name: "[Name]", email: "moc@quantumclubvtu.edu" }] },
    { name: "Web Designing Committee", members: [{ role: "Lead", name: "[Name]", email: "web@quantumclubvtu.edu" }] },
    { name: "Event Coordination Committee", members: [{ role: "Lead", name: "[Name]", email: "events@quantumclubvtu.edu" }] },
    { name: "Treasurer Committee", members: [{ role: "Lead", name: "[Name]", email: "treasurer@quantumclubvtu.edu" }] },
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
    { title: "Quantum Computing Basics", description: "Introductory materials", icon: BookOpen },
    { title: "Qiskit Tutorials", description: "Hands-on coding tutorials", icon: Code },
    { title: "Research Papers", description: "Latest research", icon: GraduationCap },
    { title: "Project Ideas", description: "Project suggestions", icon: Lightbulb },
  ];

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
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-primary">Quantum Club VTU</h1>
            <p className="text-2xl text-foreground">Exploring the future of computation</p>
            <div className="flex gap-4">
              <Button variant="hero" size="lg">Join the Club</Button>
            </div>
          </div>
          <div><img src={quantumHero} alt="Quantum" className="w-full" /></div>
        </div>
      </section>

      <section className="py-8 px-4 bg-[#020617] border-t border-primary/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {socialMedia.map((s, i) => (
            <a key={i} href={s.link} className="flex items-center gap-3 text-muted-foreground hover:text-primary">
              <s.icon className="h-5 w-5" /><span className="text-sm hidden md:inline">{s.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold mb-6">About Quantum Club VTU</h2><p className="text-lg text-muted-foreground">Student-driven quantum computing community at VTU.</p></div>
      </section>

      <section className="py-24 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">University Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">{universityLeadership.map((l, i) => <Card key={i} className="p-6"><img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4" /><h3 className="text-xl font-bold text-center">{l.name}</h3><p className="text-sm text-primary text-center">{l.title}</p></Card>)}</div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Faculty Advisors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">{facultyAdvisors.map((a, i) => <Card key={i} className="p-6"><img src={a.image} alt={a.name} className="w-32 h-32 rounded-full mx-auto mb-4" /><h3 className="text-xl font-bold text-center">{a.name}</h3><p className="text-sm text-primary text-center mb-2">{a.title}</p><p className="text-sm text-muted-foreground text-center">{a.bio}</p></Card>)}</div>
        </div>
      </section>

      <section id="events" className="py-24 px-4 bg-[#0F172A]">
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

      <section id="committees" className="py-24 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Our Committees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{committees.map((c, i) => <Card key={i} className="p-6"><h3 className="text-xl font-bold text-primary text-center mb-4">{c.name}</h3>{c.members.map((m: any, j: number) => <div key={j} className="text-center mb-2"><p className="text-sm font-medium">{m.role}</p><p className="text-sm text-muted-foreground">{m.name}</p><a href={`mailto:${m.email}`} className="text-xs text-primary">Contact</a></div>)}</Card>)}</div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Join Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">{socialCommunity.map((s, i) => <a key={i} href={s.link} target="_blank" rel="noopener"><Card className="p-8 text-center"><div className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4`}><s.icon className="h-8 w-8 text-white" /></div><h3 className="text-xl font-bold mb-2">{s.platform}</h3><p className="text-primary font-medium mb-3">{s.handle}</p><p className="text-sm text-muted-foreground mb-4">{s.description}</p><Button variant="outline" className="w-full">Join Now</Button></Card></a>)}</div>
        </div>
      </section>

      <section id="resources" className="py-24 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Learning Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">{resources.map((r, i) => <Card key={i} className="p-6 text-center"><div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4"><r.icon className="h-7 w-7 text-primary" /></div><h3 className="text-lg font-bold mb-2">{r.title}</h3><p className="text-sm text-muted-foreground">{r.description}</p></Card>)}</div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">{recentBlogPosts.map((p, i) => <Card key={i}><div className="aspect-video overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover" /></div><CardHeader><CardTitle>{p.title}</CardTitle><CardDescription>{p.excerpt}</CardDescription></CardHeader></Card>)}</div>
        </div>
      </section>

      <section id="join" className="py-24 px-4 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center"><h2 className="text-4xl font-bold mb-16">How to Join</h2><Button size="lg" className="bg-primary">Become a Member</Button></div>
      </section>

      <section id="contact" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-4xl mx-auto text-center"><h2 className="text-4xl font-bold mb-12">Get in Touch</h2><Button size="lg"><Mail className="mr-2 h-5 w-5" />Send us a Message</Button></div>
      </section>

      <footer className="py-12 px-4 bg-[#020617] border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground"><p>© 2024 Quantum Club VTU. All rights reserved.</p></div>
      </footer>
    </div>
  );
};

export default Index;
