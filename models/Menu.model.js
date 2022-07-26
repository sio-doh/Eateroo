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
            type: Number, 
            required: true
        },  
        menuImg: {
            type: String, 
            required: true
        }, 
        // connection from menu to menuItem <== TODO
        // menuItem: {
        //     type: Schema.Types.ObjectId, 
        //     ref: "items", 
        // }
    },
);

const Menu = model("Menu", menuSchema);
module.exports = Menu;