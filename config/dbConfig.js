const mongoose = require('mongoose');

const connectDB =  async()=>{
  try {
    conn = await mongoose.connect(process.env.DB_STRING_CONN,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
      
    })
    console.log(`mongoDB Connected`);
  } catch (err) {
    console.error(err);
  }
}
module.exports = connectDB;
