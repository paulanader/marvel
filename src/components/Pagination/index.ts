import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        margin: 0 4px;

        a {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 3px;

            text-decoration: none;
            background-color: var(--red);
            color: #fff !important;
        }

        &.selected a {
            background-color: var(--red);
        }

        &.previous,
        &.next {
            display: none;
        }
    }
`; 

export default Pagination;