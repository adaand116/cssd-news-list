import properties from "@sitevision/api/server/Properties";
import propertyUtil from "@sitevision/api/server/PropertyUtil";
import searchFactory from "@sitevision/api/server/SearchFactory";

export const searchArticles = (archive, limit) => {
  const searchBuilder = searchFactory.getSearcherBuilder();
  const filterBuilder = searchFactory.getFilterBuilder();

  filterBuilder
    .addFilterQuery("+svtype:article")
    .addFilterQuery(`+path:${archive}`);
  const filter = filterBuilder.build();

  searchBuilder.setFilter(filter);

  const searcher = searchBuilder.build();
  const searchResult = searcher.search("*", limit);

  const articles = [];
  if (searchResult.hasHits()) {
    const hits = searchResult.getHits();

    while (hits.hasNext()) {
      const articleNode = hits.next().getNode();

      if (articleNode) {
        const props = properties.get(
          articleNode,
          "shortId",
          "SV.Title",
          "preamble",
          "URI",
          "SV.Content"
        );
        articles.push({
          id: props.shortId,
          title: props["SV.Title"],
          preamble: props.preamble,
          URI: props.URI,
          content: props["SV.Content"],
          imageURI: propertyUtil.getNestedString(
            articleNode,
            "SV.Image",
            "URI"
          ),
        });
      }
    }
  }

  return articles;
};
