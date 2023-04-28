const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const cors = require('cors');
const port=8080;

const api = require('./routers/api.routers');

app.use(bodyParse.json({limit:"50mb"}));
app.use(bodyParse.urlencoded({extended:true,limit:"50mb"}));
app.use('/api',api);

app.listen(port,()=>{
    console.log(`server running on the port number${port}`)
})
