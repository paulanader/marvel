import styled from 'styled-components';

export const Div = styled.div`  
    a {
        text-decoration: none;
        font-weight: bold;
        color: --var(black);
    }
    &:hover {
            border-top: var(--red);
            font-weight: bold;        
   }
`