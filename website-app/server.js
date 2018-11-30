const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 

const items = [];

app.get('/api/items', (req, res) => {
    res.json(items);
});


app.post('/api/add', jsonParser, (req, res) => {
    console.log(req.body);
    var name= req.body.name;
    var imageURL=req.body.imageURL;
    var price=req.body.price;
    console.log("Name = "+name+", imageURL is "+imageURL + ", and price is " + price);
    
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));