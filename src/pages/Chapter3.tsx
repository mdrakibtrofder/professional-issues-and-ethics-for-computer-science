import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, QuizSection } from "@/components/ChapterComponents";

const Chapter3 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={3}
        title="ACM Code of Ethics and Professional Conduct"
        description="Exploring the ACM Code of Ethics that guides computing professionals in their practice and decision-making."
      />

      <TopicSection title="Overview">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed">
            The ACM Code of Ethics and Professional Conduct outlines the principles that computing professionals should follow. It covers general ethical principles, professional responsibilities, professional leadership principles, and compliance with the code. This chapter's detailed slide content is covered in class lectures.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Key Principles">
        <div className="grid sm:grid-cols-2 gap-4">
          <ContentCard title="1. General Ethical Principles">
            <p className="text-muted-foreground text-sm">Contribute to society and to human well-being, avoid harm, be honest and trustworthy, be fair and take action not to discriminate, respect the work required to produce new ideas.</p>
          </ContentCard>
          <ContentCard title="2. Professional Responsibilities">
            <p className="text-muted-foreground text-sm">Strive to achieve high quality in both processes and products, maintain high standards of professional competence, know and respect existing rules pertaining to professional work.</p>
          </ContentCard>
          <ContentCard title="3. Professional Leadership Principles">
            <p className="text-muted-foreground text-sm">Ensure that the public good is the central concern during all professional computing work, articulate, encourage acceptance of, and evaluate fulfillment of social responsibilities.</p>
          </ContentCard>
          <ContentCard title="4. Compliance with the Code">
            <p className="text-muted-foreground text-sm">Uphold, promote, and respect the principles of the Code. Treat violations as inconsistent with membership in the ACM.</p>
          </ContentCard>
        </div>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "Which ACM principle emphasizes contributing to society and human well-being?", options: ["Professional Leadership Principles", "General Ethical Principles", "Compliance with the Code", "Professional Responsibilities"], correctIndex: 1, explanation: "General Ethical Principles include contributing to society, avoiding harm, being honest, and respecting others' work." },
          { question: "What does the ACM Code say about violations?", options: ["They are acceptable if the intent was good", "They should be treated as inconsistent with ACM membership", "They only matter if caught", "They are handled by local law enforcement"], correctIndex: 1, explanation: "The ACM Code states that violations should be treated as inconsistent with membership in the ACM." },
          { question: "Which principle area covers maintaining high standards of professional competence?", options: ["General Ethical Principles", "Professional Responsibilities", "Professional Leadership", "Compliance"], correctIndex: 1, explanation: "Professional Responsibilities include striving for high quality and maintaining competence in professional work." },
          { question: "According to the SE Code, the software engineer's PRIMARY obligation is to:", options: ["The employer", "The client who pays", "The public interest", "Their own career"], correctIndex: 2, explanation: "The SE Code (Public clause) places public interest above client and employer interests when they conflict." },
          { question: "Which clause of the SE Code addresses honest evaluation of a product?", options: ["Public", "Product", "Judgement", "Management"], correctIndex: 2, explanation: "JUDGEMENT requires engineers to maintain integrity and independence in their professional judgement, including honest evaluation." },
          { question: "The MANAGEMENT clause of the SE Code obligates managers to:", options: ["Maximize profits at any cost", "Promote an ethical approach to software development and management", "Hide ethical concerns from staff", "Avoid hiring whistleblowers"], correctIndex: 1, explanation: "Managers and leaders must subscribe to and promote an ethical approach to software development and management." },
          { question: "Which is NOT one of the eight SE Code principles?", options: ["Public", "Client and Employer", "Profession", "Profitability"], correctIndex: 3, explanation: "The eight principles are Public, Client & Employer, Product, Judgement, Management, Profession, Colleagues, and Self — not Profitability." },
          { question: "The COLLEAGUES principle requires engineers to:", options: ["Compete aggressively with peers", "Be fair to and supportive of colleagues", "Report colleagues for any minor mistake", "Avoid working in teams"], correctIndex: 1, explanation: "Engineers shall be fair to and supportive of their colleagues, fostering cooperation and mutual respect." },
        ]}
        scenarioQuestions={[
          {
            scenario: "A software engineer at a healthcare company is asked to deploy a patient management system ahead of schedule. The engineer knows the system hasn't been fully tested and could contain bugs that might display incorrect medication dosages. Management insists on the deadline to secure a government contract.",
            question: "According to the ACM Code of Ethics, what should the engineer do?",
            options: ["Deploy as requested since management made the decision", "Refuse to deploy and report the safety risk, as the code requires avoiding harm", "Deploy but add a disclaimer about potential errors", "Resign from the company immediately"],
            correctIndex: 1,
            explanation: "The ACM General Ethical Principles require professionals to avoid harm. Deploying untested healthcare software that could show incorrect dosages directly endangers patients."
          },
          {
            scenario: "A development team lead notices that a teammate consistently takes credit for ideas contributed by other engineers in stand-ups. When confronted, the teammate says 'It's a team effort, so it doesn't matter who gets credit.'",
            question: "Which ACM principle is being violated?",
            options: ["Compliance with the Code", "Respecting the work required to produce new ideas (Honesty and credit attribution)", "Professional Leadership", "There is no violation"],
            correctIndex: 1,
            explanation: "ACM's General Ethical Principles require honesty and respect for the work and ideas of others. Taking credit for others' contributions is dishonest and undermines colleagues."
          },
          {
            scenario: "A senior engineer learns that her company is selling user data to advertisers without clear user consent. As a Professional Leader within the organization, she has influence over policy.",
            question: "Under the ACM Code's Professional Leadership Principles, what is her duty?",
            options: ["Stay silent — leadership means protecting the company", "Ensure the public good is the central concern, advocate for transparent consent and policy change", "Quit immediately", "Only act if a regulator complains"],
            correctIndex: 1,
            explanation: "Professional Leaders are required to ensure the public good is the central concern of professional computing work and to evaluate the fulfillment of social responsibilities."
          }
        ]}
        longQuestions={[
          {
            question: "Summarize the four sections of the ACM Code of Ethics and Professional Conduct and explain their purpose.",
            answer: "1. General Ethical Principles — establish the foundational moral commitments expected of every computing professional: contribute to society and human well-being, avoid harm, be honest and trustworthy, be fair and avoid discrimination, respect the work needed to produce new ideas, respect privacy, and honor confidentiality. 2. Professional Responsibilities — focus on the quality of professional work: strive for high quality, maintain professional competence, know and respect existing rules, accept and provide appropriate professional review, and design systems robustly. 3. Professional Leadership Principles — guide those in positions of influence to ensure the public good is central, articulate social responsibilities, manage personnel and resources to enhance quality of work, and support the professional development of members. 4. Compliance with the Code — every member must uphold, promote, and respect the Code, and treat violations as inconsistent with ACM membership.\n\nTogether, these sections move from individual conduct → professional craftsmanship → leadership responsibilities → enforcement."
          },
          {
            question: "Why are codes of ethics like the ACM Code important even if they are not legally binding?",
            answer: "Codes of ethics are important because they: (1) articulate the shared values of a profession, giving practitioners a common moral language; (2) guide decision-making in ambiguous situations not covered by law; (3) protect the public from harm caused by negligent or unethical practice; (4) establish trust between professionals, employers, clients, and society; (5) provide a basis for professional discipline by membership bodies; and (6) raise the standard of practice over time as the profession matures.\n\nEven without legal force, breaching such codes can result in loss of certification, reputation damage, and exclusion from the professional community — strong incentives that complement, rather than replace, the law."
          },
          {
            question: "Discuss how the ACM Code addresses the responsibilities of computing professionals in protecting public welfare.",
            answer: "The ACM Code addresses public welfare across all four of its sections. Under General Ethical Principles, members are required to contribute to society and avoid harm — explicitly placing the public good above personal or organizational benefit. Under Professional Responsibilities, members must maintain high standards of competence and follow rules that protect users and the public, and must accept and provide professional review to catch dangerous mistakes early. Under Professional Leadership, members in influential roles must ensure that public good is the central concern of all computing work and must articulate, encourage, and evaluate fulfillment of these social responsibilities. Finally, under Compliance, breaches of public-welfare obligations are treated as serious violations.\n\nIn practice, this means refusing to deploy unsafe systems, raising concerns about discriminatory algorithms, advocating for user privacy, and ensuring that managerial decisions do not subordinate public safety to profit or schedule pressures."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter3;
