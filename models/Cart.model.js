const { Schema, model } = require("mongoose");
const User = require("./User.model");
const Menu = require("./Menu.model");

const cartSchema = new Schema(
    {
        user: [{ type: Schema.Types.ObjectId, ref: User }],
        menu: [{ type: Schema.Types.ObjectId, ref: Menu }]
    },
);

const Cart = model("Cart", cartSchema);
module.exports = Cart;
