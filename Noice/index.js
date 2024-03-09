const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube',(req,res)=>
{
    res.send('Chai Aur Code')
})

app.get('/instagram',(req,res)=>
{
    res.send('Chai Aur Code  Instagram')
})

app.get('/linkedin',(req,res)=>
{
    res.send('Profiles Banao Yaha Doston')
})

app.get('/chai',(req,res)=>
{
    res.send('chai pilo guys')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})