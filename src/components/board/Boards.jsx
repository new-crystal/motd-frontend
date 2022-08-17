import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { __getPostsThunk } from "../../redux/modules/boardSlice";

const Boards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.board.posts);

  useEffect(() => {
    dispatch(__getPostsThunk());
  }, [dispatch]);

  return (
    <div>
      {posts?.map((post) => (
        <Board key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
          <NicknameBox>
            <p>{post.nickname}</p>
          </NicknameBox>
          <div>
            <p>{post.title}</p>
          </div>
        </Board>
      ))}
    </div>
  );
};

const Board = styled.div`
  width: 700px;
  height: 60px;
  border-bottom: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;
const NicknameBox = styled.div`
  width: 100px;
  height: 40px;
  border-right: 1px solid rgb(79, 188, 238);
  margin: 10px;
  padding: 0px;
  text-align: center;
`;

export default Boards;
