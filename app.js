// Setup
var global=0;
var express = require('express');
var app = express();

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/node-blog")

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var postSchema = new mongoose.Schema({header: String, body: String });

var Post = mongoose.model('Post', postSchema);

var postComment = new mongoose.Schema({id: var, body: String});

var Comment = mongoose.model('Comment', postComment);

//functions

function f1(var i)
{
    global=i;
}

// Routes

app.get("/", (req, res) => {
   Post.find({}, (err, posts) => {
      res.render('index', { posts: posts})
   });
   Comment.find({}, (err, comments) => {
      res.render('index', { comments: comments})
   });
});


app.post('/addpost', (req, res) => {
    //var postHeader = new Post(req.header);
    //postHeader.save().then( result => {
    //    res.redirect('/');
    //}).catch(err => {
     //   res.status(400).send("Unable to save data");
    //});

    var postData = new Post(req. header, req.body);
    postData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });

});


app.post('/addcomment', (req, res)=>{
    var postComment = new Comment(global, req.body);
    postComment.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });

});

// Listen
app.listen(8000, () => {
    console.log('Server listing on 8000');
})
