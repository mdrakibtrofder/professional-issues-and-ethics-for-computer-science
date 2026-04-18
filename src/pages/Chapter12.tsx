import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, InfoCard, QuizSection } from "@/components/ChapterComponents";
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
      <QuizSection
        questions={[
          { question: "Information privacy is the combination of:", options: ["Data encryption and firewalls", "Communications privacy and data privacy", "Physical security and digital security", "Network security and application security"], correctIndex: 1, explanation: "Information privacy combines communications privacy (monitoring-free communication) and data privacy (limiting access to personal data)." },
          { question: "Data breaches are most often caused by:", options: ["Sophisticated hacking attacks only", "Carelessness or failure to follow proper security procedures", "Natural disasters", "Hardware failures"], correctIndex: 1, explanation: "While hacking causes some breaches, data breaches are more often caused by carelessness or failure to follow proper security procedures." },
          { question: "Consumer profiling raises ethical concerns because:", options: ["It makes websites load slower", "It creates detailed behavioral portraits and risks discrimination", "It is always illegal", "It only affects businesses"], correctIndex: 1, explanation: "Consumer profiling merges data from various platforms to create detailed behavioral portraits, raising concerns about discrimination and loss of anonymity." },
        ]}
        scenarioQuestions={[
          {
            scenario: "A company implements AI-powered surveillance cameras with facial recognition in their office to 'improve security.' Employees were not informed. The system tracks when employees arrive, leave, take breaks, and who they interact with. An employee discovers the system and raises concerns.",
            question: "What are the primary ethical violations in this scenario?",
            options: ["No violation — the company owns the premises", "Lack of informed consent, excessive monitoring, and erosion of employee trust", "The only issue is the AI technology being used", "It's only a problem if the data is shared externally"],
            correctIndex: 1,
            explanation: "The company violated multiple ethical principles: no informed consent was obtained, the monitoring is excessive relative to the stated purpose, and covert surveillance erodes trust and workplace morale."
          },
          {
            scenario: "A health-tech startup collects detailed user fitness data including location, heart rate, and sleep patterns. They sell anonymised aggregate data to insurance companies. Researchers later show the 'anonymised' data can be re-identified using publicly available information.",
            question: "What is the central privacy issue?",
            options: ["No issue — the data was anonymised", "Anonymisation is often weaker than claimed; users were not informed about insurance-company sales and re-identification risks", "Insurance companies are always trustworthy", "Fitness data is not personal data"],
            correctIndex: 1,
            explanation: "True anonymisation is technically very difficult. Selling 're-identifiable' data without informed consent breaches both data privacy and the principle of transparency, and may breach laws like the GDPR."
          },
          {
            scenario: "A bank discovers that an internal employee accidentally exposed a folder containing customer records on a shared drive accessible to the entire company for several months. There's no evidence of external misuse yet.",
            question: "What is the most appropriate response under data-breach handling principles?",
            options: ["Quietly fix it and hope no one notices", "Investigate the scope, restrict access, notify regulators and affected customers as required by law, and review controls to prevent recurrence", "Blame the employee publicly", "Delete the records to hide evidence"],
            correctIndex: 1,
            explanation: "Data-breach handling requires containment, impact assessment, regulatory notification, transparent communication with affected customers, and process improvement — never concealment."
          }
        ]}
        longQuestions={[
          {
            question: "Define information privacy and explain why it is important in the digital age.",
            answer: "Information privacy is the right of individuals to control how data about them is collected, used, shared, and retained. It is commonly described as the combination of communications privacy (the ability to communicate without interception) and data privacy (the ability to limit who has access to personal data and how it is used).\n\nIt is critical in the digital age because: (1) vast amounts of personal data are continuously collected by websites, apps, IoT devices, and sensors; (2) data is permanent and globally distributed once leaked; (3) detailed profiles can be assembled by combining seemingly innocent data points; (4) algorithmic decisions (loans, hiring, insurance) increasingly depend on personal data, affecting opportunities and rights; (5) loss of privacy enables surveillance, manipulation, and discrimination; and (6) individuals often cannot meaningfully consent to opaque data practices. Strong information privacy protects autonomy, dignity, freedom of expression, and trust in the digital economy."
          },
          {
            question: "What are the most common causes of data breaches and how can organisations prevent them?",
            answer: "Common causes include: (1) carelessness and failure to follow basic security procedures (misconfigured servers, default passwords, plain-text password storage); (2) phishing and social engineering of employees; (3) weak access controls and over-privileged accounts; (4) unpatched software and vulnerable third-party libraries; (5) lost or stolen devices; (6) insider threats — malicious or negligent employees; (7) supply-chain attacks via compromised vendors; and (8) sophisticated external attacks (less common than carelessness but high impact).\n\nPrevention measures: (1) Security awareness training for all staff; (2) Strong authentication (MFA, SSO, password managers); (3) Principle of least privilege and regular access reviews; (4) Encryption of data at rest and in transit; (5) Patch management and dependency scanning; (6) Network segmentation and Zero-Trust architectures; (7) Logging, monitoring, and anomaly detection; (8) Data minimisation and short retention periods; (9) Regular penetration testing and red-team exercises; (10) A documented and rehearsed incident-response plan; and (11) Vendor risk management. Defence-in-depth ensures that no single failure leads directly to a breach."
          },
          {
            question: "Discuss workplace monitoring and advanced surveillance technology, balancing legitimate business needs and employee rights.",
            answer: "Workplace monitoring covers email scanning, web filtering, keystroke logging, screen recording, location tracking, productivity AI, and increasingly facial-recognition cameras. Legitimate business needs include protecting against fraud, ensuring regulatory compliance, securing intellectual property, supporting safety in dangerous environments, and measuring service quality.\n\nHowever, employees retain rights to dignity, autonomy, and a reasonable expectation of privacy. Balancing the two requires: (1) Transparency — employees must know what is monitored, how, why, and how long data is retained; (2) Proportionality — the monitoring must be no more intrusive than necessary for the stated purpose; (3) Purpose limitation — data collected for security must not be used for unrelated decisions like promotions; (4) Consent and consultation — wherever possible, involve employees and unions in setting policies; (5) Data minimisation and anonymisation; (6) Strong access controls so only authorised investigators can review data; (7) Right of access and correction; and (8) Compliance with applicable laws (GDPR, sector-specific regulations).\n\nAdvanced surveillance (AI-powered cameras, biometric tracking, predictive analytics) magnifies both the benefits and the risks. Ethical use requires Privacy Impact Assessments, independent oversight, the ability to opt out where feasible, and a culture that treats employees as adults rather than suspects. The default should be the least monitoring necessary, applied transparently, with clear safeguards against function creep."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter12;
