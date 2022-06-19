import styled from "styled-components";

export const StledStoryPage = styled.div`
  padding-top: 128px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleHeading = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 1.25;
  margin-top: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const StyledSlogan = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textSecondary.default};
`;

export const StyledAuthor = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 32px;
  align-items: center;
  & img {
    border-radius: 50%;
  }
`;
export const StyledBody = styled.div`
  text-align: justify;
`;
export const StyledStoryLabel = styled.h2`
  color: ${({ theme }) => theme.colors.primary.default};
  font-size: 40px;
  font-weight: 800;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.textSecondary.default}3a;
  width: 100%;
`;
export const StyledAuthorName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary.default};
  margin-left: 24px;
`;
