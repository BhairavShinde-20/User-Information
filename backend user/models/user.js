const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// create data schema (format) for db
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobNumber: Number,
    passWard: String,
    email:String
});

// userSchema.pre("save", async function(next){
    
//     if(this.isModified("passWard")){
//         this.passWard = await bcrypt.hash(this.passWard,10);
//         console(this.passWard);
//     }
// })
module.exports = mongoose.model("users", userSchema);// controller madhe je function banel te module la follow karen
