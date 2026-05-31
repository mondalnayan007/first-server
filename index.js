

const express = require('express');
const cors = require('cors')
const app = express();

const phones = require('./phones.json')
const port = 4000;

app.use(cors());


app.get('/', (req,res)=>{
    res.send('Helllooooo')

})

app.get('/phones', (req,res)=>{
    const id = req.params.id;
    console.log(id);
    res.send(phones)
})
app.get('/phones/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const phone =  phones.find(phone =>phone.id === id)
    res.send(phone)
})


app.listen(port, ()=>{
    console.log('my server si running at port ', port);
})