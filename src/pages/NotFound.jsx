import styled from "styled-components";

const NotFound = () => {
    return(
        <NotFoundbox>
            없는 페이지입니다!
            <br/>
            홈으로 이동해주세요!
        </NotFoundbox>
    );
};

const NotFoundbox = styled.div`
margin: 50px auto;
text-align : center;
font-size: 40px;
color: rgb(79, 188, 238);
`

export default NotFound;