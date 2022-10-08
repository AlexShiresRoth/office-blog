import React, { useEffect, useState } from "react";
import { BiCommentAdd } from "react-icons/bi";
import cn from "classnames";
import LoadingSpinner from "./loading-spinner";
import SectionSeparator from "./section-separator";
import { useRouter } from "next/router";
import { toggleForm } from "../redux/reducers/contact.reducer";

type Comment_Data = {
  title: string;
  body: string;
  author: string;
  email: string;
  postReference: string;
};

type Props = {
  postReference: string;
};
const CommentForm = ({ postReference }: Props) => {
  const router = useRouter();

  const [isFormVisible, toggleFormVisibility] = useState<boolean>(false);

  const [alertData, setAlertData] = useState<{
    message: string;
    type: "success" | "danger" | undefined;
  }>({
    message: "This is a successful alert",
    type: "danger",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [data, setFormData] = useState<Comment_Data>({
    title: "",
    body: "",
    author: "",
    email: "",
    postReference: postReference,
  });

  const { title, body, author, email } = data;

  const handleTextChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => setFormData({ ...data, [e.target.name]: e.target.value });

  const createComment = async (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ): Promise<{ message: string; success: boolean }> => {
    e.preventDefault();

    setLoading(true);
    try {
      const request = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const response = await request.json();

      console.log("response", response);

      //end loading state
      setLoading(false);

      //send a successful message
      setAlertData({
        message: "Comment created successfully and will appear once approved",
        type: "success",
      });

      return {
        message: "Comment created successfully",
        success: true,
      };
    } catch (error) {
      console.error(error);
      //end loading if failed
      setLoading(false);

      //send a failed message
      setAlertData({
        message: "Comment creation failed",
        type: "danger",
      });
      return {
        message: "Something went wrong",
        success: false,
      };
    }
  };

  //reset form on close
  useEffect(() => {
    if (!isFormVisible) {
      setFormData({
        title: "",
        body: "",
        author: "",
        email: "",
        postReference: postReference,
      });

      setAlertData({
        message: "",
        type: undefined,
      });
    }
  }, [isFormVisible, router.asPath]);

  //reset form on route change
  useEffect(() => {
    toggleFormVisibility(false);
  }, [router.asPath]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-between items-center border-b-[1px] border-grey-300 py-4">
        <h4 className="font-semibold">Leave a reply</h4>
        <button
          onClick={() => toggleFormVisibility(!isFormVisible)}
          className="flex items-center border-2 border-grey-700 rounded p-2 text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
        >
          <BiCommentAdd className="mr-2 text-grey-500" /> New Comment
        </button>
      </div>

      <div
        className={cn("flex flex-row p-2 px-4 my-2 rounded", {
          "bg-green-100": alertData.type === "success",
          "bg-red-100": alertData.type === "danger",
          hidden: alertData.type === undefined,
        })}
      >
        {alertData?.type === "success" || alertData?.type === "danger" ? (
          <p className="text-gray-700 font-semibold">
            {alertData?.message ?? "Something went wrong"}
          </p>
        ) : null}
      </div>

      <div
        className={cn("w-full mb-10", {
          hidden: !isFormVisible,
        })}
      >
        <form onSubmit={(e) => createComment(e)}>
          <div className="flex flex-col my-3 border-2 border-grey-300 p-2 bg-gray-100 rounded">
            <label htmlFor="name" className="text-xs italic text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="author"
              value={author}
              placeholder="Enter your name"
              className="bg-transparent py-2 border-b-2 border-gray-200"
              onChange={handleTextChange}
              required={true}
            />
          </div>
          <div className="flex flex-col my-3 border-2 border-grey-300 p-2 bg-gray-100 rounded">
            <label htmlFor="name" className="text-xs italic text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              className="bg-transparent py-2 border-b-2 border-gray-200"
              onChange={handleTextChange}
              required={true}
            />
          </div>
          <div className="flex flex-col my-3 border-2 border-grey-300 p-2 bg-gray-100 rounded">
            <label htmlFor="name" className="text-xs italic text-gray-600">
              Comment Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Give your comment a title"
              className="bg-transparent py-2 border-b-2 border-gray-200"
              onChange={handleTextChange}
              required={true}
            />
          </div>
          <div className="flex flex-col my-3 border-2 border-grey-300 p-2 bg-gray-100 rounded">
            <label htmlFor="name" className="text-xs italic text-gray-600">
              Comment Body
            </label>
            <textarea
              name="body"
              value={body}
              placeholder="Enter your comment"
              className="bg-white min-h-[100px] p-2 my-2 resize-none border-2 rounded border-gray-200"
              onChange={handleTextChange}
              required={true}
            />
          </div>
          <div className="flex flex-row items-center">
            {loading ? (
              <>
                <LoadingSpinner /> <p>Submitting Comment</p>
              </>
            ) : (
              <button
                onSubmit={(e) => createComment(e)}
                className="p-2 px-8 bg-orange-400 border-2 border-orange-400 text-white rounded hover:bg-orange-600 transition-all"
              >
                Submit
              </button>
            )}
          </div>
        </form>
        <SectionSeparator />
      </div>
    </div>
  );
};

export default CommentForm;
