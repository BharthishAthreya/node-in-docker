//Za pomoc� directive require �adujemy (load) modu� express
var express = require('express')
var app = express()


//definiujemy response dla request�w w root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})


//aplikacja uruchamia serwer s�uchaj�cy na porcie 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})