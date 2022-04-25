import styled from "styled-components";

export const Content = styled.nav`
  a {
    color: var(--white);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: var(--red);
      font-weight: bold;
    }

    span {
      color: var(--white);
      font-weight: bold;
    }
  }
`;
