import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { __getPostsThunk } from "../../redux/modules/boardSlice";
import EditBoardDetail from "./EditBoardDetail";
import { __deletePost } from "../../redux/modules/boardSlice";

const BoardDetailPage = () => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.board.posts);
  const posts = postList.find((post) => post.id == id);

  useEffect(() => {
    dispatch(__getPostsThunk());
  }, [dispatch, edit]);

  const onClickDelBtnHandler = (id) => {
    dispatch(__deletePost(id));
    navigate(-1);
  };

  return (
    <Container>
      {edit ? (
        <EditBoardDetail
          nickname={posts.nickname}
          userId={posts.userId}
          id={posts.id}
          setEdit={setEdit}
          title={posts.title}
          content={posts.content}
        />
      ) : (
        <>
          <ButtonBox>
            <Button onClick={() => setEdit(true)}>게시글 수정</Button>
            <Button onClick={() => onClickDelBtnHandler(posts.id)}>
              게시글 삭제
            </Button>
          </ButtonBox>
          <h1>{posts.title}</h1>
          <p>{posts.nickname}</p>
          <hr />
          <h4>{posts.content}</h4>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 700px;
  height: 700px;
  margin: 40px auto;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
  text-align: center;
  color: #023e8a;
`;
const ButtonBox = styled.div`
  margin-left: 450px;
`;
const Button = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
  height: 30px;
  padding: 5px;
  margin: 10px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default BoardDetailPage;
