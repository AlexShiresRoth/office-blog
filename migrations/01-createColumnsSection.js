module.exports = function (migration) {
  const section = migration
    .createContentType("columnSection")
    .name("LAW - Columns Section Component")
    .description("A section of a page, divided into columns")
    .displayField("title");

  section.createField("title").name("Title").type("Symbol").required(true);

  section
    .createField("contentItems")
    .name("Content Items")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["contentItem"] }],
    });
};
