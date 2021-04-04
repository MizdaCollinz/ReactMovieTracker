import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export interface MovieRowProps {
  title: string;
  summary: string;
  image_src: string;
}

const StyledRow = styled(Row)``;

const StyledCol = styled(Col)`
  font-size: 14px;
  text-align: left;
`;

export const MovieRow: React.FunctionComponent<MovieRowProps> = ({
  title,
  summary,
  image_src,
}) => {
  return (
    <StyledRow className={["p-4"]}>
      <StyledCol xs={2}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
          height={225}
          width={150}
          alt="Movie poster"
        />
      </StyledCol>
      <StyledCol xs={10}>
        <h3>{title}</h3>
        <div>{summary}</div>
      </StyledCol>
    </StyledRow>
  );
};
