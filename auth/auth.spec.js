const request = require("supertest");
const server = require("../api/server");

describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("register", function() {
    function generateToken(user) {
      const payload = {
          userId: user.id,
          username: user.username,
          user: user.password
        },
        options = {
          expiresIn: "1h"
        };

      return jwt.sign(payload, jwtSecret, options);
    }

    const user = { username: "test1", password: "pass1" };
    const authorize = {};

    beforeAll(async () => {
      authorize.token = generateToken(user);
    });
  });

  describe("login", function() {
    function generateToken(user) {
      const payload = {
          userId: user.id,
          username: user.username,
          user: user.password
        },
        options = {
          expiresIn: "1h"
        };

      return jwt.sign(payload, jwtSecret, options);
    }

    const user = { username: "test1", password: "pass1" };
    const authorize = {};

    beforeAll(async () => {
      authorize.token = generateToken(user);
    });
  });


});
