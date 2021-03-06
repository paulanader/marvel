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
import { CharacterCard } from "../../components/CharacterCard";
import { CharacterType } from "../../@types/CharacterType";
import { getThumbnail } from "../../uteis/data";
import Pagination from "../../components/Pagination";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Wrapper } from "../../components/Wrapper";

export const Characters: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [inputName, setinputName] = useState("");

  const getCharacters = (page = 1, searchName = ""): void => {
    const limit = 24;
    const offset = limit * (page - 1);

    setLoading(true);
    setCurrentPage(page);

    let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163&limit=${limit}&offset=${offset}`;

    if (searchName.length > 0) {
      url += `&nameStartsWith=${searchName}`;
    }
    Api.get(url)
      .then((response) => {
        setCharacters(response.data?.data?.results ?? []);
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
    getCharacters();
  }, []);

  const handleSearchByKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) =>
    [event.code, event.key].includes("Enter")
      ? getCharacters(1, inputName)
      : null;
  const handleChangePageInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchPage(parseInt(event.target.value, 10));

  return (
    <Wrapper>
      <Header />
      <Menu />
      <Main>
        <Container>
          <Breadcrumb page="Characters" />
          <div className="row row-cols-1 row-cols-sm-2 align-items-center justify-content-between">
            <div className="col">
              <PageTitle title="Characters" />
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
                    onClick={() => getCharacters(1, inputName)}
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
              {characters.map((character) => (
                <div key={character.name} className="col d-flex">
                  <CharacterCard
                    name={character.name}
                    image={getThumbnail(character.thumbnail)}
                    idroute={character.id}
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
                      getCharacters(event.selected + 1, inputName)
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
                          onClick={() => getCharacters(searchPage, inputName)}
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
    </Wrapper>
  );
};
