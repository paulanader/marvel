import { Link } from "react-router-dom";
import { Div } from "./styles";
import marvelstories from "../../assets/marvelstories.png";

interface ICardProps {
  title: string;
  idroute: number;
}

export const StoryCard: React.FC<ICardProps> = ({ title, idroute }) => (
  <Div className="card align-self-stretch w-100">
    <Link to={`/stories/${idroute}`}>
      <img className="card-img-top w-100" src={marvelstories} alt="Imagem" />
    </Link>
    <div className="card-body d-flex">
      <h5 className="card-title mt-auto mb-0">
        <Link to={`/stories/${idroute}`}>{title}</Link>
      </h5>
    </div>
  </Div>
);
