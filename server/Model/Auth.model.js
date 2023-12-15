const { mongoose, Schema, model } = require("mongoose")
const AuthSchema = new Schema({
name:{type: 'string' },
email:{type: 'string', required: true},
phone:{type: 'string'},
password:{type: 'string', required: true},
})
const User = model("Auth",AuthSchema)
module.exports=User
