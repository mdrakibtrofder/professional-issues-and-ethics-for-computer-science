import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, QuoteCard, ExampleCard, QuizSection } from "@/components/ChapterComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, Users, Shield, Award } from "lucide-react";

const Chapter1 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={1}
        title="Introduction to Profession and Professionalism"
        description="Understanding the foundations of professional conduct, ethical obligations, and the role of computing professionals in society."
      />

      <TopicSection title="Profession vs. Vocation">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <ContentCard title="Profession">
            <p className="text-muted-foreground leading-relaxed">
              A discipline requiring extensive training and specialized knowledge. It involves public trust, adherence to ethical codes, and regulation by governing bodies.
            </p>
          </ContentCard>
          <ContentCard title="Vocation">
            <p className="text-muted-foreground leading-relaxed">
              Often described as a "calling" or strong aptitude for a specific career path. While it requires skill, it may not be strictly regulated by a professional society.
            </p>
          </ContentCard>
        </div>
      </TopicSection>

      <TopicSection title="Who is a Professional?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <InfoCard
            icon={<GraduationCap className="w-5 h-5 text-primary" />}
            title="Credentials"
            description="Formal education and degrees from accredited institutions (B.Sc., M.Sc.) as a baseline of knowledge."
          />
          <InfoCard
            icon={<Users className="w-5 h-5 text-primary" />}
            title="Membership"
            description="Affiliation with recognized bodies like IEEE or BCS indicating professional standing."
          />
          <InfoCard
            icon={<Shield className="w-5 h-5 text-primary" />}
            title="Ethics"
            description="Commitment to a code of conduct that prioritizes public safety and integrity over personal gain."
          />
          <InfoCard
            icon={<Award className="w-5 h-5 text-primary" />}
            title="Development"
            description="Engagement in Continuous Professional Development (CPD) to keep pace with rapid technological shifts."
          />
        </div>
      </TopicSection>

      <TopicSection title="Professional Roles in Computing">
        <ContentCard>
          <Tabs defaultValue="roles">
            <TabsList className="mb-4">
              <TabsTrigger value="roles">Roles</TabsTrigger>
              <TabsTrigger value="duties">Duties & Responsibilities</TabsTrigger>
              <TabsTrigger value="behavior">Professional Behavior</TabsTrigger>
            </TabsList>
            <TabsContent value="roles">
              <div className="grid sm:grid-cols-2 gap-3">
                <ExampleCard title="Software Engineer" description="Designing, developing, and maintaining complex software systems." />
                <ExampleCard title="Systems Architect" description="Defining the high-level structure and technology stack of IT solutions." />
                <ExampleCard title="Cyber Security Specialist" description="Protecting infrastructure from evolving digital threats." />
                <ExampleCard title="Data Scientist" description="Extracting actionable insights from massive datasets to drive decisions." />
                <ExampleCard title="IT Project Manager" description="Bridging the gap between technical teams and business stakeholders." />
              </div>
            </TabsContent>
            <TabsContent value="duties">
              <KeyPoints items={[
                "Maintain technical competence and accuracy.",
                "Ensure confidentiality of client and user data.",
                "Avoid conflict of interest in professional dealings.",
                "Provide honest assessments of project feasibility and risks.",
              ]} />
            </TabsContent>
            <TabsContent value="behavior">
              <div className="grid sm:grid-cols-3 gap-4">
                <InfoCard icon={<Shield className="w-5 h-5 text-primary" />} title="Integrity" description="Being honest and having strong moral principles; being consistent in all actions." />
                <InfoCard icon={<Award className="w-5 h-5 text-primary" />} title="Competence" description="Performing tasks with the necessary skill and efficiency required by the industry." />
                <InfoCard icon={<Users className="w-5 h-5 text-primary" />} title="Respect" description="Treating colleagues, clients, and society with dignity and professional courtesy." />
              </div>
            </TabsContent>
          </Tabs>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Societal Expectations">
        <QuoteCard
          quote="With great technical power comes a duty to ensure that technology serves the common good and protects the vulnerable."
        />
        <ContentCard>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-3xl font-bold text-primary font-heading">100%</span>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Public Trust</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Society expects computing professionals to build systems that are safe, reliable, and ethically sound. Errors in code are no longer just bugs; they impact lives.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Professional Bodies">
        <Accordion type="multiple" className="space-y-2">
          <AccordionItem value="ieee" className="bg-card rounded-xl border border-border px-5">
            <AccordionTrigger className="font-heading font-semibold text-foreground">
              IEEE: Global Excellence
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-3">
                Institute of Electrical and Electronics Engineers — The world's largest technical professional organization dedicated to advancing technology for humanity.
              </p>
              <KeyPoints items={[
                "Sets global standards (e.g., WiFi 802.11).",
                "Fosters massive research networking.",
                "Promotes technical innovation globally.",
              ]} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="bcs" className="bg-card rounded-xl border border-border px-5">
            <AccordionTrigger className="font-heading font-semibold text-foreground">
              BCS: The Chartered Institute
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-3">
                British Computer Society — Based in the UK but global in reach, BCS is the leading professional body for IT professionals, focusing on ethics and standards.
              </p>
              <KeyPoints items={[
                "Grants Chartered IT Professional (CITP) status.",
                "Influences global computing policy.",
                "Rigorous Code of Conduct for members.",
                "Focuses on making IT good for society.",
              ]} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cse" className="bg-card rounded-xl border border-border px-5">
            <AccordionTrigger className="font-heading font-semibold text-foreground">
              CSE Society & Local Impact
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <InfoCard icon={<Users className="w-5 h-5 text-primary" />} title="Networking" description="Connecting students, alumni, and industry professionals to share knowledge and career opportunities." />
                <InfoCard icon={<Award className="w-5 h-5 text-primary" />} title="Development" description="Organizing workshops, tech-talks, and hackathons to bridge the gap between academia and industry." />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "What distinguishes a profession from a vocation?", options: ["Higher salary", "Extensive training, ethical codes, and regulation by governing bodies", "Working in an office", "Having a university degree"], correctIndex: 1, explanation: "A profession requires extensive training, adherence to ethical codes, and regulation by professional bodies, unlike a vocation which is more of a calling or aptitude." },
          { question: "Which of the following is a recognized professional body for IT professionals?", options: ["FIFA", "BCS (British Computer Society)", "WHO", "UNESCO"], correctIndex: 1, explanation: "BCS is the leading professional body for IT professionals, granting Chartered IT Professional (CITP) status." },
          { question: "What does CPD stand for in a professional context?", options: ["Corporate Product Development", "Continuous Professional Development", "Computer Programming Diploma", "Certified Professional Degree"], correctIndex: 1, explanation: "CPD stands for Continuous Professional Development — the ongoing process of developing skills and knowledge throughout a career." },
        ]}
        scenarioQuestions={[
          {
            scenario: "A software company hires a talented self-taught developer who has no formal degree or professional membership. The developer writes excellent code but refuses to follow the company's code of conduct, saying 'I'm not a member of any professional body, so codes of ethics don't apply to me.'",
            question: "What is the most appropriate response to this situation?",
            options: ["Accept the developer's argument since they have no formal obligations", "Explain that professional conduct applies to all employees regardless of formal membership", "Fire the developer immediately", "Ignore the situation as long as the code quality remains high"],
            correctIndex: 1,
            explanation: "Professional conduct and ethical behavior are expected of all computing practitioners, not just those with formal memberships. Workplace codes of conduct apply to all employees."
          },
          {
            scenario: "An IT consultant is hired by a small business to set up their network. Midway through the project, the consultant realizes the chosen architecture is inadequate for the client's growth plans, but admitting this would mean redoing weeks of paid work. The client has no technical expertise to verify the work.",
            question: "What does professional integrity require?",
            options: ["Continue silently — the client won't know the difference", "Disclose the issue, explain the implications, and propose a corrected plan", "Finish the inadequate setup and blame future issues on the client's growth", "Quietly walk away from the project"],
            correctIndex: 1,
            explanation: "Trust in professionals depends on honesty and accountability. Disclosing the limitation, even at personal cost, upholds integrity and the client's right to informed decisions."
          },
          {
            scenario: "A senior engineer is asked to mentor a new graduate. The graduate is eager but lacks knowledge of professional standards and CPD. The senior is busy with deadlines and tempted to skip mentoring duties.",
            question: "Why is mentoring considered a professional responsibility?",
            options: ["It is a legal requirement everywhere", "Professionals have a duty to develop the next generation and uphold the standards of the profession", "Only managers must mentor", "Mentoring is optional and unrelated to ethics"],
            correctIndex: 1,
            explanation: "Professional bodies expect members to support continuous professional development of others — sharing knowledge sustains the integrity and trustworthiness of the profession."
          }
        ]}
        longQuestions={[
          {
            question: "Differentiate between a profession and a vocation, and explain why computing is increasingly considered a profession.",
            answer: "A vocation is a calling, trade, or aptitude — typically learned on the job and not regulated by a formal body (e.g., a craftsman or salesperson). A profession, in contrast, requires extensive specialized training, adherence to a recognized code of ethics, and is often regulated by a professional governing body that grants certification (e.g., doctors, lawyers, chartered engineers).\n\nComputing is increasingly considered a profession because: (1) it requires deep, formal technical training and lifelong learning; (2) computing professionals make decisions that significantly impact public safety, privacy, and finance; (3) recognized bodies such as the BCS, ACM, and IEEE-CS publish codes of ethics and grant chartered status (CITP); and (4) society increasingly trusts computing professionals to act competently and ethically, just as it does doctors or engineers."
          },
          {
            question: "Why do we trust professionals, and what mechanisms sustain that trust in the computing field?",
            answer: "We trust professionals because they (a) demonstrate verified competence through education and certification, (b) commit to a code of ethics that prioritizes the public interest, (c) are accountable to a governing body that can sanction misconduct, and (d) engage in Continuous Professional Development (CPD) to keep their skills current.\n\nIn computing, this trust is sustained through: professional bodies (BCS, ACM, IEEE-CS) issuing codes of conduct; certifications (CITP, CISSP, PMP) verifying competence; CPD requirements ensuring practitioners stay current with rapidly evolving technology; peer review and open standards ensuring transparency; and disciplinary procedures that hold practitioners accountable for negligence or unethical behavior."
          },
          {
            question: "Discuss the role of professional bodies in shaping ethical practice in IT, with examples.",
            answer: "Professional bodies serve as the backbone of ethical IT practice by: (1) defining standards of competence and conduct; (2) issuing codes of ethics that members must follow; (3) granting certifications that signal trustworthiness to employers and clients; (4) facilitating Continuous Professional Development; and (5) providing disciplinary mechanisms.\n\nExamples include: the British Computer Society (BCS), which grants Chartered IT Professional (CITP) status and publishes a Code of Conduct; the Association for Computing Machinery (ACM), which maintains the widely-cited ACM Code of Ethics and Professional Conduct; and the IEEE Computer Society, which jointly developed the Software Engineering Code of Ethics. These organizations also influence policy, education curricula, and public understanding of IT, ensuring the profession serves society responsibly."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter1;
