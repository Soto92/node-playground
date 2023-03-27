import { getUsers, getAnimals, getQueries } from "./your-module";

describe("getUsers", () => {
  it("returns JSON string of users with correct schema", () => {
    const result = getUsers(3);
    expect(typeof result).toBe("string");
    const parsedResult = JSON.parse(result);
    expect(parsedResult).toHaveProperty("users");
    expect(parsedResult.users).toHaveLength(3);
    expect(parsedResult.users[0]).toHaveProperty("_id");
    expect(parsedResult.users[0]).toHaveProperty("avatar");
    expect(parsedResult.users[0]).toHaveProperty("birthday");
    expect(parsedResult.users[0]).toHaveProperty("email");
    expect(parsedResult.users[0]).toHaveProperty("firstName");
    expect(parsedResult.users[0]).toHaveProperty("lastName");
    expect(parsedResult.users[0]).toHaveProperty("sex");
    expect(parsedResult.users[0]).toHaveProperty("subscriptionTier");
  });
});

describe("getAnimals", () => {
  it("returns JSON string of animals with correct schema", () => {
    const result = getAnimals(2);
    expect(typeof result).toBe("string");
    const parsedResult = JSON.parse(result);
    expect(parsedResult).toHaveProperty("animals");
    expect(parsedResult.animals).toHaveLength(2);
    expect(parsedResult.animals[0]).toHaveProperty("name");
    expect(parsedResult.animals[0]).toHaveProperty("animal");
  });
});

describe("getQueries", () => {
  it("returns empty object if there are no queries", () => {
    const req = { url: "/api" };
    const result = getQueries(req);
    expect(result).toEqual({});
  });

  it("returns an object with query parameters", () => {
    const req = { url: "/api?name=john&age=30" };
    const result = getQueries(req);
    expect(result).toEqual({ name: "john", age: "30" });
  });

  it("handles empty query parameters", () => {
    const req = { url: "/api?param1=&param2=value" };
    const result = getQueries(req);
    expect(result).toEqual({ param1: "", param2: "value" });
  });
});
