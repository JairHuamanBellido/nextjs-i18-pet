import styled from "styled-components";

export const StyledButton = styled.button`
  & a {
    padding: 16px 32px;
    cursor: pointer;
    border-radius: 100px;
    border: 2px solid ${({ theme }) => theme.colors.textSecondary.default};
    color: ${({ theme }) => theme.colors.textSecondary.default};
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.primary.default};
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }
`;
