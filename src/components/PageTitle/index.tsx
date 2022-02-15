import {MdArrowBack} from 'react-icons/md';
import { Link } from "react-router-dom";
import { Contant } from './styles';

interface IPageTitleProps {
    title: string;
    backTo?: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ title, backTo= '/'}) => (
    <Contant className="d-flex align-item-center mb-1">        
            <Link
                className="fs-3 text-white me-2 d-flex align-items-center"
                to={backTo}
            >        
            <h1 className="fs-3 fw-light text-white m-0">{title}</h1>
            </Link>
    </Contant>
);