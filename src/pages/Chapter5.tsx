import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, ExampleCard } from "@/components/ChapterComponents";

const rules = [
  {
    num: 1,
    title: "The Golden Rule",
    definition: "Puts yourself in the position of others to understand the consequences of your decisions.",
    scenario: "User Privacy",
    example: 'A software engineer is asked to design a "silent" tracking feature. If the engineer wouldn\'t want their own location tracked without consent, they must advocate for user transparency.',
  },
  {
    num: 2,
    title: "Categorical Imperative",
    definition: "An action is ethical only if it can be established as a universal law for everyone in a similar situation.",
    scenario: "Software Piracy",
    example: 'If one developer steals a competitor\'s code, they must ask: "What if every developer stole code?" The industry would collapse as innovation would no longer be protected.',
  },
  {
    num: 3,
    title: "Rule of Change",
    definition: "The Slippery Slope: If an action brings about a small change now but cannot be sustained if repeated indefinitely, it should never be initiated.",
    scenario: "Server Resource Misuse",
    example: 'An IT admin uses company servers to mine crypto "just for an hour." While the cost is small once, if repeated daily or by all employees, it would bankrupt the company\'s cloud budget.',
  },
  {
    num: 4,
    title: "Utilitarian Principle",
    definition: "Prioritizes the outcome that provides the greatest good for the greatest number of people. Focus on quantifiable outcomes, Benefit-to-Harm ratio, Social utility focus.",
    scenario: "Big Data in Healthcare",
    example: "Anonymizing patient data for research. While it carries a tiny privacy risk, the \"greater value\" is a breakthrough in cancer treatment benefiting millions.",
  },
  {
    num: 5,
    title: "Risk Aversion",
    definition: "When faced with multiple options, always choose the path that produces the least potential damage or cost to the stakeholders.",
    scenario: "Security Patching",
    example: "A bank discovers a vulnerability. Patching now causes 2 hours of downtime (costly). Not patching risks a total data breach (catastrophic). Risk aversion dictates patching immediately.",
  },
  {
    num: 6,
    title: "No Free Lunch",
    definition: "Assume that all tangible and intangible objects belong to someone else unless a specific declaration (license) states otherwise.",
    scenario: "GitHub Code Snippets",
    example: "A programmer finds a perfect function on a public repo with no license file. Ethical behavior assumes it is copyrighted; they must contact the owner or find licensed alternatives.",
  },
];

const Chapter5 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={5}
        title="Six Traditional Principles"
        description="Classic ethical frameworks applied to modern computing dilemmas."
      />

      {rules.map((r) => (
        <TopicSection key={r.num} title={`${r.num}. ${r.title}`}>
          <ContentCard>
            <p className="text-muted-foreground leading-relaxed mb-4">{r.definition}</p>
            <ExampleCard title={`Scenario: ${r.scenario}`} description={r.example} />
          </ContentCard>
        </TopicSection>
      ))}
    </CourseLayout>
  );
};

export default Chapter5;
