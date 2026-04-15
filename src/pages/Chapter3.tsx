import { CourseLayout } from "@/components/CourseLayout";
import { ChapterHero, TopicSection, ContentCard } from "@/components/ChapterComponents";

const Chapter3 = () => {
  return (
    <CourseLayout>
      <ChapterHero
        chapterNumber={3}
        title="ACM Code of Ethics and Professional Conduct"
        description="Exploring the ACM Code of Ethics that guides computing professionals in their practice and decision-making."
      />

      <TopicSection title="Overview">
        <ContentCard>
          <p className="text-muted-foreground leading-relaxed">
            The ACM Code of Ethics and Professional Conduct outlines the principles that computing professionals should follow. It covers general ethical principles, professional responsibilities, professional leadership principles, and compliance with the code. This chapter's detailed slide content is covered in class lectures.
          </p>
        </ContentCard>
      </TopicSection>

      <TopicSection title="Key Principles">
        <div className="grid sm:grid-cols-2 gap-4">
          <ContentCard title="1. General Ethical Principles">
            <p className="text-muted-foreground text-sm">Contribute to society and to human well-being, avoid harm, be honest and trustworthy, be fair and take action not to discriminate, respect the work required to produce new ideas.</p>
          </ContentCard>
          <ContentCard title="2. Professional Responsibilities">
            <p className="text-muted-foreground text-sm">Strive to achieve high quality in both processes and products, maintain high standards of professional competence, know and respect existing rules pertaining to professional work.</p>
          </ContentCard>
          <ContentCard title="3. Professional Leadership Principles">
            <p className="text-muted-foreground text-sm">Ensure that the public good is the central concern during all professional computing work, articulate, encourage acceptance of, and evaluate fulfillment of social responsibilities.</p>
          </ContentCard>
          <ContentCard title="4. Compliance with the Code">
            <p className="text-muted-foreground text-sm">Uphold, promote, and respect the principles of the Code. Treat violations as inconsistent with membership in the ACM.</p>
          </ContentCard>
        </div>
      </TopicSection>
    </CourseLayout>
  );
};

export default Chapter3;
