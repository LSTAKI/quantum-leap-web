import { Button } from "@/components/ui/button";
import { Home, Calendar, BookOpen, FileText, Users, Mail, Award, Mic, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

export const TopNav = () => {
  const navItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: BookOpen },
    { label: "Events", href: "#events", icon: Calendar },
    { label: "Team", href: "#committees", icon: Users },
    { label: "Resources", href: "#resources", icon: BookOpen },
    { label: "Blog", href: "#blog", icon: FileText },
    { label: "Achievers", href: "#achievers", icon: Award },
    { label: "Podcast", href: "#podcast", icon: Mic },
    { label: "Partners", href: "#partners", icon: Handshake },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const googleFormLink = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"; // Replace with actual form link

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 m-4 bg-background/80 backdrop-blur-lg border border-border/40 rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(item.href)}
            className="text-sm hover:text-primary hover:bg-primary/10"
          >
            <item.icon className="h-4 w-4 mr-1" />
            {item.label}
          </Button>
        ))}
        <Button
          size="sm"
          className="ml-2"
          asChild
        >
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer">Join</a>
        </Button>
      </div>
    </nav>
  );
};
