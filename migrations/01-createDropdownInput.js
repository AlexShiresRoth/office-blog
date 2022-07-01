module.exports = function(migration) {
    const dropdownInput = migration
        .createContentType("dropdownInput")
        .name("Dropdown Input")
        .description("A dropdown input")
        .displayField("label");
    
    dropdownInput.createField("label").name("Label").type("Symbol").required(true);
    
    dropdownInput.createField("name").name("Name").type("Symbol").required(true);
    
    dropdownInput.createField("options").name("Options").type("Array").items({
        type: "Symbol",
    });
}