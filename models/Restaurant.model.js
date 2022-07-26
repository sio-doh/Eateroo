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
            // required: true
        }, 
        // connection from restaurant to menu
        menu: {
            type: Schema.Types.ObjectId, 
            ref: "menus", 
        }
    },
);

const Restaurant = model("Restaurant", restaurantSchema);
module.exports = Restaurant;