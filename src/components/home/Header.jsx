import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const onClickLogout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    navigate("/");
  };

  return (
    <HeaderBox>
      <TitleBox>
        <Button onClick={() => navigate("/")}>
          <h1>🎼 MOTD</h1>
        </Button>
      </TitleBox>
      <BtnBox>
        {token !== null ? (
          <>
            <Button onClick={() => onClickLogout()}>logout</Button>
            {/* <Button onClick={() => navigate("/my_page")}>My page</Button> */}
            <Button onClick={() => navigate("/upload")}>upload</Button>
            <Button onClick={() => navigate("/posts")}>board</Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/login")}>login</Button>
            <Button onClick={() => navigate("/posts")}>board</Button>
          </>
        )}
      </BtnBox>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  color: rgb(79, 188, 238);
  display: flex;
  width: 1000px;
  margin: 0px auto;
`;

const TitleBox = styled.div`
  width: 600px;
`;
const BtnBox = styled.div`
  margin: auto;
`;
const Button = styled.button`
  background-color: white;
  margin: 5px;
  color: rgb(79, 188, 238);
  padding: 10px;
  border: 0px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: #023e8a;
  }
`;

export default Header;
