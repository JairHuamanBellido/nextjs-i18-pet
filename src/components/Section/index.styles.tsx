import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  position: relative;
  max-width: 1440px;
  margin-inline: auto;
`;

export const StyledSectionTag = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.primary.default};
  font-weight: 700;
  margin-bottom: 8px;
`;

export const StyledSectionHeading = styled.h2`
  font-size: 28px;
  font-weight: 900;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.textPrimary.default};
  position: relative;
  z-index: 1;
  width: fit-content;
  &::after {
    content: "";
    position: absolute;
    width: 48px;
    height: 12px;
    right: -4px;
    bottom: 5px;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary.default};
  }
`;
