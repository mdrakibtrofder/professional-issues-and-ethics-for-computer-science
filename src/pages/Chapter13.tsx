import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, ExampleCard, QuizSection } from "@/components/ChapterComponents";

const Chapter13 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={13}
        title="Freedom of Speech"
        description="Exploring freedom of speech, defamation, internet censorship, anonymity, and hate speech."
      />

      <TopicSection title="What is Freedom of Speech?">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Freedom of speech is the principle that supports the liberty of an individual or a community to articulate their positions and ideas without fear of retaliation, censorship, or legal sanction. It is recognized as a fundamental human right in international law and is a cornerstone of democratic societies.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Core Principles:</p>
          <KeyPoints items={[
            "Protection of open and diverse viewpoints.",
            "Foundation for democratic participation and debate.",
            "Prevention of government-led censorship or suppression.",
            "Responsibility to balance rights with safety.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Defamation">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Defamation is the act of making a false statement of fact about a person or entity that causes injury to their reputation. Making either an oral or a written statement of alleged fact that is false and that harms another person is defamation.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <ExampleCard title="Slander" description="This is spoken defamation. Since speech is often fleeting, it is usually harder to prove significant long-term damage." />
            <ExampleCard title="Libel" description="This is written or recorded defamation (blogs, social media, news). Because it is permanent and easily shared, courts often view it as more harmful." />
          </div>
          <KeyPoints items={[
            "Restriction of expression when statements are untrue.",
            "Economic harm impacting professional and financial status.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Internet Censorship">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Internet censorship is the control or suppression of the publishing or accessing of information on the Internet. Censorship can take many forms—such as limiting access to certain Web sites, allowing access to only some content or modified content at certain Web sites, rejecting the use of certain keywords in search engine searches, tracking and monitoring the Internet activities of individuals, and harassing or even jailing individuals for their Internet use.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Issues Regarding Internet Censorship:</p>
          <KeyPoints items={[
            "Restriction of access to online information.",
            "Government-led suppression of political dissent.",
            "Filtering of content via national firewalls.",
            "Tension between safety and individual expression.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Anonymity on the Internet">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Anonymous expression is the expression of opinions by people who do not reveal their identity. The freedom to express an opinion without fear of reprisal is an important right of a democratic society. Anonymity is even more important in countries that don't allow free speech. However, in the wrong hands, anonymous communication can be used as a tool to commit illegal or unethical activities.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Debates Over Online Anonymity:</p>
          <KeyPoints items={[
            "Protection of whistleblowers and political activists.",
            "Potential for harassment and cyberbullying behaviors.",
            "Difficulty in verifying identity and accountability.",
            "Shielding of personal privacy and sensitive data.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Hate Speech">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hate speech is defined as public communication (speech, writing, or behavior) that attacks, threatens, or insults a group or an individual based on protected characteristics. While there is no single, globally accepted legal definition, it is generally understood as expression that generates or encourages violence, discrimination, or hostility toward specific demographics.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Common protected categories include:</p>
          <KeyPoints items={[
            "Race and Ethnicity",
            "Religion or Belief",
            "Gender",
            "Disability or Serious Illness",
            "National Origin or Citizenship",
          ]} />
        </ContentCard>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "Freedom of speech is recognized as:", options: ["An absolute right with no limits", "A fundamental human right in international law", "Only applicable in the United States", "A privilege granted by employers"], correctIndex: 1, explanation: "Freedom of speech is recognized as a fundamental human right in international law and is a cornerstone of democratic societies." },
          { question: "What is the difference between slander and libel?", options: ["Slander is written, libel is spoken", "Slander is spoken defamation, libel is written or recorded defamation", "They are the same thing", "Slander is illegal, libel is not"], correctIndex: 1, explanation: "Slander is spoken defamation (fleeting), while libel is written or recorded defamation (permanent and easily shared), which courts often view as more harmful." },
          { question: "Internet censorship can include:", options: ["Only blocking websites", "Limiting access, filtering content, tracking activities, and jailing individuals", "Only government actions", "Only corporate policies"], correctIndex: 1, explanation: "Internet censorship takes many forms including limiting website access, filtering content, monitoring activities, and even jailing individuals for their Internet use." },
        ]}
        scenarioQuestion={{
          scenario: "A social media platform hosts a community where members share health information. A user begins posting anti-vaccination content containing verifiably false medical claims that vaccines cause autism. The posts are gaining thousands of shares. Some users demand the content be removed, while others argue it's protected free speech.",
          question: "What should the platform do?",
          options: ["Remove all the posts immediately — false medical information is dangerous", "Do nothing — all speech must be protected equally", "Add factual context labels and link to verified medical sources while keeping the posts visible", "Ban the user permanently without explanation"],
          correctIndex: 2,
          explanation: "Adding factual context while keeping posts visible balances free speech with public safety. Outright removal may trigger censorship concerns, while doing nothing risks public health harm from misinformation."
        }}
      />
    </CourseLayout>
  );
};

export default Chapter13;
