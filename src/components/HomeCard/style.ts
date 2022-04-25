import styled from "styled-components";

export const Base = styled.div`
  align-items: center;
  justify-content: space-between;
  color: var(--red);

  a {
    color: var(--black);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: var(--red);
      font-weight: bold;
    }
  }
`;
