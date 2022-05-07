import styled from "styled-components";

export const StyledStatsContainer = styled.div``;

export const StyledStatsValue = styled.p`
  color: ${({ theme }) => theme.colors.primary.default};
  font-weight: 600;
  font-size: 48px;
  line-height: 150%;
`;

export const StyledStatsLabel = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary.default};
  font-size: 16px;
  line-height: 150%;
  font-weight: 600;
`;
