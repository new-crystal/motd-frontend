import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RESP } from "../../response";
import MyMusicList from "./MyMusicList";

const MyMusic = () => {
  const [upload, setUpload] = useState("");

  useEffect(() => {
    const fetchUpload = async () => {
      //const data = await axios.get("")
      const data = RESP.LIKELIST.result.musicList;
      setUpload(data);
    };
    fetchUpload();
  }, []);

  return (
    <>
      <Container>
        <Text>My Upload Music</Text>
        {upload?.map((list) => (
          <MyMusicList list={list} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 700px;
  height: 700px;
  margin: 40px auto;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 20px;
  text-align: center;
  color: #023e8a;
`;
const Text = styled.h1`
  color: rgb(79, 188, 238);
`;

export default MyMusic;
