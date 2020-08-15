const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const port = 3004;

server.use(middlewares);
server.use(router);
server.use('/api', router);
server.listen(port, () => {
     console.log(`JSON Server is listening on port ${port}`);
});
