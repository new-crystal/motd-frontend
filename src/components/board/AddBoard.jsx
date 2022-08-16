import styled from "styled-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { __addPost } from "../../redux/modules/boardSlice";

const AddBoard = ({ setShow }) => {
  const title_ref = useRef();
  const content_ref = useRef();

  const dispatch = useDispatch();

  const onClickAddBtnHandler = (e) => {
    e.preventDefault();
    const title = title_ref.current.value;
    const content = content_ref.current.value;

    const posts = {
      title,
      content,
      userId: 1,
      nickname: "ss",
    };

    if (title && content) {
      dispatch(__addPost(posts));
      setShow(true);
    } else {
      alert("제목과 내용을 모두 작성해주세요!");
    }
  };

  return (
    <form>
      <Input
        name="title"
        ref={title_ref}
        placeholder="제목을 추가해주세요(10자 이내)"
        maxLength={10}
      />
      <tr />
      <InputContent
        name="content"
        ref={content_ref}
        placeholder=" 내용을 입력해주세요(50자 이내)"
        maxLength={50}
      />
      <tr />
      <Button onClick={(e) => onClickAddBtnHandler(e)}>추가</Button>
    </form>
  );
};

const Input = styled.input`
  margin: 20px 20px 0px 50px;
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
  padding: 10px;
  margin: 10px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default AddBoard;
