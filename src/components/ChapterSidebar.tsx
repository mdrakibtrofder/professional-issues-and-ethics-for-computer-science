import { NavLink, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const chapters = [
  { id: 1, title: "Introduction to Professional Ethics", path: "/chapter/1" },
  { id: 2, title: "Philosophy, Ethics & Applied Ethics", path: "/chapter/2" },
  { id: 3, title: "Code of Ethics & Rights", path: "/chapter/3" },
  { id: 4, title: "Common Computer Ethics Fallacies", path: "/chapter/4" },
  { id: 5, title: "Six Traditional Principles", path: "/chapter/5" },
  { id: 6, title: "Whistleblowing Guidance", path: "/chapter/6" },
  { id: 7, title: "Intellectual Property", path: "/chapter/7" },
  { id: 8, title: "IP Strategy & Practice", path: "/chapter/8" },
  { id: 9, title: "Software Development", path: "/chapter/9" },
  { id: 10, title: "Scalable Software Development", path: "/chapter/10" },
  { id: 11, title: "Social Networking", path: "/chapter/11" },
  { id: 12, title: "Privacy", path: "/chapter/12" },
  { id: 13, title: "Freedom of Speech", path: "/chapter/13" },
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
