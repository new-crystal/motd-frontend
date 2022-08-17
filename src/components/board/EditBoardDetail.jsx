import styled from "styled-components";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { __updatePost } from "../../redux/modules/boardSlice";
import { useEffect } from "react";

const EditBoardDetail = ({ setEdit, id, nickname, userId, title, content }) => {
  const editTitle_ref = useRef();
  const editContent_ref = useRef();
  const dispatch = useDispatch();

  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const onClickEditHandler = (e) => {
    e.preventDefault();
    const edit_title = editTitle_ref.current.value;
    const edit_content = editContent_ref.current.value;

    if (title && content) {
      dispatch(
        __updatePost({
          id,
          title: edit_title,
          content: edit_content,
          nickname,
          userId,
        })
      );
      setEdit(false);
    } else {
      alert("수정할 내용을 모두 입력해주세요!");
    }
  };

  useEffect(() => {
    setEditTitle(title);
  }, [title]);

  useEffect(() => {
    setEditContent(content);
  }, [content]);

  return (
    <div>
      <Input
        ref={editTitle_ref}
        maxLength={10}
        name="title"
        value={editTitle}
        onChange={(e0) => setEditTitle(e0.target.value)}
      />
      <InputContent
        ref={editContent_ref}
        name="content"
        value={editContent}
        maxLength={50}
        onChange={(e) => setEditContent(e.target.value)}
      />
      <tr />
      <Button onClick={() => setEdit(false)}>취소</Button>
      <Button onClick={(e) => onClickEditHandler(e)}>저장</Button>
    </div>
  );
};

const Input = styled.input`
  margin: 150px 20px 0px 50px;
  height: 50px;
  width: 400px;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
`;
const InputContent = styled.input`
  margin: 20px 20px 0px 50px;
  height: 250px;
  width: 400px;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
  height: 30px;
  padding: 5px;
  margin-top: 20px;
  margin-left: 10px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default EditBoardDetail;
