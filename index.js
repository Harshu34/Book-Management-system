const express = require("express");
const dotenv = require("dotenv");

// Importing Routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

//Database Connection
const DbConnection = require("./databaseConnection");



const app = express();
const bodyParser = require("body-parser"); // Import bodyParser

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser middleware



// app.get("/", function (req, res) {
//   res.render("homePage");
// });

// app.post("/signUp", function (req, res) {
//   res.render("signUp");
// });

// app.post("/logIn", function (req, res) {
//   res.render("logIn");
// });


dotenv.config();



DbConnection();

const PORT = 3000;

app.use(express.json());


app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and running sucessfully",
    });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);



app.get("*",(req, res)=>{
    res.status(404).json({
        message: "This route doesn't exist",
    });
})

app.listen(PORT, ()=>{
    console.log(`Server is up and running at PORT ${PORT}`);
})