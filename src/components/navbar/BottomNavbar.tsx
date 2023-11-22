import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <div className="flex justify-center bg-gray-900 text-white p-2">
      <Link className="mx-2" to="/">
        <GoHomeFill size={30} />
      </Link>
      <Link className="mx-2" to="/">
        <IoSearchOutline size={30} />
      </Link>
      <Link className="mx-2" to="/">
        <MdOutlineExplore size={30} />
      </Link>
      <Link className="mx-2" to="/">
        <RiMessengerLine size={30} />
      </Link>
      <Link className="mx-2" to="/">
        <FaRegHeart size={30} />
      </Link>
      <Link className="mx-2" to="/">
        <CgAddR size={30} />
      </Link>
      <Link className="mx-2" to="/">
        <CgProfile size={30} />
      </Link>
    </div>
  );
}
