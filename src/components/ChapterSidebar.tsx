import { NavLink, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const chapters = [
  { id: 1, title: "Introduction to Professional Ethics", path: "/introduction-to-professional-ethics" },
  { id: 2, title: "Philosophy, Ethics & Applied Ethics", path: "/philosophy-ethics-and-applied-ethics" },
  { id: 3, title: "Code of Ethics & Rights", path: "/code-of-ethics-and-rights" },
  { id: 4, title: "Common Computer Ethics Fallacies", path: "/common-computer-ethics-fallacies" },
  { id: 5, title: "Six Traditional Principles", path: "/six-traditional-principles" },
  { id: 6, title: "Whistleblowing Guidance", path: "/whistleblowing-guidance" },
  { id: 7, title: "Intellectual Property", path: "/intellectual-property" },
  { id: 8, title: "Intellectual Property Strategy & Practice", path: "/ip-strategy-and-practice" },
  { id: 9, title: "Software Development", path: "/software-development" },
  { id: 10, title: "Scalable Software Development", path: "/scalable-software-development" },
  { id: 11, title: "Social Networking", path: "/social-networking" },
  { id: 12, title: "Privacy", path: "/privacy" },
  { id: 13, title: "Freedom of Speech", path: "/freedom-of-speech" },
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
          <span className="chapter-number text-xs">🏠</span>
          <span>Course Overview</span>
        </NavLink>
        {chapters.map((ch) => {
          const isActive = location.pathname === ch.path;
          return (
            <NavLink
              key={ch.id}
              to={ch.path}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-sidebar-foreground hover:bg-muted font-medium"
              }`}
            >
              <span className="chapter-number">{ch.id}</span>
              <span className="leading-tight">{ch.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </ScrollArea>
  );
}

export { chapters };
