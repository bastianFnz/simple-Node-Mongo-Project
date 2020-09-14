const mongoose = require('mongoose');

var CounterEmploySchema = new mongoose.Schema({
  _id:{type:String, required:true, default:'EmployId'},
  seq:{type:Number, default:1}
});

module.exports = mongoose.model('Counter',CounterEmploySchema);
