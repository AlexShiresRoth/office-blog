module.exports = function (migration) {
  const contentType = migration
    .createContentType("formSection")
    .name("Form section")
    .description("A page section with form inputs")
    .displayField("title");

  contentType.createField("title").name("Title").type("Symbol").required(true);

  contentType
    .createField("inputs")
    .type("Array")
    .name("Form Inputs")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["formInput", "textArea", "dropdownInput"] }],
    });

  contentType.createField("submit").name("Submit").type("Symbol");
};
