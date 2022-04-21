import bannerImg from "../../assets/banner.jpg";
import { Contant } from "./styled";

export const Banner = () => (
  <Contant
    className="col d-flex justify-content-center"
    src={bannerImg}
    alt="Marvel"
  />
);
