const { route } = require("./auth.routes");
const Restaurant = require("../models/Restaurant.model");
const router = require("express").Router();

// get all the restaurants
router.get("/", (req, res, next) => { 
  console.log("eateroo??")
  Restaurant.find()
    .then(eateroo => {
      res.status(200).json(eateroo)
    })
});

// create a restaurant selection
router.post("/", (req, res, next) => {
  const {restaurantName, restaurantLocation} = req.body 
  console.log("POST the burger", req.body)
  Restaurant.create({restaurantName, restaurantLocation})
    .then(restaurant => {
      res.status(201).json(restaurant)
    })
    .catch(err => next(err))
});

// get a specific restaurant 
router.get("/:id", (req, res, next) => {
  console.log("eateroo number two??")
  Restaurant.findById(req.params.id)
    .then(restaurant => { 
      // check for a valid mongoobject id 
      // mongoose.Types.ObjectId.isValid(<id>)
      if (!restaurant) {
        res.status(404).json(restaurant)
      } else {
        res.status(200).json(restaurant)
      }
    })
}); 

// update restaurant 
router.put("/:id", (req, res, next) => {
  const {restaurantName, restaurantLocation} = req.body 
  Restaurant.findByIdAndUpdate(req.params.id, {
    restaurantName, 
    restaurantLocation
  }, {new: true})
  .then(updatedRestaurant => {
    res.status(200).json(updatedRestaurant)
  })
  .catch(err => next(err))
}); 


module.exports = router;