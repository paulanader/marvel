import { Breadcrumb as Pagelocation } from 'react-bootstrap' ;
import { Link } from "react-router-dom";
import { Content } from './styles';

type BreadcrumbItemType = {
    title: string;
    backTo: string;
};

interface BreadcrumbProps {
    data?: BreadcrumbItemType[];
    hideHome?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ data = [], hideHome = false }) => (
    <div className="row justify-content-end">
        <Content className="container">
            <Pagelocation className="pt-3">
                {!hideHome && <Pagelocation.Item className="text-muted"><Link to="/">Home</Link></Pagelocation.Item>}
                {data.map((breadcrumbItem) => (
                    <Pagelocation.Item className="text-muted"><Link to={breadcrumbItem.backTo}>{breadcrumbItem.title}</Link></Pagelocation.Item>
                ))}
                {data.map((breadcrumbItem) => (
                    <Pagelocation.Item className="text-muted"><Link to={breadcrumbItem.backTo}>{breadcrumbItem.title}</Link></Pagelocation.Item>
                ))}
            </Pagelocation>
        </Content>
    </div>
);
