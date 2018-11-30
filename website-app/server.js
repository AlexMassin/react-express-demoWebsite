const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const items = [];

app.get('/api/items', (req, res) => {
    res.json(items);
});


app.post('/api/add', (req, res) => {
    console.log(req.body) 
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));