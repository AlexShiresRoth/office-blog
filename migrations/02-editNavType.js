module.exports = function (migration) {
  const navType = migration.editContentType("navType");

  navType.createField("logo").name("Logo").type("Link").linkType("Asset");
};
