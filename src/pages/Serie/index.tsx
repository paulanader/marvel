import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Container } from "../../components/Container";
import { LoadingGate } from "../../components/LoadingGate";

import { Api } from "../../services/Api";
import LoadingContent from "../../components/LoadingContent";
import { Breadcrumb } from "../../components/Breadcrumb";
import { SerieType } from "../../@types/SerieType";
import { Wrapper } from "../../components/Wrapper";
import Informations from "../../components/Informations";

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
            {serie && <Informations info={serie} />}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
