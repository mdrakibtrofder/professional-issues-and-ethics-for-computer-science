import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard, KeyPoints, ExampleCard } from "@/components/ChapterComponents";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Chapter7 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={7}
        title="Intellectual Property"
        description="Understanding copyright, patents, trade secrets, trademarks, and plagiarism in the digital age."
      />

      <TopicSection title="What is Copyright?">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A copyright is the exclusive right to distribute, display, perform, or reproduce an original work in copies or to prepare derivative works based on the work. Copyright protection is given to people who create original work in a physical or digital form that others can see, hear, or touch (tangible medium of expression). The author may grant this exclusive right to others. As new forms of expression develop, they can be awarded copyright protection.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Copyright Duration">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">Copyright law guarantees developers the rights to their works for a certain amount of time. According to law in 1998, established the following time limits:</p>
          <KeyPoints items={[
            "For works created after January 1, 1978, copyright protection endures for the life of the author plus 70 years.",
            "If a work was created but not published or registered before January 1, 1978, its copyright lasts for the author's lifetime plus 70 years. However, it will not end before December 31, 2004, even if that time period is shorter.",
            "For works created before 1978 that are still in their original or renewable term of copyright, the total term was extended to 95 years from the date the copyright was originally secured.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Software Copyright Protection">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Copyright protects the actual source code (literal) and sometimes the structure, sequence, and organization (non-literal). Unlike patents, it does not protect the underlying idea or function, only the specific expression of the algorithm.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The use of copyrights to protect computer software raises many complicated issues of interpretation. For example, a software manufacturer can observe the operation of a competitor's copyrighted program and then create a program that accomplishes the same result and performs in the same manner.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To prove copyright issue, the copyright holder must show a striking resemblance between its software and the new software that could be explained only by copying.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Patents">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A patent permits its owner to exclude the public from making, using, or selling a protected invention, and it allows for legal action against violators. Unlike a copyright, a patent prevents independent creation as well as copying. Even if someone else invents the same item independently and with no prior knowledge of the patent holder's invention, the second inventor is excluded from using the patented device without permission of the original patent holder.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ExampleCard title="Novelty" description="The invention must be new and not previously known to the public through any medium." />
            <ExampleCard title="Non-Obviousness" description="It must not be an obvious development to someone with ordinary skill in the relevant field." />
            <ExampleCard title="Utility" description="The invention must have a practical application and provide some identifiable benefit." />
            <ExampleCard title="Disclosure" description="In exchange for a 20-year monopoly, the inventor must publicly disclose how the invention works." />
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Cross-Licensing Agreements">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A contract between two parties where each grants the other a license to use their patented inventions.
          </p>
          <p className="text-sm font-medium text-foreground mb-2">Strategic Benefits:</p>
          <KeyPoints items={[
            'Avoids costly litigation and "Patent Wars."',
            "Allows for interoperability between systems.",
            "Enables faster development of complex products.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Trade Secrets">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A trade secret was defined as business information that represents something of economic value, has required effort or cost to develop, has some degree of uniqueness or novelty, is generally unknown to the public, and is kept confidential. Trade secret protection begins by identifying all the information that must be protected—from undisclosed patent applications to market research and business plans— and developing a comprehensive strategy for keeping the information secure.
          </p>
          <KeyPoints items={[
            "No expiration: Can last forever (e.g., Coca-Cola formula).",
            "Requirement: Must be kept secret via NDAs and security.",
            "Risk: Reverse engineering is legal; independent discovery is legal.",
          ]} />
        </ContentCard>
      </TopicSection>

      <TopicSection title="Trademark">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A trademark is a logo, package design, phrase, sound, or word that enables a consumer to differentiate one company's products from another's. Consumers often cannot examine goods or services to determine their quality or source, so instead they rely on the labels attached to the products.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <ExampleCard title="Brand Identification" description="Helps people know who made the product." />
            <ExampleCard title="Legal Protection" description="Prevents others from copying or using a similar mark." />
            <ExampleCard title="Trust & Quality" description="Builds customer confidence in the brand." />
          </div>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Plagiarism in Professional IT">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Plagiarism is the act of stealing someone's ideas or words and passing them off as one's own.
          </p>
          <KeyPoints items={[
            "Copying documentation without attribution.",
            "Claiming third-party code as original work.",
            'Violating "Academic Integrity" in training.',
          ]} />
        </ContentCard>
      </TopicSection>
    </CourseLayout>
  );
};

export default Chapter7;
