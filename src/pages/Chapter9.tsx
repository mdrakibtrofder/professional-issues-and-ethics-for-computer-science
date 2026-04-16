import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, QuizSection } from "@/components/ChapterComponents";
import { Shield, Users, Scale, AlertTriangle } from "lucide-react";

const Chapter9 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={9}
        title="Software Development"
        description="The importance of software quality, engineering strategies, development processes, and safety-critical systems."
      />

      <TopicSection title="The Importance of Software Quality">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A business information system is a set of interrelated components—including hardware, software, databases, networks, people, and procedures—that collects and processes data and disseminates the output. A manufacturer's order-processing system captures order information, processes it to update inventory and accounts receivable, and ensures that the order is filled and shipped on time to the customer. The accurate, thorough, and timely processing of business transactions is a key requirement for such systems. A software defect can be devastating, resulting in lost customers and reduced revenue.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <InfoCard icon={<Shield className="w-5 h-5 text-primary" />} title="Reliability" description="Ensuring the system performs its required functions under stated conditions for a specified period." />
            <InfoCard icon={<Users className="w-5 h-5 text-primary" />} title="User Trust" description="Building confidence through consistent behavior, security, and intuitive interactions." />
            <InfoCard icon={<Scale className="w-5 h-5 text-primary" />} title="Legal/Ethical" description="Meeting professional obligations and avoiding liability from system failures or data breaches." />
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Strategies for Engineering Quality Software">
        <ContentCard>
          <KeyPoints items={[
            "Rigorous Peer Reviews: Catching bugs early through collaborative code analysis.",
            "Continuous Testing: Implementing unit, integration, and system tests in the CI pipeline.",
            "Agile Refactoring: Maintaining clean code to prevent technical debt accumulation.",
            "User-Centric Design: Ensuring quality is defined by the end-user's needs.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Software Development Process">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed">
            Developing information system software requires completing many complex activities, with many dependencies among the various activities. Systems analysts, programmers, architects, database specialists, project managers, documentation specialists, trainers, and testers are all involved in large software projects. Each of these groups of workers has a role to play and has specific responsibilities and tasks. A software development methodology defines activities in the software development process and the individual and group responsibilities for accomplishing these activities.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Safety-Critical Systems">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A safety-critical system is one whose failure may cause human injury or death. The safe operation of many safety-critical systems relies on the flawless performance of software; such systems control automobiles' antilock brakes, nuclear power plant reactors, airplane navigation, elevators, and numerous medical devices.
          </p>
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="font-heading font-semibold text-foreground">Critical Note</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Systems where failure could result in loss of life, significant property damage, or environmental disaster. These require a higher level of ethical oversight and rigorous engineering than standard commercial software.
            </p>
          </div>
        </ContentCard>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "What is a safety-critical system?", options: ["A system that costs a lot of money", "A system whose failure may cause human injury or death", "Any system used by the government", "A system with many users"], correctIndex: 1, explanation: "A safety-critical system is one whose failure may cause human injury or death, such as those controlling medical devices, airplanes, or nuclear reactors." },
          { question: "Why is software quality important for business information systems?", options: ["It makes the code look better", "A software defect can result in lost customers and reduced revenue", "It is only important for large companies", "Quality only matters for open source software"], correctIndex: 1, explanation: "Accurate, thorough, and timely processing of business transactions is key. A software defect can be devastating, resulting in lost customers and reduced revenue." },
          { question: "Which is NOT a strategy for engineering quality software?", options: ["Rigorous peer reviews", "Continuous testing", "Skipping documentation to save time", "User-centric design"], correctIndex: 2, explanation: "Skipping documentation is not a quality strategy. Proper strategies include peer reviews, continuous testing, agile refactoring, and user-centric design." },
        ]}
        scenarioQuestion={{
          scenario: "A medical device company is developing software for an insulin pump. During testing, a rare bug is found that could cause the pump to deliver double the prescribed dosage under specific conditions that occur in roughly 1 in 10,000 uses. The project is already 3 months behind schedule and over budget. Management wants to ship with a known-issue note.",
          question: "What should the development team do?",
          options: ["Ship with the known-issue note as management suggests", "Refuse to ship until the bug is fixed, as this is a safety-critical system", "Ship and plan a patch for the next release", "Let the marketing team decide"],
          correctIndex: 1,
          explanation: "This is a safety-critical system where failure could cause serious injury or death. The team must refuse to ship until the critical bug is fixed, regardless of schedule or budget pressures."
        }}
      />
    </CourseLayout>
  );
};

export default Chapter9;
