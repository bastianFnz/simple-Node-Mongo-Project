const express = require('express');
const connectDB = require('./config/dbConfig');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'});
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/public', express.static(__dirname + '/src'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(require('./routes/index'));
app.use(require('./routes/employ'));


app.listen(process.env.PORT || 5050,()=>{
  console.log(`run port ${process.env.PORT}`)
})
