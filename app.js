const app = require('express')();

// this posts array is used to mimic a database for our blog
// which we will query based on the post ID
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
];

// tell express to use EJS as our templating engine
// Express will automatically look inside the views/ folder for template files
app.set('view engine', 'ejs');

// The res.render() method is used to render the view we pass it
// and send the HTML to the client

app.get('/', (req, res) => {
  res.render('home', { posts: posts })
});

app.get('/posts/:id', (req, res) => {
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
});

app.listen(8080);

console.log('listening on port 8080');