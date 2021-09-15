import { Article } from "Interfaces/Article";
import React from "react";
import moment from "moment";
import Image from "next/image";
import { PhotographIcon } from "@heroicons/react/outline";

// interface ArticleItemProps {

// }

const ArticleItem: React.FC = (props: any) => {
  return (
    <>
      <a
        href={props?.url}
        target="_blank"
        rel="noreferrer"
        className="hover:bg-gray-50 py-4 rounded-md"
      >
        <div className="flex flex-row p-4 gap-4">
          <div className="w-1/12">
            {/* <div className="w-24 h-24 bg-gray-500 rounded" /> */}
            {props?.cover_image ? (
              <img src={props?.cover_image} alt="Dev.to Author" />
            ) : (
              <PhotographIcon />
            )}
          </div>
          <div className="flex flex-col gap-1 w-10/12">
            <div className="text-gray-700 font-medium">{props?.title}</div>
            <div className="text-gray-700 text-sm">
              {moment(props?.published_at).format("MMMM DD, YYYY")} -{" "}
              {props?.user?.name}
            </div>
            <div className="text-gray-700">{props.description}</div>
          </div>
          {/* <div className="w-1/12 flex flex-row items-center justify-center">
            <button className="flex flex-row items-center text-yellow-500 gap-2">
              <ClipboardCheckIcon className="w-5 h-5" />
              Saved
            </button>
          </div> */}
        </div>
      </a>
      <div className="bg-gray-200" style={{ height: "1px" }} />
    </>
  );
};
export default ArticleItem;
