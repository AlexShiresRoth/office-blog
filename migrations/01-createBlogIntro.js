module.exports = function (migration) {
  const introType = migration
    .createContentType("intro")
    .name("LAW - Intro")
    .description("A brief summary of what the blog is about")
    .displayField("title");

  introType
    .createField("title")
    .name("About Title")
    .type("Symbol")
    .required(true);

  introType.createField("summary").name("Summary").type("Text").required(true);
};
