const request = require("supertest");
const server = require("../api/server");

describe("users router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  it("should return JSON formatted body", function() {
    return request(server)
      .get("/api/users")
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });

  it("should get a 401 because it's not logged in", async function() {
    const res = await request(server).get("/api/users");
    expect(res.status).toBe(401);
  });
});
