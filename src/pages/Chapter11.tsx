import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, ExampleCard, QuizSection } from "@/components/ChapterComponents";
import { AlertTriangle } from "lucide-react";

const Chapter11 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={11}
        title="Social Networking"
        description="Understanding social networking websites, business applications, advertising, and cyberbullying."
      />

      <TopicSection title="What Is a Social Networking Web Site?">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A social networking Web site creates an online community of Internet users that enables members to break down the barriers of time, distance, and cultural differences. Social networking Web sites allow people to interact with others online by sharing opinions, insights, information, interests, and experiences. Members of an online social network may use the site to interact with friends, family members, and colleagues—people they already know—but they may also make use of the site to develop new personal and professional relationships.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Business Applications of Online Social Networking">
        <div className="grid md:grid-cols-3 gap-4">
          <ExampleCard title="Internal Networking" description="Using enterprise tools to enhance collaboration and knowledge sharing among internal employees." />
          <ExampleCard title="Brand Presence" description="Engaging directly with customers to build brand awareness, loyalty, and community support." />
          <ExampleCard title="Crowdsourcing" description="Gathering consumer feedback and ideas to fuel innovation and product development cycles." />
        </div>
      </TopicSection>

      <TopicSection title="Social Network Advertising">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Social network advertising involves the use of social networks to communicate and promote the benefits of products and services. Advertisers were quick to recognize the potential of social networking as another channel for promoting products and services.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Advantages:</p>
          <KeyPoints items={[
            "Advertisers can create an opportunity to generate a conversation with viewers of the ad.",
            "Ads can be targeted to reach people with the desired demographic characteristics.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Cyberbullying">
        <ContentCard>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-heading font-semibold text-foreground">Important Topic</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cyberbullying is the harassment, torment, humiliation, or threatening of one minor by another minor or group of minors via the Internet or cell phone. There are numerous forms of cyberbullying, including the following:
          </p>
          <KeyPoints items={[
            "Sending threatening messages to the victim.",
            "Sending thousands of text messages to the victim's cell phone and running up.",
            "Sending inappropriate messages to others.",
            "Stealing the victim's password and modifying his or her profile to include.",
            "Posting mean, personal, or false information about the victim in the cyberbully's blog or on a social networking page.",
            "Creating social networking profile whose purpose is to humiliate or threaten the victim.",
          ]} />
        </ContentCard>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "What is the primary purpose of a social networking website?", options: ["To sell products online", "To create an online community that breaks barriers of time, distance, and culture", "To provide cloud storage", "To replace email communication"], correctIndex: 1, explanation: "Social networking sites create online communities that enable members to break down barriers of time, distance, and cultural differences." },
          { question: "How do businesses use social networking?", options: ["Only for hiring employees", "For internal collaboration, brand presence, and crowdsourcing", "Only for advertising", "Businesses don't use social networking"], correctIndex: 1, explanation: "Businesses use social networking for internal collaboration, building brand presence, engaging customers, and crowdsourcing ideas." },
          { question: "Cyberbullying specifically involves:", options: ["Adults bullying children in schools", "Harassment of one minor by another via the Internet or cell phone", "Any online disagreement", "Spam emails"], correctIndex: 1, explanation: "Cyberbullying is specifically the harassment, torment, humiliation, or threatening of one minor by another minor or group of minors via the Internet or cell phone." },
        ]}
        scenarioQuestion={{
          scenario: "A popular social media platform discovers that its targeted advertising algorithm is showing predatory loan ads disproportionately to low-income users and gambling ads to users who have searched for 'gambling addiction help.' The ads are technically legal and highly profitable for the platform.",
          question: "What is the most ethical course of action for the platform?",
          options: ["Continue showing the ads since they are legal and profitable", "Modify the algorithm to prevent targeting vulnerable users with harmful ads", "Only change if regulators force them to", "Add a small disclaimer to the ads"],
          correctIndex: 1,
          explanation: "Even though the ads are legal, ethically the platform should modify its algorithm to prevent targeting vulnerable populations with potentially harmful content. Profitability does not justify exploitation."
        }}
      />
    </CourseLayout>
  );
};

export default Chapter11;
