import Image from "next/image";
import { Story } from "../../domain/model/Story.model";
import MarkdownComponent from "../Markdown";
import { StyledSection } from "../Section/index.styles";
import {
  StledStoryPage,
  StyledHeader,
  StyleHeading,
  StyledSlogan,
  StyledAuthor,
  StyledAuthorName,
  StyledStoryLabel,
  StyledBody,
} from "./index.styles";
interface IStoryPage {
  story: Story;
}
export default function StoryPage({ story }: IStoryPage) {
  return (
    <StledStoryPage>
      <StyledSection>
        <StyledHeader>
          <Image
            src={story.image.url}
            alt={story.image.alternativeText}
            width={300}
            objectFit={"cover"}
            height={300}
          />
          <StyleHeading>{story.title}</StyleHeading>
          <StyledSlogan>{story.slogan}</StyledSlogan>
          <StyledAuthor>
            <Image
              width={48}
              height={48}
              src={story.person.image.url}
              alt={story.person.image.alternativeText}
            />
            <StyledAuthorName>
              {story.person.name} {story.person.lastname}
            </StyledAuthorName>
          </StyledAuthor>
        </StyledHeader>
        <StyledStoryLabel>Stories</StyledStoryLabel>
        <StyledBody>
          <MarkdownComponent textHtml={story.body} />
        </StyledBody>
      </StyledSection>
    </StledStoryPage>
  );
}
