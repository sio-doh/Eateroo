const { route } = require("./auth.routes");
const Restaurant = require("../models/Restaurant.model");
const Menu = require("../models/Menu.model"); 
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


// delete restaurant
router.delete("/:id", (req, res, next) => {
  Restaurant.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(200).json({ message: 'restaurant deleted'})
  })
  .catch(err => next(err))
})


// get all the menus
router.get("/menu", (req, res, next) => { 
  console.log("eateroo??")
  Menu.find()
    .then(eateroo => {
      res.status(200).json(eateroo)
    })
});


// create a menu selection
router.post("/menu", (req, res, next) => {
  const {menuName, menuDescription, menuPrice, menuImg} = req.body 
  console.log("POST the menu", req.body)
  Menu.create({menuName, menuDescription, menuPrice, menuImg})
    .then(menu => {
      res.status(201).json(menu)
    })
    .catch(err => next(err))
});


// get a specific menu 
router.get("/menu/:id", (req, res, next) => {
  console.log("eateroo menu number two??")
  Menu.findById(req.params.id)
    .then(menu => { 
      // check for a valid mongoobject id 
      // mongoose.Types.ObjectId.isValid(<id>)
      if (!menu) {
        res.status(404).json(menu)
      } else {
        res.status(200).json(menu)
      }
    })
}); 


// update menu 
router.put("/menu/:id", (req, res, next) => {
  const {menuName, menuDescription, menuPrice, menuImg} = req.body 
  Menu.findByIdAndUpdate(req.params.id, {
    menuName, 
    menuDescription, 
    menuPrice, 
    menuImg
  }, {new: true})
  .then(updatedMenu => {
    res.status(200).json(updatedMenu)
  })
  .catch(err => next(err))
}); 

router.delete("/menu/:id", (req, res, next) => {
  Menu.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(200).json({ message: 'menu deleted'})
  })
  .catch(err => next(err))
})


// get all the menuItems
// router.get("/menuItem", (req, res, next) => { 
//   console.log("eateroo menuItem??")
//   menuItem.find()
//     .then(eateroo => {
//       res.status(200).json(eateroo)
//     })
// });


// create a menuItem
// router.post("/menuItem", (req, res, next) => {
//   const {menuItemName, menuItemImg} = req.body 
//   console.log("POST the menuItem", req.body)
//   menuItem.create({menuItemName, menuItemImg})
//     .then(menuItem => {
//       res.status(201).json(menuItem)
//     })
//     .catch(err => next(err))
// });


// get a specific menuItem 
// router.get("/menuItem/:id", (req, res, next) => {
//   console.log("eateroo menuItem number two??")
//   menuItem.findById(req.params.id)
//     .then(menuItem => { 
//       // check for a valid mongoobject id 
//       // mongoose.Types.ObjectId.isValid(<id>)
//       if (!menuItem) {
//         res.status(404).json(menuItem)
//       } else {
//         res.status(200).json(menuItem)
//       }
//     })
// }); 


// update menuItem 
// router.put("/menuItem/:id", (req, res, next) => {
//   const {menuItemName, menuItemImg} = req.body 
//   Menu.findByIdAndUpdate(req.params.id, {
//     menuItemName, 
//     menuItemImg 
//   }, {new: true})
//   .then(updatedMenuItem => {
//     res.status(200).json(updatedMenuItem)
//   })
//   .catch(err => next(err))
// }); 


// router.delete("/menuItem/:id", (req, res, next) => {
//   menuItem.findByIdAndDelete(req.params.id)
//   .then(() => {
//     res.status(200).json({ message: 'menuItem deleted'})
//   })
//   .catch(err => next(err))
// })


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
//   const {user, menu, item} = req.body 
//   console.log("POST the cart", req.body)
//   cart.create({user, menu, item})  
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