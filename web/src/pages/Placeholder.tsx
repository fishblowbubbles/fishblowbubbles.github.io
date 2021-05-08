import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const Placeholder: React.FC = () => (
  <Wrapper>
    <h1>Sorry, this page is not ready yet!</h1>
  </Wrapper>
);
