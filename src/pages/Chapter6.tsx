import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, ExampleCard, QuizSection } from "@/components/ChapterComponents";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileText, Eye, Users, Scale, Lock } from "lucide-react";

const Chapter6 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={6}
        title="Whistleblowing Guidance"
        description="Understanding whistleblowing policies, protections, and employer responsibilities."
      />

      <TopicSection title="What is Whistleblowing?">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Whistleblowing occurs when a worker reports certain types of wrongdoing or "qualifying disclosures."
          </p>
          <KeyPoints items={[
            "Public Interest: The disclosure must be in the public interest.",
            "Legal Breach: Criminal offences or failures to comply with legal obligations.",
            "Safety: Risks to health and safety or environmental damage.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Employer Responsibilities">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard icon={<Shield className="w-5 h-5 text-primary" />} title="Protection" description='Ensure whistleblowers are protected from "detriment" or unfair treatment as a result of their disclosure.' />
          <InfoCard icon={<FileText className="w-5 h-5 text-primary" />} title="Process" description="Establish clear, accessible procedures for workers to raise concerns internally without fear." />
          <InfoCard icon={<Eye className="w-5 h-5 text-primary" />} title="Culture" description="Foster a transparent environment where staff feel confident that concerns will be taken seriously." />
          <InfoCard icon={<Users className="w-5 h-5 text-primary" />} title="Investigation" description="Duty to investigate concerns fairly and provide feedback to the whistleblower where appropriate." />
        </div>
      </TopicSection>

      <TopicSection title="Policy Communication">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Effective communication ensures the policy is more than just a document. It should be visible and understood across the organization.
          </p>
          <KeyPoints items={[
            "Include in employee handbooks and intranet.",
            "Regular training for all staff levels.",
            "Clear leadership endorsement.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Disclosure vs. Grievance">
        <div className="grid md:grid-cols-2 gap-4">
          <ContentCard title="Whistleblowing">
            <p className="text-muted-foreground text-sm">Concerns affecting others (e.g., fraud, safety breaches).</p>
          </ContentCard>
          <ContentCard title="Grievance">
            <p className="text-muted-foreground text-sm">Personal complaints (e.g., pay disputes, bullying of oneself).</p>
          </ContentCard>
        </div>
        <p className="text-sm text-muted-foreground mt-3">It is vital to distinguish between whistleblowing and personal grievances to apply the correct procedure.</p>
      </TopicSection>

      <TopicSection title="Standard Whistleblowing Policy">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">While there is no mandatory template, a standard policy must include:</p>
          <KeyPoints items={[
            "Examples of what constitutes a concern.",
            "Step-by-step reporting instructions.",
            "Assurance of confidentiality and protection.",
            "Timeframes for the investigation process.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Deciding the Course of Action">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard icon={<FileText className="w-5 h-5 text-primary" />} title="Initial Triage" description="Determine if the report qualifies as whistleblowing or should be a grievance." />
          <InfoCard icon={<Shield className="w-5 h-5 text-primary" />} title="Risk Assessment" description="Evaluate immediate risks to safety, data, or the organization's reputation." />
          <InfoCard icon={<Users className="w-5 h-5 text-primary" />} title="Investigator Appointment" description="Select an impartial, trained person to lead the investigation process." />
          <InfoCard icon={<Scale className="w-5 h-5 text-primary" />} title="Legal Consultation" description="Decide if external authorities (Prescribed Persons) need to be involved." />
        </div>
      </TopicSection>

      <TopicSection title="Handling the Disclosure">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed">
            The investigation must be thorough and impartial. Key steps include proper documentation, witness interviews, evidence collection, and timely resolution.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Ensuring Confidentiality">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">Confidentiality is the cornerstone of a trusted whistleblowing system.</p>
          <KeyPoints items={[
            "Identity Protection: Do not reveal the whistleblower's name without consent.",
            "Anonymous Reports: Handle anonymous disclosures with equal seriousness.",
            "Data Security: Keep all investigation files strictly restricted.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Code of Practice Overview">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">The Code of Practice sets the benchmark for effective whistleblowing arrangements.</p>
          <KeyPoints items={[
            "Transparency: Openness in how concerns are handled.",
            "Responsiveness: Dealing with disclosures within reasonable timeframes.",
            "Continuous Review: Periodically audit and update whistleblowing policies.",
          ]} />
        </ContentCard>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "What is the primary difference between whistleblowing and a grievance?", options: ["Whistleblowing is anonymous, grievances are not", "Whistleblowing concerns public interest issues, grievances are personal complaints", "Grievances are more serious than whistleblowing", "There is no difference"], correctIndex: 1, explanation: "Whistleblowing involves concerns affecting others (fraud, safety), while grievances are personal complaints like pay disputes." },
          { question: "What is the employer's primary responsibility regarding whistleblowers?", options: ["Terminate them to protect the company", "Protect them from detriment or unfair treatment", "Ignore anonymous reports", "Report them to law enforcement"], correctIndex: 1, explanation: "Employers must ensure whistleblowers are protected from detriment or unfair treatment as a result of their disclosure." },
          { question: "Why is confidentiality critical in whistleblowing?", options: ["To hide evidence from regulators", "To protect the whistleblower's identity and encourage reporting", "To prevent the media from finding out", "To delay the investigation"], correctIndex: 1, explanation: "Confidentiality protects the whistleblower's identity, encouraging honest reporting without fear of retaliation." },
        ]}
        scenarioQuestion={{
          scenario: "A junior developer at a fintech company discovers that the lead engineer has been deliberately bypassing security protocols to speed up transaction processing. This has not yet caused a breach, but the developer believes it puts millions of customer accounts at risk. The lead engineer is also the developer's direct supervisor and mentor.",
          question: "What is the most ethical course of action for the junior developer?",
          options: ["Confront the lead engineer privately and hope they fix it", "Ignore it since no breach has occurred yet", "Report the concern through the company's whistleblowing procedure", "Post about it anonymously on social media"],
          correctIndex: 2,
          explanation: "The developer should use the company's formal whistleblowing procedure. This ensures the concern is documented, investigated impartially, and the developer is protected from retaliation."
        }}
      />
    </CourseLayout>
  );
};

export default Chapter6;
