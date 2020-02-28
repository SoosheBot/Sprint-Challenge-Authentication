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
});
