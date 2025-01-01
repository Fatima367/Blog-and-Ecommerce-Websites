"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function CommentsUI({ slug }: { slug: string }) {
  const [comments, setComments] = useState([]); // Store fetched comments
  const [newComment, setNewComment] = useState({ username: "", text: "" }); // New comment form

  // Fetch comments from the API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?slug=${slug}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };
    fetchComments();
  }, [slug]);

  // Add a new comment
  const handleAddComment = async () => {
    if (!newComment.username || !newComment.text) {
      alert("Username and comment text are required!");
      return;
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: newComment.username,
          text: newComment.text,
          blogSlug: slug, // Automatically passed from props
        }),
      });

      if (response.ok) {
        const addedComment = await response.json();
        setComments((prev) => [...prev, addedComment]); // Add the new comment to the list
        setNewComment({ username: "", text: "" }); // Reset the form
        console.log("Sending comment:", {
          username: newComment.username,
          text: newComment.text,
          blogSlug: slug,
        });
      } else {
        console.error("Failed to add comment.");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <section className="flex flex-col items-start mt-10">
      <div className="flex mb-8 items-center">
        <p className="text-3xl font-bold">Comments</p>
      </div>

      {comments.length > 0 ? (
        <div className="lg:p-6 p-2 rounded flex flex-col lg:gap-8 gap-4 w-full mb-16 shadow-md">
          {comments.map((comment: any) => (
            <div
              className="lg:p-6 p-2 border-b border-b-gray-200 rounded-md bg-gray-50"
              key={comment._id}
            >
              <div className="flex gap-5">
                <div className="p-2 ring-1 ring-gray-100 rounded-md mx-auto flex items-center h-fit">
                  <FaUser className="lg:h-11 lg:w-14 h-8 w-10 text-gray-500" />
                </div>
                <div className="flex flex-col items-start justify-between w-full">
                  <div className="lg:flex-row flex flex-col lg:items-start w-full">
                    <div className="flex flex-col">
                      <h3 className="font-medium lg:text-2xl text-xl text-black">
                        {comment.username}
                      </h3>
                      <p className="text-base">
                        {new Date(comment.date).toLocaleString()}
                      </p>
                      <p className="text-lg lg:max-w-full lg:min-h-14 min-h-6 lg:mt-5 mt-3">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-500 mb-8">No comments yet.</p>
      )}

      {/* Comment Form */}
      <div className="p-6 shadow-md rounded-md bg-white flex flex-col w-full mb-8">
        <div className="border-b border-b-gray-200 p-2">
          <input
            type="text"
            placeholder="Your Name"
            value={newComment.username}
            onChange={(e) =>
              setNewComment((prev) => ({ ...prev, username: e.target.value }))
            }
            className="w-full p-2"
          />
        </div>
        <div className="border-b border-b-gray-200 p-2 mt-5">
          <textarea
            placeholder="Your comments here..."
            value={newComment.text}
            onChange={(e) =>
              setNewComment((prev) => ({ ...prev, text: e.target.value }))
            }
            className="w-full p-2"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-end mb-16">
        <button
          onClick={handleAddComment}
          className="text-white bg-blue-950 h-12 w-40 rounded-md shadow-md text-lg
          hover:bg-gray-900"
        >
          Add a comment
        </button>
      </div>
    </section>
  );
}
