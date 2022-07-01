module.exports = function (migration) {

    const contentItem = migration.editContentType("contentItem");

    contentItem.createField("links").type("Array").name("Links").items({ 
        type: "Link",
        linkType: "Entry",
        validations: [{ linkContentType: ["slug"] }],
    })


}