/* eslint-disable @typescript-eslint/no-explicit-any */
import posts from "../../data/posts.json";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbLocationShare } from "react-icons/tb";
import { HiOutlineSave } from "react-icons/hi";
import BottomNavbar from "../navbar/BottomNavbar";

export default function Posts() {
  return (
    <div className="w-full mx-auto md:max-w-md relative md:p-5">
      {posts.map((post: any, index: number) => (
        <div className="my-5" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={post?.author?.profile_image_url} />
                </div>
              </div>
              <p className="w-12 ml-2">{post?.author?.name}</p>
              <button className="btn btn-link no-underline">Follow</button>
            </div>
            <button>
              <BsThreeDots size={30} />
            </button>
          </div>

          <div>
            <div className="my-5 flex justify-center">
              <img className="h-[700px] w-full" src={post?.image_url} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaRegHeart className="mx-2" size={30} />
                <AiOutlineMessage className="mx-2" size={30} />
                <TbLocationShare className="mx-2" size={30} />
              </div>
              <HiOutlineSave size={30} />
            </div>
          </div>
          <p className="mt-5 mb-2">{post?.likes} likes</p>
          <p className="mb-5">{post?.post}</p>
          <button>View all {post?.comments?.length} comments</button>
        </div>
      ))}
      <div className="sticky bottom-0 lg:hidden">
        <BottomNavbar />
      </div>
    </div>
  );
}
