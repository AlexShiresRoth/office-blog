module.exports = function (migration) {
  const callButtonType = migration.createContentType("callButton");
  callButtonType.name("LAYOUT - Call Button");
  callButtonType
    .description("Call Button For Contact Page")
    .displayField("buttonText");

  callButtonType
    .createField("buttonText")
    .name("Button Text")
    .type("Symbol")
    .required(true);

  callButtonType
    .createField("phoneNumber")
    .name("Phone Number")
    .type("Symbol")
    .required(true);
};
