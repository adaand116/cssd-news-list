import * as React from "react";
import PropTypes from "prop-types";
import Article from "../Article";

const Articles = ({ articles }) => {
  return (
    <ul className="env-list env-list--horizontal--fixed env-list--horizontal--fixed--2">
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.array,
};

export default Articles;
