module.exports = function (migration) {
  const footer = migration
    .createContentType("footer")
    .name("Footer")
    .description("A footer component")
    .displayField("title");

  footer.createField("title").name("Title").type("Symbol").required(true);

  footer.createField("heading").name("Heading").type("Symbol").required(true);

  footer
    .createField("columns")
    .name("Columns")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["contentItem"] }],
    });
};
