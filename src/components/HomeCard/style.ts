import styled from "styled-components";

export const Base = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  border: none;
  color: var(--white);

  padding: 0 2rem;

  a {
    color: var(--white);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: var(--red);
      font-weight: bold;
    }
  }
`;

export const CardBody = styled.div`
  color: var(--white);
  background: var(--dark);
`;
