module.exports = function (migration) {
  const section = migration
    .createContentType("sectionWithImageBackground")
    .name("Section with image background")
    .description("A section with image background")
    .displayField("title");

  section.createField("title").name("Title").type("Symbol");

  section.createField("subTitle").name("Sub Title").type("Symbol");

  section
    .createField("bgImage")
    .name("Background Image")
    .type("Link")
    .linkType("Asset");

  section.createField("cta").name("Call to Action").type("Symbol");

  section
    .createField("slug")
    .name("Call to Action Link")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["slug"] }]);
};
