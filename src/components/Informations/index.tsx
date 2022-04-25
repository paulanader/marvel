import { CharacterType } from "../../@types/CharacterType";
import { ComicType } from "../../@types/ComicType";
import { CreatorType } from "../../@types/CreatorType";
import { EventType } from "../../@types/EventType";
import { SerieType } from "../../@types/SerieType";
import { StoryType } from "../../@types/StoryType";
import { getThumbnail } from "../../uteis/data";
import { PageTitle } from "../PageTitle";

interface IInformationsProps {
  info:
    | CharacterType
    | ComicType
    | CreatorType
    | EventType
    | SerieType
    | StoryType;
}

const Informations: React.FC<IInformationsProps> = ({ info }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 g-5">
      <div className="col-5">
        <img
          className="img-fluid"
          src={getThumbnail(info.thumbnail)}
          alt={info?.name}
        />
      </div>
      <div className="col text-white">
        <div className="mb-3">
          {info.name && <PageTitle title={info?.name ?? "Loading..."} />}
          {info.title && <PageTitle title={info?.title ?? "Loading..."} />}
        </div>

        {info.description && (
          <div className="mb-3">
            <span className="fw-bold me-1">Description:</span>
            <span>{info.description}</span>
          </div>
        )}
        {info.modified && (
          <div className="mb-3">
            <span className="fw-bold me-1">Modified:</span>
            <span>
              {new Intl.DateTimeFormat("pt-BR").format(new Date(info.modified))}
            </span>
          </div>
        )}
        {info.title && (
          <div className="mb-3">
            <span className="fw-bold me-1">title:</span>
            <span>{info.title}</span>
          </div>
        )}
        {info.variantDescription && (
          <div className="mb-3">
            <span className="fw-bold me-1">variantDescription:</span>
            <span>{info.variantDescription}</span>
          </div>
        )}
        {info.diamondCode && (
          <div className="mb-3">
            <span className="fw-bold me-1">diamondCode:</span>
            <span>{info.diamondCode}</span>
          </div>
        )}
        {info.fullName && (
          <div className="mb-3">
            <span className="fw-bold me-1">FullName:</span>
            <span>{info.fullName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Informations;
