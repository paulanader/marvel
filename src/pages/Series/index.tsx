import { useState, useEffect } from "react";

import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Container } from "../../components/Container";
import { PageTitle } from "../../components/PageTitle";
import { LoadingGate } from "../../components/LoadingGate";
import { LoadingCards } from "../../components/LoadingCards";

import { Api } from "../../services/Api";
import { getThumbnail } from "../../uteis/data";
import Pagination from "../../components/Pagination";
import { Breadcrumb } from "../../components/Breadcrumb";
import { SerieCard } from "../../components/SerieCard";
import { SerieType } from "../../@types/SerieType";

export const Series: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [series, setSeries] = useState<SerieType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [inputName, setinputName] = useState("");

  const getSeries = (page = 1, searchName = ""): void => {
    const limit = 24;
    const offset = limit * (page - 1);

    setLoading(true);
    setCurrentPage(page);

    let url = `https://gateway.marvel.com/v1/public/series?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163&limit=${limit}&offset=${offset}`;

    if (searchName.length > 0) {
      url += `&nameStartsWith=${searchName}`;
    }
    Api.get(url)
      .then((response) => {
        setSeries(response.data?.data?.results ?? []);
        setPageCount(
          Math.ceil(
            (response.data?.data?.total ?? 0) /
              (response.data?.data?.limit ?? 1)
          )
        );
      })
      .catch(() => {
        setPageCount(0);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getSeries();
  }, []);

  const handleSearchByKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) =>
    [event.code, event.key].includes("Enter") ? getSeries(1, inputName) : null;
  const handleChangePageInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchPage(parseInt(event.target.value, 10));

  return (
    <>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb page="Series" />
          <div className="row row-cols-1 row-cols-sm-2 align-items-center justify-content-between">
            <div className="col">
              <PageTitle title="Series" />
            </div>
            <div className="col py-4">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  value={inputName}
                  onKeyPress={handleSearchByKeyPress}
                  onChange={(ev) => setinputName(ev.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => getSeries(1, inputName)}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <LoadingGate
            waitFor={isLoading === false}
            meanWhile={<LoadingCards show numberOfCards={4} />}
          >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
              {series.map((serie) => (
                <div key={serie.title} className="col d-flex">
                  <SerieCard
                    title={serie.title}
                    image={getThumbnail(serie.thumbnail)}
                    idroute={serie.id}
                  />
                </div>
              ))}
            </div>
            {pageCount > 1 && (
              <>
                <div className="mb-4">
                  <Pagination
                    pageCount={pageCount}
                    forcePage={currentPage - 1}
                    onPageChange={(event) =>
                      getSeries(event.selected + 1, inputName)
                    }
                  />
                </div>
                <div className="row justify-content-center">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="number"
                        min="1"
                        max={pageCount}
                        value={currentPage}
                        onKeyPress={handleSearchByKeyPress}
                        onChange={handleChangePageInput}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => getSeries(searchPage, inputName)}
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </>
  );
};
