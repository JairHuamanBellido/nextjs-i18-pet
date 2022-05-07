import styled from "styled-components";

export const StyledContainer = styled.div<{ isReverse: boolean }>`
  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : " row")};
  justify-content: space-around;
  align-items: center;
  height: 700px;
  position: relative;
  padding: 48px 0px;
`;

export const StyledContent = styled.div`
  width: 50%;
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 50%;
`;
export const StyledWrapperImage = styled.div`
  width: 360px;
  height: 515px;
  position: relative;
`;
export const StyledDescription = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const StyledStatsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
