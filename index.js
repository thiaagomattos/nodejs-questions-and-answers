const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//dizendo para o  express usar ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/",(req, res) => {
    res.render("index");
});

app.get("/ask",(req, res) => {
    res.render("ask");
});

app.post("/saveask",(req,res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send("Formulary Received! Title: " + title + " " + " description: " + description);
});

app.listen(8080,()=>{console.log("app running!");});