import { Link } from "react-router-dom";
import { CardBody, Div } from "./style";

interface ICardProps {
  title: string;
  image: string;
  idroute: number;
}

export const EventCard: React.FC<ICardProps> = ({ title, image, idroute }) => (
  <Div className="card align-self-stretch w-100">
    <Link to={`/events/${idroute}`}>
      <img className="card-img-top w-100" src={image} alt="Imagem" />
    </Link>
    <CardBody className="card-body d-flex">
      <h5 className="card-title mt-auto mb-0">
        <Link to={`/events/${idroute}`}>{title}</Link>
      </h5>
    </CardBody>
  </Div>
);
