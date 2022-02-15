import styled from 'styled-components';

export const Base = styled.div`
    
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    font-size: 1rem;
    color: var(--red);
    background: var(--black);
    border: 0;

    padding: 0 2rem;

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

