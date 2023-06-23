const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true}));
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("index");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log("started...");
});
