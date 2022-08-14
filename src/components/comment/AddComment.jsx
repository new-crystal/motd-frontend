import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentsSlice";
import styled from "styled-components";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const [comment, setComment] = useState({
    nickname: "susu",
    content: "",
  });

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (comment.content.trim() === "") {
      return alert("댓글을 입력해주세요.");
    }
    dispatch(__addComment({ musicId: id, ...comment }));
    setComment({
      nickname: "",
      content: "",
    });
  };

  const onChangeInputHandler = (event) => {
   const {name, value} = event.target;
   setComment({
    ...comment,
  [name]: value,
})
  };

  return (
    <CommentForm onSubmit={onAddCommentButtonHandler}>
      <CommentInput
        placeholder="댓글을 추가하세요(30자 이내)"
        value={comment.content}
        name="content"
        type="text"
        maxLength={30}
        onChange={onChangeInputHandler}
      />
      <Button type="submit" onClick={onAddCommentButtonHandler}>
      💾 
      </Button>
    </CommentForm>
  );
};

const CommentForm = styled.form`
display: flex;
align-items : center;
justify-content : center;
flex-direction: row;
margin: 0px auto;
`
const CommentInput = styled.input`
margin: 0px 20px 0px 50px;
height: 30px;
width: 250px;
border: 2px solid rgb(79, 188, 238);
border-radius: 5px;
`
const Button = styled.button`
background-color: white;
width: 50px;
border: 0px;
font-size: 20px;
border-radius: 10px;
padding: 8px;
marigin: 10px;
&:hover{
  background-color: rgb(79, 188, 238);
  color: white;
}
`

export default AddCommentForm;
