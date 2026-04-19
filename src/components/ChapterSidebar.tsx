import { NavLink, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  BookOpen,
  Brain,
  ScrollText,
  AlertTriangle,
  Scale,
  Megaphone,
  Copyright,
  Lightbulb,
  Code2,
  Server,
  Share2,
  Lock,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

const chapters: { id: number; title: string; path: string; Icon: LucideIcon }[] = [
  { id: 1, title: "Introduction to Professional Ethics", path: "/introduction-to-professional-ethics", Icon: BookOpen },
  { id: 2, title: "Philosophy, Ethics & Applied Ethics", path: "/philosophy-ethics-and-applied-ethics", Icon: Brain },
  { id: 3, title: "Code of Ethics & Rights", path: "/code-of-ethics-and-rights", Icon: ScrollText },
  { id: 4, title: "Common Computer Ethics Fallacies", path: "/common-computer-ethics-fallacies", Icon: AlertTriangle },
  { id: 5, title: "Six Traditional Principles", path: "/six-traditional-principles", Icon: Scale },
  { id: 6, title: "Whistleblowing Guidance", path: "/whistleblowing-guidance", Icon: Megaphone },
  { id: 7, title: "Intellectual Property", path: "/intellectual-property", Icon: Copyright },
  { id: 8, title: "Intellectual Property Strategy & Practice", path: "/ip-strategy-and-practice", Icon: Lightbulb },
  { id: 9, title: "Software Development", path: "/software-development", Icon: Code2 },
  { id: 10, title: "Scalable Software Development", path: "/scalable-software-development", Icon: Server },
  { id: 11, title: "Social Networking", path: "/social-networking", Icon: Share2 },
  { id: 12, title: "Privacy", path: "/privacy", Icon: Lock },
  { id: 13, title: "Freedom of Speech", path: "/freedom-of-speech", Icon: MessageSquare },
];

interface ChapterSidebarProps {
  onNavigate?: () => void;
}

export function ChapterSidebar({ onNavigate }: ChapterSidebarProps) {
  const location = useLocation();

  return (
    <ScrollArea className="h-[calc(100vh-65px)]">
      <nav className="p-3 space-y-1">
        <NavLink
          to="/"
          onClick={onNavigate}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            location.pathname === "/"
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-muted"
          }`}
        >
          <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <Home className="w-4 h-4" />
          </span>
          <span>Course Overview</span>
        </NavLink>
        {chapters.map((ch) => {
          const isActive = location.pathname === ch.path;
          const Icon = ch.Icon;
          return (
            <NavLink
              key={ch.id}
              to={ch.path}
              onClick={onNavigate}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-sidebar-foreground hover:bg-muted font-medium"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-105"
                }`}
              >
                <Icon className="w-4 h-4" />
              </span>
              <span className="leading-tight">{ch.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </ScrollArea>
  );
}

export { chapters };
