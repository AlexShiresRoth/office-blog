module.exports = function (migration) {
  const formInput = migration
    .createContentType("formInput")
    .description("A form input component")
    .name("Form Input")
    .displayField("label");

  formInput.createField("label").name("Label").type("Symbol").required(true);

  formInput.createField("type").name("Type").type("Symbol").required(true);

  formInput.changeFieldControl("type", "builtin", "dropdown");

  formInput.editField("type").validations([
    {
      in: [
        "text",
        "email",
        "number",
        "tel",
        "date",
        "datetime-local",
        "time",
        "url",
        "file",
      ],
    },
  ]);

  formInput.createField("placeholder").name("Placeholder").type("Symbol");

  formInput.createField("required").name("Required").type("Boolean");

  formInput.createField("name").name("Name").type("Symbol").required(true);
};
