import { Toaster } from "react-hot-toast";
import Login from "./Pages/Authentication/Login";
import LoginNoticeModal from "./components/modal/LoginNoticeModal";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Home from "./Pages/Home/Home";
import Loading from "./components/shared/Loading";
import { useEffect } from "react";
import posts from "./data/posts.json";
import { loadPosts } from "./redux/features/post/postSlice";

function App() {
  const { userName, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts({ posts }));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {/* {userName ? <Home /> : <Login />} */}
      <LoginNoticeModal />
      <Home />
      {/* react hot toast */}
      <Toaster />
    </>
  );
}

export default App;
