const express = require('express');
const dotenv = require('dotenv');
//install morgan
const morgan = require('morgan');

//const logger = require('./middlewares/logger');


//routes files
const bootcamps = require('./routes/bootcamps');

//load env
dotenv.config({path:'./config/config.env'}); 




const app = express();


//dev logging middle ware
if(process.env.NODE_ENV === 'development'){

    app.use(morgan('dev'));
}
//app.use(logger);

//mount routerss
app.use('/api/v1/bootcamps',bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));