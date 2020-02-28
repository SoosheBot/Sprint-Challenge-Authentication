// const bcrypt = require("bcryptjs");
const router = require("express").Router();
// const jwt = require("jsonwebtoken");

// const { jwtSecret } = require("../config/secrets");

const Users = require("./usersModel");
const authenticate = require('../auth/authenticate-middleware.js');

router.get("/", authenticate, (req,res) => {
    Users.find()
    .then(users => {
        res.status(201).json(users);
    })
    .catch(err => {
        res.status(500).json({error: "Could not get users."});
    });
});

// router.get("/:department", (req, res) => {
//     let { department } = req.body;
//     Users.findBy({ department })
//       .first()
//       .then(user => {
//         res.status(201).json(user);
//       })
//       .catch(err => {
//         res.status(500).json({ message: "Could not get users in this department"});
//       });
// });
  
  

// function departments(department) {
//     return function(req,res,next) {
//         if (req.decodedToken && req.decodedToken.department.toLowerCase() === department) {
//             next();
//         } else {
//             res.status(403).json({ message: "You are not authorized to access this department"});
//         }
//     }
//   }



module.exports = router;