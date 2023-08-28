const mongoose = require('mongoose');

module.exports = function()
{
  //local storage
  // mongoose.connect('mongodb://127.0.0.1:27017/SocialSewa')
  // cloud
  mongoose.connect('mongodb+srv://yamanlala2034:Yaman23@cluster0.qr2tsdl.mongodb.net/SocialSewa?retryWrites=true&w=majority')
  .then(function()
  {
    console.log("connect to db")
  })
  .catch(function()
  {
    console.log("db connection error")
  })

}
