

const express = require('express');
const app = express();
const port = 4000;


app.get('/', (req,res)=>{
    res.send('Helllooooo')

})


app.listen(port, ()=>{
    console.log('my server si running at port ', port);
})