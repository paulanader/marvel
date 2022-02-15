import styled from 'styled-components';

export const Container = styled.header`
    background: var(--dark);
`;

export const Contant = styled.nav`
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;

    a {
        padding: 0.5rem 1rem;
        color: var(--white);
        text-decoration: none;
        font-weight: bold;

        &:hover {
            color: var(--red);
            font-weight: bold;
        }
    }
`; 


