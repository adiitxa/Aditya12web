const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    first: {
        type:String,
        required: true
    },

    last:
    {
        type:String,
        required: false
    },

    email :
    {
        type:String,
        required: true
    },


    subject : {
        type: String,
        required : true
    },

    message : {
        type: String,
        required : true
    }
});


const contact = new mongoose.model("contact", contactSchema);
module.exports = contact;