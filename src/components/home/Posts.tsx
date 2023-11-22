/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbLocationShare } from "react-icons/tb";
import { HiOutlineSave } from "react-icons/hi";
import BottomNavbar from "../navbar/BottomNavbar";
import { BsArrowReturnRight } from "react-icons/bs";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addLike } from "../../redux/features/post/postSlice";

export default function Posts() {
  const [viewCommentPostId, setViewCommentPostId] = useState("");

  const { posts } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  return (
    <div className="w-full mx-auto md:max-w-md relative md:p-5">
      {posts?.map((post: any, index: number) => (
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
                <button onClick={() => dispatch(addLike({ id: post.id }))}>
                  <FaRegHeart className="mx-2" size={30} />
                </button>
                <button>
                  <AiOutlineMessage className="mx-2" size={30} />
                </button>
                <button>
                  <TbLocationShare className="mx-2" size={30} />
                </button>
              </div>
              <button>
                <HiOutlineSave size={30} />
              </button>
            </div>
          </div>
          <p className="mt-5 mb-2">{post?.likes} likes</p>
          <p className="mb-5">{post?.post}</p>
          {viewCommentPostId === post.id ? (
            <button onClick={() => setViewCommentPostId("")}>
              Hide Comment
            </button>
          ) : (
            <button onClick={() => setViewCommentPostId(post?.id)}>
              View all {post?.comments?.length} comments
            </button>
          )}
          {viewCommentPostId === post.id &&
            post?.comments?.map((comment: any, index: number) => (
              <div className="flex" key={index}>
                <BsArrowReturnRight size={30} />
                <p className="mx-2">{comment}</p>
              </div>
            ))}
        </div>
      ))}
      <div className="sticky bottom-0 lg:hidden">
        <BottomNavbar />
      </div>
    </div>
  );
}
