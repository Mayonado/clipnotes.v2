import React, { useEffect, useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import Layout from "hoc/Layout/Layout";
import { NextPage } from "next";
import axios from "axios";
import { parse } from "node-html-parser";
import github from "/public/svgs/github.svg";
import Image from "next/image";
import { Repository } from "Interfaces/Repository";

export const Repositories: NextPage = (props) => {
  //   const onTabChanged = (tab: string) => {
  //     setActiveTab(tab);
  //   };
  return (
    <Layout>
      <div className="text-gray-700 font-bold text-xl px-5">Repositories</div>
      <div className="flex flex-col gap-2 my-8">
        {/* {props?.repositories?.map((repo: any) => (
          <>
            <a
              href={repo?.href}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-50 py-4 rounded-md"
            >
              <div className="flex flex-row p-4 gap-4">
                <div className="flex w-1/12 text-center justify-center items-center">
                  <Image src={github} alt="Github icon" />
                </div>
                <div className="flex flex-col gap-1 w-10/12">
                  <div className="text-gray-700 font-medium">
                    {repo?.title.substring(1)}
                  </div>
                </div>
              </div>
            </a>
            <div className="bg-gray-200" style={{ height: "1px" }} />
          </>
        ))} */}
      </div>
    </Layout>
  );
};

// Repositories.getInitialProps = async () => {
//   let repoIndex = 0; // looping indicator
//   const repoArr: any[] = []; // crawled items storage
//   const repositories: any = await axios
//     .get(`https://github.com/trending/javascript?since=daily`)
//     .catch((err: any) => {
//       throw err;
//     });
//   const root = parse(repositories?.data);
//   root
//     .querySelectorAll("article.Box-row .lh-condensed a")
//     .forEach((url: any, index: any) => {
//       if (
//         repoIndex !==
//         root.querySelectorAll("article.Box-row .lh-condensed a").length - 1
//       ) {
//         repoArr.push({
//           title: url.getAttribute("href"),
//           href: `https://github.com${url.getAttribute("href")}`,
//           description: (
//             root.querySelectorAll("article.Box-row p")[repoIndex]
//               ?.childNodes[0] as any
//           )?._rawText,
//         });
//       }
//       repoIndex += 1;
//     });
//   return {
//     repositories: repoArr,
//   };
// };
