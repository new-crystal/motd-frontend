import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Pagination from "./PaginationCopy";
import MusicBoxPage from "./MusicBoxPage";
import { RESP } from "../../response";

const HomePage = () => {
  const navigate = useNavigate();
  const musicId = 1;
  const [posts, setPosts] = useState([]);
  const [likePosts, setLikePosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      //const data = await axios.get("/api/Musics?page=1")
      const data = RESP.MUSICLIST.result.musicList;
      setPosts(data);
    };
    fetchData();
  });

  useEffect(() => {
    const fetchLikeData = async () => {
      //const likeData = await axios.get("/api/Musics?page=1")
      const likeData = RESP.LIKELIST.result.musicList;
      setLikePosts(likeData);
    };
    fetchLikeData();
  });

  const indexLastPost = page * limit;
  const indexFirstPost = indexLastPost - limit;

  const current = (posts) => {
    let current = 0;
    current = posts.slice(indexFirstPost, indexLastPost);
    return current;
  };

  const currentPost = (likePosts) => {
    let currentPost = 0;
    currentPost = likePosts.slice(indexFirstPost, indexLastPost);
    return currentPost;
  };

  return (
    <>
      <Container>
        <Text>🎧My Music of today🎧</Text>
        <Box>
          {current(posts)?.map((list, idx) => {
            return <MusicBoxPage list={list} key={idx} />;
          })}
        </Box>
      </Container>

      <Pagination
        totalPost={posts.length}
        setPage={setPage}
        page={page}
        limit={limit}
      />

      <Container>
        <Text>💙Music of I like💙</Text>
        <Box>
          {currentPost(likePosts)?.map((list, idx) => {
            return <MusicBoxPage list={list} key={idx} />;
          })}
        </Box>
      </Container>
      <Pagination
        totalPost={posts.length}
        setPage={setPage}
        page={page}
        limit={limit}
      />
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

export default HomePage;
