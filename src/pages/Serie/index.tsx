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
import { SerieType } from "../../@types/SerieType";
import { Wrapper } from "../../components/Wrapper";

export const Serie: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [serie, setSerie] = useState<SerieType | null>(null);

  const { id } = useParams();
  const getSerie = (): void => {
    setLoading(true);

    Api.get(
      `https://gateway.marvel.com/v1/public/series/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
    )
      .then((response) => {
        setSerie(response.data?.data?.results[0] ?? null);
      })
      .catch(() => null)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getSerie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb
            page={`${serie?.title}`}
            data={[
              {
                title: "Series",
                backTo: "/series",
              },
            ]}
          />
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingContent />}
          >
            {serie && (
              <div className="row row-cols-1 row-cols-sm-2 g-5">
                <div className="col-5">
                  <img
                    className="img-fluid"
                    src={getThumbnail(serie.thumbnail)}
                    alt={serie?.title}
                  />
                </div>
                <div className="col text-white">
                  <div className="mb-3">
                    <PageTitle title={serie?.title ?? "Loading..."} />
                  </div>
                  {serie.description && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Description:</span>
                      <span>{serie.description}</span>
                    </div>
                  )}
                  {serie.modified && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Modified:</span>
                      <span>{serie.modified}</span>
                    </div>
                  )}
                  {serie.title && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Title:</span>
                      <span>{serie.title}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
