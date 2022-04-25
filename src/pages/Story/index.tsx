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
import { Breadcrumb } from "../../components/Breadcrumb";
import { StoryType } from "../../@types/StoryType";

import marvelstories from "../../assets/marvelstories.png";
import { Wrapper } from "../../components/Wrapper";

export const Story: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [story, setStory] = useState<StoryType | null>(null);

  const { id } = useParams();
  const getStory = (): void => {
    setLoading(true);

    Api.get(
      `https://gateway.marvel.com/v1/public/stories/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
    )
      .then((response) => {
        setStory(response.data?.data?.results[0] ?? null);
      })
      .catch(() => null)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb
            page={`${story?.title}`}
            data={[
              {
                title: "Stories",
                backTo: "/stories",
              },
            ]}
          />
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingContent />}
          >
            {story && (
              <div className="row row-cols-1 row-cols-sm-2 g-5">
                <div className="col-5">
                  <img
                    className="img-fluid"
                    src={marvelstories}
                    alt={story?.title}
                  />
                </div>
                <div className="col text-white">
                  <div className="mb-3">
                    <PageTitle title={story?.title ?? "Loading..."} />
                  </div>
                  {story.description && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Description:</span>
                      <span>{story.description}</span>
                    </div>
                  )}
                  {story.modified && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Modified:</span>
                      <span>{story.modified}</span>
                    </div>
                  )}
                  {story.title && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Title:</span>
                      <span>{story.title}</span>
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
