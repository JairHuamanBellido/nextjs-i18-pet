import Image from "next/image";
import { Media } from "../../domain/model/Media.model";
import { StyledSection } from "../Section/index.styles";
import {
  StyledContainer,
  StyledDescription,
  StyledSectionHero,
  StyledTitle,
} from "./index.styles";

export interface HeroComponent {
  title: string;
  description: string;
  image: Media;
}
export interface ISectionHeroComponent {
  section_hero: HeroComponent;
}

export default function SectionHeroComponent({
  section_hero,
}: ISectionHeroComponent) {
  const { description, image, title } = section_hero;
  return (
    <StyledSectionHero>
      <StyledSection>
        <StyledContainer>
          <div>
            <StyledTitle>{title}</StyledTitle>
            {description}
          </div>
          {image && (
            <Image
              layout="intrinsic"
              width={"450px"}
              height={"450px"}
              objectFit={"cover"}
              src={image.url}
              alt={image.alternativeText}
              loading="lazy"
            />
          )}
        </StyledContainer>
      </StyledSection>
    </StyledSectionHero>
  );
}
