import { useState } from "react";
import { articalCard, articles } from "../../../data";
import type { IArticle } from "../../../interfaces";
import ArticlePage from "./ArticalPage";
import TagCloud from "../../ui/TagCloud";

const BlogLayout = () => {


  return (
    <div>

<ArticlePage />

     

    </div>
  );
};

export default BlogLayout;