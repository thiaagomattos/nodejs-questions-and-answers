const express = require("express");
const app = express();

//dizendo para o  express usar ejs como view engine
app.set('view engine', 'ejs');

app.get("/:name/:lang",(req, res) => {
    var name = req.params.name;
    var lang = req.params.lang;
    res.render("index",{
        name: name,
        lang: lang,
        enterprise: "thiago systems",
        subscribers: 10000

    });
});

app.listen(8080,()=>{console.log("app running!");});