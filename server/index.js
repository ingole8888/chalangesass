const express = require('express')
const { default: mongoose } = require('mongoose')
const AuthData = require("./Routes/Auth.route")
const ProductData = require("./Routes/Product.route")
const CartData=require("./Routes/Cart.route")
const cors =require("cors")
const app = express()

mongoose.set('strictQuery', true);

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/user",AuthData)
app.use("/products", ProductData)
app.use("/cart",CartData)
app.get('/', (req, res) => res.send('hello'))


app.listen(8080, async() => {
    await mongoose.connect("mongodb+srv://sunil:sunil@cluster0.g6orjd8.mongodb.net/raj")
    console.log('server started on port 8080')
    })