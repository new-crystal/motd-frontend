import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import MusicImage from "./MusicImage";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router";

const Music = () => {
  const { musicId } = useParams();
  const [like, setLike] = useState(false);
  const [data, setData] = useState("");

  const fetchResponse = async () => {
    const response = await axios.get(
      `http://3.34.47.211/api/musics/${musicId}`
    );
    setData(response.data.result.musicDesc);
  };

  const onClickLike = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.patch(
        `http://3.34.47.211/api/musics/${musicId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLike(!like);
      return console.log(response);
    } catch (err) {
      return console.log(err);
    }
  };
  useEffect(() => {
    fetchResponse();
  }, []);

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
        volume={0.1}
        src={data.musicUrl}
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
