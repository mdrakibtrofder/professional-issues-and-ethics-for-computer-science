import { ReactNode } from "react";

interface ChapterHeroProps {
  chapterNumber: number;
  title: string;
  description: string;
}

export function ChapterHero({ chapterNumber, title, description }: ChapterHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl hero-gradient p-8 lg:p-12 mb-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="relative">
        <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
          Chapter {chapterNumber}
        </span>
        <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">
          {title}
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

interface TopicSectionProps {
  title: string;
  children: ReactNode;
}

export function TopicSection({ title, children }: TopicSectionProps) {
  return (
    <section className="mb-10 animate-fade-in">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-7 rounded-full hero-gradient" />
        {title}
      </h2>
      {children}
    </section>
  );
}

interface ContentCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function ContentCard({ title, children, className = "" }: ContentCardProps) {
  return (
    <div className={`bg-card rounded-xl border border-border p-6 card-hover ${className}`}>
      {title && (
        <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
}

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 card-hover group">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h4 className="font-heading font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

interface KeyPointProps {
  items: string[];
}

export function KeyPoints({ items }: KeyPointProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface QuoteCardProps {
  quote: string;
  label?: string;
}

export function QuoteCard({ quote, label }: QuoteCardProps) {
  return (
    <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-4">
      <p className="text-foreground italic text-lg leading-relaxed">"{quote}"</p>
      {label && <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>}
    </div>
  );
}

interface ExampleCardProps {
  title: string;
  description: string;
}

export function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <div className="bg-accent/10 rounded-xl border border-accent/20 p-5 card-hover">
      <h4 className="font-heading font-semibold text-accent mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
