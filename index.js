import express from "express";
import bodyParser from "body-parser";
import localStorage from "localStorage";

const app = express();
const port = 3000;
const blogs = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// serve the home page
app.get("/", (req, res) => {
    
    res.render("index", {blogs: blogs});
});

// handle the get compose request
app.get('/compose', (req, res) => {
    res.render('compose');
})

// handle the post resquest
app.post("/submit", (req, res) => {
   const blogPost = {
    postTitle : req.body["pTitle"],
    postBody: req.body["pBody"]
   }
//    app new blogpost to the blogs array
    blogs.push(blogPost);

    res.redirect('/');

    console.log(blogs);

})



app.listen(port, () => {
    console.log(`Listening on ${port}`);
})