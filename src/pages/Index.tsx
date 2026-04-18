import { CourseLayout } from "@/components/CourseLayout";
import { chapters } from "@/components/ChapterSidebar";
import { Link } from "react-router-dom";
import {
  BookOpen, Users, Shield, Scale, Eye, MessageSquare,
  Lightbulb, AlertTriangle, Lock, Globe, Code, Server, Share2,
  GraduationCap, Target, Award, ArrowRight, CheckCircle2, Clock, Layers
} from "lucide-react";

const chapterIcons = [BookOpen, Users, Shield, AlertTriangle, Scale, Eye, Lock, Lightbulb, Code, Server, Share2, Globe, MessageSquare];

const chapterDescriptions = [
  "Explore what makes a profession, why ethics matters in tech, and the foundations of professional responsibility.",
  "Dive into attitudes, behaviors, beliefs, norms, values, ethical decision-making, and corporate culture.",
  "Learn the SE Code of Ethics — Public, Client, Product, Judgement, Management, and more.",
  "Uncover the Computer Game, Law Abiding Citizen, Shatterproof, Candy-from-a-baby, and Hacker's fallacies.",
  "Master the Golden Rule, Kant's Imperative, Descartes' Rule, Utilitarianism, and more.",
  "Understand whistleblowing procedures, employer responsibilities, confidentiality, and codes of practice.",
  "Copyright, patents, trade secrets, trademarks, plagiarism — all the IP essentials.",
  "Reverse engineering, open source code, and competitive intelligence strategies.",
  "Software quality, engineering strategies, development processes, and safety-critical systems.",
  "SCM, DevOps, CI/CD, monolithic vs. microservices, load balancing, and auto scaling.",
  "Social networking sites, business applications, advertising, and cyberbullying awareness.",
  "Information privacy, privacy laws, data breaches, consumer profiling, and surveillance tech.",
  "Free speech principles, defamation, internet censorship, anonymity, and hate speech.",
];

const courseHighlights = [
  { icon: GraduationCap, title: "13 Comprehensive Chapters", desc: "Covering every aspect of ethics in IT" },
  { icon: Target, title: "Real-World Case Studies", desc: "Practical examples from the tech industry" },
  { icon: Award, title: "Professional Standards", desc: "ACM & IEEE-CS codes of ethics" },
  { icon: Layers, title: "Interactive Learning", desc: "Tabs, accordions, and visual content" },
];

const learningOutcomes = [
  "Understand the ethical responsibilities of IT professionals",
  "Apply ethical frameworks to real-world technology dilemmas",
  "Navigate intellectual property laws and best practices",
  "Recognize and avoid common computer ethics fallacies",
  "Evaluate privacy, free speech, and social media ethics",
  "Build software with quality, safety, and scalability in mind",
];

const Index = () => {
  return (
    <CourseLayout>
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl hero-gradient p-8 lg:p-14 mb-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
            CSE 4215 — Spring 2026
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ethics in Information Technology
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mb-6">
            A comprehensive course exploring professional ethics, legal issues, and social responsibility in the world of computer science and information technology.
          </p>
          <Link
            to={chapters[0].path}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-5 py-2.5 rounded-lg font-semibold transition-colors"
          >
            Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {courseHighlights.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-5 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Outcomes */}
      <div className="bg-card rounded-xl border border-border p-6 lg:p-8 mb-12">
        <div className="flex items-center gap-2 mb-5">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="font-heading text-xl font-bold text-foreground">Learning Outcomes</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-5">By the end of this course, you will be able to:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {learningOutcomes.map((outcome, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Grid */}
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <h2 className="font-heading text-2xl font-bold text-foreground">Course Chapters</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {chapters.map((ch, i) => {
          const Icon = chapterIcons[i];
          return (
            <Link
              key={ch.id}
              to={ch.path}
              className="bg-card rounded-xl border border-border p-5 card-hover group block"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="chapter-number flex-shrink-0">{ch.id}</span>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ch.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                {chapterDescriptions[i]}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon className="w-3 h-3" />
                  <span>Chapter {ch.id}</span>
                </div>
                <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Course Info Footer */}
      <div className="bg-secondary rounded-xl p-6 lg:p-8 text-center">
        <h3 className="font-heading font-bold text-foreground text-lg mb-2">Ready to Begin?</h3>
        <p className="text-muted-foreground text-sm mb-4 max-w-lg mx-auto">
          Start with Chapter 1 and work your way through all 13 chapters. Each chapter builds on the previous one, providing a complete understanding of ethics in IT.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-5">
          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> 13 Chapters</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Self-paced</span>
          
        </div>
        <Link
          to={chapters[0].path}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Start Chapter 1 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </CourseLayout>
  );
};

export default Index;
