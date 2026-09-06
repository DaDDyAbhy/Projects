const express = require("express");
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db");
connectToDB();
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.routes");

const app = express();
app.get("/test", (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("SERVER IS WORKING");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// app.get("/", (req, res) => {
//     res.render("index");  // Production level par hum log ek bhi route app.js mein nahi banate. Saare routes, routes folder mein banate hain aur app.js file mein configure karte hain.
// })

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

