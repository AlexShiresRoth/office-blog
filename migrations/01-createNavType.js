module.exports = function (migration) {
  const navType = migration
    .createContentType("navType")
    .name("LAW - Navigation")
    .displayField("title");

  navType
    .createField("title")
    .name("Blog Site Title")
    .required(true)
    .type("Symbol")
    .localized(true);

  navType
    .createField("navItems")
    .name("Navigation Items")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["navItemType"] }],
    });
};
