const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
})

const port = process.env.PORT || 8000;

app.listen(port,()=> {
    console.log(`server running on port ${port}`);
})