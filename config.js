const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://emile:HaYrQhDETHcl2ak8@cluster0.rddjoff.mongodb.net/");


//check connection
connect.then(() => {
   console.log("database connected");
})
.catch(()=>{
   console.log("didn't work dumbo")
})

const loginSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   },
   username: {
       type: String,
       required: true
   }
});

const collection = new mongoose.model("users", loginSchema);

module.exports = collection;