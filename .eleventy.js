/**
 * Eleventy config: bilingual EN/RU with hreflang alternates via translationKey.
 * Output: dist/
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  // Create a translation map: key -> items
  eleventyConfig.addCollection("byTranslationKey", function (collectionApi) {
    const map = new Map();
    collectionApi.getAll().forEach((item) => {
      const key = item.data.translationKey;
      const lang = item.data.lang;
      if (!key || !lang) return;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    // Sort by lang for deterministic output
    for (const [k, arr] of map.entries()) {
      arr.sort((a, b) => (a.data.lang || "").localeCompare(b.data.lang || ""));
      map.set(k, arr);
    }
    return map;
  });

  // Helper: absolute URL (safe)
  eleventyConfig.addFilter("absUrl", function (path, siteUrl) {
    const base = (siteUrl || "").replace(/\/+$/, "");
    const p = (path || "").replace(/^\/+/, "/");
    if (!base) return p;
    return base + p;
  });

  // Helper: ensure trailing slash for nicer URLs (optional)
  eleventyConfig.addFilter("withSlash", function (path) {
    if (!path) return "/";
    return path.endsWith("/") ? path : path + "/";
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
