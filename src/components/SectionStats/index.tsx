import Image from "next/image";
import { SectionStats } from "../../domain/model/SectionStats.model";
import MarkdownComponent from "../Markdown";
import {
  StyledSection,
  StyledSectionHeading,
  StyledSectionTag,
} from "../Section/index.styles";
import StatsComponent from "../Stats";
import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledImageContainer,
  StyledStatsList,
  StyledWrapperImage,
} from "./index.styles";

export default function SectionStatsComponent({
  body,
  stats,
  tag,
  title,
  reverse,
  media,
}: SectionStats) {
  return (
    <StyledSection>
      <StyledContainer isReverse={reverse}>
        <StyledImageContainer>
          <StyledWrapperImage>
            <Image
              src={media.url}
              alt={media.alternativeText}
              objectFit={"cover"}
              layout="fill"
              priority={false}
            />
          </StyledWrapperImage>
        </StyledImageContainer>
        <StyledContent>
          <StyledSectionTag>{tag}</StyledSectionTag>
          <StyledSectionHeading>{title}</StyledSectionHeading>
          <StyledDescription>
            <MarkdownComponent textHtml={body} />
          </StyledDescription>
          <StyledStatsList>
            {stats.map((e) => (
              <StatsComponent key={"stats-" + e.id} {...e} />
            ))}
          </StyledStatsList>
        </StyledContent>
      </StyledContainer>
    </StyledSection>
  );
}
