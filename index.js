const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({
        Name: 'ONG do jose',
        Description: 'doaçao de 10 cestas basicas',
        Author: 'jose',
        Date: '01/01/2020'});
});

app.listen(port, () => {
    console.log(`App listening on localhost:${port}`);
});
