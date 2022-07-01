module.exports = function (migration) {
  const authorType = migration
    .createContentType("authorType")
    .name("LAW - Content Author")
    .displayField("name");

  authorType
    .createField("name")
    .name("Full Name")
    .type("Symbol")
    .localized(true)
    .required(true);

  authorType
    .createField("email")
    .name("Email")
    .type("Symbol")
    .localized(true)
    .required(true);

  authorType
    .createField("headshot")
    .name("Profile Picture")
    .type("Link")
    .linkType("Asset")

  authorType
    .createField("bio")
    .name("Brief Bio")
    .type("Symbol")
    .localized(true);
};
