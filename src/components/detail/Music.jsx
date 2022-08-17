import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import MusicImage from "./MusicImage";
import styled from "styled-components";
import { RESP } from "../../response";
import axios from "axios";
import { useParams } from "react-router";

const Music = () => {
  const { musicId } = useParams();
  const [like, setLike] = useState(false);
  const resp = RESP.MUSICS;

  //const data = axios.get(`/musics/${musicId}`)
  const data = resp.result.musicDesc;

  const onClickLike = (like) => {
    //axios.post("", like);
    setLike(!like);
  };

  return (
    <Container>
      <MusicBox>
        <h1>{data.title}</h1>
        <h4>{data.artist}</h4>
        <p>{data.album}</p>
        <LikeBtn
          onClick={() => {
            onClickLike(like);
          }}
        >
          {like ? "💙" : "🤍"}
        </LikeBtn>
        <p>{like ? 1000 : 999}</p>
      </MusicBox>

      <MusicImage />

      <StyledPlayer
        //autoPlay
        src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
      />
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
const LikeBtn = styled.button`
  background-color: white;
  border: 0px solid white;
`;
const MusicBox = styled.div`
  padding: 0px;
`;

const StyledPlayer = styled(AudioPlayer)`
  width: 700px;
  margin: 0px auto;
  border: 1px solid rgb(79, 188, 238);
  border-radius: 10px;
`;

export default Music;
