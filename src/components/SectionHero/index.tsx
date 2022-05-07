import Image from "next/image";
import { SectionHero } from "../../domain/model/SectionHero.model";
import { StyledSection } from "../Section/index.styles";
import {
  StyledContainer,
  StyledDescription,
  StyledSectionHero,
  StyledTitle,
} from "./index.styles";

export default function SectionHeroComponent({
  title,
  description,
  image,
}: SectionHero) {
  return (
    <StyledSectionHero>
      <StyledSection>
        <StyledContainer>
          <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
          </div>
          {image && (
            <Image
              width={450}
              height={450}
              objectFit={"cover"}
              src={image.url}
              alt={image.alternativeText}
            />
          )}
        </StyledContainer>
      </StyledSection>
    </StyledSectionHero>
  );
}
