import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getCommentsByMusicId } from "../../redux/modules/commentsSlice";
import AddCommentForm from "./AddComment";
import Comment from "./Comment";
import styled from "styled-components";

const Comments = () => {
  const { musicId } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { data } = useSelector((state) => state.comments.commentsByMusicId);

  useEffect(() => {
    if (show) {
      dispatch(__getCommentsByMusicId(musicId));
    }
  }, [dispatch, musicId, show]);

  return (
    <WrapBox show={show}>
      <CommentBtn
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "취소" : " 댓글 작성하기 !"}
      </CommentBtn>
      {show ? <AddCommentForm /> : null}
      <WrapBox>
        {data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </WrapBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 700px;
  height: ${({ show }) => (show ? "400px" : "50px")};
  margin: 10px auto;
`;

const CommentBtn = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
  padding: 7px;
  margin: 10px 300px;
  font-weight: bold;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default Comments;
