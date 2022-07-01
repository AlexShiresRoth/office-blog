module.exports = function (migration) {
  const landingPage = migration
    .createContentType("landingPage")
    .description("Landing page for the site")
    .name("Landing Page")
    .displayField("title");

  landingPage.createField("title").name("Title").type("Symbol").required(true);

  landingPage
    .createField("sections")
    .type("Array")
    .name("Sections")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [
        {
          linkContentType: [
            "heroSection",
            "footer",
            "columnSection",
            "richTextSection",
            "formSection",
          ],
        },
      ],
    });
};
