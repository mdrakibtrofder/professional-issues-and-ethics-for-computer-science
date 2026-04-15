import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, ExampleCard } from "@/components/ChapterComponents";
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
    </CourseLayout>
  );
};

export default Chapter10;
