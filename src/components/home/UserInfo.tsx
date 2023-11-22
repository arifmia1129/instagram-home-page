import { CgProfile } from "react-icons/cg";
import { useAppSelector } from "../../redux/hooks";

export default function UserInfo() {
  const { userName } = useAppSelector((state) => state.user);
  return (
    <div className="flex justify-center items-center h-20">
      <div className="flex justify-center items-center m-5 h-20 text-gray-600">
        <CgProfile size={30} />
        <div className="mx-2">
          <p>Hello,</p>
          <p>{userName || "Md Arif Mia"}</p>
        </div>
      </div>

      <button className="btn btn-link no-underline">Switch</button>
    </div>
  );
}
