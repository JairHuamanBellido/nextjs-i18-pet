import styled, { css } from "styled-components";

export const StyledNavbar = styled.nav`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 64px;
  padding-inline: 48px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavigationList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-right: 24px;
  position: relative;
  &::after {
    content: "";
    top: 0;
    right: 0;
    width: 2px;
    height: 32px;
    background: #eaeaea;
  }
`;
const StyledLinkActive = css`
  color: ${({ theme }) => theme.colors.primary.default};
`;

const StyledLinkInactive = css`
  color: ${({ theme }) => theme.colors.textSecondary.default};
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
export const StyledLink = styled.p<{ isSelected: boolean }>`
  font-weight: 500;
  cursor: pointer;
  ${({ isSelected }) => (isSelected ? StyledLinkActive : StyledLinkInactive)}
`;
