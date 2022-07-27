const { route } = require("./auth.routes");
const Restaurant = require("../models/Restaurant.model");
const Menu = require("../models/Menu.model"); 
const menuItem = require("../models/menuItem.model");
// const cartView = require("../models/Cart.model");
const router = require("express").Router();

// get all the restaurants
router.get("/restaurants", (req, res, next) => { 
  console.log("eateroo??")
  Restaurant.find()
    // .populate("menu")
    // .populate("menuItem")
    .populate({
      path: "menu",
      populate: {
        path: "menuItems"
      }
    })
    .then(restaurants => {
      console.log("eateroo restaurants??")
      res.status(200).json(restaurants)
    }) 
    .catch(err => next(err))
});


// create a restaurant selection
router.post("/restaurants", (req, res, next) => {
  const {restaurantName, restaurantLocation, menuName, menuDescription, menuPrice, menuImg, menuItemName, menuItemImg} = req.body 
  console.log("POST the burger", req.body)
  menuItem.create({menuItemName, menuItemImg})
    .then(menuItem => {
      console.log(menuItem) 
      return Menu.create({menuItem: menuItem._id, menuName, menuDescription, menuPrice, menuImg})
    })
    .then(menu => { 
      console.log(menu)
      return Restaurant.create({menu: menu._id, restaurantName, restaurantLocation})
    })
    .then(restaurant => {
      console.log("POST the menuItem", req.body)
      res.status(201).json(restaurant)
    })
    .catch(err => next(err))
}); 
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

// get a specific restaurant 
router.get("/restaurants/:id", (req, res, next) => {
  console.log("eateroo number two??")
  Restaurant.findById(req.params.id)
    .then(restaurant => { 
      Menu.findById(req.params.id) 
        .then(menu => {
          console.log("eateroo menuItem number two???")
          menuItem.findById(req.params.id)
            .then(menuItem => {
              // check for valid mongoobject id - mongoose.Types.ObjectId.isValid(<id>)
              if (!menuItem) {
                res.status(404).json(menuItem) 
              } else {
                res.status(200).json(menuItem)
              }
            })          
          if (!menu) {
            res.status(404).json(menu)
          } else {
            res.status(200).json(menu)
          }
        })          
      if (!restaurant) {
        res.status(404).json(restaurant)
      } else {
        res.status(200).json(restaurant)
      }
    })
}); 
// get a specific menuItem 
// router.get("/menuItem/:id", (req, res, next) => {
//   console.log("eateroo menuItem number two??")
//   menuItem.findById(req.params.id)
//     .then(menuItem => { 
//       // check for a valid mongoobject id - mongoose.Types.ObjectId.isValid(<id>)
//       if (!menuItem) {
//         res.status(404).json(menuItem)
//       } else {
//         res.status(200).json(menuItem)
//       }
//     })
// });

// update restaurant 
router.put("/restaurants/:id", (req, res, next) => {
  const {restaurantName, restaurantLocation} = req.body 
  Restaurant.findByIdAndUpdate(req.params.id, {
    restaurantName, 
    restaurantLocation
  }, {new: true})
  .then(updatedRestaurant => {
    Menu.findByIdAndUpdate(req.params.id, {
      menuName, 
      menuDescription, 
      menuPrice, 
      menuImg
    }, {new: true})
      .then(updatedMenu => {
        menuItem.findByIdAndUpdate(req.params.id, {
          menuItemName, 
          menuItemImg
        }, {new: true})
          .then(updatedMenuItem => {
            res.status(200).json(updatedMenuItem)
          })
        res.status(200).json(updatedMenu)
      })
    res.status(200).json(updatedRestaurant)
  })
  .catch(err => next(err))
}); 
// update menuItem 
// router.put("/menuItem/:id", (req, res, next) => {
//   const {menuItemName, menuItemImg} = req.body 
//   menuItem.findByIdAndUpdate(req.params.id, {
//     menuItemName, 
//     menuItemImg 
//   }, {new: true})
//   .then(updatedMenuItem => {
//     res.status(200).json(updatedMenuItem)
//   })
//   .catch(err => next(err))
// });

// delete restaurant
router.delete("/restaurants/:id", (req, res, next) => {
  Restaurant.findByIdAndDelete(req.params.id)
  .then(() => {
    Menu.findByIdAndDelete(req.params.id) 
      .then(() => {
        menuItem.findByIdAndDelete(req.params.id)
          .then(() => {
            res.status(200).json({ message: 'menuItem deleted'})
          })
        res.status(200).json({ message: 'menu deleted'})
      })
    res.status(200).json({ message: 'restaurant deleted'})
  })
  .catch(err => next(err))
});
// router.delete("/menuItem/:id", (req, res, next) => {
//   menuItem.findByIdAndDelete(req.params.id)
//   .then(() => {
//     res.status(200).json({ message: 'menuItem deleted'})
//   })
//   .catch(err => next(err))
// })



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