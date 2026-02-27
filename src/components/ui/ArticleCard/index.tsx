import type { IArticleCardProps } from "../../../interfaces";
import "./style.scss";

interface ArticleCardProps {
  articles: IArticleCardProps[];
}
const ArticleCard = ({ articles }: ArticleCardProps) => {
  return (
    <>
      {articles.map(({ image, imageAlt, title }, index) => (
        <div className="article-card" key={index}>
          <img src={image} alt={imageAlt} className="article-card__thumbnail" />
          <div className="article-card__content">
            <h3 className="article-title">{title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};
export default ArticleCard;
