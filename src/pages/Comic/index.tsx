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
import { ComicType } from "../../@types/ComicType";
import { Wrapper } from "../../components/Wrapper";
import Informations from "../../components/Informations";

export const Comic: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [comic, setComic] = useState<ComicType | null>(null);

  const { id } = useParams();
  const getComic = (): void => {
    setLoading(true);

    Api.get(
      `https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
    )
      .then((response) => {
        setComic(response.data?.data?.results[0] ?? null);
      })
      .catch(() => null)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getComic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb
            page={`${comic?.title}`}
            data={[
              {
                title: "Comics",
                backTo: "/comics",
              },
            ]}
          />
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingContent />}
          >
            {comic && <Informations info={comic} />}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
