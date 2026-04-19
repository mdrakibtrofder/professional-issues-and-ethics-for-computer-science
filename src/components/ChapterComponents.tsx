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

import { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, Brain } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface ScenarioQuestion {
  scenario: string;
  question: string;
  answer: string;
  // Legacy fields (ignored if present)
  options?: string[];
  correctIndex?: number;
  explanation?: string;
}

interface LongQuestion {
  question: string;
  answer: string;
}

interface QuizSectionProps {
  questions: QuizQuestion[];
  scenarioQuestion?: ScenarioQuestion;
  scenarioQuestions?: ScenarioQuestion[];
  longQuestions?: LongQuestion[];
}

export function QuizSection({ questions, scenarioQuestion, scenarioQuestions, longQuestions }: QuizSectionProps) {
  const allScenarios: ScenarioQuestion[] = scenarioQuestions ?? (scenarioQuestion ? [scenarioQuestion] : []);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, number>>({});
  const [scenarioRevealed, setScenarioRevealed] = useState<Record<number, boolean>>({});
  const [openLong, setOpenLong] = useState<Record<number, boolean>>({});

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (revealed[qIdx]) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleReveal = (qIdx: number) => {
    if (answers[qIdx] === undefined) return;
    setRevealed((prev) => ({ ...prev, [qIdx]: true }));
  };

  return (
    <section className="mb-10 animate-fade-in">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-7 rounded-full hero-gradient" />
        <HelpCircle className="w-5 h-5 text-primary" />
        Test Your Knowledge
      </h2>

      <div className="space-y-4 mb-6">
        {questions.map((q, qIdx) => {
          const isRevealed = revealed[qIdx];
          const selected = answers[qIdx];
          return (
            <div key={qIdx} className="bg-card rounded-xl border border-border p-6">
              <p className="font-heading font-semibold text-foreground mb-3">
                {qIdx + 1}. {q.question}
              </p>
              <div className="space-y-2 mb-3">
                {q.options.map((opt, oIdx) => {
                  let cls = "border border-border bg-muted/30 hover:bg-muted/60";
                  if (isRevealed && oIdx === q.correctIndex) cls = "border-green-500 bg-green-50 text-green-800";
                  else if (isRevealed && oIdx === selected && oIdx !== q.correctIndex) cls = "border-red-400 bg-red-50 text-red-700";
                  else if (selected === oIdx && !isRevealed) cls = "border-primary bg-primary/10";
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${cls}`}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {!isRevealed ? (
                <button
                  onClick={() => handleReveal(qIdx)}
                  disabled={selected === undefined}
                  className="text-sm font-medium text-primary hover:underline disabled:opacity-40 disabled:no-underline"
                >
                  Check Answer
                </button>
              ) : (
                <div className="flex items-start gap-2 mt-2">
                  {selected === q.correctIndex ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm text-muted-foreground">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scenario-based questions */}
      {allScenarios.length > 0 && (
        <div className="space-y-4 mb-6">
          {allScenarios.map((sq, sIdx) => {
            const sAnswer = scenarioAnswers[sIdx];
            const sRevealed = scenarioRevealed[sIdx];
            return (
              <div key={sIdx} className="bg-card rounded-xl border-2 border-primary/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="font-heading font-semibold text-foreground">
                    Scenario {allScenarios.length > 1 ? sIdx + 1 : ""}
                  </span>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 mb-4">
                  <p className="text-sm text-foreground leading-relaxed">{sq.scenario}</p>
                </div>
                <p className="font-medium text-foreground mb-3">{sq.question}</p>
                <div className="space-y-2 mb-3">
                  {sq.options.map((opt, oIdx) => {
                    let cls = "border border-border bg-muted/30 hover:bg-muted/60";
                    if (sRevealed && oIdx === sq.correctIndex) cls = "border-green-500 bg-green-50 text-green-800";
                    else if (sRevealed && oIdx === sAnswer && oIdx !== sq.correctIndex) cls = "border-red-400 bg-red-50 text-red-700";
                    else if (sAnswer === oIdx && !sRevealed) cls = "border-primary bg-primary/10";
                    return (
                      <button
                        key={oIdx}
                        onClick={() => !sRevealed && setScenarioAnswers((p) => ({ ...p, [sIdx]: oIdx }))}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${cls}`}
                      >
                        <span className="font-medium mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {!sRevealed ? (
                  <button
                    onClick={() => sAnswer !== undefined && setScenarioRevealed((p) => ({ ...p, [sIdx]: true }))}
                    disabled={sAnswer === undefined}
                    className="text-sm font-medium text-primary hover:underline disabled:opacity-40 disabled:no-underline"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="flex items-start gap-2 mt-2">
                    {sAnswer === sq.correctIndex ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm text-muted-foreground">{sq.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Long-form questions */}
      {longQuestions && longQuestions.length > 0 && (
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full hero-gradient" />
            Long-Form Questions
          </h3>
          <div className="space-y-3">
            {longQuestions.map((lq, lIdx) => {
              const open = openLong[lIdx];
              return (
                <div key={lIdx} className="bg-card rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenLong((p) => ({ ...p, [lIdx]: !p[lIdx] }))}
                    className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 hover:bg-muted/40 transition-colors"
                  >
                    <span className="font-heading font-semibold text-foreground">
                      Q{lIdx + 1}. {lq.question}
                    </span>
                    <span className="text-primary font-medium text-sm flex-shrink-0 mt-0.5">
                      {open ? "Hide" : "Show"} Answer
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 pt-1 border-t border-border bg-muted/20">
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {lq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
