import { CourseLayout } from "@/components/CourseLayout";
import { chapters } from "@/components/ChapterSidebar";
import { Link } from "react-router-dom";
import { BookOpen, Users, Shield, Scale, Eye, MessageSquare, Lightbulb, AlertTriangle, Lock, Globe, Code, Server, Share2 } from "lucide-react";

const chapterIcons = [BookOpen, Users, Shield, AlertTriangle, Scale, Eye, Lock, Lightbulb, Code, Server, Share2, Globe, MessageSquare];

const Index = () => {
  return (
    <CourseLayout>
      <div className="relative overflow-hidden rounded-2xl hero-gradient p-8 lg:p-14 mb-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
            CSE 4215
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ethics in Information Technology
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            A comprehensive course exploring professional ethics, legal issues, and social responsibility in the world of computer science and information technology.
          </p>
        </div>
      </div>

      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Course Chapters</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((ch, i) => {
          const Icon = chapterIcons[i];
          return (
            <Link
              key={ch.id}
              to={ch.path}
              className="bg-card rounded-xl border border-border p-5 card-hover group block"
            >
              <div className="flex items-start gap-3">
                <span className="chapter-number flex-shrink-0">{ch.id}</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {ch.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Icon className="w-3 h-3" />
                    <span>Click to explore</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </CourseLayout>
  );
};

export default Index;
