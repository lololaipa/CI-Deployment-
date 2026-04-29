const http = require("http");

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("OK");
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});