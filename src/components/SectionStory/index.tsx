import Image from "next/image";
import { IButtonProps } from "../../domain/model/Button.model";
import { Media } from "../../domain/model/Media.model";
import { Story } from "../../domain/model/Story.model";
import { ISectionTitle } from "../../domain/types/SectionTitle.model";
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
  StyledSectionStory,
  StyledSlogan,
  StyledStoriesList,
  StyledWrapperImage,
} from "./index.styles";

export interface ISectionStory {
  heading: ISectionTitle;
  image: Media;
  reverse: boolean;
  button: IButtonProps;
  stories: Story[];
}
export interface ISectionStoryComponent {
  section_story: ISectionStory;
}
export default function SectionStoryComponent({
  section_story,
}: ISectionStoryComponent) {
  const { button, heading, image, reverse, stories } = section_story;
  return (
    <StyledSectionStory>
      <StyledSection>
        <StyledContainer isReverse={reverse}>
          <StyledContent>
            <StyledSectionTag>{heading.tag}</StyledSectionTag>
            <StyledSectionHeading>{heading.title}</StyledSectionHeading>
            <MarkdownComponent textHtml={heading.body} />
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
