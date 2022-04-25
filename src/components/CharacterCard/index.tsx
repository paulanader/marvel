import { Div } from "./style";
import { Link } from "react-router-dom";

interface ICardProps {
  name: string;
  image: string;
  idroute: number;
}

export const CharacterCard: React.FC<ICardProps> = ({
  name,
  image,
  idroute,
}) => (
  <Div className="card align-self-stretch w-100">
    <Link to={`/characters/${idroute}`}>
      <img className="card-img-top w-100" src={image} alt="Imagem" />
    </Link>
    <div className="card-body d-flex">
      <h5 className="card-title mt-auto mb-0">
        <Link to={`/characters/${idroute}`}>{name}</Link>
      </h5>
    </div>
  </Div>
);
