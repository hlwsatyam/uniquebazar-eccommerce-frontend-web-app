import React from "react";
import RevRateData from "./RevRateData/RevRateData";
import CommentList from "./CommentList/CommentList";
import "./Review&Ratings.scss";
const ReviewRatings = () => {
  const ReviewData = {
    Details: {
      noOfComment: 169,
      fiveStar: 65,
      fourStar: 12,
      threeStar: 2,
      twoStar: 4,
      oneStar: 17,
    },
    CommentList: [
      {
        nameOfCommenter: "Vikash Bhor",
        starFromCommenter: 4,
        dateOfComment: "23 apr 2023",
        CommentSubject: "Best Que",
        isVeriFied: true,
        CommentDescription:
          "Good quality onion deliver and rotten too. It has bad smell too.",
        likesOnComment: 2,
      },
      {
        nameOfCommenter: "Ratil Amit",
        starFromCommenter: 5,
        dateOfComment: "23 apr 2023",
        CommentSubject: "Bad product",
        isVeriFied: false,
        CommentDescription: "not delever at time.",
        likesOnComment: 0,
      },
    ],
  };

  return (
    <div className="my-3 rev-responsive  ">
      <RevRateData
        className="w-[40%] rev-rate-data sm:fle p-3 "
        noOfComment={ReviewData.Details.noOfComment}
        fiveStar={ReviewData.Details.fiveStar}
        fourStar={ReviewData.Details.fourStar}
        threeStar={ReviewData.Details.threeStar}
        twoStar={ReviewData.Details.twoStar}
        oneStar={ReviewData.Details.twoStar}
      />

      <CommentList
        data={ReviewData.CommentList}
        className="w-[70%] comment-list p-3 "
      />
    </div>
  );
};

export default ReviewRatings;
