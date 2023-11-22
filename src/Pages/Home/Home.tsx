import Posts from "../../components/home/Posts";
import SideNavbar from "../../components/navbar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="fixed z-50 hidden lg:block">
        <SideNavbar />
      </div>
      <Posts />
    </div>
  );
}
