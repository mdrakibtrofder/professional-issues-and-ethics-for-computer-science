import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, ExampleCard } from "@/components/ChapterComponents";
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
    </CourseLayout>
  );
};

export default Chapter6;
