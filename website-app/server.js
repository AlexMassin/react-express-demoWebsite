const express = require('express');
const bodyParser = require('body-parser');
var cors=require('cors');

const app = express();
app.use(cors({origin:true,credentials: true}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var items = [];

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.get('/api/reset', (req, res) => {
	items = [];
});


app.post('/api/add', (req, res) => {
    items.push(req.body);
    console.log(items); 
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
