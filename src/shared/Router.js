import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail"
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join"/>
            <Route path="/musics/:musicId" element={<Detail/>}/>
            <Route psth="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default Router;