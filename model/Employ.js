const mongoose = require('mongoose');

const EmploySchema = mongoose.Schema({
  _id:{type:Number,unique:true},
  name:{type:String},
  contractTypeName:{type:String},
  roleId:{type:Number,default:0},
  roleName:{type:String},
  roleDescription:{type:String,default:"empty"},
  hourSalary:{type:Number,default:0},
  monthlySalary:{type:Number,default:0}
},{autoIndex:false})


module.exports = mongoose.model('Employ',EmploySchema)
