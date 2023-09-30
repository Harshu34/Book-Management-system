const express = require("express");
const {users} = require("../data/users.json");
const { UserModel, BookModel } = require("../modals");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller");


const router = express.Router();


/**
 * Route: /users
 * Method: GET
 * Decsription: Get all users
 * Access: Public
 * Paramaters: None
 */
router.get('/', getAllUsers)



/**
 * Route: /users/:id
 * Method: GET
 * Decsription: Get user by their ID
 * Access: Public
 * Paramaters: ID
 */
router.get('/:id', getSingleUserById);


/**
 * Route: /users
 * Method: POST
 * Decsription: Create/Add a new user
 * Access: Public
 * Paramaters: None
 */
router.post('/', createNewUser);



/**
 * Route: /users/:id
 * Method: PUT
 * Decsription: Updating a user by their id
 * Access: Public
 * Paramaters: ID
 */
router.put('/:id', updateUserById)


/**
 * Route: /users/:id
 * Method: DELETE
 * Decsription: Delete a user by ID
 * Access: Public
 * Paramaters: ID
 */
router.delete('/:id', deleteUser);


/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Decsription: Get all user subscription details by their ID
 * Access: Public
 * Paramaters: ID
 */

// router.get('/subscription-details/:id', (req, res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id === id);
//     if(!user)
//         return res.status(404).json({success: false, message: "User With The Given Id Doesn't Exist"});

//     const getDateInDays = (data = "")=> {
//         let date;
//         if(data === ""){
//             // current Date
//             date = new Date();
//         }else{
//             // getting date on a basis of data variable
//             date = new Date(data);
//         }
//         let days = Math.floor(data / (1000 * 60 * 60 * 24));
//         return days;
//     };

//     const subscriptionType = (date) => {
//         if(user.subscriptionType === "Basic"){
//             date = date + 90;
//         }else if(user.subscriptionType === "Standard"){
//             date = date + 180;
//         }else if(user.subscriptionType === "Premium"){
//             date = date + 365;
//         }
//         return date;
//     };

//     // Subscription expiration calcus
//     // Jan 1, 1970, UTC // milliseconds
//     let returnDate = getDateInDays(user.returnDate);
//     let currentDate = getDateInDays();
//     let subscriptionDate = getDateInDays(user.subscriptionDate);
//     let subscriptionExpiration = subscriptionType(subscriptionDate);

//     const data = {
//         ...user,
//         subscriptionExpired: subscriptionExpiration < currentDate,
//         daysLeftForExpiration: subscriptionExpiration <= currentDate ? 0 : subscriptionDate - currentDate,
//         fine: returnDate < currentDate ? subscriptionExpiration <= currentDate ? 200 : 100 : 0, 
//     }

//      res.status(200).json({
//         success: true,
//         data: data,
//      })
// })





router.get('/subscription-details/:id', getSubscriptionDetailsById);



// default export
module.exports = router;