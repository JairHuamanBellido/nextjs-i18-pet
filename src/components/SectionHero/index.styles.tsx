import styled from "styled-components";

export const StyledSectionHero = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.primary.highlightSurface};
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 64px;
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary.default};
  line-height: 150%;
  margin-bottom: 12px;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary.default};
  text-align: justify;
  line-height: 150%;
  max-width: 400px;
  font-weight: 500;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
