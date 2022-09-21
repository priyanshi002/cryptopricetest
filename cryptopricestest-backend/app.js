const express = require('express');
app = express()
var request = require('request');

app.get('/getResult', (req, res)=>{
  request({
    uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false',
  }).pipe(res);
});

app.all('*',(req,res)=>{
    res.status(404).send('<h1> resource not found </h1>')
})

app.listen(5000, () => {
    console.log('listening to PORT 5000...............')
});