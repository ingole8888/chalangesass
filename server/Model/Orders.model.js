const { mongoose, Schema, model } = require("mongoose");
const OrderSchema = new Schema({
user_id:{
type: mongoose.Schema.Types.ObjectId,
ref:"Auth",

},
product_id:{
type: mongoose.Schema.Types.ObjectId,
ref:"product",

},
title: { type: String, required: true },
img1: { type: String, required: true },
price: { type: String, required: true },
quantity:{type:Number,default:1}
});
const Order = model("order", OrderSchema);
module.exports = Order;