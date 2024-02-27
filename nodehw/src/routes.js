import { defineRoute, router } from './utils/define-route.js';
//import { getUsers} from './DataOperation.js';
//import { postUsers} from './DataOperation.js';
//const users = getUsers();
//const users = postUsers();
let users = [
  { id: 100, name: 'Nimi', email: 'nimi@gmail.com' },
  { id: 101, name: 'Rose', email: 'Rose@gmail.com' },
  { id: 102, name: 'Jimmy', email: 'Jimmy@gmail.com'},
];

defineRoute("GET", "/users", (req, res) => {
  if (users.length > 0) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify("Users not found"));
  }
});
defineRoute("GET", "/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const getUser = users.find((user) => userId === user.id);
  if (getUser) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(getUser));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("User not found"));
  }
});

defineRoute('POST', '/users', (req, res) => {
  // const { name, email } = req.body
   if (!req.body.name || !req.body.email) {
       res.setHeader('Content-Type', 'application/json')
       res.statusCode = 400
       res.end(JSON.stringify({ message: 'Name and email are required' }))
       return
   }
   const newUser = {
       id: users.length + 1,
      ...req.body
   }
   users.push(newUser)

   res.setHeader('Content-Type', 'application/json')
   res.statusCode = 201
   res.end(JSON.stringify(newUser))
})


defineRoute('PATCH', '/users/:id', (req, res) => {
  const userId = req.params.id;
  const newData = req.body;
  const index = users.findIndex(user => user.id === parseInt(userId));
  if (index !== -1) {
    users[index] = { ...users[index], ...newData };
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'User updated successfully' }));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
  }
});

defineRoute('DELETE', '/users/:id', (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex(user => user.id === parseInt(userId));
  if (index !== -1) {
    users.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'User deleted successfully' }));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
  }
});
let posts = [
  {School_Id: 1, Name: 'Maria-Park', Place: 'Helsingborg'},
  {School_Id: 2, Name: 'Lärod', Place: 'Helsingborg'},
  {School_Id: 3, Name: 'ISH', Place: 'Mälmo'}
];

defineRoute('GET', '/posts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(posts));
});

defineRoute('GET', '/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((post) => postId === post.id);
  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(post));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify(post)({ message: 'Post not found' }));
  }
});


defineRoute('POST', '/posts', (req, res) => {
  const newPost = req.body;
  const postId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
  newPost.id = postId;
  posts.push(newPost);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 201;  
  res.end(JSON.stringify(newPost));
});

defineRoute('PUT', '/posts/:id', (req, res) => { 
  const postId = Number(req.params.id);
  const updatedPost = posts.find((post) => postId === post.id);
  if (updatedPost) {
    const updatedData = req.body;
    Object.assign(updatedPost, updatedData);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(updatedPost));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Post not found' }));
  }
});

defineRoute('DELETE', '/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  const index = posts.findIndex((post) => postId === post.id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 204; 
    res.end();
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Post not found' }));
  }
});

export default router;