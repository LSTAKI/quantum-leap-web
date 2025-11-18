import { Calendar, Mail, BookOpen, Code, Users, LogIn, Home } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", href: "#hero", icon: Home },
  { title: "Events", href: "#events", icon: Calendar },
  { title: "Resources", href: "#resources", icon: BookOpen },
  { title: "Blog", href: "#blog", icon: Code },
  { title: "Team", href: "#committees", icon: Users },
  { title: "Contact Us", href: "#contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-background border-r border-border/40">
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "hidden" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavClick(item.href)}
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => handleNavClick("#join")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                  tooltip={isCollapsed ? "Join Now" : undefined}
                >
                  <LogIn className="h-4 w-4" />
                  {!isCollapsed && <span>Join Now</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
