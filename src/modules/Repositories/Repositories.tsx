import React, { useEffect, useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import Layout from "hoc/Layout/Layout";
import { NextPage } from "next";
import axios from "axios";
// import { Article } from "Interfaces/Article";

export const Repositories: NextPage = (props) => {
  //   const onTabChanged = (tab: string) => {
  //     setActiveTab(tab);
  //   };
  return (
    <Layout>
      <div className="text-gray-700 font-bold text-xl px-5">Repositories</div>
      <div className="flex flex-col gap-2 my-8">
        {/* {articles?.map((article: Article) => {
          return <ArticleItem {...article} key={article.idno} />;
        })} */}
      </div>
    </Layout>
  );
};
