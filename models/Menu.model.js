const { Schema, model } = require("mongoose");

const menuSchema = new Schema(
    {
        menuName: {
            type: String,
            required: true
        },
        menuDescription: {
            type: String, 
            required: true
        },
        menuPrice: {
            type: String, 
            required: true
        },  
        menuImg: {
            type: String, 
            required: true
        } 
    },
);

const Menu = model("Menu", menuSchema);
module.exports = Menu;