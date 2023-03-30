import http from "http";
import { getQueries, getUsers, getAnimals } from "./utils.js";

const host = "localhost";
const port = 80;

const requestListener = function (req, res) {
  const queries = getQueries(req);
  let result = "";
  if (queries.qtd) {
    if (queries.type === "animal") {
      result = getAnimals(queries.qtd);
    } else {
      result = getUsers(queries.qtd);
    }
  }

  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  });
  res.end(result);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
