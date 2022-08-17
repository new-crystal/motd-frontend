import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Pagination } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();
  const musicId = 1;
  return (
    <>
      <Container>
        <Text>My Music of today</Text>
        <Box>
          <MusicBox onClick={() => navigate(`/musics/${musicId}`)}>
            <MusicImgBox
              url={
                "https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"
              }
            />
            <MusicText>Attention</MusicText>
            <MusicText> NewJeans</MusicText>
          </MusicBox>

          <MusicBox>
            <MusicImgBox
              url={
                "https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"
              }
            />
            <MusicText>Hype Boy</MusicText>
            <MusicText> NewJeans</MusicText>
          </MusicBox>

          <MusicBox>
            <MusicImgBox
              url={
                "https://image.bugsm.co.kr/album/images/1000/204845/20484595.jpg"
              }
            />
            <MusicText> FOREVER 1</MusicText>
            <MusicText>소녀시대</MusicText>
          </MusicBox>
        </Box>
      </Container>
      <Container>
        <Box>
          <MusicBox onClick={() => navigate(`/musics/${musicId}`)}>
            <MusicImgBox
              url={
                "https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"
              }
            />
            <MusicText>Attention</MusicText>
            <MusicText> NewJeans</MusicText>
          </MusicBox>

          <MusicBox>
            <MusicImgBox
              url={
                "https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"
              }
            />
            <MusicText>Hype Boy</MusicText>
            <MusicText> NewJeans</MusicText>
          </MusicBox>

          <MusicBox>
            <MusicImgBox
              url={
                "https://image.bugsm.co.kr/album/images/1000/204845/20484595.jpg"
              }
            />
            <MusicText> FOREVER 1</MusicText>
            <MusicText>소녀시대</MusicText>
          </MusicBox>
        </Box>
      </Container>
      <Pagination />
    </>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 500px;
  margin: 0px auto 0px auto;
`;
const Box = styled.div`
  display: flex;
  margin: 0px auto;
`;

const Text = styled.h2`
  color: rgb(79, 188, 238);
`;

const MusicBox = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
`;

const MusicImgBox = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const MusicText = styled.p`
  color: #023e8a;
  text-align: center;
`;
export default HomePage;
