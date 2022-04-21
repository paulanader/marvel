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
import { CreatorType } from "../../@types/CreatorType";
import { CreatorCard } from "../../components/CreatorCard";

export const Creators: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [creators, setCreator] = useState<CreatorType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [inputName, setinputName] = useState("");

  const getCreators = (page = 1, searchName = ""): void => {
    const limit = 24;
    const offset = limit * (page - 1);

    setLoading(true);
    setCurrentPage(page);

    let url = `https://gateway.marvel.com/v1/public/creators?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163&limit=${limit}&offset=${offset}`;

    if (searchName.length > 0) {
      url += `&nameStartsWith=${searchName}`;
    }
    Api.get(url)
      .then((response) => {
        setCreator(response.data?.data?.results ?? []);
        setPageCount(
          Math.ceil(
            (response.data?.data?.total ?? 0) /
              (response.data?.data?.limit ?? 1)
          )
        );
        setinputName(response.data?.data?.results?.title);
      })
      .catch(() => {
        setPageCount(0);
      })
      .finally(() => {
        setLoading(false);
        setinputName(searchName);
        setinputName("");
      });
  };

  useEffect(() => {
    getCreators();
  }, []);

  const handleSearchByKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) =>
    [event.code, event.key].includes("Enter") ? getCreators(searchPage) : null;
  const handleChangePageInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchPage(parseInt(event.target.value, 10));

  return (
    <>
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
            ]}
          />
          <PageTitle title="Creators" />
          <div className="row justify-content-end">
            <div className="col-4 py-4">
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
                    onClick={() => getCreators(1, inputName)}
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
            <div className="row row-cols-4 g-4 mb-5">
              {creators.map((creator) => (
                <div key={creator.fullName} className="col d-flex">
                  <CreatorCard
                    title={creator.fullName}
                    image={getThumbnail(creator.thumbnail)}
                    idroute={creator.id}
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
                      getCreators(event.selected + 1, inputName)
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
                          onClick={() => getCreators(searchPage, inputName)}
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
