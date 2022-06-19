import styled from "styled-components";

export const StyledSectionCardStories = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-block: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const StyledCardStory = styled.a`
  position: relative;
  max-width: 300px;
`;

export const StyledTitle = styled.h2`
  font-weight: 900;
  line-height: 1.5;
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const StyledSlogan = styled.p`
  line-height: 1.5;
  font-size: 16px;
`;
