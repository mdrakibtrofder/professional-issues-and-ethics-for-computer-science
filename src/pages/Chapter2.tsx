import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, InfoCard, KeyPoints, QuoteCard, ExampleCard, QuizSection } from "@/components/ChapterComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Scale, AlertTriangle, Users } from "lucide-react";

const Chapter2 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={2}
        title="Philosophy, Ethics, and Applied Ethics in CS"
        description="Exploring the philosophical foundations of ethics and how they apply to real-world decisions in computer science."
      />

      <TopicSection title="Philosophy, Ethics, and Applied Ethics">
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard icon={<Brain className="w-5 h-5 text-primary" />} title="Philosophy" description="The study of fundamental questions about existence, knowledge, truth, values, reason, and morality." />
          <InfoCard icon={<Scale className="w-5 h-5 text-primary" />} title="Ethics" description="A branch of philosophy that deals with what is morally right and what is wrong." />
          <InfoCard icon={<AlertTriangle className="w-5 h-5 text-primary" />} title="Applied Ethics" description="The practical application of ethical principles to real-world situations. It specifically evaluates the outcomes and consequences of our moral decisions." />
        </div>
      </TopicSection>

      <TopicSection title="Attitudes, Behaviors, Beliefs, and Norms">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContentCard title="Attitude">
            <KeyPoints items={["A personal evaluation of his beliefs.", "Can be positive, negative, or neutral.", "Influences your feelings and thoughts."]} />
          </ContentCard>
          <ContentCard title="Belief">
            <KeyPoints items={["An idea that is accepted as true.", "May not require evidence or proof.", "Beliefs are the foundation of attitudes."]} />
          </ContentCard>
          <ContentCard title="Behavior">
            <KeyPoints items={["The observable actions that you take.", "How you conduct yourself in situations.", "Often a direct result of your attitudes."]} />
          </ContentCard>
          <ContentCard title="Norms">
            <KeyPoints items={["Accepted standards of conduct in a group.", "Social rules that guide our behavior.", "They reinforce what is acceptable."]} />
          </ContentCard>
        </div>
      </TopicSection>

      <TopicSection title="Value and Value Systems">
        <div className="grid md:grid-cols-2 gap-4">
          <ContentCard title="Individual Values">
            <KeyPoints items={["Principles you consider important.", "Guides personal/professional judgments.", "Examples: Honesty, Privacy, Transparency."]} />
          </ContentCard>
          <ContentCard title="Value Systems">
            <KeyPoints items={["Structured set of values guiding behavior.", "Helps in making consistent decisions.", "Prioritizes values when they are in conflict."]} />
          </ContentCard>
        </div>
      </TopicSection>

      <TopicSection title="Integrity">
        <ContentCard>
          <KeyPoints items={[
            "Act in accordance to a personal code of principles",
            "Do as you expect others to do.",
            "Own your actions to ensure you're actually living by your values.",
          ]} />
          <div className="mt-4 bg-muted rounded-lg p-4">
            <p className="text-sm font-medium text-foreground mb-2">For overtime in office there are two integrity rules:</p>
            <KeyPoints items={[
              "Overtime Okay since it benefits the company",
              "Overtime should be properly compensated",
            ]} />
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Factors Affecting Ethical Decision Making">
        <ContentCard title="Key Influences on Our Moral Compass">
          <KeyPoints items={[
            "Personal values: Your individual principles and moral compass.",
            "Cultural background: The influence of societal norms and customs.",
            "Organizational pressure: Expectations and culture within your workplace.",
            "Legal constraints: Laws and regulations that govern actions.",
            "Peer influence: The impact of your friends and colleagues.",
            "Economic incentives: Financial rewards or consequences of a decision.",
            "Time pressure: Making decisions under tight deadlines can affect outcomes.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Ethical Decision Making Steps">
        <ContentCard>
          <Tabs defaultValue="steps1">
            <TabsList className="mb-4">
              <TabsTrigger value="steps1">Steps 1-3</TabsTrigger>
              <TabsTrigger value="steps2">Steps 4-7</TabsTrigger>
            </TabsList>
            <TabsContent value="steps1">
              <div className="space-y-4">
                <ExampleCard title="Step 1: Get the facts" description="Innocent situations can become controversies if no one bothers to check." />
                <ExampleCard title="Step 2: Identify stakeholders" description="Someone who stands to lose or gain from how a situation is resolved and their positions." />
                <ExampleCard title="Step 3: Consider the consequences" description="Trying to maximize good and minimize harm." />
              </div>
            </TabsContent>
            <TabsContent value="steps2">
              <div className="space-y-4">
                <ExampleCard title="Step 4: Weigh guidelines and principles" description="Legal: Is it illegal? (Fraud, theft). Corporate: What does the Employee Handbook say? (Zero tolerance vs. warnings). Ethical: What creates the most fairness? (Honesty, Integrity, Justice)." />
                <ExampleCard title="Step 5: Develop and evaluate options" description="These should be ethically defensible." />
                <ExampleCard title="Step 6: Review a decision" description="Consider POV (Point of View) of stakeholders." />
                <ExampleCard title="Step 7: Evaluate the results" description="After the decision is implemented, monitor the outcome." />
              </div>
            </TabsContent>
          </Tabs>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Value Conflicts">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A situation where a professional must choose between two or more core values that are in direct opposition. Unlike a choice between right and wrong (temptation), a value conflict often involves choosing between two legitimate "goods." It may be a choice between Short-term vs. Long-term profit/results.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <ExampleCard title="Privacy vs. Security" description="Data collection for national security purposes. Workplace monitoring to ensure employee safety. Balancing individual rights with public protection." />
            <ExampleCard title="Profit vs. User Safety" description="Rushing products to market without testing. Cutting corners on essential safety features. Monetizing user data without informed consent." />
            <ExampleCard title="Innovation vs. Regulation" description="Developing AI without clear ethical guidelines. Disrupting industries with new, unregulated technologies. Navigating laws that lag behind technology." />
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Forms of Lies">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A lie is saying something that isn't true to trick someone. Intended to fool others on purpose. Motivated by gaining an advantage, such as getting a reward, making yourself look better, or getting something you want that isn't yours. Saying something you know is wrong while trying to make someone believe it is a fact.
          </p>
          <Accordion type="multiple" className="space-y-2">
            {[
              { value: "fab", title: "Fabrication", def: "A statement not based on fact.", example: 'Telling a client, "We have already implemented the payment gateway API," when the team hasn\'t even written the first line of code.' },
              { value: "bald", title: "Bald-faced lie", def: "An obvious lie.", example: 'A developer claiming, "It worked on my machine," while everyone is looking at the logs showing it crashed on their local environment five minutes ago.' },
              { value: "omission", title: "Lying by omission", def: "Leave out an important fact.", example: 'Reporting that a feature is "100% complete" during a sprint demo, but failing to mention that it only works for one specific user ID and has zero unit tests.' },
              { value: "children", title: "Lie-to-children", def: "Simplification.", example: 'Telling the non-technical Marketing team, "The servers are just taking a little nap," instead of explaining the complexities of a cascading database failure and a corrupted cache.' },
              { value: "white", title: "White lie", def: "Harmless lie to avoid harmful implication.", example: "Telling a junior developer, 'This is a great first draft!' during a pull request review. In reality, the code needs a complete rewrite, but you want to be encouraging." },
              { value: "emergency", title: "Emergency lie", def: "Strategic lie when it is dangerous to tell the truth.", example: 'Telling a frantic CEO during a major outage, "We\'ve identified the root cause and are deploying the fix now," even if you\'re still ten minutes away from the solution, just to prevent them from interfering with the engineers.' },
              { value: "perjury", title: "Perjury", def: "False statement in court.", example: "An executive lies under oath in court by saying they never saw a competitor's design, even though emails prove they did." },
              { value: "bluff", title: "Bluffing", def: "Tactic lie in a game, expected.", example: 'A Project Manager telling a vendor, "We have three other agencies ready to sign at a lower price," to negotiate a better licensing deal for a dev tool.' },
              { value: "misleading", title: "Misleading", def: "Not an outright lie, but aimed to guide to untruth.", example: 'A salesperson saying, "Our software supports multi-cloud integration," which is technically true because you can manually upload files to two different clouds, though there is no automated sync.' },
              { value: "promo", title: "Promotion lies", def: "In advertising (you will love our new product).", example: 'A landing page for a new AI tool claiming, "Our algorithm predicts user behavior with 99% accuracy," when that\'s only true for a very specific, cherry-picked data set.' },
              { value: "jocose", title: "Jocose lies", def: "Sarcasm, storytelling, comedy.", example: "A senior developer jokingly says a massive project will be finished by lunch, making the whole team laugh." },
            ].map(item => (
              <AccordionItem key={item.value} value={item.value} className="bg-muted/50 rounded-xl border border-border px-5">
                <AccordionTrigger className="font-medium text-foreground">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Definition:</strong> {item.def}</p>
                  <p className="text-sm text-muted-foreground"><strong>Example:</strong> {item.example}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Culture and Corporate Culture">
        <div className="grid md:grid-cols-3 gap-4">
          <ExampleCard title="Silicon Valley Culture" description='Known for its "Move fast and break things" mantra, prioritizing rapid innovation and growth.' />
          <ExampleCard title="Japanese Corporate Culture" description="Emphasizes high-quality products, collective responsibility, and a strong sense of commitment from employees." />
          <ExampleCard title="Government Culture" description="This culture focuses on strict compliance with established rules, regulations, and procedural correctness." />
        </div>
      </TopicSection>
      <QuizSection
        questions={[
          { question: "What is Applied Ethics?", options: ["A branch of mathematics", "The practical application of ethical principles to real-world situations", "The study of ancient philosophy", "A type of programming paradigm"], correctIndex: 1, explanation: "Applied Ethics specifically evaluates the outcomes and consequences of moral decisions in real-world situations." },
          { question: "What is a 'value conflict' in ethical decision-making?", options: ["A bug in software code", "A situation where one must choose between two legitimate but opposing values", "A disagreement about salary", "A conflict between two programming languages"], correctIndex: 1, explanation: "A value conflict involves choosing between two or more core values in direct opposition — often between two legitimate 'goods' rather than right vs. wrong." },
          { question: "Which of the following is a 'fabrication' as a form of lie?", options: ["A joke told among friends", "A simplified explanation for non-technical people", "A statement not based on fact presented as truth", "A harmless white lie"], correctIndex: 2, explanation: "Fabrication is making a statement that is not based on fact, such as claiming work has been done when it hasn't." },
        ]}
        scenarioQuestions={[
          {
            scenario: "A project manager discovers that a junior developer has been reporting '100% test coverage' in sprint reports, when in reality the tests only cover the happy path and ignore edge cases. The PM confronts the developer, who says 'Technically all my test files pass, so coverage is 100%.'",
            question: "Which form of lie best describes the developer's behavior?",
            options: ["White lie", "Lying by omission", "Bluffing", "Jocose lie"],
            correctIndex: 1,
            explanation: "This is lying by omission — leaving out the important fact that the tests don't cover edge cases. The developer's statement is technically true but deliberately misleading."
          },
          {
            scenario: "A software architect must decide between two designs: Design A is more secure but requires retraining the team and delays delivery by two months; Design B meets the deadline but has known privacy weaknesses. The CEO strongly values 'speed-to-market', while the architect personally values 'user privacy'.",
            question: "This situation best illustrates which ethical concept?",
            options: ["A factual disagreement", "A value conflict between competing legitimate values", "Corporate culture violation", "A simple compliance issue"],
            correctIndex: 1,
            explanation: "It is a value conflict — both 'speed-to-market' and 'user privacy' are legitimate values, but they pull the decision in opposing directions. The architect must use ethical decision-making to choose."
          },
          {
            scenario: "A new employee joins a company where employees routinely share confidential client data over informal chat to 'get work done faster'. Managers tolerate it because it saves time, even though the official policy forbids it. The new employee is unsure how to behave.",
            question: "What does this scenario reveal about the company?",
            options: ["The official policy is irrelevant", "There is a gap between the stated culture and the actual corporate culture (norms vs. behaviors)", "The employee should ignore the policy", "There is no ethical issue"],
            correctIndex: 1,
            explanation: "Corporate culture is shaped by actual behaviors and accepted norms, not just written policies. A gap between the two indicates an unhealthy culture that can normalize unethical behavior."
          }
        ]}
        longQuestions={[
          {
            question: "Explain the relationship between Attitudes, Beliefs, Behaviors, Norms, and Values, and how they collectively influence ethical decision-making.",
            answer: "Beliefs are ideas accepted as true and form the foundation of attitudes. Attitudes are personal evaluations (positive, negative, or neutral) shaped by beliefs and influence how a person feels about issues. Behaviors are the observable actions a person takes — usually a direct outcome of their attitudes. Norms are the accepted standards of conduct in a group that reinforce what behaviors are acceptable. Values are the principles a person considers important and guide personal and professional judgments.\n\nIn ethical decision-making, beliefs and values shape one's attitudes toward a situation; norms supply the social context; and the resulting behavior is the visible ethical choice. A professional with strong values (e.g., honesty), informed beliefs (e.g., transparency builds trust), and a positive attitude toward ethical conduct will behave ethically even when group norms tempt otherwise."
          },
          {
            question: "Describe the steps of an ethical decision-making process and explain why each step matters.",
            answer: "1. Get the facts — without verified facts, even innocent situations can become controversies. 2. Identify stakeholders — recognize all parties who stand to gain or lose so their interests are considered. 3. Consider the consequences — predict outcomes to maximize good and minimize harm. 4. Weigh guidelines and principles — apply legal, corporate, and ethical frameworks (laws, employee handbook, principles like honesty and justice). 5. Develop and evaluate options — generate ethically defensible alternatives instead of accepting only the obvious one. 6. Review the decision — re-examine it from each stakeholder's point of view to test fairness and integrity.\n\nEach step matters because skipping any one (e.g., ignoring stakeholders or skipping a final review) often produces decisions that are technically legal but ethically poor."
          },
          {
            question: "What are the different forms of lies, and why is recognizing them important in a professional context?",
            answer: "Common forms include: White lies (small, harmless lies often to spare feelings); Lying by omission (deliberately leaving out important facts); Bluffing (pretending to know or to do something one doesn't); Fabrication (stating something not based on fact as truth); Jocose lies (lies told as jokes); Bold-faced lies (obvious untruths despite clear evidence); and Perjury (lying under oath).\n\nRecognizing these forms is critical professionally because (a) many workplace deceptions are subtle (omission, bluffing) and not obvious lies, (b) even small lies erode the trust that the profession depends on, and (c) lies in technical reports, audits, or testing can have serious safety, financial, and legal consequences. Professionals must be trained to identify and avoid all forms — not only outright fabrications."
          }
        ]}
      />
    </CourseLayout>
  );
};

export default Chapter2;
