import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SectionCardStory } from "../../domain/model/SectionCardStory.model";
import { StyledSection } from "../Section/index.styles";
import {
  StyledSectionCardStories,
  StyledCardStory,
  StyledSlogan,
  StyledTitle,
} from "./index.styles";

export interface ISectionCardStories {
  section_card_story: SectionCardStory | null;
}
export default function SectionCardStories({
  section_card_story,
}: ISectionCardStories) {
  const { locale } = useRouter();
  if (section_card_story === null) {
    return <p>No hay</p>;
  }
  return (
    <StyledSection>
      <StyledSectionCardStories>
        {section_card_story.stories.map((e) => (
          <Link
            key={e.slug}
            href={`blog/${e.slug}`}
            passHref
            locale={locale}
          >
            <StyledCardStory>
              <Image
                width={300}
                height={300}
                src={e.image.url}
                objectFit={"cover"}
                alt={e.image.alternativeText}
              />
              <StyledTitle>{e.title}</StyledTitle>
              <StyledSlogan>{e.slogan}</StyledSlogan>
            </StyledCardStory>
          </Link>
        ))}
      </StyledSectionCardStories>
    </StyledSection>
  );
}
