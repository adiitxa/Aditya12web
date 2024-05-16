const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.URL);

if(!connect)
{
  console.log("Database cannot be Connected");
}
else
{
  console.log("Database Connected Successfully");
}
