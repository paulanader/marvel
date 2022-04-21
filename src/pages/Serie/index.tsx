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
    <>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb
            data={[
              {
                title: "Series",
                backTo: "/series",
              },
              {
                title: `${serie?.title}`,
                backTo: "/series/:id",
              },
            ]}
          />
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingContent />}
          >
            {serie && (
              <div className="row g-5">
                <div className="col-5">
                  <img
                    className="img-fluid"
                    src={getThumbnail(serie.thumbnail)}
                    alt={serie?.title}
                  />
                </div>
                <div className="col">
                  <PageTitle title={serie?.title ?? "Loading..."} />
                  <p>Description: {serie.description}</p>
                </div>
              </div>
            )}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </>
  );
};
