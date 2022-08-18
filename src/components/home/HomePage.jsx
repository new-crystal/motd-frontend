import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./PaginationCopy";
import MusicBoxPage from "./MusicBoxPage";
import { decodeToken } from "react-jwt";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [likePosts, setLikePosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const token = localStorage.getItem("token");
  const payload = decodeToken(token);

  const fetchData = async () => {
    const response = await axios.get("http://3.34.47.211/api/musics?page=1");
    const data = response.data.result.musicList;
    setPosts(data);
  };

  const fetchLikeData = async () => {
    const response = await axios.get(
      "http://3.34.47.211/api/users/my-like-musics?page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const likeData = response.data.result.musicList;
    setLikePosts(likeData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchLikeData();
  }, []);

  const indexLastPost = page * limit;
  const indexFirstPost = indexLastPost - limit;

  const current = (posts) => {
    let current = 0;
    current = posts?.slice(indexFirstPost, indexLastPost);
    return current;
  };

  const currentPost = (likePosts) => {
    let currentPost = 0;
    currentPost = likePosts?.slice(indexFirstPost, indexLastPost);
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
  height: 400px;
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
