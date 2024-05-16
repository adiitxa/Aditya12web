const express = require("express");
const app = express();
const dotenv = require('dotenv').config();

const db = require("./DB/dbconnection");
const contact = require("./models/contact");

app.set("view engine", "ejs");

app.use(express.static('public')); 
app.use(express.json());


app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>
{
    res.render("index");
});

app.post("/contact", async (req, res)=>
    {
        try
        {
        const data = req.body;
        const newContact = new contact(data);
        const save = await newContact.save();

        }

        catch(err)
        {
          console.log(err);
          res.status(500).send("Internal Server Error");
        }
    });

app.listen(process.env.PORT || 3000 , ()=> {
    console.log("server is Running");
});


