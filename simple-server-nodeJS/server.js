const http = require("http");
const { faker } = require("@faker-js/faker");

const host = "localhost";
const port = 8000;

const getUsers = function (qtd) {
  const users = [];
  for (let i = 0; i < qtd; i++) {
    const user = {
      _id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      sex: faker.name.sexType(),
      subscriptionTier: faker.helpers.arrayElement([
        "free",
        "basic",
        "business",
      ]),
    };
    users.push(user);
  }
  return JSON.stringify({ users }, null, 2);
};

const getAnimals = function (qtd) {
  const animals = [];
  for (let i = 0; i < qtd; i++) {
    const animal = {
      name: faker.name.firstName(),
      animal: faker.animal.type(),
    };
    animals.push(animal);
  }
  return JSON.stringify({ animals }, null, 2);
};

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
  let result = "";
  if (queries.qtd) {
    if (queries.type === "animal") {
      result = getAnimals(queries.qtd);
    } else {
      result = getUsers(queries.qtd);
    }
  }

  res.writeHead(200);
  res.end(result);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
