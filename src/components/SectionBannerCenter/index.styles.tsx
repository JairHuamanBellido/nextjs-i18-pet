import styled from "styled-components";

export const StyledSectionBannerCernter = styled.div`
  width: 100%;
  padding-block: 6rem;
  background-color: ${({ theme }) => theme.colors.light.default};
  position: relative;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledBody = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary.default};
  font-weight: 500;
  line-height: 150%;
  margin-top: 16px;
  max-width: 500px;
  font-size: 16px;
`;
