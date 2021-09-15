import React, { useEffect, useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import Layout from "hoc/Layout/Layout";
import { NextPage } from "next";
import axios from "axios";
import { Article } from "Interfaces/Article";
import ArticleItem from "./ArticleItem/ArticleItem";
import { useQuery } from "react-query";
import Loader from "components/Loader/Loader";

export const Articles: NextPage = (props) => {
  //   const [activeTab, setActiveTab] = useState<string>("articles");

  //   const [articles, setArticles] = useState<Article[]>([]);
  //   const fetchArticle = axios.get(
  //     `https://dev.to/api/articles/latest?tag=javascript&per_page=25&top=1`
  //   );
  const { isLoading, data: articleData } = useQuery(
    "fetchArticles",
    async () =>
      await axios.get(
        `https://dev.to/api/articles/latest?tag=javascript&per_page=25&top=1`
      )
  );
  //   console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  //   console.log("this is the data", data);
  // const { data: meData } = useMeQuery();

  const getArticles = async () => {
    // const articleDatas = useQuery('fetchArticles', axios.get(
    //     `https://dev.to/api/articles/latest?tag=javascript&per_page=25&top=1`
    //   ));
    // const constructredJsonData: Article[] = articleDatas?.data?.map(
    //   (article: any) => {
    //     return {
    //       href: article.url,
    //       idno: article.id,
    //       title: article.title,
    //       author: article?.user?.name,
    //       description: article.description,
    //       tags: article.tags.split(","),
    //       avatar: article?.cover_image,
    //       published_at: article?.published_at,
    //     };
    //   }
    // );
    // setArticles(constructredJsonData);
  };

  //   useEffect(() => {
  //     getArticles();
  //   }, []);

  //   const onTabChanged = (tab: string) => {
  //     setActiveTab(tab);
  //   };
  return (
    <Layout>
      <div className="flex flex-col px-2 sm:px-5">
        <div className="text-gray-700 font-bold text-xl ">Articles</div>
        <div className="text-gray-700 text-sm">
          Top 25 latest articles in{" "}
          <a
            href="https://dev.to/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500"
          >
            Dev.to
          </a>{" "}
          filtered in Javascript programming language.
        </div>
      </div>
      <div className="flex flex-col gap-2 my-8">
        {articleData?.data?.map((article: any) => {
          return <ArticleItem {...article} key={article.id} />;
        })}
      </div>
    </Layout>
  );
};
