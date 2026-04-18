import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, ExampleCard, QuizSection } from "@/components/ChapterComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitBranch, RefreshCw, Server, Zap } from "lucide-react";

const Chapter10 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={10}
        title="Scalable Software Development"
        description="Software configuration management, DevOps, CI/CD, microservices, load balancing, and auto scaling."
      />

      <TopicSection title="Software Configuration Management">
        <ContentCard>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard icon={<GitBranch className="w-5 h-5 text-primary" />} title="Version Control" description="Systematic tracking of changes using tools like Git or SVN." />
            <InfoCard icon={<RefreshCw className="w-5 h-5 text-primary" />} title="Accountability" description='Maintaining a clear history of "who" changed "what" and "why".' />
            <InfoCard icon={<Server className="w-5 h-5 text-primary" />} title="Baseline Integrity" description="Ensuring the codebase remains stable and recoverable at all times." />
            <InfoCard icon={<Zap className="w-5 h-5 text-primary" />} title="Change Control" description="Formal processes to review and approve significant architecture shifts." />
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="DevOps Lifecycle & Culture">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">
            DevOps is a cultural and professional movement that breaks down silos. By integrating development and operations, we achieve:
          </p>
          <KeyPoints items={[
            "Faster time-to-market.",
            "Reduced failure rates for new releases.",
            "Quicker mean time to recovery (MTTR).",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="The CI/CD Pipeline">
        <ContentCard title="Continuous Integration (CI) → Continuous Delivery (CD)">
          <div className="grid sm:grid-cols-5 gap-3">
            {[
              { step: "Plan & Code", desc: "Version control & peer review." },
              { step: "Build", desc: "Compiling code & dependencies." },
              { step: "Test", desc: "Automated QA & security scans." },
              { step: "Release", desc: "Staging & artifact creation." },
              { step: "Deploy", desc: "Production delivery & monitoring." },
            ].map((s, i) => (
              <div key={i} className="bg-primary/5 rounded-lg p-3 text-center">
                <div className="chapter-number mx-auto mb-2">{i + 1}</div>
                <p className="text-sm font-semibold text-foreground">{s.step}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Monolith vs. Microservices">
        <ContentCard>
          <Tabs defaultValue="micro">
            <TabsList className="mb-4">
              <TabsTrigger value="mono">Monolithic</TabsTrigger>
              <TabsTrigger value="micro">Microservices</TabsTrigger>
            </TabsList>
            <TabsContent value="mono">
              <p className="text-muted-foreground">A monolithic architecture is a single, unified codebase where all components are tightly coupled and deployed as one unit. Simpler to develop initially but harder to scale and maintain as the application grows.</p>
            </TabsContent>
            <TabsContent value="micro">
              <div className="grid sm:grid-cols-2 gap-4">
                <ExampleCard title="Modularity" description="Services are organized around business capabilities, allowing small teams to own specific domains." />
                <ExampleCard title="Independent Scaling" description="Scale only the parts of the system that are under heavy load, optimizing cloud costs and resources." />
                <ExampleCard title="Technology Agnostic" description="Different services can use different languages or databases (Polyglot persistence) where appropriate." />
                <ExampleCard title="Rapid Deployment" description="Update one service without needing to redeploy the entire application stack." />
              </div>
            </TabsContent>
          </Tabs>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Load Balancing Fundamentals">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Load balancers act as traffic cops, distributing incoming requests across multiple servers. Professionally, ensuring availability is a commitment to the user's right to access services they depend on. This ensures:
          </p>
          <KeyPoints items={[
            "High Availability (preventing downtime).",
            "Reliability (routing around failed nodes).",
            "Efficiency (optimizing server utilization).",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Auto Scaling Dynamics">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed">
            Scaling Responsively: Auto-scaling adjusts the number of active servers based on real-time metrics (CPU, RAM, Traffic). This technical capability ensures that users never experience performance degradation during peak hours while reducing environmental and financial waste during low usage.
          </p>
        </ContentCard>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "What does CI/CD stand for?", options: ["Computer Integration/Computer Delivery", "Continuous Integration/Continuous Delivery", "Code Inspection/Code Deployment", "Central Infrastructure/Central Database"], correctIndex: 1, explanation: "CI/CD stands for Continuous Integration and Continuous Delivery — automating the build, test, and deployment pipeline." },
          { question: "What is a key advantage of microservices over monolithic architecture?", options: ["Simpler initial development", "Services can be scaled independently", "Lower network complexity", "Requires fewer developers"], correctIndex: 1, explanation: "Microservices allow scaling only the parts of the system under heavy load, optimizing resources and costs." },
          { question: "What is the primary purpose of a load balancer?", options: ["To store data backups", "To distribute incoming requests across multiple servers", "To encrypt network traffic", "To monitor employee activity"], correctIndex: 1, explanation: "Load balancers distribute incoming requests across multiple servers to ensure high availability, reliability, and efficiency." },
        ]}
        scenarioQuestions={[
          {
            scenario: "An e-commerce company uses a monolithic architecture. During Black Friday, their checkout service crashes under heavy load, bringing down the entire website including product browsing, user accounts, and customer support chat. The CTO proposes migrating to microservices.",
            question: "Why would microservices have prevented this total outage?",
            options: ["Microservices are faster than monoliths", "Each service is independent — checkout crashing wouldn't affect product browsing or other services", "Microservices don't need servers", "Microservices automatically fix bugs"],
            correctIndex: 1,
            explanation: "In a microservices architecture, services are independent. A checkout crash would be isolated, while product browsing, accounts, and other services continue to function normally."
          },
          {
            scenario: "A team deploys to production manually once a month. Each release is risky, takes a full day, and often introduces bugs. They consider adopting CI/CD with automated tests and gradual rollouts.",
            question: "What is the most direct benefit of CI/CD here?",
            options: ["Lower cloud costs", "Smaller, more frequent, automatically tested releases that reduce risk and speed up feedback", "Replacing the QA team", "Eliminating the need for monitoring"],
            correctIndex: 1,
            explanation: "CI/CD automates build, test, and deploy steps, allowing small frequent releases. Smaller changes are easier to test, faster to roll back, and reduce overall release risk."
          },
          {
            scenario: "A streaming service experiences traffic spikes during live events. During quiet hours, the same fixed servers run idle and cost the company a lot of money.",
            question: "Which scalability approach best fits this pattern?",
            options: ["Manual scaling once a week", "Auto Scaling — automatically adding and removing servers based on real-time demand, paired with a Load Balancer", "Buying more permanent hardware", "Removing the live event feature"],
            correctIndex: 1,
            explanation: "Auto Scaling matches capacity to demand, while a Load Balancer distributes traffic across the active instances. Together they provide elastic capacity at minimum cost."
          }
        ]}
        longQuestions={[
          {
            question: "What is Software Configuration Management (SCM) and why is it essential for scalable software development?",
            answer: "Software Configuration Management is the discipline of systematically tracking and controlling changes to software artefacts — source code, configuration files, dependencies, documentation, and infrastructure definitions — throughout the software lifecycle. SCM provides version control (typically via Git), branching and merging strategies, baseline integrity, change control processes, accountability (who changed what, when, and why), and the ability to recover any previous state.\n\nSCM is essential for scalable development because: (1) large teams cannot collaborate safely without it; (2) it enables parallel work via branches and merges; (3) it provides a single source of truth for what is in production; (4) it underpins CI/CD pipelines, code reviews, and automated testing; (5) it supports auditability and compliance; (6) it allows rapid rollback when defects are introduced; and (7) modern infrastructure-as-code practices treat infrastructure with the same rigour as application code, all managed through SCM."
          },
          {
            question: "Explain the DevOps lifecycle and the role of CI/CD within it.",
            answer: "The DevOps lifecycle is a continuous loop that integrates development and operations to deliver software faster, more reliably, and with higher quality. Common phases include: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor — feeding back into Plan.\n\nContinuous Integration (CI) automates the Build and Test phases: every commit triggers an automated pipeline that compiles the code, runs unit and integration tests, performs static analysis, and produces a deployable artefact. Continuous Delivery (CD) automates the Release and Deploy phases so that any commit that passes tests can be deployed to production with the push of a button (or automatically — Continuous Deployment).\n\nCI/CD's role is to provide a fast, reliable, and repeatable path from a developer's commit to a customer-facing change. It reduces release risk by deploying small increments, enables rapid feedback, supports experimentation (feature flags, canary deploys), and underpins the cultural shift in DevOps where developers and operations share responsibility for quality and reliability."
          },
          {
            question: "Compare monolithic and microservices architectures, including advantages, disadvantages, and when each is appropriate.",
            answer: "A monolithic architecture packages all functionality into a single deployable unit sharing one codebase, one database, and one deployment process. Advantages: simpler initial development, easier debugging, lower operational overhead, faster local development, and straightforward transactions. Disadvantages: a single change requires redeploying everything; scaling means scaling the whole app even if only one part is hot; technology choices are locked in; large teams step on each other; and a single failure can take down the entire system.\n\nA microservices architecture decomposes the system into small, independent services aligned with business capabilities, each owned by a small team, with its own data store and deployment pipeline. Advantages: independent scaling, independent deployments, polyglot technology choices, fault isolation, and team autonomy. Disadvantages: higher operational complexity, distributed-system challenges (network latency, partial failures), more complex testing, eventual consistency instead of ACID transactions, and the need for mature DevOps, observability, and service-discovery tooling.\n\nWhen to choose: monolith is appropriate for early-stage products, small teams, simple domains, and when speed of iteration matters more than independent scaling. Microservices are appropriate when the system is large, the organisation has multiple teams that need autonomy, different parts have very different scaling needs, and the team has the operational maturity to run a distributed system. Many successful systems begin as a well-structured monolith and extract microservices only when concrete pain points justify the added complexity."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter10;
