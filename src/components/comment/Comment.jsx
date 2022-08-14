import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    __deleteComment,
    __updateComment,
  } from "../../redux/modules/commentsSlice";
  import { __getComment,
  } from "../../redux/modules/commentSlice";

const Comment = ({comment}) => {

const { id } = useParams();
const dispatch = useDispatch();
const [edit, setEdit] = useState(false);
const [updatedComment, setUpdatedComment] = useState("");

const { content } = useSelector((state) => state.comment.list);
console.log(content)

const onDelButHandler = () => {
  dispatch(__deleteComment(comment.id))
}

const onUpdatedBtnHandler = () => {
  dispatch(
    __updateComment(
      {id: comment.id,
      content: updatedComment,
      nickname: comment.nickname,
      musicId: id,
  }
    )
  )
  setEdit(false);
}

const onChangeEditBtnHandler = () => {
  setEdit(true);
  dispatch(__getComment(comment.id));
};

const onCancleBtnHandler = () => {
  setEdit(false);
}
const onEditBtnHandler=()=>{
  setEdit(true);
}
useEffect(()=>{
  setUpdatedComment(content);
},[content]);

useEffect(()=>{
  dispatch(__getComment());
},[])

 return (
        <div>
         {edit ? 
         <>
         <div>
            <CommentInput
            type="text"
            value={updatedComment}
            conChange={(e)=>{onChangeEditBtnHandler(e.target.value)}}
            maxLength={30}
            placeholder="수정할 내용을 입력해주세요(30자 이내)"/>
         </div>
         <div>
            <Button
            onClick={onCancleBtnHandler}
            > 취소</Button>
                <Button
                onClick={onUpdatedBtnHandler}
                > 저장</Button>
         </div>
         </>
         :
         <>
         <CommentBox>
            <p>{content.nickname}</p>
            <p>{content.content}</p>
         </CommentBox>
         <div>
            <Button
            onClick={onEditBtnHandler}>
                수정
            </Button>
            <Button
            onClick={onDelButHandler}>
                삭제
            </Button >
         </div>
         </>
        }
        </div>
    );
};


const CommentBox = styled.div`
max-width: 700px;
width: 100vw;
margin: 10px auto;
border: 1px solid rgb(79, 188, 238);
border-radius: 10px;
display: flex;
padding: 20px;`

const Button = styled.button`
background-color: white;
border: 2px solid rgb(79, 188, 238);
padding: 5px;
marigin: 10px;
&:hover{
   background-color: rgb(79, 188, 238);
   color: white;
 }
`
const CommentInput = styled.input`
margin: 0px 20px 0px 200px;
height: 30px;
width: 250px;
border: 1px solid rgb(79, 188, 238);
border-radius: 5px;
`

export default Comment;