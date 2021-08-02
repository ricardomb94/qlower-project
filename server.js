const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);

server.use(jsonServer.rewriter({
    '/api/users': '/users'
  }));
  
server.use(jsonServer.bodyParser)

server.get('/get/user', (req, res) => {
    res.send('Api is runing ...')
  });