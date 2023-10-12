import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { getPostData } from "./store/slice/postSlice";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/navbar/Navbar";
import PostDetails from "./components/PostDetailPage/PostDetails";
import PostComments from "./components/PostCommentsPage/PostComments";

function App() {
  const dispatch = useDispatch();

  const fetchPostData = () => {
    fetchDataFromApi("/posts").then((res) => {
      console.log(res);
      dispatch(getPostData(res));
    });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/posts/:id/comments" element={<PostComments/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
