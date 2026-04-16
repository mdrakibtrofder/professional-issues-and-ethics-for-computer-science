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
        ]}
        scenarioQuestion={{
          scenario: "A software engineer at a healthcare company is asked to deploy a patient management system ahead of schedule. The engineer knows the system hasn't been fully tested and could contain bugs that might display incorrect medication dosages. Management insists on the deadline to secure a government contract.",
          question: "According to the ACM Code of Ethics, what should the engineer do?",
          options: ["Deploy as requested since management made the decision", "Refuse to deploy and report the safety risk, as the code requires avoiding harm", "Deploy but add a disclaimer about potential errors", "Resign from the company immediately"],
          correctIndex: 1,
          explanation: "The ACM General Ethical Principles require professionals to avoid harm. Deploying untested healthcare software that could show incorrect dosages directly endangers patients."
        }}
      />
    </CourseLayout>
  );
};

export default Chapter3;
