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
          { question: "The Shatterproof Fallacy is the belief that:", options: ["Computers cannot crash", "Anything done with a computer can do little or no harm", "Software cannot be hacked", "Hardware lasts forever"], correctIndex: 1, explanation: "Shatterproof Fallacy is the belief that actions done via a computer cause minimal real-world harm, ignoring downstream consequences." },
          { question: "The Candy-from-a-Baby Fallacy refers to the idea that:", options: ["Children should not use computers", "Because something is easy to do, it is ethically acceptable", "Sweet things should be regulated", "Easy code is always good code"], correctIndex: 1, explanation: "This fallacy mistakes ease (e.g., copying software, scraping data) for ethical permissibility." },
          { question: "The Hacker's Fallacy holds that:", options: ["All hackers are criminals", "As long as the motive is curiosity or learning, intrusion is harmless", "Hacking is always illegal", "Hackers cannot cause real damage"], correctIndex: 1, explanation: "Hacker's Fallacy excuses unauthorized access by claiming benign intent, ignoring violations of consent, privacy, and trust." },
          { question: "Which fallacy BEST describes: 'I copied the software because the company won't even notice'?", options: ["Computer Game Fallacy", "Law Abiding Citizen Fallacy", "Candy-from-a-Baby Fallacy", "Shatterproof Fallacy"], correctIndex: 2, explanation: "The Candy-from-a-Baby Fallacy treats ease and low risk of detection as moral justification." },
        ]}
        scenarioQuestions={[
          {
            scenario: "A startup founder discovers a competitor's entire website source code is publicly visible due to a misconfigured server. The founder thinks, 'It's publicly accessible, so it's fair game to copy their design and features.' A team member objects, but the founder argues they aren't breaking any laws.",
            question: "Which TWO fallacies is the founder committing?",
            options: ["Computer Game Fallacy and Hacker's Fallacy", "Law Abiding Citizen Fallacy and Free Information Fallacy", "Shatterproof Fallacy and Candy-from-a-Baby Fallacy", "Hacker's Fallacy and Shatterproof Fallacy"],
            correctIndex: 1,
            explanation: "The founder commits the Law Abiding Citizen Fallacy (assuming legality equals morality) and the Free Information Fallacy (assuming publicly visible information is free to use). The code still belongs to someone."
          },
          {
            scenario: "A teenager engages in 'harmless trolling' on social media, posting cruel comments on strangers' profiles. When their parents confront them, they say, 'Relax, it's just the internet — it's not real life.'",
            question: "Which fallacy is the teenager committing?",
            options: ["Hacker's Fallacy", "Computer Game Fallacy — believing online actions don't have real-world consequences", "Free Information Fallacy", "Shatterproof Fallacy"],
            correctIndex: 1,
            explanation: "The Computer Game Fallacy is treating real life as if it were a video game with no consequences. Online harassment causes real psychological harm to real people."
          },
          {
            scenario: "A small bank's CTO refuses to invest in a standard, peer-reviewed encryption library, instead trusting their two senior engineers to write a custom cryptography module because 'our engineers are smarter than typical attackers.'",
            question: "Which fallacy is the CTO committing?",
            options: ["Candy-from-a-Baby Fallacy", "Hacker's Fallacy — assuming security depends on being smarter than the opponent", "Shatterproof Fallacy", "Free Information Fallacy"],
            correctIndex: 1,
            explanation: "The Hacker's Fallacy is the mistaken belief that security comes from being clever rather than from fundamentally sound, peer-reviewed systems. Custom crypto is notoriously prone to subtle, exploitable bugs."
          }
        ]}
        longQuestions={[
          {
            question: "Define and contrast the Computer Game Fallacy and the Law Abiding Citizen Fallacy with real-world examples.",
            answer: "The Computer Game Fallacy is the mistaken belief that real life works like a video game — that actions are predictable, reversible, and consequence-free. Example: a person spreading rumors online thinking 'it's just the internet' while real victims suffer mental-health damage and reputational harm.\n\nThe Law Abiding Citizen Fallacy is the assumption that whatever is not illegal must be ethical. Example: a company harvesting and selling user data because a buried clause in the Terms of Service technically permits it — the act may be legal but is widely considered unethical.\n\nThe two differ in focus: the Computer Game Fallacy denies real consequences, while the Law Abiding Citizen Fallacy denies that ethics extends beyond legality. Both lead to the same outcome — unethical behavior justified by flawed reasoning."
          },
          {
            question: "Explain why the Hacker's Fallacy is dangerous in modern cybersecurity practice.",
            answer: "The Hacker's Fallacy is the belief that security depends on being smarter than the opponent rather than on building a fundamentally sound system. It is dangerous because: (1) attackers operate at scale using automated tools — even a 'clever' custom system is probed by millions of bots; (2) custom solutions bypass decades of peer review built into standard libraries; (3) it creates false confidence, leading teams to skip basic best practices; (4) when the smart engineer leaves, the bespoke system becomes unmaintainable; and (5) modern attacks often exploit simple, well-known weaknesses that 'clever' systems still contain.\n\nGood security comes from defense-in-depth, peer-reviewed cryptography, principle of least privilege, regular updates, and standard frameworks — not from outsmarting attackers."
          },
          {
            question: "Discuss the Free Information Fallacy and its impact on the digital economy and content creators.",
            answer: "The Free Information Fallacy is the assumption that information should always be free, ignoring the cost, effort, and resources required to produce and maintain it. Its impacts include: (1) undervaluation of journalism, research, and creative work, leading to job losses and lower-quality content; (2) widespread piracy of software, music, and videos that starves creators of revenue; (3) misuse of open-source software without contributing back, threatening the sustainability of critical infrastructure; (4) growth of ad-driven business models that erode privacy because 'free' content must be monetized somehow; and (5) misinformation thriving because verified, fact-checked content (which costs money) cannot compete with cheap or free alternatives.\n\nA healthier perspective recognizes that even 'free' information has costs — paid by someone (advertisers, donors, volunteers) — and that supporting creators through subscriptions, licensing, donations, or open-source contributions is part of ethical participation in the digital economy."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter4;
