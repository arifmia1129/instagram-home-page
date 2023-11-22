import { Toaster } from "react-hot-toast";
import Login from "./Pages/Authentication/Login";
import LoginNoticeModal from "./components/modal/LoginNoticeModal";
import { useAppSelector } from "./redux/hooks";
import Home from "./Pages/Home/Home";
import Loading from "./components/shared/Loading";
import SideNavbar from "./components/navbar/Sidebar";

function App() {
  const { userName, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {/* {userName ? <Home /> : <Login />}
      <LoginNoticeModal /> */}
      <SideNavbar />

      {/* react hot toast */}
      <Toaster />
    </>
  );
}

export default App;
