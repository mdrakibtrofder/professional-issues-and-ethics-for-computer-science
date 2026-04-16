import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, ExampleCard, QuizSection } from "@/components/ChapterComponents";
import { Gamepad2, Gavel, ShieldOff, Candy, Skull, Info } from "lucide-react";

const fallacies = [
  {
    icon: <Gamepad2 className="w-5 h-5 text-primary" />,
    title: "Computer Game Fallacy",
    subtitle: "Life Isn't a Game",
    description: "Thinking real life works like a video game—where actions are predictable, reversible, or have no serious consequences.",
    example: "Virtual environments are extensions of the real world. Online actions have tangible impacts on the mental health, finances, and safety of real individuals and society.",
  },
  {
    icon: <Gavel className="w-5 h-5 text-primary" />,
    title: "Law Abiding Citizen Fallacy",
    subtitle: "Legality is Not Morality",
    description: "This fallacy assumes that as long as an action is not strictly illegal, it is ethically acceptable.",
    example: 'Some companies say "users agreed to the terms" to justify collecting excessive personal data. However, ethical behavior should respect user privacy, not just rely on legal consent.',
  },
  {
    icon: <ShieldOff className="w-5 h-5 text-primary" />,
    title: "Shatterproof Fallacy",
    subtitle: "Nothing is Unbreakable",
    description: "Assuming something is completely unbreakable or secure, ignoring the possibility that it can still fail under certain conditions.",
    example: 'Some gadget makers claim, "This phone is unbreakable," to attract buyers. However, no device is truly indestructible; durability should be tested realistically.',
  },
  {
    icon: <Candy className="w-5 h-5 text-primary" />,
    title: "Candy-from-a-Baby Fallacy",
    subtitle: "Easy Isn't Effortless",
    description: "Thinking a task is extremely easy, often underestimating the effort, skill, or risks involved.",
    example: 'Some managers assume, "This project will be quick and easy," when assigning tasks. However, even simple-seeming work can require effort and careful planning.',
  },
  {
    icon: <Skull className="w-5 h-5 text-primary" />,
    title: "Hacker's Fallacy",
    subtitle: "Skill ≠ Invincibility",
    description: "The mistaken belief that security depends on being smarter than the opponent rather than building a fundamentally sound system.",
    example: 'A team uses a complex, custom-coded login process because they think it\'s too "clever" for hackers to figure out. In reality, they ignored a simple, standard vulnerability that an automated bot exploited in seconds.',
  },
  {
    icon: <Info className="w-5 h-5 text-primary" />,
    title: "Free Information Fallacy",
    subtitle: "Knowledge Isn't Costless",
    description: "Assuming information should always be free, ignoring the cost, effort, and resources required to produce and maintain it.",
    example: 'Some websites claim, "All our content is free," ignoring that producing quality research costs time and money. However, sustainable information often requires support or funding.',
  },
];

const Chapter4 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={4}
        title="Common Computer Ethics Fallacies"
        description="Understanding the dangerous misconceptions that lead to unethical behavior in computing."
      />

      {fallacies.map((f, i) => (
        <TopicSection key={i} title={f.title}>
          <ContentCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">{f.icon}</div>
              <span className="font-heading font-semibold text-foreground">{f.subtitle}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{f.description}</p>
            <ExampleCard title="Example" description={f.example} />
          </ContentCard>
        </TopicSection>
      ))}
      <QuizSection
        questions={[
          { question: "The Computer Game Fallacy assumes that:", options: ["Video games are always harmful", "Real-life actions are reversible like in a game", "Computers are just toys", "Gaming improves ethical reasoning"], correctIndex: 1, explanation: "The Computer Game Fallacy is the mistaken belief that real life works like a video game where actions are predictable, reversible, or have no serious consequences." },
          { question: "The Law Abiding Citizen Fallacy confuses:", options: ["Ethics with morality", "Legality with morality", "Technology with law", "Privacy with security"], correctIndex: 1, explanation: "This fallacy assumes that if an action is not strictly illegal, it is ethically acceptable — confusing legality with morality." },
          { question: "What does the 'No Free Lunch' fallacy address?", options: ["The cost of software licenses", "The assumption that information should always be free", "Restaurant pricing ethics", "Open source software"], correctIndex: 1, explanation: "The Free Information Fallacy assumes information should always be free, ignoring the cost, effort, and resources required to produce and maintain it." },
        ]}
        scenarioQuestion={{
          scenario: "A startup founder discovers a competitor's entire website source code is publicly visible due to a misconfigured server. The founder thinks, 'It's publicly accessible, so it's fair game to copy their design and features.' A team member objects, but the founder argues they aren't breaking any laws.",
          question: "Which TWO fallacies is the founder committing?",
          options: ["Computer Game Fallacy and Hacker's Fallacy", "Law Abiding Citizen Fallacy and Free Information Fallacy", "Shatterproof Fallacy and Candy-from-a-Baby Fallacy", "Hacker's Fallacy and Shatterproof Fallacy"],
          correctIndex: 1,
          explanation: "The founder commits the Law Abiding Citizen Fallacy (assuming legality equals morality) and the Free Information Fallacy (assuming publicly visible information is free to use). The code still belongs to someone."
        }}
      />
    </CourseLayout>
  );
};

export default Chapter4;
