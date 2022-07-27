const { route } = require("./auth.routes");
const Restaurant = require("../models/Restaurant.model");
const Menu = require("../models/Menu.model"); 
const Cart = require("../models/Cart.model");
const router = require("express").Router();

// get all the restaurants
router.get("/restaurants", (req, res, next) => { 
  console.log("eateroo??")
  Restaurant.find()
    .populate({ path: "menus" })
    .then(restaurants => {
      console.log("eateroo restaurants??")
      res.status(200).json(restaurants)
    }) 
    .catch(err => next(err))
});


// create a restaurant selection
router.post("/restaurants", (req, res, next) => {
  const {restaurantName, restaurantLocation, menuName, menuDescription, menuPrice, menuImg} = req.body 
  console.log("POST the burger", req.body)
  Menus.create({menuName, menuDescription, menuPrice, menuImg})
    .then(menus => { 
      console.log(menus)
      return Restaurant.create({menus: menus._id, restaurantName, restaurantLocation})
    })
    .then(restaurant => {
      console.log("POST the menus", req.body)
      res.status(201).json(restaurant)
    })
    .catch(err => next(err))
}); 


// get a specific restaurant 
router.get("/restaurants/:id", (req, res, next) => {
  console.log("eateroo number two??")
  Restaurant.findById(req.params.id)
    .then(restaurant => { 
      Menus.findById(req.params.id) 
        .then(menus => {         
          if (!menus) {
            res.status(404).json(menus)
          } else {
            res.status(200).json(menus)
          }
        })          
      if (!restaurant) {
        res.status(404).json(restaurant)
      } else {
        res.status(200).json(restaurant)
      }
    })
}); 


// update restaurant 
router.put("/restaurants/:id", (req, res, next) => {
  const {restaurantName, restaurantLocation} = req.body 
  Restaurant.findByIdAndUpdate(req.params.id, {
    restaurantName, 
    restaurantLocation
  }, {new: true})
  .then(updatedRestaurant => {
    Menus.findByIdAndUpdate(req.params.id, {
      menuName, 
      menuDescription, 
      menuPrice, 
      menuImg
    }, {new: true})
      res.status(200).json(updatedMenus)
    })
    res.status(200).json(updatedRestaurant)
  .catch(err => next(err)); 
});


// delete restaurant
router.delete("/restaurants/:id", (req, res, next) => {
  Restaurant.findByIdAndDelete(req.params.id)
  .then(() => {
    Menus.findByIdAndDelete(req.params.id) 
      .then(() => {
        res.status(200).json({ message: 'menus deleted'})
      })
    res.status(200).json({ message: 'restaurant deleted'})
  })
  .catch(err => next(err))
}); 


// create a list of menus in restaurant 
router.post("/restaurants/:id/menus", (req, res, next) => {
  const id = req.params.id
  const {menu} = req.body 
  console.log("POST the list of menus", req.body)
  Restaurant.findByIdAndUpdate(id, {$push: {menus: menu} })
    .then((restaurant) => {
      console.log("POST the list of menus", req.body)
      res.status(201).json(restaurant)
    })
    .catch(err => next(err))
}); 

// CART VIEW TO BE IMPLEMENTED BELOW -->

// get the cart
// router.get("/cart", (req, res, next) => { 
//   console.log("eateroo cart??")
//   cart.find()
//     .then(eateroo => {
//       res.status(200).json(eateroo)
//     })
// });


// create a cart
// router.post("/cart", (req, res, next) => {
//   const {user, menus, item} = req.body 
//   console.log("POST the cart", req.body)
//   cart.create({user, menus, item})  
//     .then(cart => {
//       res.status(201).json(cart)
//     })
//     .catch(err => next(err))
// });


// get a specific cart 
// router.get("/cart/:id", (req, res, next) => {
//   console.log("eateroo cart number two??")
//   cart.findById(req.params.id)
//     .then(cart => { 
//       // check for a valid mongoobject id 
//       // mongoose.Types.ObjectId.isValid(<id>)
//       if (!cart) {
//         res.status(404).json(cart)
//       } else {
//         res.status(200).json(cart)
//       }
//     })
// }); 


module.exports = router;