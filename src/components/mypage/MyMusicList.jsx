import { useNavigate } from "react-router";
import styled from "styled-components";

const MyMusicList = ({ list }) => {
  const navigate = useNavigate();

  return (
    <UploadList onClick={navigate(`/detail/${list.id}`)}>
      <p>{list.artist}</p>
      <p>{list.title}</p>
    </UploadList>
  );
};

const UploadList = styled.div`
  width: 500px;
  height: 60px;
  border-bottom: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
  margin: 40px auto;
  display: flex;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
  p {
    margin: 30px;
  }
`;

export default MyMusicList;
