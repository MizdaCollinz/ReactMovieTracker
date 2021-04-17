import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { AppHeader } from "./components/AppHeader";
import { MovieRow } from "./components/MovieRow";
import { Container } from "react-bootstrap";
import { Movie, useMovies } from "./hooks/useMovies";

const StyledApp = styled.div`
  text-align: center;
`;

const Search = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 8px;
  font-weight: 500;
`;

export const App: React.FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const onSearchChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );
  const { data: movies, status } = useMovies(query);
  return (
    <StyledApp>
      <AppHeader />
      <Search
        placeholder="Enter search term"
        value={query}
        onChange={onSearchChanged}
      />
      <Container fluid>
        {status === "error"
          ? null //TODO display error state
          : status === "loading"
          ? null //TODO display loading state
          : !!movies
          ? movies.map((row: Movie) => (
              <MovieRow
                key={row.id}
                title={row.title}
                summary={row.overview}
                image_src={row.poster_path || ""}
              />
            ))
          : null}
      </Container>
    </StyledApp>
  );
};

export default App;
