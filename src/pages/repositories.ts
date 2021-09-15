import { Repositories } from "modules/Repositories/Repositories";
import axios from "axios";
import { parse } from "node-html-parser";

export const getServerSideProps = async () => {
  let repoIndex = 0; // looping indicator
  const repoArr: any[] = []; // crawled items storage
  const repositories: any = await axios
    .get(`https://github.com/trending/javascript?since=daily`)
    .catch((err: any) => {
      throw err;
    });
  const root = parse(repositories?.data);
  root.querySelectorAll("article.Box-row").forEach((url: any, index: any) => {
    if (repoIndex !== root.querySelectorAll("article.Box-row").length - 1) {
      repoArr.push({
        title: url.querySelector(".lh-condensed a").getAttribute("href"),
        href: `https://github.com${url
          .querySelector(".lh-condensed a")
          .getAttribute("href")}`,
        description:
          url.querySelector("p.col-9.color-text-secondary.my-1.pr-4")
            ?.childNodes[0]?._rawText || null,
        //   description: (
        //     root.querySelectorAll("article.Box-row p")[repoIndex]
        //       ?.childNodes[0] as any
        //   )?._rawText,
      });
    }
    repoIndex += 1;
  });
  return {
    props: {
      repositories: repoArr,
    },
  };
};
export default Repositories;
