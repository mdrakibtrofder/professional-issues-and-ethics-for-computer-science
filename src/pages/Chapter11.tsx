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
        scenarioQuestions={[
          {
            scenario: "A popular social media platform discovers that its targeted advertising algorithm is showing predatory loan ads disproportionately to low-income users and gambling ads to users who have searched for 'gambling addiction help.' The ads are technically legal and highly profitable for the platform.",
            question: "What is the most ethical course of action for the platform?",
            options: ["Continue showing the ads since they are legal and profitable", "Modify the algorithm to prevent targeting vulnerable users with harmful ads", "Only change if regulators force them to", "Add a small disclaimer to the ads"],
            correctIndex: 1,
            explanation: "Even though the ads are legal, ethically the platform should modify its algorithm to prevent targeting vulnerable populations with potentially harmful content. Profitability does not justify exploitation."
          },
          {
            scenario: "A 14-year-old is repeatedly mocked in a private group chat. Classmates create a fake profile impersonating her, post embarrassing edited photos, and send her threatening messages from anonymous accounts. She becomes withdrawn and refuses to attend school.",
            question: "Which forms of cyberbullying are present in this scenario?",
            options: ["Only impersonation", "Threatening messages, impersonation, posting humiliating content — all classic forms of cyberbullying", "It's not cyberbullying because it's a 'private' chat", "Only if it happens in person"],
            correctIndex: 1,
            explanation: "Cyberbullying takes many forms — threatening messages, impersonation via fake profiles, and humiliating content all qualify. Private channels do not change the harm caused to the victim."
          },
          {
            scenario: "A B2B company wants to use social networking strategically. The CMO proposes using internal collaboration tools, building a strong public brand presence, and crowdsourcing product ideas from customers — but warns that without a clear plan it could waste resources.",
            question: "Which combination of business applications is the CMO recommending?",
            options: ["Only paid advertising", "Internal Networking, Brand Presence, and Crowdsourcing — three classic business applications of social networking", "Only customer support", "Replacing all email with social media"],
            correctIndex: 1,
            explanation: "Internal networking, brand presence, and crowdsourcing are three well-recognised business applications of social networking — each delivering distinct value when used intentionally."
          }
        ]}
        longQuestions={[
          {
            question: "What is a social networking website and how does it differ from traditional websites?",
            answer: "A social networking website creates an online community of internet users, enabling members to break down barriers of time, distance, and culture. Members can share opinions, insights, information, interests, and experiences, and use the platform to interact with people they already know (friends, family, colleagues) as well as develop new personal and professional relationships.\n\nIt differs from traditional websites in several ways: (1) Content is primarily user-generated rather than published by the site owner; (2) The core value comes from connections between users, not the site's content itself (Metcalfe's law); (3) Identity is central — most members have personal profiles; (4) Interaction is two-way and continuous (likes, comments, shares, messages) rather than one-way consumption; (5) Algorithms personalise what each user sees; (6) The platform enables network effects, where each new user makes the platform more valuable for everyone else; and (7) Business models typically rely on monetising user attention and data, raising distinctive ethical concerns."
          },
          {
            question: "Discuss the major business applications of social networking and their benefits.",
            answer: "1. Internal networking — using enterprise social tools (e.g., Slack, Microsoft Viva, Workplace) to enhance collaboration, knowledge sharing, and culture among employees. Benefits: faster communication, breaking down silos, preserving institutional knowledge, supporting remote and hybrid work.\n\n2. Brand presence — engaging directly with customers on public platforms to build awareness, loyalty, and community support. Benefits: humanising the brand, reaching customers where they already are, gathering real-time feedback, and converting satisfied customers into advocates.\n\n3. Customer service — providing support through social channels where customers expect rapid responses. Benefits: faster resolution, public demonstration of care, opportunity to turn complaints into positive stories.\n\n4. Crowdsourcing — gathering ideas, feedback, and even content from customers and the public to fuel innovation and product development. Benefits: tapping into a wide pool of creativity, validating ideas before investment, and increasing customer ownership of new features.\n\n5. Recruitment — leveraging professional networks (LinkedIn) for hiring. Benefits: access to passive candidates and richer context than a CV alone.\n\n6. Targeted advertising and influencer marketing — reaching precise demographics with measurable campaigns. Together these applications turn social platforms into strategic business tools rather than just marketing channels."
          },
          {
            question: "Explain the various forms of cyberbullying and discuss what individuals, schools, and platforms can do to combat it.",
            answer: "Cyberbullying is the harassment, torment, humiliation, or threatening of one minor by another minor or group of minors via the Internet or cell phone. Common forms include: sending threatening messages; flooding the victim's phone with thousands of texts; sending inappropriate messages to others on the victim's behalf; stealing the victim's password and modifying their profile; posting mean, personal, or false information about the victim on blogs or social media; creating fake profiles designed to humiliate or threaten the victim; sharing private images without consent; exclusion from online groups; and organised group harassment ('pile-ons').\n\nCombating cyberbullying requires layered action: (1) Individuals — preserve evidence (screenshots), do not retaliate, block and report perpetrators, talk to a trusted adult, and seek support. (2) Schools — teach digital citizenship and empathy, maintain clear anti-bullying policies that explicitly cover online behaviour, train staff to recognise warning signs, and provide accessible counselling and reporting channels. (3) Parents — maintain open communication, set age-appropriate boundaries on device use, model respectful online behaviour, and monitor changes in mood. (4) Platforms — design easy reporting flows, respond quickly to reports, deploy AI to detect abusive content, enforce real consequences, give users powerful blocking and privacy tools, and design products that minimise opportunities for abuse. (5) Society and government — pass clear laws, fund mental-health support for victims, and run awareness campaigns. The combined effort recognises that cyberbullying is a public-health issue, not just a personal one."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter11;
