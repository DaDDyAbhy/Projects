// const express = require("express");
// const userRouter = require("./Routes/user.routes");
// const dotenv = require("dotenv");
// dotenv.config();
// const connectToDB = require("./config/db");
// connectToDB();
// const cookieParser = require("cookie-parser");
// const indexRouter = require("./Routes/index.routes");

// const app = express();
// app.get("/test", (req, res) => {
//     console.log("TEST ROUTE HIT");
//     res.send("SERVER IS WORKING");
// });

// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended:true}));

// app.get("/", (req, res) => {
//     res.render("index");  // Production level par hum log ek bhi route app.js mein nahi banate. Saare routes, routes folder mein banate hain aur app.js file mein configure karte hain.
// })

// app.use("/", indexRouter);
// app.use("/user", userRouter);

// // app.listen(3000, () => {
// //     console.log("Server is running on port 3000");
// // })

// app.listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 3000}`);
// });






// Code with correct routing for deployment to the website -->

const express = require("express");
const userRouter = require("./Routes/user.routes");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser");
const indexRouter = require("./Routes/index.routes");

dotenv.config();

connectToDB();

const app = express();

// View engine
app.set("view engine", "ejs");

// Static files
app.use(express.static("public"));

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root → Login
app.get("/", (req, res) => {
    res.redirect("/login");
});

// User routes
app.use("/", userRouter);

// Main application routes
app.use("/", indexRouter);

// Server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});