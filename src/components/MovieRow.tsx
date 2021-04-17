import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export interface MovieRowProps {
  title?: string;
  summary?: string;
  image_src?: string;
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
      <StyledCol lg={2} xs={4}>
        <img src={image_src} height={225} width={150} alt="Movie Poster" />
      </StyledCol>
      <StyledCol lg={10} xs={8}>
        <h3>{title}</h3>
        <div>{summary}</div>
      </StyledCol>
    </StyledRow>
  );
};
