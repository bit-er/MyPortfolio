const express = require('express');
const app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    console.log("received");
    res.render('index');
});
app.use((req,res)=>{
    res.send(404,'<h1>Not found</h1>');
})
app.listen(5000);