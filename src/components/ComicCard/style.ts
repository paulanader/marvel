import styled from "styled-components";

export const Div = styled.div`
  border: none;
  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--white);

    &:hover {
      color: var(--red);
      font-weight: bold;
    }
  }
`;

export const CardBody = styled.div`
  background: var(--dark);
`;
