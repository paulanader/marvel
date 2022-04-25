import { Contant } from "./styles";

interface IPageTitleProps {
  title: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ title }) => (
  <Contant className="d-flex align-item-center mb-1">
    <h2 className="fs-3 text-white me-2 d-flex align-items-center">{title}</h2>
  </Contant>
);
