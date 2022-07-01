module.exports = function (migration) {
  const navItemType = migration
    .createContentType("navItemType")
    .name("LAW - Navigation Item")
    .displayField("title");

  navItemType
    .createField("title")
    .name("Title for page")
    .type("Symbol")
    .localized(true)
    .required(true);

  navItemType
    .createField("slug")
    .name("Page URL(Slug)")
    .type("Symbol")
    .validations([{ unique: true }])
    .required(true);

  navItemType.changeFieldControl("slug", "builtin", "slugEditor");
};
