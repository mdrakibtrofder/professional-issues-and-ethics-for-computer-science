import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, InfoCard } from "@/components/ChapterComponents";
import { Lock, Shield, Eye, Users, Scan, Database } from "lucide-react";

const Chapter12 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={12}
        title="Privacy"
        description="Exploring information privacy, privacy laws, data breaches, consumer profiling, workplace monitoring, and advanced surveillance."
      />

      <TopicSection title="Information Privacy">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Information privacy is the combination of communications privacy (the ability to communicate with others without those communications being monitored by other persons or organizations) and data privacy (the ability to limit access to one's personal data by other individuals and organizations.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Ways to Protect Information Privacy:</p>
          <KeyPoints items={[
            "Use encrypted apps and VPNs.",
            "Limit app permissions frequently.",
            "Enable Multi-Factor Authentication (MFA).",
            "Share minimal data online.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Privacy Laws">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Privacy laws are legal frameworks that govern how personal information is collected, shared, and managed. Their primary goal is to protect an individual's right to keep their personal life private from government and corporate intrusion.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Core Functions of Privacy Laws:</p>
          <KeyPoints items={[
            "Define and protect sensitive personal and private information.",
            "Mandate explicit user consent for data collection.",
            "Grant individuals the legal right to manage data.",
            "Impose strict penalties and fines for violations.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Data Breaches">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            An alarming number of identity theft incidents can be traced back to data breaches involving large databases of personal information. Data breaches are sometimes caused by hackers breaking into a database, but more often than one might suspect, they are caused by carelessness or failure to follow proper security procedures.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Risks and Impacts of Data Breaches:</p>
          <KeyPoints items={[
            "Unauthorized access to sensitive user information.",
            "Severe financial and legal penalties for firms.",
            "Permanent damage to corporate reputation and trust.",
            "High risk of identity theft and fraud.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Consumer Profiling">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Companies openly collect personal information about users when they register at Web sites, complete surveys, fill out forms, or enter contests online. Many companies also obtain information about Web surfers through the use of cookies—text files that can be downloaded to the hard drives of users who visit a Web site.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Issues Surrounding Consumer Profiling:</p>
          <KeyPoints items={[
            "Merging data from various digital platforms.",
            "Creation of detailed behavioral user portraits.",
            "Potential for unfair or biased discrimination.",
            "Loss of individual anonymity and privacy.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Workplace Monitoring">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Workplace Monitoring refers to the act of tracking, observing, or surveilling employee activity during working hours or while using company resources. The focus of workplace monitoring is on the complex balance between an employer's legitimate business needs (such as productivity, security, and compliance) and an employee's ethical right to privacy, autonomy, and fair treatment.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Ethical Concerns:</p>
          <KeyPoints items={[
            "Tracking of employee activities and communications.",
            "Potential for increased workplace stress and pressure.",
            "Erosion of mutual trust and morale.",
            "Risks of excessive data collection and misuse.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Advanced Surveillance Technology">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Advanced surveillance technology refers to the integration of high-end hardware and AI-driven software to monitor, track, and analyze environments or individuals with minimal human intervention. A number of advances in information technology—such as surveillance cameras and satellite-based systems that can pinpoint a person's physical location—provide amazing new data-gathering capabilities.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Impacts:</p>
          <KeyPoints items={[
            "Deployment of facial recognition and biometric tracking.",
            "Constant real-time monitoring of public spaces.",
            "Significant loss of personal anonymity outdoors.",
            "Potential for automated profiling and bias.",
          ]} />
        </ContentCard>
      </TopicSection>
    </CourseLayout>
  );
};

export default Chapter12;
