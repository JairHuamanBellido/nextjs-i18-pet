import Image from "next/image";
import { Media } from "../../domain/model/Media.model";
import { Stats } from "../../domain/model/Stats.model";
import { ISectionTitle } from "../../domain/types/SectionTitle.model";
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

export interface ISectionStats {
  image: Media;
  reverse: boolean;
  heading: ISectionTitle;
  stats: Stats[];
}
export interface ISectionStatsComponent {
  section_stats: ISectionStats;
}

export default function SectionStatsComponent({
  section_stats,
}: ISectionStatsComponent) {
  const { heading, image, reverse, stats } = section_stats;
  return (
    <StyledSection>
      <StyledContainer isReverse={reverse}>
        <StyledImageContainer>
          <StyledWrapperImage>
            <Image
              src={image.url}
              alt={image.alternativeText}
              objectFit={"cover"}
              layout="fill"
              priority={false}
            />
          </StyledWrapperImage>
        </StyledImageContainer>
        <StyledContent>
          <StyledSectionTag>{heading.tag}</StyledSectionTag>
          <StyledSectionHeading>{heading.title}</StyledSectionHeading>
          <StyledDescription>
            <MarkdownComponent textHtml={heading.body} />
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
