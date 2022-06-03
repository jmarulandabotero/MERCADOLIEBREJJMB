const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3030, () =>
console.log('Servidor corriendo en el puerto 3030')
);

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
});
app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
});
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
});

