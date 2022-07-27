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
            },
        ],
    },
);

const Restaurant = model("Restaurant", restaurantSchema);
module.exports = Restaurant;