import React, { useState } from "react";
import styled from "styled-components";
import { AppHeader } from "./components/AppHeader";
import { MovieRow } from "./components/MovieRow";
import { Container } from "react-bootstrap";

const StyledApp = styled.div`
  text-align: center;
`;

const Search = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 8px;
  font-weight: 500;
`;

interface Movie {
  id: string;
  title: string;
  summary: string;
}

export const App: React.FunctionComponent = () => {
  const [rows, setRows] = useState<Movie[]>([
    { id: "0", title: "Apple", summary: "Lorem ipsum dsfkodeskfosdk." },
    { id: "1", title: "Orange", summary: "Lorem ipsum dsfkodeskfosdk." },
    { id: "2", title: "Banana", summary: "Lorem ipsum dsfkodeskfosdk." },
  ]);

  return (
    <StyledApp>
      <AppHeader />
      <Search placeholder="Enter search term" />
      <Container fluid>
        {rows.map((row: any) => (
          <MovieRow
            key={row.id}
            title={row.title}
            summary={row.summary}
            image_src=""
          />
        ))}
      </Container>
    </StyledApp>
  );
};

export default App;
