import * as React from "react";
import PropTypes from "prop-types";
import { subString } from "../../utils/subString";

const Article = ({ title, URI, preamble, imageURI, content }) => {
  return (
    <li className="env-list__item">
      <div className="env-news-item">
        {imageURI && (
          <div className="env-news-item__media">
            <img className="env-image" src={imageURI} alt="" />
          </div>
        )}
        <div className="env-news-item__headline">
          <div className="env-news-item__headline__title">
            <h2 className="env-text">
              <a href={URI} className="env-link-secondary env-color--info">
                {title}
              </a>
            </h2>
          </div>
        </div>
        <div className="env-news-item__preamble">
          <div className="env-text-h4">{subString(preamble, 100)}</div>
        </div>
      </div>
      <div className="env-news-item">
        <div className="env-p-around--x-small">
          <p className="env-text">{subString(content, 300)}</p>
        </div>
      </div>
    </li>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  URI: PropTypes.string,
  preamble: PropTypes.string,
  imageURI: PropTypes.string,
  content: PropTypes.string,
};

export default Article;
