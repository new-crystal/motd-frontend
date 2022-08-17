import { useRef, useState } from "react";
import styled from "styled-components";
import AddBoard from "./AddBoard";
import Boards from "./Boards";

const BoardPage = () => {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <h1> My Board of today</h1>
      {show ? (
        <>
          <Button onClick={() => setShow(!show)}>ADD</Button>
          <Boards />
        </>
      ) : (
        <AddBoard setShow={setShow} />
      )}
    </Container>
  );
};
const Container = styled.div`
  margin: 20px auto;
  text-align: center;
  color: #023e8a;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
  height: 40px;
  width: 60px;
  padding: 5px;
  margin: 10px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default BoardPage;
