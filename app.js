//Requerir
const express = require('express');
const app = express();
const path = require('path');

//Rutas
const publicPath = path.resolve(__dirname, './public')
const homePath = path.resolve(__dirname, './view/home.html')
const registerPath = path.resolve(__dirname, './view/register.html')
const loginPath = path.resolve(__dirname, './view/login.html')

//Servidor
app.listen(process.env.PORT || 3000, ()=>console.log('Puerto 3000 corriendo'));

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(homePath)
})

app.get('/register', (req, res) => {
    res.sendFile(registerPath)
})

app.get('/bienvenida', (req, res) => {
    res.send('Bienvenida')
})

app.get('/login', (req, res) => {
    res.sendFile(loginPath)
})


