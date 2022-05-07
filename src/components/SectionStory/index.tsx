import Image from "next/image";
import { SectionStory } from "../../domain/model/SectionStory.model";
import Button from "../Button";
import MarkdownComponent from "../Markdown";
import {
  StyledSection,
  StyledSectionHeading,
  StyledSectionTag,
} from "../Section/index.styles";
import { StyledContent } from "../SectionStats/index.styles";
import {
  StyledAuthor,
  StyledButtonWrapper,
  StyledContainer,
  StyledImageContainer,
  StyledSectionStory,
  StyledSlogan,
  StyledStoriesList,
  StyledWrapperImage,
} from "./index.styles";

export default function SectionStoryComponent({
  reverse,
  body,
  image,
  stories,
  tag,
  button,
  title,
}: SectionStory) {
  console.log(button);
  return (
    <StyledSectionStory>
      <StyledSection>
        <StyledContainer isReverse={reverse}>
          <StyledContent>
            <StyledSectionTag>{tag}</StyledSectionTag>
            <StyledSectionHeading>{title}</StyledSectionHeading>
            <MarkdownComponent textHtml={body} />
            <StyledStoriesList>
              {stories.map((e, idx) => (
                <div key={`${e.title}-${idx}`}>
                  <StyledSlogan>{e.slogan}</StyledSlogan>
                  <StyledAuthor>{e.person.name}</StyledAuthor>
                </div>
              ))}
            </StyledStoriesList>
            <StyledButtonWrapper>
              <Button {...button} />
            </StyledButtonWrapper>
          </StyledContent>
          <StyledWrapperImage>
            <Image
              src={image.url}
              alt={image.alternativeText}
              objectFit={"cover"}
              layout="fill"
              priority={false}
            />
          </StyledWrapperImage>
        </StyledContainer>
      </StyledSection>
    </StyledSectionStory>
  );
}
