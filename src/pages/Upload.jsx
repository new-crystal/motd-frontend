import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addMusic } from "../redux/modules/MusicSlice";
import { Navigate, useNavigate } from "react-router";

const Upload = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const input_ref = useRef();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const dispatch = useDispatch();

  const onChangeInputHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onChangeInputTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeInputArtistHandler = (event0) => {
    setArtist(event0.target.value);
  };

  const onChangeInputAlbumHandler = (event1) => {
    setAlbum(event1.target.value);
  };

  const postHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userUploadImage", selectedFile);
    dispatch(__addMusic({ title, artist, album, formData, token }));
    alert("업로드가 완료되었습니다!");
    navigate("/");
  };

  return (
    <>
      <React.Fragment>
        <InputBox>
          <h1>My Music of today upload</h1>
          <Input
            type="text"
            ref={input_ref}
            placeholder="music title"
            onChange={onChangeInputTitleHandler}
          />
          <br />
          <Input
            type="text"
            ref={input_ref}
            placeholder="artist"
            onChange={onChangeInputArtistHandler}
          />
          <br />
          <Input
            type="text"
            ref={input_ref}
            placeholder="album"
            onChange={onChangeInputAlbumHandler}
          />
          <br />
          <input
            ref={input_ref}
            type="file"
            name="music"
            onChange={(e) => onChangeInputHandler(e)}
          />
          <br />
          <UploadButton onClick={postHandler}>UPLOAD</UploadButton>
        </InputBox>
      </React.Fragment>
    </>
  );
};

const InputBox = styled.form`
  width: 700px;
  margin: 20px auto;
  align-items: center;
  text-align: center;
  color: rgb(79, 188, 238);

  label {
    background-color: white;
    color: rgb(79, 188, 238);
    padding: 5px;
    margin: 20px 250px;
    border: 2px solid rgb(79, 188, 238);
    border-radius: 5px;
    &:hover {
      background-color: rgb(79, 188, 238);
      color: white;
    }
  }
`;

const Input = styled.input`
  height: 30px;
  width: 250px;
  margin: 20px 250px;
  border: 1px solid rgb(79, 188, 238);
  border-radius: 5px;
`;

const UploadButton = styled.button`
  background-color: white;
  color: rgb(79, 188, 238);
  padding: 5px;
  margin: 20px 300px;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default Upload;
