import { faker } from "@faker-js/faker";

export const getUsers = function (qtd) {
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

export const getAnimals = function (qtd) {
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

export const getQueries = function (req) {
  let q = req.url.split("?");
  let result = {};
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
