import React from "react";
import { RatingStar } from "../../../BrandNameHeader/BrandNameHeader";
import { FaThumbsUp } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
function SingleComment({
  nameOfCommenter,
  dateOfComment,
  isVeriFied,
  likesOnComment,
  CommentSubject,
  CommentDescription,
  starFromCommenter,
}) {
  return (
    <div className="my-3 border-b-2 pb-3">
      <p className="flex my-1 gap-x-3 items-center">
        {" "}
        <RatingStar stars={starFromCommenter} canWeShowNOofStar={false} />{" "}
        {isVeriFied ? (
          <span className="flex  items-center">
            {" "}
            <MdVerifiedUser color="green" /> Verified Purchase{" "}
          </span>
        ) : null}
        <span>
          {nameOfCommenter} Posted On {dateOfComment}
        </span>
      </p>
      <p className="font-bold my-1"> {CommentSubject}</p>
      <p> {CommentDescription}</p>
      <p className=" flex justify-end gap-x-1 items-center ">
        {" "}
        <span> {<FaThumbsUp />} </span> {likesOnComment}
      </p>
    </div>
  );
}

export default SingleComment;
