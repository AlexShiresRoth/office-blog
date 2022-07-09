module.exports = function (migration) {
  const pageType = migration
    .createContentType("pageType")
    .name("LAW - Page")
    .description("Page type for Law pages")
    .displayField("title");

  pageType
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(true)
    .required(true);

  pageType
    .createField("slug")
    .name("Slug")
    .required(true)
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["slug"] }]);

  pageType
    .createField("content")
    .name("Content")
    .type("RichText")
    .required(true);
};
