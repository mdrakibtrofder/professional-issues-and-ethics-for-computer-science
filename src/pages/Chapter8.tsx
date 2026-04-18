import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, ExampleCard, QuizSection } from "@/components/ChapterComponents";

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
      <QuizSection
        questions={[
          { question: "What is the primary purpose of reverse engineering in software?", options: ["To steal competitor's code", "To understand, copy, or improve an existing system", "To destroy legacy systems", "To avoid writing documentation"], correctIndex: 1, explanation: "Reverse engineering is the process of taking something apart to understand it, build a copy, or improve it — often for interoperability or maintenance purposes." },
          { question: "What is a key advantage of open source code?", options: ["It is always free of bugs", "Bugs can be rapidly identified and fixed by the community", "It requires no license at all", "It cannot be modified"], correctIndex: 1, explanation: "Open source allows many programmers to read, redistribute, and modify code, leading to rapid bug identification and improvement." },
          { question: "Competitive intelligence is:", options: ["Corporate espionage", "Legally obtained information to help a company gain advantage", "Hacking into competitor systems", "Insider trading"], correctIndex: 1, explanation: "Competitive intelligence involves legally gathering and analyzing publicly available information to gain a business advantage." },
          { question: "Reverse engineering becomes ETHICALLY problematic primarily when:", options: ["It is used for interoperability with legitimate purchases", "It violates licenses, copyrights, or is used to clone protected work", "It is performed in a learning context", "It is documented thoroughly"], correctIndex: 1, explanation: "Lawful reverse engineering for interoperability is widely accepted; cloning, license circumvention, or IP theft is not." },
          { question: "A key DISADVANTAGE of open source for a business can be:", options: ["Inability to read the code", "Support, warranty, and accountability may be limited", "Excessive licensing fees", "It cannot be modified"], correctIndex: 1, explanation: "While open source is free to use, professional support and warranties are not guaranteed and may need to be purchased separately." },
          { question: "Which activity crosses from competitive intelligence into industrial espionage?", options: ["Reading a competitor's annual report", "Bribing an employee for confidential designs", "Attending a public trade show", "Analyzing publicly listed job ads"], correctIndex: 1, explanation: "Bribery, theft, and unauthorized access cross the legal and ethical line into industrial espionage." },
          { question: "Permissive open-source licenses (e.g., MIT) differ from copyleft licenses (e.g., GPL) in that they:", options: ["Forbid commercial use", "Allow proprietary derivative works without sharing source", "Require all derivatives to be open source", "Are not real licenses"], correctIndex: 1, explanation: "Permissive licenses allow closed-source derivatives; copyleft (GPL) requires derivatives to remain open-source under the same terms." },
          { question: "Reverse engineering for INTEROPERABILITY is generally lawful in many jurisdictions because it:", options: ["Always violates copyright", "Enables legitimate users to make products work together without copying expressive code", "Is identical to piracy", "Requires no ethical consideration"], correctIndex: 1, explanation: "Many laws (e.g., DMCA exemptions, EU directives) permit reverse engineering for interoperability of independently created programs." },
        ]}
        scenarioQuestions={[
          {
            scenario: "Your company wants to build a product that integrates with a competitor's proprietary file format. The competitor refuses to share their format specification. Your team proposes reverse engineering the file format by analyzing sample files to achieve interoperability.",
            question: "Is this reverse engineering ethically and legally justified?",
            options: ["No — reverse engineering is always illegal", "Yes — reverse engineering for interoperability is a legitimate and commonly accepted purpose", "Only if you do it secretly", "Only if you pay the competitor a fee"],
            correctIndex: 1,
            explanation: "Reverse engineering for interoperability is one of the most widely accepted legitimate purposes. Many jurisdictions explicitly protect this right to ensure healthy competition."
          },
          {
            scenario: "A startup adopts a permissive open-source library (MIT-licensed) and modifies it heavily. They ship their proprietary product without including the original copyright notice or attributing the original maintainers, and they never contribute back any improvements.",
            question: "What is the ethical issue here?",
            options: ["No issue — MIT permits commercial use", "MIT permits use, but stripping the copyright notice violates the license, and ignoring the maintainers violates the spirit of open source", "They must release their entire codebase", "They cannot use open source at all"],
            correctIndex: 1,
            explanation: "Even permissive licenses like MIT require preserving the copyright notice. Beyond legality, ignoring maintainers and never contributing back violates open-source community ethics."
          },
          {
            scenario: "A marketing team gathers competitive intelligence by reading competitor press releases, attending public conferences, and analyzing public job postings. A team member suggests also paying a former competitor employee to share internal strategy documents.",
            question: "Where is the ethical line crossed?",
            options: ["Reading press releases is unethical", "Public-source intelligence is ethical; paying for confidential internal documents is corporate espionage", "All competitive intelligence is unethical", "Only the conference attendance is unethical"],
            correctIndex: 1,
            explanation: "Competitive intelligence from public sources is legitimate. Paying for confidential proprietary information crosses into trade-secret theft and corporate espionage — both unethical and usually illegal."
          }
        ]}
        longQuestions={[
          {
            question: "What is reverse engineering, and what are its ethical and legal limits in computing?",
            answer: "Reverse engineering is the process of taking apart a product, system, or piece of software to understand its design, function, or implementation — typically without access to the original source materials. In computing, it includes analyzing binaries, network protocols, file formats, or hardware to understand how they work, enable interoperability, fix bugs, ensure security, or build compatible products.\n\nEthical and legal limits: (1) Reverse engineering for interoperability, security research, education, and personal study is widely considered legitimate and is often legally protected. (2) Reverse engineering to copy a product wholesale, bypass DRM/copy-protection, or redistribute proprietary code generally violates copyright law and EULAs. (3) Some jurisdictions and contracts prohibit reverse engineering entirely; professionals must check the applicable license, terms of service, and local law. (4) Discoveries should be disclosed responsibly — security researchers, for example, follow coordinated-disclosure norms. (5) Even where legal, the resulting work must avoid infringing patents and must not misuse trade secrets obtained improperly."
          },
          {
            question: "Discuss the advantages and challenges of using open-source code in commercial products.",
            answer: "Advantages: (1) Lower cost — no per-seat license fees; (2) Faster development — reuse of high-quality, battle-tested components; (3) Transparency — source can be audited for security and quality; (4) Community support — bugs are often fixed quickly by the wider community; (5) Avoidance of vendor lock-in; (6) Strong educational value for developers learning from production-grade code.\n\nChallenges: (1) License compliance — different licenses (MIT, Apache, GPL, AGPL) impose different obligations, especially copyleft licenses that may require releasing derivative work; (2) Lack of formal warranties or support contracts; (3) Security risks if dependencies are not actively maintained; (4) Maintainer burnout when commercial users consume but never contribute; (5) Supply-chain attacks via compromised packages; (6) Hidden patent risk in some projects; (7) Need to track licenses and attributions across thousands of transitive dependencies. Ethical commercial use of open source involves following all license terms, contributing back where possible, sponsoring critical maintainers, and treating dependencies as a long-term responsibility."
          },
          {
            question: "Define competitive intelligence and explain how it differs from corporate espionage.",
            answer: "Competitive intelligence (CI) is the legal and ethical gathering, analysis, and use of publicly available information about competitors, customers, markets, and the wider environment to inform business strategy. Sources include public filings, press releases, job postings, social media, conference talks, patent filings, customer reviews, government data, and trade publications. Done well, CI helps firms anticipate competitor moves, identify market gaps, and make better strategic decisions.\n\nCorporate espionage, in contrast, is the illegal or unethical acquisition of confidential proprietary information. This includes hacking into competitor systems, bribing or coercing employees to leak trade secrets, planting moles, recording private meetings, or buying stolen data. The defining differences are (1) the source — public vs. confidential; (2) the means — analysis vs. theft, deception, or coercion; (3) legality — CI complies with law, espionage violates trade-secret and computer-misuse laws; and (4) ethics — CI respects the confidentiality of competitors, espionage actively breaches it. Professional CI bodies publish codes of ethics that explicitly forbid misrepresentation, theft, and any form of espionage."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter8;
