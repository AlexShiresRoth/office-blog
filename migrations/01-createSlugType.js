module.exports = function (migration) {
  const slug = migration
    .createContentType("slug")
    .name("Slug")
    .description("Ew a slug")
    .displayField("title");

    slug.createField("title").name("Title").type("Symbol").required(true);

    slug.createField("slug").name("Slug").type("Symbol").required(true);

    slug.changeFieldControl("slug", "builtin", "slugEditor");
    
};
