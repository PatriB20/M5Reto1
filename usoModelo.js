let mongoose =require("mongoose");
let User = require("./index");
let Profile = require("./index");
let Credentials = require("./index");

mongoose.connect("mongodb://localhost:27017/CODENOTCH",
                {useNewUrlParser:false, useUnifiedTopology:false}) 
                

let userDocument = new User
(
    {
        login:"P23",
        password: "12345"
    }
)
userDocument.save(checkRespuesta)
function checkRespuesta(err,res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}

let profileDocument = Profile
(
    {
        name:"Pepe",
        surname: "Perez",
        dateOfBirth:"02/06/1974",
        comments:"Mi nombre es Pepe",
        rol:"admin"

    }
)
profileDocument.save(checkRespuesta)
function checkRespuesta(err,res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}
let credentialsDocument = Credentials
(
    {
        adress:"c/Piruleta",
        surname: "00000098",
        email:"perez@pepe.es"
    }
)
credentialsDocument.save(checkRespuesta)
function checkRespuesta(err,res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}