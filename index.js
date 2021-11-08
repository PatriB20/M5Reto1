const mongoose= require("mongoose");

const userSchema= new mongoose.Schema
(
   {
       login: String,
       password:String
   } 
)

const profileSchema= new mongoose.Schema
(
    {
        name: String,
        surname: String,
        dateOfBirth:String,
        comments: String,
        rol:String
    }
)

const credentialsSchema= new mongoose.Schema
(
    {
        adress:String,
        phone:String,
        email:String
    }
)
module.exports= mongoose.model("User",userSchema,"user")
module.exports= mongoose.model("Profile",profileSchema,"profile")
module.exports=mongoose.model("Credentials",credentialsSchema,"credentials")