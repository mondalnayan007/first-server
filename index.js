

const express = require('express');
const app = express();

const phones = require('./phones.json')
const port = 4000;


app.get('/', (req,res)=>{
    res.send('Helllooooo')

})

app.get('/phones', (req,res)=>{
    const id = req.params.id;
    console.log(id);
    res.send(phones)
})
app.get('/phones/:id', (req,res)=>{
    const id = req.params.id;
    const phone = 
    res.send(phones)
})


app.listen(port, ()=>{
    console.log('my server si running at port ', port);
})