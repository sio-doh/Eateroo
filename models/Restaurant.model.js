const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
    {
        restaurantName: {
            type: String,
            required: true
        },
        restaurantLocation: {
            latitude: [Number], 
            longitude: [Number] 
        }, 
        // connection from restaurant to menu
        menus: [
            {
                menu: {
                type: Schema.Types.ObjectId,
                ref: "Menu",
            },
                // description: String,
            },
        ],
    },
);

const Restaurant = model("Restaurant", restaurantSchema);
module.exports = Restaurant;