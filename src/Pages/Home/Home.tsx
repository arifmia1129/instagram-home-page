import Posts from "../../components/home/Posts";
import UserInfo from "../../components/home/UserInfo";
import SideNavbar from "../../components/navbar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="fixed z-50 hidden lg:block">
        <SideNavbar />
      </div>
      <div className="lg:flex justify-center w-full ml-0 md:ml-32 lg:ml-52 mx-auto">
        <div className="lg:hidden">
          <UserInfo />
        </div>
        <div className="flex">
          <Posts />
          <div className="hidden lg:block">
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
