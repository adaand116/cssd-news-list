import * as React from "react";
import PropTypes from "prop-types";
import Articles from "../Articles";
import i18n from "@sitevision/api/common/i18n";

const App = ({ articles }) => {
  if (!articles) {
    return (
      <p className="env-text env-color--danger">
        {i18n.get("noArticlesFound")}
      </p>
    );
  }

  return <Articles articles={articles} />;
};

App.propTypes = {
  articles: PropTypes.array,
};

export default App;
