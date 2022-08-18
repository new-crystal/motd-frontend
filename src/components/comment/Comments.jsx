import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getCommentsByMusicId } from "../../redux/modules/commentsSlice";
import { decodeToken } from "react-jwt";
import AddCommentForm from "./AddComment";
import Comment from "./Comment";
import styled from "styled-components";
import axios from "axios";

const Comments = () => {
  const { musicId } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const data = useSelector((state) => state.comments.commentsByMusicId.list);
  const token = localStorage.getItem("token");
  const payload = decodeToken(token);
  const [commentList, setCommentList] = useState("");

  const getComment = async () => {
    console.log(musicId);
    try {
      const response = await axios.get(
        `http://3.34.47.211/api/comments?musicId=${musicId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCommentList(response.data.result.commentList);
      console.log(commentList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (show) {
      getComment();
      // dispatch(__getCommentsByMusicId(musicId, token));
    }
  }, [musicId, show]);

  const onClickCommentBtnHandler = () => {
    const commentList = data;
    setShow(!show);
    setCommentList(commentList);
  };

  return (
    <WrapBox show={show}>
      {payload.userId !== "" ? (
        <CommentBtn
          onClick={() => {
            onClickCommentBtnHandler();
          }}
        >
          {show ? "CANCEL" : " WRITING COMMENTS !"}
        </CommentBtn>
      ) : null}
      {show ? <AddCommentForm /> : null}
      <WrapBox>
        {commentList.length !== 0
          ? commentList?.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))
          : null}
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
  margin: 10px 250px;
  width: 200px;
  height: 40px;
  font-weight: bold;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default Comments;
