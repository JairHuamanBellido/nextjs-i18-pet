import { ISectionTitle } from "../../domain/types/SectionTitle.model";
import MarkdownComponent from "../Markdown";
import {
  StyledSection,
  StyledSectionHeading,
  StyledSectionTag,
} from "../Section/index.styles";
import {
  StyledContainer,
  StyledBody,
  StyledSectionBannerCernter,
} from "./index.styles";

export interface ISectionBannerCenter {
  heading: ISectionTitle;
}
export interface ISectionCenterBannerComponent {
  banner_center: ISectionBannerCenter;
}

export default function SectionCenterBannerComponent({
  banner_center,
}: ISectionCenterBannerComponent) {
  const { body, title, tag } = banner_center.heading;
  return (
    <StyledSectionBannerCernter>
      <StyledSection>
        <StyledContainer>
          {tag && <StyledSectionTag>{tag}</StyledSectionTag>}
          <StyledSectionHeading>{title}</StyledSectionHeading>
          <StyledBody>
            <MarkdownComponent textHtml={body} />
          </StyledBody>
        </StyledContainer>
      </StyledSection>
    </StyledSectionBannerCernter>
  );
}
