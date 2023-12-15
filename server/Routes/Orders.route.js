const { Router } = require("express");
const app = Router();
const User=require("../Model/Orders.model")


app.get("/", async (req, res) => {
    const { page = 1, limit = 16, orderBy = "id", order = "asc" } = req.query;
    const user = await User.find({})
      .sort({ [orderBy]: order === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.send(user);
  });

  app.post("/", async (req, res)=>{

    const {title, image, price}= req.body;
    
    const product= await User.create({title, image, price})
    res.send(product)
    
    })