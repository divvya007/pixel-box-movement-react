import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  border: 1px solid black;
  height: 500px;
  width: 500px;
  margin-top: 10px;
  position: relative;
`;

const Tile = styled.div`
  border: 1px solid black;
  height: 10px;
  width: 10px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

export default function Grid() {
  const [move, setMove] = useState();
  const [left, setLeft] = useState(100);

  return (
    <>
      <Container>
        <Tile left={left} top={100}></Tile>
      </Container>
      <button onClick={() => setLeft(left + 10)}>click me</button>
    </>
  );
}
