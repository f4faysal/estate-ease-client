"use client";

import Loading from "@/app/loading";
import { useMyProfileQuery } from "@/redux/api/authApi";
import { useState } from "react";
import toast from "react-hot-toast";

const RatingAndReviews = ({}) => {
  const { data, isLoading } = useMyProfileQuery({});

  console.log(data);

  const fullName = data?.rentUser
    ? `${data?.rentUser?.name?.firstName} ${data?.rentUser?.name?.middleName} ${data?.rentUser?.name?.lastName}`
    : `${data?.homeOwner?.name?.firstName} ${data?.homeOwner?.name?.middleName} ${data?.homeOwner?.name?.lastName}`;

  const image = data?.rentUser
    ? data?.rentUser?.profileImage
    : data?.homeOwner?.profileImage;

  const [x, setX] = useState([
    {
      id: 1,
      rating: 5,
      title: "Excellent experience!",
      content:
        "I had a fantastic time using this product. It was easy to set up and worked exactly as expected. I would highly recommend it to anyone looking for a solution like this.",
      user: {
        name: "Mou",
        avatar: "https://picsum.photos/64/64",
      },
    },
    {
      id: 2,
      rating: 4,
      title: "Great product!",
      content:
        "This product exceeded my expectations. It's user-friendly and provides great value for the money. I'm very satisfied with my purchase.",
      user: {
        name: "Alex",
        avatar: "https://picsum.photos/64/64",
      },
    },
    {
      id: 3,
      rating: 3,
      title: "Decent but could improve",
      content:
        "The product is decent, but there are some areas that could be improved. I encountered a few issues, and the customer support was helpful but could be more responsive.",
      user: {
        name: "Sophie",
        avatar: "https://picsum.photos/64/64",
      },
    },
    {
      id: 4,
      rating: 2,
      title: "Disappointing",
      content:
        "I expected more from this product, but unfortunately, it fell short of my expectations. It's not as reliable as I hoped, and I'm considering other options.",
      user: {
        name: "Chris",
        avatar: "https://picsum.photos/64/64",
      },
    },
    {
      id: 5,
      rating: 1,
      title: "Terrible experience",
      content:
        "This product was a complete disaster. It didn't work properly, and I had a terrible experience using it. I strongly advise against purchasing it.",
      user: {
        name: "Emily",
        avatar: "https://picsum.photos/64/64",
      },
    },
    {
      id: 6,
      rating: 5,
      title: "Excellent experience!",
      content:
        "I had a fantastic time using this product. It was easy to set up and worked exactly as expected. I would highly recommend it to anyone looking for a solution like this.",
      user: {
        name: "Mou ",
        avatar: "https://picsum.photos/64/64",
      },
    },
  ]);

  const [rating, setRating] = useState("5");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (reviewTitle === "") {
      toast.error("Please enter a review title");
      return;
    }

    toast.success("Successfully Submitted");
    const newReview = {
      id: x.length + 1,
      rating: parseInt(rating, 10),
      title: reviewTitle,
      content: reviewContent,
      user: {
        name: fullName,
        avatar: image,
      },
    };

    const updatedReviews = [...x, newReview];
    setX(updatedReviews);

    // Clear form fields after submission
    setRating("5");
    setReviewTitle("");
    setReviewContent("");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="col-span-5">
      <form className="container mx-auto p-4" onSubmit={handleFormSubmit}>
        <h1 className="text-2xl font-bold mb-8">Leave a Review</h1>

        {/* Your Rating */}
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-bold mb-2"
          >
            Your Rating
          </label>
          <div className="flex items-center">
            {/* ... Other rating options */}
            <input
              type="radio"
              id="rating-5"
              name="rating"
              value="5"
              className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-200"
              checked={rating === "5"}
              onChange={() => setRating("5")}
            />
            <label
              htmlFor="rating-5"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              5 stars
            </label>
          </div>
        </div>

        {/* Review Title */}
        <div className="mb-6">
          <label
            htmlFor="review-title"
            className="block text-gray-700 font-bold mb-2"
          >
            Review Title
          </label>
          <input
            type="text"
            id="review-title"
            placeholder="Give your review a title"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Your Review */}
        <div className="mb-6">
          <label
            htmlFor="review-content"
            className="block text-gray-700 font-bold mb-2"
          >
            Your Review
          </label>
          <textarea
            id="review-content"
            rows={5}
            placeholder="Write your review here..."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit Review
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {x.map((review: any) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">{review.title}</h3>
              <div className="flex items-center">
                <span className="text-yellow-500">{review.rating}/5</span>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {review.ratingCount} ratings
                </span>
              </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
            <div className="flex items-center mt-4">
              <img
                src={review.user.avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="text-sm font-medium text-gray-900">
                {review.user.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingAndReviews;
