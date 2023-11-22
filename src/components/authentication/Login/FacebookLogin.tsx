import { IoLogoFacebook } from "react-icons/io";

export default function FacebookLogin() {
  return (
    <button className="flex justify-center items-center w-full mt-2">
      <IoLogoFacebook className="text-blue-900 mr-2" size={20} />
      <p className="text-blue-900">Log in with Facebook</p>
    </button>
  );
}
