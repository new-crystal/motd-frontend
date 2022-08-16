import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteComment,
  __updateComment,
} from "../../redux/modules/commentsSlice";
import { __getComment } from "../../redux/modules/commentSlice";

const Comment = ({ comment }) => {
  const { musicId } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [updatedComment, setUpdatedComment] = useState("");
  const [isShow, setIsShow] = useState(false);

  const content = useSelector((state) => state.comment.list);

  const onDelButHandler = () => {
    dispatch(__deleteComment(comment.id));
  };

  const onUpdatedBtnHandler = () => {
    dispatch(
      __updateComment({
        id: comment.id,
        content: updatedComment,
        nickname: "susu",
        musicId,
      })
    );
    setEdit(false);
  };

  const onChangeEditBtnHandler = (e) => {
    setEdit(true);
    dispatch(__getComment(comment.id));
    setUpdatedComment(e.target.value);
  };

  const onCancelBtnHandler = () => {
    setEdit(false);
  };
  const onEditBtnHandler = () => {
    setEdit(true);
  };
  useEffect(() => {
    setUpdatedComment(content);
    setIsShow(true);
  }, [content, isShow]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(__getComment());
    }, 300);
    setIsShow(false);
  }, [edit, isShow]);

  return (
    <div>
      {edit ? (
        <>
          <div>
            <CommentInput
              type="text"
              onChange={onChangeEditBtnHandler}
              maxLength={30}
              placeholder="수정할 내용을 입력해주세요(30자 이내)"
            />
          </div>
          <div>
            <Button onClick={onCancelBtnHandler}> 취소</Button>
            <Button onClick={onUpdatedBtnHandler}> 저장</Button>
          </div>
        </>
      ) : (
        <>
          <CommentBox>
            <Nickname>{comment.nickname}</Nickname>
            <Content>{comment.content}</Content>

            <div>
              <Button onClick={onEditBtnHandler}>수정</Button>
              <Button onClick={onDelButHandler}>삭제</Button>
            </div>
          </CommentBox>
        </>
      )}
    </div>
  );
};

const CommentBox = styled.div`
  max-width: 700px;
  width: 100vw;
  height: 40px;
  margin: 10px auto;
  border: 1px solid rgb(79, 188, 238);
  border-radius: 10px;
  display: flex;
  padding: 20px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  position: relative;
  top: 10px;
  left: 400px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;
const CommentInput = styled.input`
  margin: 0px 20px 0px 200px;
  height: 30px;
  width: 250px;
  border: 1px solid rgb(79, 188, 238);
  border-radius: 5px;
`;
const Nickname = styled.p`
  font-size: 15px;
  position: relative;
  top: -20px;
`;
const Content = styled.p`
  font-size: 20px;
  position: relative;
  left: -20px;
`;

export default Comment;
