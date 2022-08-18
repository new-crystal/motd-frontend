import styled from "styled-components"

const ProfileComponent = () => {
    return (
<ContainerBox>
<Title>Mood of Today</Title>

<OptionBtn>화창한 날</OptionBtn>
<OptionBtn>비오는 날</OptionBtn>
<tr/>
<OptionBtn>운전 중</OptionBtn>
<OptionBtn>운동 중</OptionBtn>
<OptionBtn>휴식 중</OptionBtn>
<tr/>
<OptionBtn>My Music of day 보러가기</OptionBtn>
</ContainerBox>
    );
};
const ContainerBox = styled.div`
width: 500px;
height: 700px;
margin: 30px auto;
border: 2px solid rgb(79, 188, 238);
border-radius: 10px;
text-align:center;
`
const Title = styled.h1`
color: rgb(79, 188, 238);
`
const OptionBtn = styled.button`
background-color: white;
border: 2px solid rgb(79, 188, 238);
margin : 10px;
padding: 10px;
border-radius: 20px;
&:hover{
    background-color: rgb(79, 188, 238);
    color: white;
}
`

export default ProfileComponent;