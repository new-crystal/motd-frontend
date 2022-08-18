import { useState } from "react";
import styled from "styled-components";
import AddBoard from "./AddBoard";
import Boards from "./Boards";
import { decodeToken } from "react-jwt";

const BoardPage = () => {
  const [show, setShow] = useState(true);
  const token = localStorage.getItem("token");
  const payload = decodeToken(token);

  return (
    <Container>
      <h1> Board of today</h1>
      {show ? (
        <>
          {payload.userId !== "" ? (
            <Button onClick={() => setShow(false)}>ADD</Button>
          ) : (
            <></>
          )}

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
