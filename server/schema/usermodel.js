const mongoose = require('mongoose');
const MySchema = mongoose.Schema({
  name: String,
  Email: String,
  password: String,
  Age: Number

})
const MyModel = mongoose.model("student",MySchema);
module.exports = MyModel;
