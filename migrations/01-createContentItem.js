module.exports = function (migration) {
  const contentItem = migration
    .createContentType("contentItem")
    .name("Content Item")
    .description("A content column of icon/image text and CTA")
    .displayField("title");

  contentItem.createField("title").name("Title").type("Symbol").required(true);

  contentItem.createField("image").name("Image").type("Link").linkType("Asset");

  contentItem.createField("text").name("Text").type("Text")

  contentItem.createField("cta").name("Call to Action").type("Symbol");

  contentItem
    .createField("links")
    .type("Array")
    .name("Links")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["slug"] }],
    });

  contentItem.createField("slug").name("Slug").type("Symbol")

  contentItem.changeFieldControl("slug", "builtin", "slugEditor");
};
