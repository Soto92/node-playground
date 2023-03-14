const http = require("http");

const host = "localhost";
const port = 8000;

const getQueries = function (req) {
  let q = req.url.split("?");
  result = {};
  if (q.length >= 2) {
    q[1].split("&").forEach((item) => {
      try {
        result[item.split("=")[0]] = item.split("=")[1];
      } catch (e) {
        result[item.split("=")[0]] = "";
      }
    });
  }
  return result;
};

const requestListener = function (req, res) {
  const queries = getQueries(req);
  console.log(queries);
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
