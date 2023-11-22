import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsThreads } from "react-icons/bs";

const SideNavbar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar collapsedWidth="66px">
      <Menu className="h-screen bg-gray-800 md:bg-white text-white md:text-black">
        <MenuItem
          icon={<MdOutlineKeyboardArrowLeft />}
          onClick={() => {
            collapseSidebar();
          }}
        />
        <MenuItem icon={<GoHomeFill size={30} />}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem icon={<IoSearchOutline size={30} />}>
          <Link to="/">Search</Link>
        </MenuItem>
        <MenuItem icon={<MdOutlineExplore size={30} />}>
          <Link to="/">Explore</Link>
        </MenuItem>
        <MenuItem icon={<MdOutlineOndemandVideo size={30} />}>
          <Link to="/">Reels</Link>
        </MenuItem>
        <MenuItem icon={<RiMessengerLine size={30} />}>
          <Link to="/">Messages</Link>
        </MenuItem>
        <MenuItem icon={<FaRegHeart size={30} />}>
          <Link to="/">Notifications</Link>
        </MenuItem>
        <MenuItem icon={<CgAddR size={30} />}>
          <Link to="/">Create</Link>
        </MenuItem>
        <MenuItem icon={<CgProfile size={30} />}>
          <Link to="/">Profile</Link>
        </MenuItem>
        <div className="absolute bottom-10">
          <MenuItem icon={<BsThreads size={30} />}>
            <Link to="/">Threads</Link>
          </MenuItem>
          <MenuItem icon={<GiHamburgerMenu size={30} />}>
            <Link to="/">Menu</Link>
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideNavbar;
