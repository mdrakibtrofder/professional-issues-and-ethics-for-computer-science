import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, ExampleCard } from "@/components/ChapterComponents";

const Chapter8 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={8}
        title="Intellectual Property Strategy and Practice"
        description="Reverse engineering, open source code, and competitive intelligence in professional practice."
      />

      <TopicSection title="Overview">
        <div className="grid md:grid-cols-3 gap-4">
          <ExampleCard title="Reverse Engineering" description="Decoding existing technology to understand functionality, interoperability, and ethical boundaries." />
          <ExampleCard title="Open Source Code" description="Managing the legal and professional responsibilities of using and contributing to shared codebases." />
          <ExampleCard title="Competitive Intelligence" description="Gathering market insights while maintaining professional integrity and legal compliance." />
        </div>
      </TopicSection>

      <TopicSection title="Recap: Intellectual Property">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">Understanding the primary mechanisms of protection is critical for any software professional:</p>
          <KeyPoints items={[
            "Patents: Protects novel inventions/methods (20 years).",
            "Copyrights: Protects original works of authorship (Source Code).",
            "Trade Secrets: Protects confidential business info (e.g., Algorithms).",
            "Trademarks: Protects brand identity and logos.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Reverse Engineering">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Reverse engineering is the process of taking something apart in order to understand it, build a copy of it, or improve it. Reverse engineering of software involves analyzing it to create a new representation of the system in a different form or at a higher level of abstraction. Often, reverse engineering begins by extracting design-stage details from program code. Design-stage details about an information system are more conceptual and less defined than the program code of the same system.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Legitimate purposes:</p>
          <KeyPoints items={[
            "Interoperability with existing products.",
            "Bug fixing and maintenance without source code access.",
            "Learning from legacy systems without documentation.",
            "Compatibility and migration to new platforms or modern technologies.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Open Source Code">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Open source code is any program whose source code is made available for use or modification, as users or other developers see fit. When many programmers can read, redistribute, and modify a program's code, the software improves. Programs with open source code can be adapted to meet new needs, and bugs can be rapidly identified and fixed. Open source code advocates believe that this process produces better software than the traditional closed model. Much of the Internet runs on open source code.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Most Used Open Source Projects:</p>
          <KeyPoints items={[
            "Linux: Core open-source OS kernel used in servers, Android, and cloud systems.",
            "Git: Tracks code changes and helps teams collaborate on software projects.",
            "Mozilla Firefox: Open-source browser focused on privacy, speed, and web standards.",
            "Node.js: Runs JavaScript on servers for building fast backend applications.",
            "TensorFlow: Library for building and training AI and deep learning models.",
            "Visual Studio Code: Lightweight open-source editor with powerful extensions for development.",
            "PostgreSQL: Advanced open-source database used for reliable data storage and queries.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Competitive Intelligence">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Competitive intelligence is legally obtained information that is gathered to help a company gain an advantage over its rivals. For example, some companies have employees who monitor the public announcements of property transfers to detect any plant or store expansions of competitors. An effective competitive intelligence program requires the continual gathering, analysis, and evaluation of data with controlled dissemination of useful information to decision makers.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Core Objectives:</p>
          <KeyPoints items={[
            "Identify Market Gaps: Find areas where competitors are underperforming or ignoring customer needs.",
            "Predict Competitor Moves: Anticipate product launches, pricing shifts, or entry into new geographic markets.",
            "Benchmark Performance: Compare your internal processes and product specs against the best in the industry.",
            "De-risk Strategic Decisions: Ensure that a new multi-million dollar investment isn't rendered obsolete by a rival's upcoming technology.",
          ]} />
        </ContentCard>
      </TopicSection>
    </CourseLayout>
  );
};

export default Chapter8;
