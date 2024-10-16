import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import App from "./components/App";
import { searchArticles } from "./utils/searchArticles";
import appData from "@sitevision/api/server/appData";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";

router.get("/", (req, res) => {
  const archive = appData.get("archive");
  const limit = appData.get("limit");

  if (
    archive &&
    !resourceLocatorUtil
      .getNodeByIdentifier(archive)
      .getPrimaryNodeType()
      .isNodeType("sv:archive")
  ) {
    return;
  }

  const data = {
    articles: searchArticles(archive, limit || 10),
  };

  res.agnosticRender(renderToString(<App {...data} />), data);
});
