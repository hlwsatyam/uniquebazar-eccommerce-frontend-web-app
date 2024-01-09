import React from "react";
import SingleComment from "./SingleComment/SingleComment";

const CommentList = ({ data, ...style }) => {
  return (
    <div {...style}>
      <p className="text-2xl font-bold">Ratings & Reviews</p>
      {data.map((item) => (
        <SingleComment
          nameOfCommenter={item.nameOfCommenter}
          starFromCommenter={item.starFromCommenter}
          dateOfComment={item.dateOfComment}
          CommentSubject={item.CommentSubject}
          isVeriFied={item.isVeriFied}
          CommentDescription={item.CommentDescription}
          likesOnComment={item.likesOnComment}
        />
      ))}

      <p>
        {" "}
        <button className="border py-2 px-7 rounded-full">Prev</button>{" "}
        <button className="border py-2 px-8 rounded-full">Next</button>{" "}
      </p>
    </div>
  );
};

export default CommentList;
