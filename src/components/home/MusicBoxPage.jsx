import { useNavigate } from "react-router";
import styled from "styled-components";

const MusicBoxPage = ({ list }) => {
  const navigate = useNavigate();

  return (
    <MusicBox onClick={() => navigate(`/musics/${list.musicId}`)}>
      <MusicImgBox
        url={"https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"}
      />
      <MusicText>{list.title}</MusicText>
      <MusicText> {list.artist}</MusicText>
      <MusicText> {list.album}</MusicText>
    </MusicBox>
  );
};

const MusicBox = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
`;

const MusicImgBox = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const MusicText = styled.p`
  color: #023e8a;
  margin-left: 60px;
`;

export default MusicBoxPage;
