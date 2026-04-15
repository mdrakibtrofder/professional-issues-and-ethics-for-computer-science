import { ReactNode, useState } from "react";
import { ChapterSidebar } from "./ChapterSidebar";
import { Menu, X, BookOpen } from "lucide-react";

interface CourseLayoutProps {
  children: ReactNode;
}

export function CourseLayout({ children }: CourseLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 lg:z-auto h-screen w-72 bg-card border-r border-border flex-shrink-0 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-foreground">CSE 4215</h2>
              <p className="text-xs text-muted-foreground">Ethics in IT</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-muted"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        <ChapterSidebar onNavigate={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="font-heading font-bold text-lg text-foreground truncate">
              Professional Issues & Ethics in Computer Science
            </h1>
          </div>
        </header>
        <main className="p-4 lg:p-8 max-w-5xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
