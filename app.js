// ==================== Setup Section Start ========================

const express = require("express");
const data = require("./public/data/data.json")
const port = process.env.PORT || 3000;

const app = express();

// Needed to use EJS
app.set("view engine", "ejs");

// Needed to use "body"
app.use(express.urlencoded({ extended: true }));
// Used to style the pages
app.use(express.static("public"))

// ==================== Setup Section End ========================

// ==================== Get/Post Section Start ========================

app.get("/", function(req, res) {
    res.render("main", {
        data: data
    });  
})

// ==================== Get/Post Section Start ========================

// ==================== Main Function Start ========================

app.listen(port, function() {
    console.log("Server is connected to port " + port);
});

// ==================== Main Function End ========================