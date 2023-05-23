const http = require("http");

const hostname = "127.0.0.1";
const port = 6969;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const users = [
    {
      id: 1,
      name: "Hoang An",
    },

    {
      id: 2,
      name: "Son Dang",
    },
  ];
  //res.end(`<h1>F8 - Fullstack - Hoc NodeJS</h1>`);
  res.end(JSON.stringify(users));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
