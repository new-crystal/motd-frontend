import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="join"/>
            <Route path="/musics/:musicId" element={<Detail/>}/>
            <Route path="*" element={<div>없는 페이지입니다! 홈으로 이동하세요!</div>}/>
        </Routes>
    );
}

export default Router;