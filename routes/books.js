const express = require("express");

// Controllers
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById,  } = require("../controllers/book-controller");

// Data import
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");
// const { route } = require("./users");

// const {UserModel, BookModel} = require("../modals/index")
const {UserModel, BookModel} = require("../modals");


// Local Router
const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Decsription: Get All Books
 * Access: Public
 * Paramaters: None
 */
// router.get("/", (req, res)=>{
//     res.status(200).json({success: true, data: books});
// })

router.get("/", getAllBooks)


/**
 * Route: /books/:id
 * Method: GET
 * Decsription: Get Book By Its Id
 * Access: Public
 * Paramaters: ID
 */
// router.get("/:id", (req, res)=>{
//     const {id} = req.params;
//     const book = books.find((each)=>each.id === id);

//     if(!book){
//         return res.status(404).json({
//             success: false,
//             message: "Book Does Not Exist"
//         })
//     }
//     return res.status(200).json({
//         success: true,
//         data: book
//     })
// })

// getSingleBookById
router.get("/:id", getSingleBookById);


/**
 * Route: /books/issued/by-user
 * Method: GET
 * Decsription: Get all issued books
 * Access: Public
 * Paramaters: None
 * getAllIssuedBooks
 */
// router.get("/issued/by-user", (req, res)=>{
//     const usersWithIssuedBooks = users.filter((each)=>{
//         if(each.issuedBook) return each;
//     });

//     const issuedBooks = [];

//     usersWithIssuedBooks.forEach((each)=>{
//         const book = books.find((book)=> book.id === each.issuedBook);


//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;

//         issuedBooks.push(book);
//     });
//     if(issuedBooks.length === 0){
//         return res.status(404).json({success: false, message: "No books issued yet."});
//     }
//     return res.status(200).json({success: true, data: issuedBooks})

// })


router.get("/issued/by-user", getAllIssuedBooks);



/**
 * Route: /books
 * Method: POST
 * Decsription: Create/Add a new Book
 * Access: Public
 * Paramaters: None
 * Data: Author, Name, Genre, Price, Publisher, Id
 */
router.post("/", addNewBook);


/**
 * Route: /books/:id
 * Method: PUT
 * Decsription: Update a Book By Its ID 
 * Access: Public
 * Paramaters: Id
 */
router.put("/:id", updateBookById);

// Default Export
module.exports = router;
