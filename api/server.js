// const http = require('http');
// const https = require('https');

const express = require('express')

const app = express()

const PORT = 8000 // 5000 portta sorun çıkıyor. 403 hatası.

app.get('/', (req, res) => res.send('Merhaba Cy-POS Server'))

//http.createServer(app).listen(80)
//https.createServer(`Server ${PORT} portundan çalışıyor!`, app).listen(443);
app.listen(PORT, () => console.log(`Server is runing ${PORT}`))
