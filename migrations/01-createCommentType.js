module.exports = function (migration) {
  const comment = migration
    .createContentType("comment")
    .name("Blog Comment")
    .description("A user created comment on a blog post")
    .displayField("title");

  comment.createField("title").name("Title").type("Symbol").required(true);
  comment.createField("body").name("Body").type("Text").required(true);
  comment.createField("author").name("Author").type("Symbol").required(true);
  comment.createField("email").name("Email").type("Symbol").required(true);
  comment
    .createField("postReference")
    .name("Post")
    .type("Link")
    .linkType("Entry")
    .required(true);
  comment
    .createField("commentDate")
    .name("Comment Date")
    .type("Symbol")
    .required(true);
  comment
    .createField("approved")
    .name("Approved")
    .type("Boolean")
    .required(true);
};
