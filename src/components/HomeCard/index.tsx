import caracterImg from "../../assets/caracterImg.jpg";
import comicsImg from "../../assets/comicImg.jpg";
import creatorsImg from "../../assets/creatorsImg.jpg";
import eventsImg from "../../assets/eventsImg.jpg";
import seriesImg from "../../assets/seriesImg.jpg";
import storiesImg from "../../assets/storiesImg.jpg";
import { Base, CardBody } from "./style";

import { Link } from "react-router-dom";

export function HomeCard() {
  return (
    <Base>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5 p-3 w-100">
        <div className="col d-flex">
          <div className="card align-self-stretch w-100">
            <Link to="/characters">
              <img
                className="card-img-top w-100"
                src={caracterImg}
                alt="Imagem"
              />
            </Link>
            <CardBody className="card-body d-flex justify-content-center">
              <h5 className="card-title mt-auto mb-0">
                <Link to="/characters">Character</Link>
              </h5>
            </CardBody>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card align-self-stretch">
            <Link to="/comics">
              <img className="card-img-top" src={comicsImg} alt="Imagem" />
            </Link>
            <CardBody className="card-body d-flex justify-content-center">
              <h5 className="card-title mt-auto mb-0">
                <Link to="/comics">Comics</Link>
              </h5>
            </CardBody>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card align-self-stretch">
            <Link to="/creators">
              <img className="card-img-top" src={creatorsImg} alt="Imagem" />
            </Link>
            <CardBody className="card-body d-flex justify-content-center">
              <h5 className="card-title mt-auto mb-0">
                <Link to="/creators">Creators</Link>
              </h5>
            </CardBody>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card align-self-stretch">
            <Link to="/events">
              <img className="card-img-top" src={eventsImg} alt="Imagem" />
            </Link>
            <CardBody className="card-body d-flex justify-content-center">
              <h5 className="card-title mt-auto mb-0">
                <Link to="/events">Events</Link>
              </h5>
            </CardBody>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card align-self-stretch">
            <Link to="/series">
              <img className="card-img-top" src={seriesImg} alt="Imagem" />
            </Link>
            <CardBody className="card-body d-flex justify-content-center">
              <h5 className="card-title mt-auto mb-0">
                <Link to="/series">Series</Link>
              </h5>
            </CardBody>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card align-self-stretch">
            <Link to="/stories">
              <img className="card-img-top" src={storiesImg} alt="Imagem" />
            </Link>
            <CardBody className="card-body d-flex justify-content-center">
              <h5 className="card-title mt-auto mb-0">
                <Link to="/stories">Stories</Link>
              </h5>
            </CardBody>
          </div>
        </div>
      </div>
    </Base>
  );
}
