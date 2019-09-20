exp = require("express");
mongojs = require("mongojs");
bp = require("body-parser");

app = exp();
participentsfile = require("./serverfile/participents")
questionsfile = require("./serverfile/question")
app.listen(2000)
console.log("server started");

app.use(bp.json())
app.use("/participentsref",participentsfile)
app.use("/questionsref",questionsfile)



connect = mongojs("mongodb://localhost:27017/QuizDB")



