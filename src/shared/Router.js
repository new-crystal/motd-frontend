import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Upload from "../pages/Upload";
import Board from "../pages/Board";
import BoardDetail from "../pages/BoardDetail";
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" />
      <Route path="/musics/:musicId" element={<Detail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/posts" element={<Board />} />
      <Route path="/posts/:id" element={<BoardDetail />} />
      <Route path="/my_page" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
