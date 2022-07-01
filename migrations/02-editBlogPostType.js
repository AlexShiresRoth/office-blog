module.exports = function (migration) {
  const blogPostType = migration.editContentType("blogPostType");
  blogPostType.deleteField("mainImage");
  blogPostType.createField("mainImage").name("Main Image").type("Link").linkType("Asset");
};
