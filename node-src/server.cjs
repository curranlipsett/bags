const express = require('express')
const app = express()
const port = 3000;
 
app.get('/', (req, res) => {
    res.send('Hello World!');
});
 
app.get('/games', (req, res) => {
    res.send('Returning all data from games table');
});
 
app.get('/contact', (req, res) => {
    res.send('Welcome to contact us page');
});
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
