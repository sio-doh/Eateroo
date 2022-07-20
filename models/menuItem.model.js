const { Schema, model } = require("mongoose");

const menuItemSchema = new Schema(
    {
        menuItemName: {
            type: String,
            required: true
        },
        menuItemImg: {
            type: String, 
            required: true
        } 
    },
);

const menuItem = model("menuItem", menuItemSchema);
module.exports = menuItem;