import styled from "styled-components";

export const StyledSectionStory = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.highlightSurface};
  padding-block: ${({ theme }) => theme.spacing.xxl};
`;

export const StyledContainer = styled.div<{ isReverse: boolean }>`
  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : " row")};
  justify-content: space-between;
`;

export const StyledContent = styled.div``;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledWrapperImage = styled.div`
  width: 360px;
  height: 360px;
  position: relative;
`;

export const StyledStoriesList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledSlogan = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary.default};
  font-style: italic;
  font-size: 16px;
  line-height: 150%;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;
export const StyledAuthor = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary.default};
  font-style: italic;
  font-weight: 600;
  line-height: 150%;
  position: relative;
  padding-left: 24px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 16px;
    height: 1px;
    background: ${({ theme }) => theme.colors.textPrimary.default};
  }
`;
