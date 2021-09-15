import React, { useEffect, useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import Layout from "hoc/Layout/Layout";
import { NextPage } from "next";
import axios from "axios";
import { parse } from "node-html-parser";
import github from "/public/svgs/github.svg";
import Image from "next/image";
import { Repository } from "Interfaces/Repository";
import { useQuery } from "react-query";

export const Repositories: NextPage = (props: any) => {
  //   console.log(props);
  //   let repoIndex = 0; // looping indicator

  //   const { isLoading, data: repositoryData } = useQuery(
  //     "fetchArticles",
  //     async () =>
  //       await axios
  //         .get(`https://github.com/trending/javascript?since=daily`)
  //         .catch((err: any) => {
  //           throw err;
  //         })
  //   );
  //   console.log(repositoryData);
  //   const onTabChanged = (tab: string) => {
  //     setActiveTab(tab);
  //   };
  return (
    <Layout>
      <div className="flex flex-col px-2 sm:px-5">
        <div className="text-gray-700 font-bold text-xl ">Repositories</div>
        <div className="text-gray-700 text-sm">
          Top 25 daily trending{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500"
          >
            Github
          </a>{" "}
          repositories filtered in Javascript programming language.
        </div>
      </div>
      <div className="flex flex-col gap-2 my-8">
        {props?.repositories?.map((repo: any) => (
          <>
            <a
              href={repo?.href}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-50 py-4 rounded-md"
            >
              <div className="flex flex-row sm:p-4 gap-4">
                <div className="flex w-2/12 sm:w-1/12 text-center justify-center items-center">
                  <Image src={github} alt="Github icon" />
                </div>
                <div className="flex flex-col gap-1 w-10/12 sm:w-11/12">
                  <div className="text-gray-700 font-medium">
                    {repo?.title.substring(1)}
                  </div>
                  <div className="text-gray-700">{repo.description}</div>
                </div>
              </div>
            </a>
            <div className="bg-gray-200" style={{ height: "1px" }} />
          </>
        ))}
      </div>
    </Layout>
  );
};
