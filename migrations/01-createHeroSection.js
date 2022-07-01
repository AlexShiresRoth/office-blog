module.exports = function (migration) {
  const heroSection = migration
    .createContentType("heroSection")
    .name("LAW - Hero Section")
    .description("Hero section for landing page")
    .displayField("title");

  heroSection.createField("title").name("Title").type("Symbol").required(true);

  heroSection
    .createField("backgroundImage")
    .name("Hero Image")
    .required(true)
    .type("Link")
    .linkType("Asset");

  heroSection
    .createField("services")
    .name("Services")
    .type("Array")
    .items({ type: "Symbol" });

  heroSection.createField("tagline").type("Symbol").name("Tagline");

  heroSection.createField("cta").name("Call to Action").type("Symbol");
};
