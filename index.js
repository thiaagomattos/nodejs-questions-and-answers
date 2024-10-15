const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Question = require("./database/Question");
//Database

connection
    .authenticate()
    .then(() => {
        console.log("connected with database!");
    })
    .catch((msgError) => {
        console.log(msgError);
    })

//dizendo para o  express usar ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/",(req, res) => {
    Question.findAll({raw: true}).then(questions => {
        res.render("index",{
            questions: questions
        });
    })
});

app.get("/ask",(req, res) => {
    res.render("ask");
});

app.post("/saveask",(req,res) => {
    var title = req.body.title;
    var description = req.body.description;
    Question.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect("/");
    })
});

app.listen(8080,()=>{console.log("app running!");});