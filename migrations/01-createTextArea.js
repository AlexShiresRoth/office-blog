module.exports = function (migration) {
  const textArea = migration
    .createContentType("textArea")
    .name("Text Area")
    .description("A text area")
    .displayField("label");

  textArea.createField("label").name("Label").type("Symbol").required(true);

  textArea.createField("name").name("Name").type("Symbol").required(true);
};
