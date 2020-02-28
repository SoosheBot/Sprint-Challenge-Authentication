require("dotenv").config();
const request = require("supertest");
const server = require("./server");
const authenticate = require("../auth/authenticate-middleware");

describe("server", function() {
  describe("environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("jokes-router", function() {
    it("should return 401 status when not logged in", async() => {
        const response = await request(server).get('/api/jokes');
        expect(response.status).toBe(401);
    });
  });

});
