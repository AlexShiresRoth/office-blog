module.exports = function (migration) {
  const blogPostType = migration
    .createContentType("blogPostType")
    .name("LAW - Blog Post")
    .displayField("title");

  blogPostType
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(true)
    .required(true);

  blogPostType
    .createField("slug")
    .name("Page URL(Slug)")
    .type("Symbol")
    .required(true);

  blogPostType.changeFieldControl("slug", "builtin", "slugEditor");

  blogPostType
    .createField("date")
    .name("Publish Date")
    .type("Date")
    .required(true);

  blogPostType
    .createField("blurb")
    .name("Brief Summary")
    .type("Symbol")
    .localized(true);

  blogPostType
    .createField("author")
    .name("Author")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["authorType"] }]);

  blogPostType
    .createField("categories")
    .name("Categories")
    .type("Array")
    .items({ type: "Symbol" });

  blogPostType
    .createField("mainImage")
    .name("Main Image")
    .type("Link")
    .linkType("Asset")

  blogPostType
    .createField("body")
    .name("Post Body")
    .type("RichText")
    .required(true);
};
