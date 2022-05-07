import { SectionBannerCenter } from "../../domain/model/SectionBannerCenter.model";
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

export default function SectionCenterBannerComponent({
  banner_center,
}: SectionBannerCenter) {
  const { body, title, tag } = banner_center;
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
