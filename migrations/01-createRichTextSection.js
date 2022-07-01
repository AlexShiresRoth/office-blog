module.exports = function (migration) {
  const rts = migration
    .createContentType("richTextSection")
    .name("Rich Text Section")
    .description("A section of rich text")
    .displayField("title");

  rts.createField("title").name("Title").type("Symbol").required(true);

  rts.createField("content").name("Content").type("RichText").required(true);

  rts.createField("cta").name("Call to Action").type("Symbol");

  rts.createField("slug").name("Slug").type("Symbol").required(true);

  rts.changeFieldControl("slug", "builtin", "slugEditor");
};
