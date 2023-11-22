import { Toaster } from "react-hot-toast";
import Login from "./Pages/Authentication/Login";
import LoginNoticeModal from "./components/modal/LoginNoticeModal";

function App() {
  return (
    <>
      <Login />
      <LoginNoticeModal />
      {/* react hot toast */}
      <Toaster />
    </>
  );
}

export default App;
