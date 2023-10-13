import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  color: ${({ colors }) => colors.primary};
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: ${({ colors }) => colors.secondary};
  color: #fff;
`;
