import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Container } from "../../components/Container";
import { PageTitle } from "../../components/PageTitle";
import { LoadingGate } from "../../components/LoadingGate";

import { Api } from "../../services/Api";
import LoadingContent from "../../components/LoadingContent";
import { getThumbnail } from "../../uteis/data";
import { Breadcrumb } from "../../components/Breadcrumb";
import { CreatorType } from "../../@types/CreatorType";
import { Wrapper } from "../../components/Wrapper";

export const Creator: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [creator, setCreator] = useState<CreatorType | null>(null);

  const { id } = useParams();
  const getCreator = (): void => {
    setLoading(true);

    Api.get(
      `https://gateway.marvel.com/v1/public/creators/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
    )
      .then((response) => {
        setCreator(response.data?.data?.results[0] ?? null);
      })
      .catch(() => null)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCreator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb
            data={[
              {
                title: "Creators",
                backTo: "/creators",
              },
              {
                title: `${creator?.fullName}`,
                backTo: "/creators/:id",
              },
            ]}
          />
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingContent />}
          >
            {creator && (
              <div className="row row-cols-1 row-cols-sm-2 g-5">
                <div className="col-5">
                  <img
                    className="img-fluid"
                    src={getThumbnail(creator.thumbnail)}
                    alt={creator?.fullName}
                  />
                </div>
                <div className="col text-white">
                  <div className="mb-3">
                    <PageTitle title={creator?.fullName ?? "Loading..."} />
                  </div>
                </div>
                {creator.description && (
                  <div className="mb-3">
                    <span className="me-1 fw-bold">Description:</span>
                    <span>{creator.description}</span>
                  </div>
                )}
                {creator.modified && (
                  <div className="mb-3">
                    <span className="me-1 fw-bold">Modified:</span>
                    <span>{creator.modified}</span>
                  </div>
                )}
                {creator.fullName && (
                  <div className="mb-3">
                    <span className="me-1 fw-bold">FullName:</span>
                    <span>{creator.fullName}</span>
                  </div>
                )}
              </div>
            )}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
