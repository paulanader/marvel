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
import { EventType } from "../../@types/EventType";

export const Event: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [event, setEvent] = useState<EventType | null>(null);

  const { id } = useParams();
  const getEvent = (): void => {
    setLoading(true);

    Api.get(
      `https://gateway.marvel.com/v1/public/events/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
    )
      .then((response) => {
        setEvent(response.data?.data?.results[0] ?? null);
      })
      .catch(() => null)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb
            page={`${event?.title}`}
            data={[
              {
                title: "Events",
                backTo: "/events",
              },
            ]}
          />
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingContent />}
          >
            {event && (
              <div className="row row-cols-1 row-cols-sm-2 g-5">
                <div className="col-5">
                  <img
                    className="img-fluid"
                    src={getThumbnail(event.thumbnail)}
                    alt={event?.title}
                  />
                </div>
                <div className="col text-white">
                  <div className="mb-3">
                    <PageTitle title={event?.title ?? "Loading..."} />
                  </div>
                  {event.description && (
                    <div className="mb-3">
                      <span className="fw-bold">Description:</span>
                      <span>{event.description}</span>
                    </div>
                  )}
                  {event.modified && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">Modified:</span>
                      <span>{event.modified}</span>
                    </div>
                  )}
                  {event.title && (
                    <div className="mb-3">
                      <span className="fw-bold me-1">title:</span>
                      <span>{event.title}</span>
                    </div>
                  )}
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
