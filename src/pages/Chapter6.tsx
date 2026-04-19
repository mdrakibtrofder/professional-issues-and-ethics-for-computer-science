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
          { question: "Which is typically the FIRST recommended step in a whistleblowing process?", options: ["Contact the press", "Raise the concern through internal channels (manager, ethics line)", "Resign immediately", "Post about it on social media"], correctIndex: 1, explanation: "Best practice is to raise concerns internally first, escalating to regulators or media only when internal channels fail." },
          { question: "A formal Code of Practice in an organization primarily serves to:", options: ["Replace the law", "Translate ethical principles into concrete day-to-day rules and procedures", "Protect executives from prosecution", "Increase share price"], correctIndex: 1, explanation: "Codes of practice operationalize ethics — telling staff how to behave in specific situations." },
          { question: "Which is a legitimate public-interest disclosure?", options: ["Reporting a colleague's annoying habit", "Reporting that a medical device firmware has a fatal flaw being concealed", "Sharing a salary dispute on LinkedIn", "Leaking a competitor's business plan"], correctIndex: 1, explanation: "Public-interest disclosures concern matters like safety, fraud, or illegality that affect others — not personal complaints." },
          { question: "Retaliation against a whistleblower is generally:", options: ["Encouraged by ethics codes", "Prohibited by professional codes and often by law", "Acceptable if profits are at stake", "Required for confidentiality"], correctIndex: 1, explanation: "Both professional codes and many jurisdictions' laws explicitly prohibit retaliation against good-faith whistleblowers." },
          { question: "An employer's duty of confidentiality to clients does NOT extend to:", options: ["Routine business data", "Concealing illegal acts or serious public-safety risks", "Trade secrets", "Pricing information"], correctIndex: 1, explanation: "Confidentiality obligations cannot be used as a shield to hide illegality or serious harm to the public." },
        ]}
        scenarioQuestions={[
          {
            scenario: "A junior developer at a fintech company discovers that the lead engineer has been deliberately bypassing security protocols to speed up transaction processing. This has not yet caused a breach, but the developer believes it puts millions of customer accounts at risk. The lead engineer is also the developer's direct supervisor and mentor.",
            question: "What is the most ethical course of action for the junior developer?",
            options: ["Confront the lead engineer privately and hope they fix it", "Ignore it since no breach has occurred yet", "Report the concern through the company's whistleblowing procedure", "Post about it anonymously on social media"],
            correctIndex: 2,
            explanation: "The developer should use the company's formal whistleblowing procedure. This ensures the concern is documented, investigated impartially, and the developer is protected from retaliation."
          },
          {
            scenario: "An employee discovers that a colleague has been claiming false overtime hours. The employee is unsure whether this is whistleblowing or a personal grievance.",
            question: "How should this disclosure be classified, and why?",
            options: ["Personal grievance — it only affects payroll", "Whistleblowing — it is fraud against the employer and potentially against shareholders, a public-interest concern", "Neither — it's gossip", "Both equally"],
            correctIndex: 1,
            explanation: "Fraud is a public-interest concern affecting the employer, other employees, and shareholders. It qualifies as a whistleblowing matter, not a personal grievance about the discloser's own situation."
          },
          {
            scenario: "After raising a serious safety concern through the formal whistleblowing channel, an engineer is suddenly removed from key projects, denied a promotion, and excluded from team meetings.",
            question: "What is the employer required to do under whistleblowing protections?",
            options: ["Nothing — managers can reorganize teams freely", "Investigate the apparent retaliation and protect the whistleblower from detriment as required by whistleblowing policy and law", "Fire the engineer for causing trouble", "Force the engineer to retract the disclosure"],
            correctIndex: 1,
            explanation: "Employers must protect whistleblowers from detriment or unfair treatment that results from a protected disclosure. Apparent retaliation must be investigated and reversed."
          }
        ]}
        longQuestions={[
          {
            question: "Define whistleblowing and distinguish it clearly from a personal grievance.",
            answer: "Whistleblowing is the act of disclosing information about wrongdoing — such as fraud, illegality, danger to health and safety, miscarriages of justice, environmental damage, or attempts to conceal any of these — that is in the public interest and typically affects others beyond the discloser. The discloser may be an employee, contractor, or even an outsider with relevant knowledge.\n\nA grievance, in contrast, is a personal complaint about the discloser's own employment situation — for example, pay disputes, perceived unfair treatment, or interpersonal conflicts. Grievances are handled through internal HR procedures and are not protected under whistleblowing law in the same way.\n\nThe key distinction is the affected party: whistleblowing concerns the public or a wider group; a grievance concerns the discloser personally. Some situations contain both elements, in which case the public-interest aspect should be handled under the whistleblowing procedure, and the personal aspect under the grievance procedure."
          },
          {
            question: "Outline an employer's responsibilities for handling whistleblowing disclosures effectively.",
            answer: "Employers' responsibilities include: (1) Establishing a clear, written whistleblowing policy and procedure; (2) Communicating the policy to all workers and ensuring they know how to raise concerns; (3) Providing multiple channels for disclosure (line manager, designated officer, anonymous hotline); (4) Distinguishing disclosures from grievances and routing them appropriately; (5) Investigating disclosures promptly, impartially, and confidentially; (6) Protecting the whistleblower's identity wherever possible; (7) Protecting the whistleblower from any detriment or retaliation; (8) Providing feedback to the whistleblower on the outcome; (9) Keeping records to demonstrate compliance; and (10) Reviewing and updating the policy regularly. Senior management must visibly support the policy so that workers feel safe to come forward."
          },
          {
            question: "Why is confidentiality central to a whistleblowing code of practice, and what are its limits?",
            answer: "Confidentiality is central because it (a) protects the whistleblower from retaliation by colleagues or managers, (b) encourages others to come forward without fear, (c) preserves the integrity of the investigation by preventing tampering with evidence, and (d) protects the rights and reputation of the person being accused until facts are established.\n\nIts limits include: (1) confidentiality cannot extend to concealing wrongdoing — investigators may need to disclose information to regulators, law enforcement, or auditors; (2) anonymity cannot always be guaranteed, especially in small teams where the source becomes obvious from the content of the disclosure; (3) legal proceedings may compel disclosure of the whistleblower's identity; and (4) other employees' rights (e.g., to defend themselves) may require revealing some details. A good policy is honest about these limits while taking every reasonable step to maintain confidentiality."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter6;
